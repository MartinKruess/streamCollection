import "../App.scss";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
          <section>
            <article className="signArticle">
              <div className="signContainer">
                <div className="alternativeLogin">
                  <h2 className="dark">Sign Up</h2>
                  <div className="boxContainer">
                    <div className="box box1">Google</div>
                    <div className="box box2">Twitch</div>
                    <div className="box box3">Youtube</div>
                  </div>
                </div>
                    
                <form action="#" className="form">
                  <label htmlFor="email">E-Mail</label>
                  <input type="mail" id="email"/>
                  <label htmlFor="ln">UserName</label>
                  <input type="text" id="ln"/>
                  <label htmlFor="lp">Password</label>
                  <input type="password" id="lp" />
                  <label htmlFor="lpr">Password repeat</label>
                  <input type="password" id="lpr" />
                  <Link to="/registerCon">
                    <input type="button" value="Continue" />
                  </Link>
                </form>
              </div>
            </article>
          </section>
    )
}