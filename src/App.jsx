import { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./comps/login";
import { Register } from "./comps/register";
import { RegisterCon } from "./comps/registerCon";
import { Navi } from "./comps/nav";
import { Home } from "./comps/home"
import { Footer } from "./comps/footer"
import { Page404 } from "./comps/404page"
import { PrivateRoute } from "./comps/privateRoute"
import { Dashboard } from "./comps/dashboard"

var vid = document.querySelector("iframe.src");
function enableAutoplay() { 
  vid.autoplay = true;
  
}


function App() {
  const [logedIn, setLogedIn] = useState(true)

  return (
    <main className="App">
      <Router>
        <Navi logedIn={logedIn}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerCon" element={<RegisterCon />} />
          <Route path="/dashboard" element={
            <PrivateRoute logedIn={logedIn}>
              <Dashboard />
            </PrivateRoute>} />
          
          <Route path="*" element={<Page404 />}/>
        </Routes>
      </Router>
      <Footer />
    </main>
  )
}

export default App;