import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SettingsProvider, UserProvider } from "./comps/context/userContext"
import { BrowserRouter as Router } from 'react-router-dom'
import { MediaProvider } from './comps/context/mediaContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <SettingsProvider>
      <UserProvider>
        <MediaProvider>
          <App />
        </MediaProvider>
      </UserProvider>
    </SettingsProvider>
  </Router>
)
