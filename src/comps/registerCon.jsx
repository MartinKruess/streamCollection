import "../App.scss";
import { Link } from "react-router-dom";

export const RegisterCon = () => {
    return (
      <section>
          <article className="signArticle">
            <div className="signContainer">
              <h2 className="dark">Your personal Data</h2>
              <fieldset>
                <legend>Your personal Data</legend>
                <form action="#" className="form">
                  <label htmlFor="firstname">Firstname</label>
                  <input type="text" id="firstname"/>
                  <label htmlFor="lastname">Lastname</label>
                  <input type="text" id="lastname"/>

                  <legend>Connection</legend>
                  <label className="checkbox" htmlFor="twitch">Twitch</label>
                  <input type="checkbox" id="twitch" /><br />
                  <label className="checkbox" htmlFor="youtube">Youtube</label>
                  <input type="checkbox" id="youtube" /><br />

                  <label className="checkbox" htmlFor="datenschutz">Datenschutz</label>
                  <input type="checkbox" id="datenschutz"/><br />
                  <label className="checkbox" htmlFor="agb">AGB's</label>
                  <input type="checkbox" id="agb" /><br />
                  <Link to="/dashboard">
                      <input type="button" value="SignUp" />
                  </Link>
                </form>
              </fieldset>
            </div> 
          </article>
        </section>
    )
}