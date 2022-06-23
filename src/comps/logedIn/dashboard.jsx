import { Aside } from "../reusable/aside"
import TTV_YTLinechart from "./charts/yt_twitch_chart"
import axios from "axios"
import { useState, useEffect, useContext } from "react";
import { AppContext, SettingsContext } from "../context/userContext";

export const Dashboard = () => {

    const {setLoginToken, loginToken} = useContext(AppContext)
    const  {sideSettings, setSideSettings} = useContext(SettingsContext)

    const [liveData, setData] = useState([])

    const activeColor1 = {color: sideSettings.obsIsConnected ? "#f7022a" : ""}
    const activeColor2 = {color: sideSettings.twitch.isConnected ? "#f7022a" : ""}
    const activeColor3 = {color: sideSettings.youtube.isConnected ? "#f7022a" : ""}
    const activeColor4 = {color: sideSettings.twitch.botIsActive ? "#f7022a" : ""}
    const activeColor5 = {color: sideSettings.youtube.botIsActive ? "#f7022a" : ""}
    const activeColor6 = {color: sideSettings.chartIsActive ? "#f7022a" : ""}
    const activeColor7 = {color: sideSettings.specialIsActive ? "#f7022a" : ""}
    const activeColor8 = {color: sideSettings.newsFeedIsActive ? "#f7022a" : ""}


    const getTwitchData = async () => {
        try {
        const twitchData = await axios.get('https://api.twitch.tv/helix/streams?user_login=mostercat', {
          headers: {
              Authorization: 'Bearer gcxdq6488vdwqsoyjj8b1y2vthcsjh',
              'Client-ID': 'ldhmjq6ih4k1e7uto56fi9nnzga7ua'
          }
        })
        } catch (err) {
            console.error(err);
        }
      }

    useEffect(()=> {
        getTwitchData()
    },[])

    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle articleDashboard">
                <div className="dashboardMainContainer">
                <h2>ACTIVATED SETTINGS</h2>
                <div className="activeControlContainer">
                    <div className="smallBox"><h4 className="h4">Filter</h4>
                        <div className="feedOut">Twitch</div>
                        <div className="feedOut">Youtube</div>
                    </div>
                    <div className="smallBox"><h4 className="h4">Bots</h4>
                        <div className="feedOut"><button style={activeColor4} onClick={() => setSideSettings({...sideSettings, twitch:{...sideSettings.twitch, "botIsActive": !sideSettings.twitch.botIsActive} })}>Twitch Bot Local</button></div>
                        <div className="feedOut"><button style={activeColor5} onClick={() => setSideSettings({...sideSettings, youtube:{...sideSettings.youtube, "botIsActive": !sideSettings.youtube.botIsActive} })}>Youtube Bot</button></div>
                    </div>
                    <div className="smallBox"><h4 className="h4">Connections</h4>
                        <div className="feedOut"><button style={activeColor1} onClick={() => setSideSettings({...sideSettings, "obsIsConnected": !sideSettings.obsIsConnected })}>OBS</button></div>
                        <div className="feedOut"><button style={activeColor2} onClick={() => setSideSettings({...sideSettings, twitch:{...sideSettings.twitch, "isConnected": !sideSettings.twitch.isConnected} })}>Twitch</button></div>
                        <div className="feedOut"><button style={activeColor3} onClick={() => setSideSettings({...sideSettings, youtube:{...sideSettings.youtube, "isConnected": !sideSettings.youtube.isConnected} })}>Youtube</button></div>
                    </div>
                    <div className="smallBox"><h4 className="h4">De-/Aktiviert</h4>
                    <div className="feedOut"><button style={activeColor7} onClick={() => setSideSettings({...sideSettings, "specialIsActive": !sideSettings.specialIsActive })}>Einnahmen</button></div>
                        <div className="feedOut"><button style={activeColor6} onClick={() => { setSideSettings({...sideSettings, "chartIsActive": !sideSettings.chartIsActive }) }} >Statistic</button></div>
                        <div className="feedOut"><button style={activeColor8} onClick={() => setSideSettings({...sideSettings, "newsFeedIsActive": !sideSettings.newsFeedIsActive })}>News Feed</button></div>
                    </div>
                </div>
                <div className="sideControlSettings">

                </div>

                {sideSettings.twitch.isConnected
                     ? (<div className="connectContainer containerPosTW">
                        <h2>TWITCH STATISTICS</h2>
                        <div className="smallBox"><h4 className="h4">Twitch Follows</h4><div className="feedOut">123</div></div>
                        <div className="smallBox"><h4 className="h4">Twitch Chatter</h4><div className="feedOut">17</div></div>
                        <div className="smallBox"><h4 className="h4">Twitch Subs</h4><div className="feedOut">31</div></div>
                        <div className="smallBox"><h4 className="h4">Twitch LastSub</h4><div className="feedOut">Godviewer83</div></div>
                        <div className="smallBox"><h4 className="h4">Twitch Cheers</h4><div className="feedOut">Ninno93</div></div>
                    </div>) : (<div className="blendOut"></div>)}
                
                {sideSettings.youtube.isConnected
                    ? (<div className="connectContainer containerPosYT">
                    <h2>YOUTUBE STATISTICS</h2>
                    <div className="smallBox"><h4 className="h4">YT Visitor</h4><div className="feedOut">-- noData --</div></div>
                    <div className="smallBox"><h4 className="h4">YT Likes</h4><div className="feedOut">-- noData --</div></div>
                    <div className="smallBox"><h4 className="h4">YT Follows</h4><div className="feedOut">-- noData --</div></div>
                    <div className="smallBox"><h4 className="h4">YT Abos</h4><div className="feedOut">-- noData --</div></div>
                    <div className="smallBox"><h4 className="h4">YT Chatter</h4><div className="feedOut">-- noData --</div></div>
                    <div className="smallBox"><h4 className="h4">YT Super Chat</h4><div className="feedOut">-- noData --</div></div>
                    </div>) : (<div className="blendOut"></div>)}

                {sideSettings.specialIsActive
                    ? (<div className="specialContainer">
                    <h2>EINNAHMEN</h2>
                    <div className="smallBox"><h4 className="h4">Last Donator</h4><div className="feedOut">donnergott</div></div>
                    <div className="smallBox"><h4 className="h4">Last Merch</h4><div className="feedOut">Godviewer83</div></div>
                    </div>) : (<div className="blendOut"></div>)}

                {sideSettings.chartIsActive
                ?  (<div className="viewerContainer">
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