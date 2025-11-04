import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="force-light">
      <App />
    </div>
  </StrictMode>,
)

// Also add a body-level class to ensure page background is forced to light
if (typeof document !== 'undefined' && document.body) document.body.classList.add('force-light')
