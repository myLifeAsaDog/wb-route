import { useState, createContext, useContext, ReactNode } from 'react'

interface SharedContextType {
  sharedState: number
  setSharedState: React.Dispatch<React.SetStateAction<number>>
}

interface SharedCurrentProps {
  children: ReactNode
}

const defaultContext = {
  sharedState: 0,
  setSharedState: () => {},
}

const SharedCurrentContext = createContext<SharedContextType>(defaultContext)

export const SharedCurrentProvider: React.FC<SharedCurrentProps> = ({
  children,
}) => {
  const [sharedState, setSharedState] = useState(0)
  return (
    <SharedCurrentContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </SharedCurrentContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSharedCurrent = () => {
  return useContext(SharedCurrentContext)
}
