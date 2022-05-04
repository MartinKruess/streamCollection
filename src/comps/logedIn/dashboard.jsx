import { Aside } from "./aside";
import TTV_YTLinechart from "./charts/yt_twitch_chart"

export const Dashboard = () => {
    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle">
                <div className="smallBox"><h4 className="h4">Twitch Follows</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">Twitch Chatter</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">Twitch Subs</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">Twitch LastSub</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">Twitch Cheers</h4><div className="feedOut">123</div></div>
                
                <div className="smallBox"><h4 className="h4">Donations</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">Merchs</h4><div className="feedOut">123</div></div>

                <div className="smallBox"><h4 className="h4">YT Visitor</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">YT Likes</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">YT Follows</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">YT Abos</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">YT Chatter</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">YT Super Chat</h4><div className="feedOut">123</div></div>
                <div className="smallBox"><h4 className="h4">Connected</h4><div className="feedOut">123</div></div>

                <div className="bigBox chartContainer">
                    <h4 className="h4">Statistics</h4>
                    <TTV_YTLinechart />
                </div>
                <div className="mediumBox medium">ChatBox</div>
                
            </article>
        </section>
    )
}