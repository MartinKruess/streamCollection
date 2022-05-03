import { useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./comps/login";
import { Register } from "./comps/register";
import { RegisterCon } from "./comps/registerCon";
import { Navi } from "./comps/nav";
import { Home } from "./comps/home";
import { Footer } from "./comps/footer";
import { Page404 } from "./comps/404page";
import { PrivateRoute } from "./comps/privateRoute";
import { Testside } from "./comps/testside";

import { Dashboard } from "./comps/logedIn/dashboard";
import { ActivityFeed } from "./comps/logedIn/activityfeed";
import { Alerts } from "./comps/logedIn/alerts";
import { Media } from "./comps/logedIn/media";
import { Overlays } from "./comps/logedIn/overlays";
import { AutoCommands } from "./comps/logedIn/autocommands";
import { ChatCommands } from "./comps/logedIn/chatcommands";
import { SpamFilter } from "./comps/logedIn/spamfilter";
import { YourFilter } from "./comps/logedIn/yourfilter";
import { BossFight } from "./comps/logedIn/bossfight";
import { ChatDock } from "./comps/logedIn/chatdock";
import { ActivityDock } from "./comps/logedIn/activitydock";
import { AlertDock } from "./comps/logedIn/alertdock";



function App() {
  const [logedIn, setLogedIn] = useState(true)

  return (
    <main className="App">
      <Router>
        <Navi logedIn={logedIn}/>
        <Routes>
          {/*Temporär*/} <Route path="/testside" element={<Testside />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerCon" element={<RegisterCon />} />
          <Route path="/dashboard" element={
            <PrivateRoute logedIn={logedIn}>
              <Dashboard />
            </PrivateRoute>} />
          <Route path="/activityfeed" element={
            <PrivateRoute logedIn={logedIn}>
              <ActivityFeed />
            </PrivateRoute>} />
          <Route path="/alerts" element={
            <PrivateRoute logedIn={logedIn}>
              <Alerts />
            </PrivateRoute>} />
          <Route path="/media" element={
            <PrivateRoute logedIn={logedIn}>
              <Media />
            </PrivateRoute>} />
          <Route path="/overlays" element={
            <PrivateRoute logedIn={logedIn}>
              <Overlays />
            </PrivateRoute>} />
          <Route path="/autocommands" element={
            <PrivateRoute logedIn={logedIn}>
              <AutoCommands />
            </PrivateRoute>} />
          <Route path="/chatcommands" element={
            <PrivateRoute logedIn={logedIn}>
              <ChatCommands />
            </PrivateRoute>} />
          <Route path="/spamfilter" element={
            <PrivateRoute logedIn={logedIn}>
              <SpamFilter />
            </PrivateRoute>} />
          <Route path="/yourfilter" element={
            <PrivateRoute logedIn={logedIn}>
              <YourFilter />
            </PrivateRoute>} />
          <Route path="/bossfight" element={
            <PrivateRoute logedIn={logedIn}>
              <BossFight />
            </PrivateRoute>} />
          <Route path="/chatdock" element={
            <PrivateRoute logedIn={logedIn}>
              <ChatDock />
            </PrivateRoute>} />
          <Route path="/activitydock" element={
            <PrivateRoute logedIn={logedIn}>
              <ActivityDock />
            </PrivateRoute>} />
          <Route path="/alertdock" element={
            <PrivateRoute logedIn={logedIn}>
              <AlertDock />
            </PrivateRoute>} />
          <Route path="*" element={<Page404 />}/>
        </Routes>
      </Router>
      <Footer />
    </main>
  )
}

export default App;