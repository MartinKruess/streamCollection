import { NavLink, Link } from "react-router-dom";
import liveLogo from '../../assets/images/liveLogo.png'

export const Navi = ({loginToken}) => {

    return (
        <nav>
            <div id="navLogo"><img src={liveLogo} alt="" /></div>
            <ul>
            <li><NavLink to="/#about">About-Test</NavLink></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#learn">Learn</a></li>
                <li><a href="#membership">Membership</a></li>
            </ul>
            {loginToken === false
                ? (<div id="navButtons">
                <Link to="/login">
                    <input className="linkBtn" type="button" value="Login"/>
                </Link>
                <Link to="/register">
                    <input type="button" value="Sign up" />
                </Link>
            </div>)
                : (
                    <Link to="/">
                        <input type="button" value="Logout"/>
                    </Link> 
                  )
            }
        </nav>
    )
}