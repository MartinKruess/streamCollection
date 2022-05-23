import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UserProvider } from "./comps/context/userContext"
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<Router>
    <UserProvider>
      <App />
    </UserProvider>
  //</Router>
)
