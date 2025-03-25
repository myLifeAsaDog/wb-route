import { useSharedCurrent } from '../hooks/SharedCurrentCountry.tsx'
import { episodes } from '../dataset/episodes.ts'

const SliderNavigation = () => {
  const { sharedState, setSharedState } = useSharedCurrent()

  const handlePrevClick = () =>
    sharedState === 0 ? false : setSharedState(sharedState - 1)

  const handleNextClick = () =>
    sharedState === episodes.length - 1
      ? false
      : setSharedState(sharedState + 1)

  const setCurrentChange = (current: number) => setSharedState(current)

  return (
    <nav className="slider_navigation">
      <ol role="group">
        <li className="slider-prev" onClick={handlePrevClick}>
          Prev
        </li>
        {episodes.map((_item, index) =>
          index === sharedState ? (
            <li className="active" key={index}>
              {index + 1}
            </li>
          ) : (
            <li onClick={() => setCurrentChange(index)} key={index}>
              {index + 1}
            </li>
          )
        )}
        <li className="slider-next" onClick={handleNextClick}>
          Next
        </li>
      </ol>
    </nav>
  )
}
export default SliderNavigation
