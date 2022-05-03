import { Aside } from "./aside";

export const Alerts = () => {
    return (
            <section className="pSection">
            <Aside />
            <article className="pArticle">
                <div className="smallBox">Twitch Follows</div>
                <div className="smallBox">Twitch Subs</div>
                <div className="smallBox">Twitch Chatter</div>
                <div className="smallBox">Twitch Cheers</div>
                <div className="smallBox">YT Follows</div>
                <div className="smallBox">YT Abos</div>
                <div className="smallBox">YT Chatter</div>
                
                <div className="bigBox">Statistics</div>
                <div className="mediumBox">NewsFeed</div>
                <div className="mediumBox">ChatBox</div>
                <div className="smallBox medium">Asset Preview</div>
                <div className="smallBox">Connected</div>
            </article>
        </section>
    )
}