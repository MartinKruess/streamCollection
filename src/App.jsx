import "./App.scss";

// Public
import { Route, Routes } from "react-router-dom";
import { Login } from "./comps/login/login";
import { Register } from "./comps/register/register";
import { Navi } from "./comps/reusable/nav";
import { Home } from "./comps/home";
import { Donation } from "./comps/logedIn/paypal/donation";
import { Footer } from "./comps/reusable/footer";
import { Page404 } from "./comps/404page";
import { PrivateRoute } from "./comps/privateRoute";

// LogedIn
import { Dashboard } from "./comps/logedIn/dashboard";
import { ActivityFeed } from "./comps/logedIn/activityfeed";
import { ChatManager } from "./comps/logedIn/chatmanager";
import { Alerts } from "./comps/logedIn/alerts";
import { Media } from "./comps/logedIn/media";
import { Overlays } from "./comps/logedIn/overlays";
import { ChatCommands } from "./comps/logedIn/chatbots/chatcommands";
import { Filter } from "./comps/logedIn/chatbots/filter";
import { BossFight } from "./comps/logedIn/chatbots/bossfight";
import { ChatDock } from "./comps/logedIn/obsDocs/chatdock";
import { ActivityDock } from "./comps/logedIn/obsDocs/activitydock";
import { AlertDock } from "./comps/logedIn/obsDocs/alertdock";
import { AboDonation } from './comps/logedIn/paypal/donabo';


export const fetchURL = import.meta.env.VITE_FETCH_URL

function App() {

  return (
    <main className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
        <Route path="/activityfeed" element={
          <PrivateRoute>
            <ActivityFeed />
          </PrivateRoute>} />
        <Route path="/chatmanager" element={
          <PrivateRoute>
            <ChatManager />
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
        <Route path="/chatcommands" element={
          <PrivateRoute >
            <ChatCommands />
          </PrivateRoute>} />
        <Route path="/filter" element={
          <PrivateRoute >
            <Filter />
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
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App;