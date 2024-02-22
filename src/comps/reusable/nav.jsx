import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import liveLogo from '../../assets/images/liveLogo.png'
import { AppContext, SettingsContext } from "../context/userContext";

export const Navi = () => {

    const {setLoginToken, loginToken} = useContext(AppContext)
    const  {sideSettings, setSideSettings} = useContext(SettingsContext)
    
    const [dropDown, setDropDown] = useState(false)
    const [settings, setSettings] = useState(false)
    const savedSideSettings = JSON.parse(localStorage.getItem("sideSettings"))

    useEffect(()=>{
        localStorage.setItem('sideSettings', JSON.stringify(sideSettings))
        console.log("sideSettings", sideSettings)
    }, [sideSettings])
    

    if(dropDown === false && settings === true){setSettings(false)}

    //dropDown === false && setSettings(false)

    const logout = () => {
        setLoginToken(false)
    }

    return (
        <nav>
            <div id="navLogo"><img src={liveLogo} alt="" /></div>
            <ul>
                <li><a href="/#about">About</a></li>
                <li><a href="/#learn">Learn</a></li>
                <li><a href="#membership">Membership</a></li>
            </ul>
            {loginToken === null
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
                            <div className="lockContainer" onClick={() => setSideSettings({...sideSettings, "isLocked":!sideSettings.isLocked})}>
                                {sideSettings.isLocked ? (<i className="fa-solid fa-lock"></i>) : (<i className="fa-solid fa-unlock"></i>)}
                            </div>
                            <div>
                                <label>Dark/Light Mode</label>
                                <input type="button" value={sideSettings.mode}
                                onClick={() => sideSettings.isLocked === false && (
                                    sideSettings.mode === "Dark"
                                    ? setSideSettings({...sideSettings, "mode": "Light"})
                                    : setSideSettings({...sideSettings, "mode": "Dark"})
                                    )}/>
                            </div>
                            <div>
                                <label>Sprache</label>
                                <input type="button" value={sideSettings.lang}
                                onClick={() => sideSettings.isLocked === false
                                ? sideSettings.lang === "ENG"
                                    ? setSideSettings({...sideSettings, "lang": "DE"})
                                    : setSideSettings({...sideSettings, "lang": "ENG"})
                                : setSideSettings({...sideSettings, "lang": sideSettings.lang})}/>
                            </div>
                            <div>
                                <label>Twitch Account</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Youtube Account</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>OBS Schlüssel</label>
                                <input type="button" value="User"/>
                            </div>
                        </div>) : (<div className="blendOut"></div>)}
                    </div>)
                    : (<div className="blendOut"></div>)}
                    <Link to="/">
                        <input type="button" value="Logout" onClick={logout}/>
                    </Link> 
                </>)
            }
        </nav>
    )
}