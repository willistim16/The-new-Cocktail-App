import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from "./Pages/HomePage/HomePage.jsx";
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <App />
      </Router>
  </StrictMode>,
)
