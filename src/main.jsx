import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bindex.css'
import App from './App.jsx' 
import Floor from './Floor.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Floor />
  </StrictMode>,
)
