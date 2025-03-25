import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import GioComponent from './components/GioComponent.tsx'
import StoryLineComponent from './components/StoryLineComponent.tsx'
import { SharedCurrentProvider } from './hooks/SharedCurrentCountry.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Path of the WhiteBase</h1>
    <SharedCurrentProvider>
      <GioComponent />
      <StoryLineComponent />
    </SharedCurrentProvider>
  </StrictMode>
)
