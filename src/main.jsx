import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SettingsProvider, UserProvider } from "./comps/context/userContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  //<Router>
    <SettingsProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SettingsProvider>
  //</Router>
)
