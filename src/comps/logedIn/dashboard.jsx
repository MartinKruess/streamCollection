import { Aside } from "../reusable/aside"
import TTV_YTLinechart from "./charts/yt_twitch_chart"
import { useState, useEffect, useContext, useRef } from "react";
import { AppContext, SettingsContext } from "../context/userContext";
import { fetchURL } from "../../App";
import { TwitchContext } from "../context/mediaContext";
import { banTwitchUser } from "./dashboard/banTwitchUser";

export const Dashboard = () => {

    const { loginToken } = useContext(AppContext)
    const { sideSettings, setSideSettings } = useContext(SettingsContext)
    const { twitchData, setTwitchData } = useContext(TwitchContext)

    const [subs, setSubs] = useState(0)
    const [cheers, setCheers] = useState(0)
    const [donations, setDonations] = useState(0)
    const [merches, setMerches] = useState(0)
    const [moneyOut, setMoneyOut] = useState(0)
    const banUserRef = useRef();
    const banReasonRef = useRef()

    const activeColor1 = { color: sideSettings.obsIsConnected ? "#f7022a" : "" }
    const activeColor2 = { color: sideSettings.twitch.isConnected ? "#f7022a" : "" }
    const activeColor3 = { color: sideSettings.youtube.isConnected ? "#f7022a" : "" }
    const activeColor4 = { color: sideSettings.twitch.botIsActive ? "#f7022a" : "" }
    const activeColor5 = { color: sideSettings.youtube.botIsActive ? "#f7022a" : "" }
    const activeColor6 = { color: sideSettings.chartIsActive ? "#f7022a" : "" }
    const activeColor7 = { color: sideSettings.specialIsActive ? "#f7022a" : "" }
    const activeColor8 = { color: sideSettings.newsFeedIsActive ? "#f7022a" : "" }

    const fetchTwitchData = async () => {
        const res = await fetch(`${fetchURL}/dashboard/getDashboardTwitchData`, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': fetchURL,
                'Content-Type': 'application/json',
                'authToken': loginToken,
            }
        })
        console.log("Loading...")
        const data = await res.json();
        console.log("Data", data)
        !data.error && setTwitchData(data)
    }

    useEffect(() => {
        if (!twitchData) {
            console.log(twitchData)
            fetchTwitchData()
        } else {
            console.log(twitchData)
            setCheers(1231)
            setSubs(twitchData.subList.length)
            setDonations(57)
            setMerches(38.98)
            const money = cheers/100 + subs*2 + donations + merches
            setMoneyOut(money)
            console.log("twitchData is full")
        }
    }, [twitchData])

    const getBannedUser = (e) => {
        e.preventDefault()
        const banUser = {
          username: banUserRef.current.value,
          reason: banReasonRef.current.value
        }
        banTwitchUser(banUser, loginToken)
    }


    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle">
                <div className="dashboardMainContainer">
                    <h2>ACTIVATED SETTINGS</h2>
                    <div className="activeControlContainer">
                        <div className="smallBox"><h4 className="h4">Filter</h4>
                            <div className="feedOut">Twitch</div>
                            <div className="feedOut">Youtube</div>
                        </div>
                        <div className="smallBox"><h4 className="h4">Bots</h4>
                            <div className="feedOut"><button style={activeColor4} onClick={() => setSideSettings({ ...sideSettings, twitch: { ...sideSettings.twitch, "botIsActive": !sideSettings.twitch.botIsActive } })}>Twitch Bot Local</button></div>
                            <div className="feedOut"><button style={activeColor5} onClick={() => setSideSettings({ ...sideSettings, youtube: { ...sideSettings.youtube, "botIsActive": !sideSettings.youtube.botIsActive } })}>Youtube Bot</button></div>
                        </div>
                        <div className="smallBox"><h4 className="h4">Connections</h4>
                            <div className="feedOut"><button style={activeColor1} onClick={() => setSideSettings({ ...sideSettings, "obsIsConnected": !sideSettings.obsIsConnected })}>OBS</button></div>
                            <div className="feedOut"><button style={activeColor2} onClick={() => setSideSettings({ ...sideSettings, twitch: { ...sideSettings.twitch, "isConnected": !sideSettings.twitch.isConnected } })}>Twitch</button></div>
                            <div className="feedOut"><button style={activeColor3} onClick={() => setSideSettings({ ...sideSettings, youtube: { ...sideSettings.youtube, "isConnected": !sideSettings.youtube.isConnected } })}>Youtube</button></div>
                        </div>
                        <div className="smallBox"><h4 className="h4">De-/Aktiviert</h4>
                            <div className="feedOut"><button style={activeColor7} onClick={() => setSideSettings({ ...sideSettings, "specialIsActive": !sideSettings.specialIsActive })}>Einnahmen</button></div>
                            <div className="feedOut"><button style={activeColor6} onClick={() => { setSideSettings({ ...sideSettings, "chartIsActive": !sideSettings.chartIsActive }) }} >Statistic</button></div>
                            <div className="feedOut"><button style={activeColor8} onClick={() => setSideSettings({ ...sideSettings, "newsFeedIsActive": !sideSettings.newsFeedIsActive })}>News Feed</button></div>
                        </div>
                    </div>
                    {sideSettings.twitch.isConnected
                        ? (<div className="connectedContainer">
                            <h2>TWITCH STATISTICS</h2>
                            <div className="smallBox"><h4 className="h4">Follows</h4><div className="feedOut">{twitchData ? `+${twitchData.follows.length}` : sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div></div>
                            <div className="smallBox"><h4 className="h4">Cheers</h4><div className="feedOut">293</div></div>
                            <div className="smallBox"><h4 className="h4">Subs</h4><div className="feedOut">{twitchData ? twitchData.subList.length : sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div></div>
                            <div className="smallBox"><h4 className="h4">Last Follower</h4><div className="feedOut">{twitchData ? twitchData.follows[0].from_name : sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div></div>
                            <div className="smallBox"><h4 className="h4">Last Cheerer</h4><div className="feedOut">{twitchData ? "no user List" : sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div></div>
                            <div className="smallBox"><h4 className="h4">Last Subscriber</h4><div className="feedOut">{twitchData ? twitchData.subList[0].user_name : sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div></div>
                            <div className="topList"><h4 className="h4">Top Cheers</h4>
                                <div className="listOut"><div className="listRank">Rank</div><div className="listName">Username</div><div className="listNumber">Score</div></div>
                                {twitchData ? twitchData.bitList.map((user, i) => {
                                    return (
                                        <div className="listOut" key={i}>
                                            <div className="listRank">{user.rank}</div>
                                            <div className="listName">{user.user_name}</div>
                                            <div className="listNumber">{user.score}</div>
                                        </div>
                                    )
                                })
                                    : <div className="listOut"><div className="listRank">{sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div><div className="listName">{sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div><div className="listNumber">{sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div></div>}
                            </div>
                            <div className="topList">
                                <h4 className="h4">Top Subscriber</h4>
                                <div className="listOut"><div className="listRank">Sub-Tier</div><div className="listName">Username</div></div>
                                {twitchData ? twitchData.subList.map((user, i) => {
                                    return (
                                        <div className="listOut" key={i}>
                                            <div className="listRank">{user.tier / 1000}</div>
                                            <div className="listName">{user.user_name}</div>
                                        </div>
                                    )
                                })
                                    : <div className="listOut"><div className="listRank">{sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div><div className="listName">{sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div></div>}
                            </div>
                            <div className=" banList">
                                <h4 className="h4">Blocklist</h4>
                                <div className="banListBox">
                                    <div className="listOut"><div className="listName">Username</div><div className="listNumber">Banngrund</div></div>
                                    {twitchData ? twitchData.banList.map((user, i) => {
                                        return (
                                            <div className="listOut" key={i}>
                                                <div className="listName">{user.user_name}</div>
                                                <div className="listNumber">{user.reason}</div>
                                            </div>
                                        )
                                    })
                                        : <div className="listOut"><div className="listRank">{sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div><div className="listName">{sideSettings.isAuthTwitch ? "loading..." : "disconnected"}</div></div>}
                                </div>
                                <form onSubmit={getBannedUser}>
                                        <input ref={banUserRef} className="inputs" type="text" placeholder="Username" />
                                        <input ref={banReasonRef} className="inputs" type="text" placeholder="Grund" />
                                    <div className="banBTN">
                                        <button type="submit">Bannen</button>
                                    </div>
                                </form>
                            </div>
                        </div>) : (<div className="blendOut"></div>)}

                    {sideSettings.youtube.isConnected
                        ? (<div className="connectedContainer">
                            <h2>YOUTUBE STATISTICS</h2>
                            <div className="smallBox"><h4 className="h4">Likes</h4><div className="feedOut">-- noData --</div></div>
                            <div className="smallBox"><h4 className="h4">Dislikes</h4><div className="feedOut">-- noData --</div></div>
                            <div className="smallBox"><h4 className="h4">Follows</h4><div className="feedOut">-- noData --</div></div>
                            <div className="smallBox"><h4 className="h4">Abos</h4><div className="feedOut">-- noData --</div></div>
                            <div className="smallBox"><h4 className="h4">Viewer</h4><div className="feedOut">-- noData --</div></div>
                            <div className="smallBox"><h4 className="h4">Chatter</h4><div className="feedOut">-- noData --</div></div>
                            <div className="smallBox"><h4 className="h4">Super Chat</h4><div className="feedOut">-- noData --</div></div>
                        </div>) : (<div className="blendOut"></div>)}

                    {sideSettings.specialIsActive
                        ? (<div className="specialContainer">
                            <h2>EINNAHMEN</h2>
                            <div className="smallBox"><h4 className="h4">30 Tage Cheers</h4><div className="feedOut">{cheers}</div></div>
                            <div className="smallBox"><h4 className="h4">30 Tage Subs</h4><div className="feedOut">{subs}</div></div>
                            <div className="smallBox"><h4 className="h4">30 Tage Donations</h4><div className="feedOut">{donations} €</div></div>
                            <div className="smallBox"><h4 className="h4">30 Tage Merch</h4><div className="feedOut">{merches} €</div></div>
                            <div className="smallBox"><h4 className="h4">Gesamt Einnahmen</h4><div className="feedOut">{moneyOut.toFixed(2)} €</div></div>
                        </div>) : (<div className="blendOut"></div>)}

                    {sideSettings.chartIsActive
                        ? (<div className="viewerContainer">
                            <div className="bigBox chartContainer">
                                <h4 className="h4">Viewer Statistics</h4>
                                <TTV_YTLinechart />
                                <span className="dashboardChartFooter">last 14 Days</span>
                            </div>
                            {sideSettings.newsFeedIsActive
                                ? (<div className="newsFeedBox">ChatBox</div>) : (<div className="blendOut"></div>)}
                        </div>) : (<div className="blendOut"></div>)}
                </div>
            </article>
        </section>
    )
}