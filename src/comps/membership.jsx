import { Link } from "react-router-dom"
import img01 from "../assets/images/logo.svg"
const paypal = "https://www.paypal.com/sdk/js?client-id=AajHqvewdsR8OZ5hqKA14nV3Zd9uX38pNu3NUBf9rcuFk_A5yFLg2iM8jZexnxpLQLF1v63SXdg47Cp6&currency=EUR"

export const Membership = () => {
const featureIn = " ✔"
const featureOut = " ✘"


  return (
    <article className="cardContainer" >
      <h2 id="membership">Membership</h2>
      <div className="card">
        <img src={img01} alt="" />
        <h3>Login, legen los!</h3>
        <ul>
          <li>Stream Analyze {featureIn}</li>
          <li>OBS Docks {featureIn}</li>
          <li className="liHeader">350 MB Storage {featureIn}</li>
          <li>Video Datein: flv, mp4 {featureIn}</li>
          <li>Sounds: mp3 {featureIn}</li>
          <li>Images: png, jpg, jpeg, gif {featureIn}</li>
        </ul>
        <input style={{height: "4rem", maxHeight: "4rem"}} type="button" value="Sign Up"/>
      </div>
      <div className="card">
        <img src={img01} alt="" />
        <h3>Unterstütze uns</h3>
        <ul>
          <li>Stream Analyze {featureIn}</li>
          <li>OBS Docks {featureIn}</li>
          <li className="liHeader">350 MB Storage {featureIn}</li>
          <li>Video Datein: flv, mp4 {featureIn}</li>
          <li>Sounds: mp3 {featureIn}</li>
          <li>Images: png, jpg, jpeg, gif {featureIn}</li>
          <li className="liHeader">Features {featureIn}</li>
          <li>+50 MB {featureIn}</li>
          <li>+ Feature 1 {featureIn}</li>
        </ul>
        <input style={{height: "4rem", maxHeight: "4rem"}} type="button" value="Donation"/>
      </div>
      <div className="card">
        <img src={img01} alt="" />
        <h3>Monatliches Abo</h3>
        <ul>
          <li>Stream Analyze {featureIn}</li>
          <li>OBS Docks {featureIn}</li>
          <li className="liHeader">350 MB Storage {featureIn}</li>
          <li>Video Datein: flv, mp4 {featureIn}</li>
          <li>Sounds: mp3 {featureIn}</li>
          <li>Images: png, jpg, jpeg, gif {featureIn}</li>
          <li className="liHeader">Features {featureIn}</li>
          <li>+150 MB {featureIn}</li>
          <li>+ Feature 1 {featureIn}</li>
          <li>+ OBS Sound-Controller {featureIn}</li>
          <li>+ Feature 3 {featureIn}</li>
        </ul>
        <Link to="donations">
          <input style={{height: "4rem", maxHeight: "4rem"}} type="button" value="Monatsabo"/>
        </Link>
        

        <div id="paypal"></div>
      </div>
    </article>
  )
}