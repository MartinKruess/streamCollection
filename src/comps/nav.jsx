export const Navi = ({logedIn}) => {

    return (
        <nav>
            <div id="navLogo"></div>
            <ul>
                <li>About</li>
                <li>Learn</li>
                <li>Membership</li>
            </ul>
            {logedIn === false
                ? (<div id="navButtons">
                <input type="button" value="Login" />
                <input type="button" value="Sign up" />
            </div>)
            : (<input type="button" value="Logout" />)
            }
        </nav>
    )
}