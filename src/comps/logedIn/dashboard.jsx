import { Aside } from "../reusable/aside"
import TTV_YTLinechart from "./charts/yt_twitch_chart"
import axios from "axios"
import { useState, useEffect, startTransition } from "react";

export const Dashboard = () => {
    const [liveData, setData] = useState([])

    // function getTwitchData(){
    //     axios.get('https://api.twitch.tv/helix/streams?user_login=Monstercat', {
    //         headers: {
    //             Authorization: 'Bearer gcxdq6488vdwqsoyjj8b1y2vthcsjh',
    //             'Client-ID': 'ldhmjq6ih4k1e7uto56fi9nnzga7ua'
    //         }
    //     // }).then(res => console.log(res.data))
    //     }).then(res => setData(res.data))
    // }

    const getTwitchData = async () => {
        try {
        const twitchData = await axios.get('https://api.twitch.tv/helix/streams?user_login=mostercat', {
          headers: {
              Authorization: 'Bearer gcxdq6488vdwqsoyjj8b1y2vthcsjh',
              'Client-ID': 'ldhmjq6ih4k1e7uto56fi9nnzga7ua'
          }
        })
            console.log(twitchData.data);
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
            
            <article className="pArticle">
            
                <h2>TWITCH STATISTICS</h2>
                <div className="smallBox"><h4 className="h4">Twitch Follows</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">Twitch Chatter</h4><div className="feedOut">17</div></div>
                <div className="smallBox"><h4 className="h4">Twitch Subs</h4><div className="feedOut">31</div></div>
                <div className="smallBox"><h4 className="h4">Twitch LastSub</h4><div className="feedOut">Godviewer83</div></div>
                <div className="smallBox"><h4 className="h4">Twitch Cheers</h4><div className="feedOut">Ninno93</div></div>
                
                <div className="smallBox"><h4 className="h4">Last Donator</h4><div className="feedOut">donnergott</div></div>
                <div className="smallBox"><h4 className="h4">Last Merch</h4><div className="feedOut">Godviewer83</div></div>

                <h2>YOUTUBE STATISTICS</h2>
                <div className="smallBox"><h4 className="h4">YT Visitor</h4><div className="feedOut">-- noData --</div></div>
                <div className="smallBox"><h4 className="h4">YT Likes</h4><div className="feedOut">-- noData --</div></div>
                <div className="smallBox"><h4 className="h4">YT Follows</h4><div className="feedOut">-- noData --</div></div>
                <div className="smallBox"><h4 className="h4">YT Abos</h4><div className="feedOut">-- noData --</div></div>
                <div className="smallBox"><h4 className="h4">YT Chatter</h4><div className="feedOut">-- noData --</div></div>
                <div className="smallBox"><h4 className="h4">YT Super Chat</h4><div className="feedOut">-- noData --</div></div>

                <h2>ACTIVATED SETTINGS</h2>
                <div className="smallBox"><h4 className="h4">Filter</h4>
                    <div className="feedOut"><input type="checkbox" className="activSettingsDashboard" />Twitch</div>
                    <div className="feedOut"><input type="checkbox" className="activSettingsDashboard" />Youtube</div>
                </div>
                <div className="smallBox"><h4 className="h4">Bots</h4>
                    <div className="feedOut"><input type="checkbox" className="activSettingsDashboard" />Twitch</div>
                    <div className="feedOut"><input type="checkbox" className="activSettingsDashboard" />Youtube</div>
                </div>
                <div className="smallBox"><h4 className="h4">Connected</h4>
                    <div className="feedOut">
                        <button>OBS
                            <input type="checkbox" className="activSettingsDashboard" />
                        </button>
                    </div>
                    <div className="feedOut"><input type="checkbox" className="activSettingsDashboard" />Twitch</div>
                    <div className="feedOut"><input type="checkbox" className="activSettingsDashboard" />Youtube</div>
                </div>

                <div className="bigBox chartContainer">
                    <h4 className="h4">Viewer Statistics</h4>
                    <TTV_YTLinechart />
                    <span className="dashboardChartFooter">last 14 Days</span>
                </div>
                <div className="mediumBox medium">ChatBox</div>
            </article>
        </section>
    )
}