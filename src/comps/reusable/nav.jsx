import { useState } from "react";
import { Link } from "react-router-dom";
import liveLogo from '../../assets/images/liveLogo.png'

export const Navi = ({loginToken}) => {

    const [dropDown, setDropDown] = useState(false)
    const [settings, setSettings] = useState(false)
    const [isLocked, setIsLocked] = useState(false)

    if(dropDown === false && settings === true){setSettings(false)}

    //dropDown === false ? setSettings(false) : do nothing!

    return (
        <nav>
            <div id="navLogo"><img src={liveLogo} alt="" /></div>
            <ul>
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
                : (<>
                    <button className="profileBtn" onClick={() => setDropDown(!dropDown)}></button>
                    {dropDown
                    ? (<div className="profilDrowdown">
                                <button>Account Details</button>
                                <button onClick={()=> setSettings(!settings)}>Account Settings</button>
                        {settings ? (<div className="accSettings">
                            <div className="lockContainer" onClick={() => setIsLocked(!isLocked)}>
                                {isLocked ? (<i className="fa-solid fa-unlock"></i>) : (<i className="fa-solid fa-lock"></i>)}
                            </div>
                            <div><label>Dark/Light Mode</label><input type="button" value="Dark"/></div>
                            <div><label>Sprache</label><input type="button" value="DE"/></div>
                            <div><label>Twitch Account</label><input type="text" /></div>
                            <div><label>Youtube Account</label><input type="text" /></div>
                            <div><label>Status</label><input type="button" value="User"/></div>
                        </div>) : (<div className="blendOut"></div>)}
                    </div>)
                    : (<div className="blendOut"></div>)}
                    <Link to="/">
                        <input type="button" value="Logout"/>
                    </Link> 
                </>)
            }
        </nav>
    )
}