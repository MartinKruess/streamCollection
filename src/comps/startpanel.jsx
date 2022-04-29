import danceBG from "../assets/images/danceBG.gif"

export const Startpanel = () => {
    return (
      <article id="startPanel">
        <div className="bgIMG">
          <img src={danceBG} alt=""/>
        </div>
        
        <div className="panelContent">
          <h1>Welcome @ StreamCollection</h1>
          <button id="signIn">Sign In</button>
        </div>
      </article>
    )
}