import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/reset.css'
import './i18n/index.jsx'
import PortfolioContextProvider from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </StrictMode>
)
