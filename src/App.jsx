import { useState } from "react";
import "./App.scss";
import { Navi } from "./comps/nav";


function App() {
  const [count, setCount] = useState(0);
  const [logedIn, setLogin] = useState(false)

  return (
    <main className="App">
      <Navi logedIn={logedIn}/>
      <section>
        <article id="startPanel">
          <h1>Welcome @ StreamCollection</h1>
          <button id="signIn">Sign In</button>
        </article><br />
        <article>
          <h2>About</h2>
          <div>
            <img src="./assets/images/logo.svg" alt="" />
          </div>
        </article>
      </section>
      
    </main>
  );
}

export default App;
