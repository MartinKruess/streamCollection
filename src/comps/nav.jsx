import { Link } from "react-router-dom";

export const Navi = ({logedIn}) => {

    return (
        <nav>
            <div id="navLogo"></div>
            <ul>
            <li><a href="/#about">About</a></li>
            {/* <li><Link to={{pathname:"/", hash:"#about"}}/></li> */}
                <li>Learn</li>
                <li><a href="#membership">Membership</a></li>
            </ul>
            {logedIn === false
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