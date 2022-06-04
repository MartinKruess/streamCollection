import { Link, NavLink } from "react-router-dom";
export const Aside = () => {
    const group = "user"
    return (
        <aside>
                <ul>
                <Link to="/dashboard">
                    <li>Dashboard</li>
                </Link>
                <Link to="/activityfeed">
                    <li>Activity Feed</li>
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
                                <li>Feature 1</li>
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
                    
                </ul>
            </aside>
    )
}