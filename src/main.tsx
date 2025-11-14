import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './aplicacao/App'
import Provedores from './aplicacao/provedores'
import './styles/tokens.css'
import './styles/base.css'
import React from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provedores>
        <App />
      </Provedores>
    </BrowserRouter>
  </StrictMode>
)
