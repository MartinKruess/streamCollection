import { Link } from "react-router-dom";
export const Aside = () => {
    return (
        <aside>
                <div className="navLogo">LOGO</div>
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
                        <Link to="/alerts">
                            <li>Alerts</li>
                        </Link>
                            <Link to="/media">
                            <li>Sound/Video</li>
                        </Link>
                            <Link to="/overlays">
                            <li>My Overlays</li>
                        </Link>
                        </ul>
                    <li></li>
                    <li className="liHeader">Chat Bot</li>
                        <ul className="liBody">
                        <Link to="/autocommands">
                            <li>Auto Commands</li>
                        </Link>
                        <Link to="/chatcommands">
                            <li>Chat Commands</li>
                        </Link>
                        <Link to="/spamfilter">
                            <li>Spam Filter</li>
                        </Link>
                        <Link to="/yourfilter">
                            <li>Your Filter</li>
                        </Link>
                        </ul>
                    <li></li>
                    <li className="liHeader">OBS Docs</li>
                        <ul className="liBody">
                        <Link to="/bossfight">
                            <li>Bossfight</li>
                        </Link>
                        <Link to="/chatdock">
                            <li>OBS Chat Dock</li>
                        </Link>
                        <Link to="/activitydock">
                            <li>OBS Activity Dock</li>
                        </Link>
                        <Link to="/alertdock">
                            <li>OBS Alert Doc *payed*</li>
                        </Link>
                        </ul>
                </ul>
            </aside>
    )
}