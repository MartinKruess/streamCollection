import danceBG from "../assets/images/danceBG.gif"
import { Link } from "react-router-dom"

export const Startpanel = () => {
    return (
      <article id="startPanel">
        <div className="bgIMG">
          <img src={danceBG} alt=""/>
        </div>
        
        <div className="panelContent">
          <h1>Welcome @ StreamCollection</h1>
          <Link to="/login">
            <button id="signIn">Sign In</button>
          </Link>
        </div>
      </article>
    )
}