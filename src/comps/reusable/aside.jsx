import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext, SettingsContext } from "../context/userContext";

export const Aside = () => {

    const { setLoginToken, loginToken, setLogedUserData } = useContext(AppContext)
    const { sideSettings, setSideSettings, logedUserData } = useContext(SettingsContext)

    useEffect(() => {
        localStorage.setItem('sideSettings', JSON.stringify(sideSettings))
        // console.log("sideSettings", sideSettings)
    }, [sideSettings])

    const group = "user"
    const [isSlide, setIsSlide] = useState(false)



    const menuChanger = () => {
        setSideSettings({...sideSettings, "isSlide": !sideSettings.isSlide})
    }

    return (
        <aside>
            {sideSettings.isSlide
                ?(<ul>
                    <Link to="/dashboard" >
                        <li><i className="fa-solid fa-chart-line"></i><span className="tooltiptext">Dashboard</span></li>  
                    </Link>
                    <Link to="/activityfeed">
                        <li><i className="fa-solid fa-clock-rotate-left"></i><span className="tooltiptext">Aktivitäten</span></li>
                    </Link>
                    <Link to="/chatmanager">
                        <li><i className="fa-solid fa-clock-rotate-left"></i><span className="tooltiptext">Chatmanager</span></li>
                    </Link>
                        <li className="liSpacer"></li>
                    <Link to="/media">
                        <li><i className="fa-solid fa-play"></i><span className="tooltiptext">Media</span></li>
                    </Link>
                    <Link to="/alerts">
                        <li><i className="fa-solid fa-bell"></i><span className="tooltiptext">Alerts</span></li>
                    </Link>
                        <Link to="/overlays">
                        <li><i className="fa-solid fa-eye"></i><span className="tooltiptext">Overlays</span></li>
                    </Link>
                        <li className="liSpacer"></li>
                    <Link to="/chatcommands">
                        <li><i className="fa-solid fa-terminal"></i><span className="tooltiptext">Chat Commands</span></li>
                    </Link>
                    <Link to="/filter">
                        <li><i className="fa-solid fa-filter"></i><span className="tooltiptext">Filter</span></li>
                    </Link>
                    <Link to="/chatbot">
                        <li><i className="fa-solid fa-robot"></i><span className="tooltiptext">ChatBot</span></li>
                    </Link>
                    <Link to="/giveaway">
                        <li><i className="fa-solid fa-gifts"></i><span className="tooltiptext">Giveaway</span></li>
                    </Link>
                        <li className="liSpacer"></li>
                    <Link to="/bossfight">
                        <li><i className="fa-solid fa-dragon"></i><span className="tooltiptext">Bossfight</span></li>
                    </Link>
                    <Link to="/chatdock">
                        <li><i className="fa-solid fa-comment-dots"></i><span className="tooltiptext">OBS Chat</span></li>
                    </Link>
                    <Link to="/activitydock">
                        <li><i className="fa-solid fa-table"></i><span className="tooltiptext">OBS Activity</span></li>
                    </Link>
                    <Link to="/alertdock">
                        <li><i className="fa-solid fa-clipboard-question"></i><span className="tooltiptext">Dashboard</span></li>
                    </Link>
                    <li className="liSpacer"></li>
                        {group === "suser"
                    ? (<>
                        <Link to="/bossfight">
                            <li><i className="fa-solid fa-keyboard"></i><span className="tooltiptext">Dashboard</span></li>
                        </Link>
                        <Link to="/chatdock">
                            <li><i className="fa-solid fa-comment-dots"></i><span className="tooltiptext">Dashboard</span></li>
                        </Link>
                        <Link to="/activitydock">
                            <li>Fe3<span className="tooltiptext">Dashboard</span></li>
                        </Link>
                        <li className="liSpacer"><span className="tooltiptext">Dashboard</span></li>
                        </>)
                    : ( <Link to="/donations">
                            <li className="upgardeButton ugSmall"><i className="fa-solid fa-arrow-turn-up"></i><span className="tooltiptext">Upgrade</span></li>
                        </Link>)
                    }
                </ul>)
                :(<ul>
                    <Link to="/dashboard" >
                        <li>Dashboard</li>
                    </Link>
                    <Link to="/activityfeed">
                        <li>Activity Feed</li>
                    </Link>
                    <Link to="/chatmanager">
                        <li>Chat Manager</li>
                    </Link>
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
                                <li className="liSpacer"></li>
                          </>)
                        : ( <Link to="/donations">
                                <li className="upgardeButton">Upgrade</li>
                            </Link>)
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