import { useSharedCurrent } from '../hooks/SharedCurrentCountry.tsx'
import { episodes } from '../dataset/episodes.ts'

const EpisodeList = () => {
  const { sharedState } = useSharedCurrent()
  return (
    <div className="story_slider">
      <ul className="story_line" data-index={sharedState}>
        {episodes.map((item, index) => (
          <li key={index}>
            <dl>
              <dt>{item.location}</dt>
              <dd>
                {item.episodes.map((episode, index) => (
                  <p key={index}>{episode}</p>
                ))}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default EpisodeList