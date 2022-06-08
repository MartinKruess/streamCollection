import { useState, useContext } from 'react';
import "./App.scss";

// Public
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./comps/login/login";
import { Register } from "./comps/register/register";
import { Navi } from "./comps/reusable/nav";
import { Home } from "./comps/home";
import { Footer } from "./comps/reusable/footer";
import { Page404 } from "./comps/404page";
import { PrivateRoute } from "./comps/privateRoute";

// LogedIn
import { Dashboard } from "./comps/logedIn/dashboard";
import { ActivityFeed } from "./comps/logedIn/activityfeed";
import { Alerts } from "./comps/logedIn/alerts";
import { Media } from "./comps/logedIn/media";
import { Overlays } from "./comps/logedIn/overlays";
import { AutoCommands } from "./comps/logedIn/chatbots/autocommands";
import { ChatCommands } from "./comps/logedIn/chatbots/chatcommands";
import { SpamFilter } from "./comps/logedIn/chatbots/spamfilter";
import { YourFilter } from "./comps/logedIn/chatbots/yourfilter";
import { BossFight } from "./comps/logedIn/chatbots/bossfight";
import { ChatDock } from "./comps/logedIn/obsDocs/chatdock";
import { ActivityDock } from "./comps/logedIn/obsDocs/activitydock";
import { AlertDock } from "./comps/logedIn/obsDocs/alertdock";
import { AboDonation } from './comps/logedIn/paypal/donabo';

export const fetchURL = "http://localhost:3232"

function App() {
  

  return (
    <main className="App">
      <Router>
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
          <Route path="/activityfeed" element={
            <PrivateRoute>
              <ActivityFeed />
            </PrivateRoute>} />
          <Route path="/alerts" element={
            <PrivateRoute >
              <Alerts />
            </PrivateRoute>} />
          <Route path="/media" element={
            <PrivateRoute >
              <Media />
            </PrivateRoute>} />
          <Route path="/overlays" element={
            <PrivateRoute >
              <Overlays />
            </PrivateRoute>} />
          <Route path="/autocommands" element={
            <PrivateRoute >
              <AutoCommands />
            </PrivateRoute>} />
          <Route path="/chatcommands" element={
            <PrivateRoute >
              <ChatCommands />
            </PrivateRoute>} />
          <Route path="/spamfilter" element={
            <PrivateRoute >
              <SpamFilter />
            </PrivateRoute>} />
          <Route path="/yourfilter" element={
            <PrivateRoute >
              <YourFilter />
            </PrivateRoute>} />
          <Route path="/bossfight" element={
            <PrivateRoute >
              <BossFight />
            </PrivateRoute>} />
          <Route path="/chatdock" element={
            <PrivateRoute >
              <ChatDock />
            </PrivateRoute>} />
          <Route path="/activitydock" element={
            <PrivateRoute >
              <ActivityDock />
            </PrivateRoute>} />
          <Route path="/alertdock" element={
            <PrivateRoute >
              <AlertDock />
            </PrivateRoute>} />
          <Route path="/donations" element={
            <PrivateRoute >
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