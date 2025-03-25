import { useEffect, useRef } from 'react'
import { useSharedCurrent } from '../hooks/SharedCurrentCountry.tsx'

import * as GIO from 'giojs'
import { routes } from '../dataset/routes'

interface GioController {
  [key: string]: (...args: unknown[]) => void
}

interface SelectedCountry {
  ISOCode: string
  center: { x: number; y: number; z: number }
  lat: number
  lon: number
  name: string
}

const GioComponent = () => {
  const { sharedState, setSharedState } = useSharedCurrent()
  const gioRef = useRef<HTMLDivElement>(null)
  const controller = useRef<GioController>(null)

  // initialized
  useEffect(() => {
    if (gioRef.current !== null) {
      gioRef.current?.firstElementChild?.remove()
    }

    controller.current = new GIO.Controller(gioRef.current, {
      control: {
        initCountry: 'US',
      },
    })

    controller.current?.onCountryPicked((selectedCountry: SelectedCountry) => {
      const currentIndex = routes.findIndex(
        (item) => item.e === selectedCountry.ISOCode
      )
      setSharedState(currentIndex)
    })

    controller.current?.addData(routes)
    controller.current?.disableUnmentioned(true)
    controller.current?.setStyle('mint')
    controller.current?.init()
  }, [setSharedState])

  useEffect(() => {
    controller.current?.switchCountry(routes[sharedState].e)
  }, [sharedState])

  return <div id="globe" ref={gioRef} />
}
export default GioComponent

