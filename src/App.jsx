import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { navi } from "./comps/nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <navi />
    </div>
  );
}

export default App;
