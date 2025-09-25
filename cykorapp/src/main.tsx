import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import CyKorSite from './cy_kor_intro_site_single_file_react.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CyKorSite />
  </StrictMode>,
)
