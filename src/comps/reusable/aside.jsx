import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext, SettingsContext } from "../context/userContext";

export const Aside = () => {

    const { setLoginToken, loginToken, setLogedUserData } = useContext(AppContext)
    const { sideSettings, setSideSettings, logedUserData } = useContext(SettingsContext)

    useEffect(() => {
        localStorage.setItem('sideSettings', JSON.stringify(sideSettings))
        // console.log("sideSettings", sideSettings)
    }, [sideSettings])

    const group = "suser"
    const [isSlide, setIsSlide] = useState(false)



    const menuChanger = () => {
        setSideSettings({...sideSettings, "isSlide": !sideSettings.isSlide})
    }

    return (
        <aside>
            {sideSettings.isSlide
                ?(<ul>
                    <NavLink to="/dashboard" >
                        <li><i className="fa-solid fa-chart-line"></i></li>  
                    </NavLink>
                    <NavLink to="/activityfeed">
                        <li><i className="fa-solid fa-clock-rotate-left"></i></li>
                    </NavLink>
                        <li></li>
                    <Link to="/media">
                        <li><i className="fa-solid fa-play"></i></li>
                    </Link>
                    <Link to="/alerts">
                        <li><i className="fa-solid fa-bell"></i></li>
                    </Link>
                        <Link to="/overlays">
                        <li><i className="fa-solid fa-eye"></i></li>
                    </Link>
                    <Link to="/chatcommands">
                        <li><i className="fa-solid fa-terminal"></i></li>
                    </Link>
                    <Link to="/filter">
                        <li><i className="fa-solid fa-filter"></i></li>
                    </Link>
                    <Link to="/chatbot">
                        <li><i className="fa-solid fa-robot"></i></li>
                    </Link>
                    <Link to="/giveaway">
                        <li><i className="fa-solid fa-gifts"></i></li>
                    </Link>
                        <li></li>
                    <Link to="/bossfight">
                        <li><i className="fa-solid fa-dragon"></i></li>
                    </Link>
                    <Link to="/chatdock">
                        <li><i className="fa-solid fa-comment-dots"></i></li>
                    </Link>
                    <Link to="/activitydock">
                        <li><i className="fa-solid fa-table"></i></li>
                    </Link>
                    <Link to="/alertdock">
                        <li><i className="fa-solid fa-clipboard-question"></i></li>
                    </Link>
                        <li></li>
                        {group === "suser"
                    ? (<>
                        <Link to="/bossfight">
                            <li><i className="fa-solid fa-keyboard"></i></li>
                        </Link>
                        <Link to="/chatdock">
                            <li><i className="fa-solid fa-comment-dots"></i></li>
                        </Link>
                        <Link to="/activitydock">
                            <li>Fe3</li>
                        </Link>
                            <li></li>
                        </>)
                    : ( <NavLink to="/donations">
                            <li className="upgardeButton ugSmall">Ug</li>
                        </NavLink>)
                    }
                </ul>)
                :(<ul>
                    <NavLink to="/dashboard" >
                        <li>Dashboard</li>
                    </NavLink>
                    <NavLink to="/activityfeed">
                        <li>Activity Feed</li>
                    </NavLink>
                    <NavLink to="/chatmanager">
                        <li>Chat Manager</li>
                    </NavLink>
                        <li></li>
                        <li className="liHeader">Streaming Tools</li>
                            <ul className="liBody">
                            <Link to="/media">
                                <li>Sound/Video</li>
                            </Link>
                            <Link to="/alerts">
                                <li>Alerts</li>
                            </Link>
                                <Link to="/overlays">
                                <li>My Overlays</li>
                            </Link>
                            </ul>
                        <li></li>
                        <li className="liHeader">Chat Bot</li>
                            <ul className="liBody">
                            <Link to="/chatcommands">
                                <li>Chat Commands</li>
                            </Link>
                            <Link to="/filter">
                                <li>Filter</li>
                            </Link>
                            <Link to="/giveaway">
                                <li>Giveaways</li>
                            </Link>
                            </ul>
                        <li></li>
                        <li className="liHeader">OBS Docs</li>
                            <ul className="liBody">
                            <Link to="/bossfight">
                                <li>Bossfight</li>
                            </Link>
                            <Link to="/chatdock">
                                <li>OBS Chatbox</li>
                            </Link>
                            <Link to="/activitydock">
                                <li>OBS Activity</li>
                            </Link>
                            <Link to="/alertdock">
                                <li>OBS Alert</li>
                            </Link>
                            </ul>
                        <li></li>
                        {group === "suser"
                        ? (<> 
                            <li className="liHeader">Extras</li>
                                <ul className="liBody">
                                <Link to="/bossfight">
                                    <li>StreamDeck</li>
                                </Link>
                                <Link to="/chatdock">
                                    <li>OBS Sound Controll</li>
                                </Link>
                                <Link to="/activitydock">
                                    <li>Feature 3</li>
                                </Link>
                                </ul>
                            <li></li>
                          </>)
                        : ( <NavLink to="/donations">
                                <li className="upgardeButton">Upgrade</li>
                            </NavLink>)
                        }
                </ul>)
            }
            
            <div className="menuChanger" onClick={menuChanger}>{
                sideSettings.isSlide
                    ? (<i className="fa-solid fa-chevron-right"></i>)
                    : (<i className="fa-solid fa-chevron-left"></i>)
            }</div>
        </aside>
    )
}