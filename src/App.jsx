import { useState, useContext } from 'react';
import { AppContext } from './comps/context/userContext';
import "./App.scss";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./comps/login/login";
import { Register } from "./comps/register/register";
import { Navi } from "./comps/reuseables/nav";
import { Home } from "./comps/home";
import { Footer } from "./comps/reuseables/footer";
import { Page404 } from "./comps/404page";
import { PrivateRoute } from "./comps/privateRoute";

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
import { AboDonation } from './comps/logedIn/paypal/donabo';

export const fetchURL = "http://localhost:3232"

function App() {
  const {loginToken} = useContext(AppContext)
  console.log("loginToken", loginToken)

  return (
    <main className="App">
      <Router>
        <Navi loginToken={loginToken}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/dashboard" element={
            <PrivateRoute loginToken={loginToken}>
              <Dashboard />
            </PrivateRoute>} />
          <Route path="/activityfeed" element={
            <PrivateRoute loginToken={loginToken}>
              <ActivityFeed />
            </PrivateRoute>} />
          <Route path="/alerts" element={
            <PrivateRoute loginToken={loginToken}>
              <Alerts />
            </PrivateRoute>} />
          <Route path="/media" element={
            <PrivateRoute loginToken={loginToken}>
              <Media />
            </PrivateRoute>} />
          <Route path="/overlays" element={
            <PrivateRoute loginToken={loginToken}>
              <Overlays />
            </PrivateRoute>} />
          <Route path="/autocommands" element={
            <PrivateRoute loginToken={loginToken}>
              <AutoCommands />
            </PrivateRoute>} />
          <Route path="/chatcommands" element={
            <PrivateRoute loginToken={loginToken}>
              <ChatCommands />
            </PrivateRoute>} />
          <Route path="/spamfilter" element={
            <PrivateRoute loginToken={loginToken}>
              <SpamFilter />
            </PrivateRoute>} />
          <Route path="/yourfilter" element={
            <PrivateRoute loginToken={loginToken}>
              <YourFilter />
            </PrivateRoute>} />
          <Route path="/bossfight" element={
            <PrivateRoute loginToken={loginToken}>
              <BossFight />
            </PrivateRoute>} />
          <Route path="/chatdock" element={
            <PrivateRoute loginToken={loginToken}>
              <ChatDock />
            </PrivateRoute>} />
          <Route path="/activitydock" element={
            <PrivateRoute loginToken={loginToken}>
              <ActivityDock />
            </PrivateRoute>} />
          <Route path="/alertdock" element={
            <PrivateRoute loginToken={loginToken}>
              <AlertDock />
            </PrivateRoute>} />
          <Route path="/donations" element={
            <PrivateRoute loginToken={loginToken}>
              <AboDonation />
            </PrivateRoute>} />
          <Route path="*" element={<Page404 />}/>
        </Routes>
      </Router>
      <Footer />
    </main>
  )
}

export default App;