import SliderNavigation from './SliderNavigation.tsx'
import EpisodeList from './EpisodesList.tsx'

const StoryLineComponent = () => {
  return (
    <section aria-roledescription="carousel">
      <SliderNavigation />
      <EpisodeList />
    </section>
  )
}
export default StoryLineComponent
