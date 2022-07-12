import { useState } from "react"
import { Aside } from "../reusable/aside"

export const ChatManager = () => {

    const [activitys, setActivitys] = useState(["Aktivität 1: Raikun hat ein Sub Tier 1 verschenkt an NinoNanaNono", "Aktivität 2", "Aktivität 3", "Aktivität 4", "Aktivität 5", "Aktivität 6", "Aktivität 7", "Aktivität 8", "Aktivität 9", ])
    const messages = [
        {
        username: "Raikun",
        msg:"Hallo du da"
    },
    {
        username: "Godviewer83",
        msg:"Hi"
    },
    {
        username: "Godviewer83",
        msg:"Arsch"
    },
    {
        username: "Keksi",
        msg:"gleich wirste gebannt!"
    }
    ]

    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle">
                <div className="chatManagerContainer">
                    <div className="chatBoxContainer">
                        <h4 className="h4">Chatbox</h4>
                        <div className="chatBox">
                        <div className="chatLine">
                            Raikun: Hiho herzlich Willkommen in meinem Stream. Heute zocken wir etwas Rocket League mit der kleinen Keksi. Wir freuen uns auf dich, also schau rein und genieße den Abend mit Freunden. Liebe Grüße euer Rai
                        </div>
                            <div className="chatLine">Godviewer83: Hallo ich bin neu hier.</div>
                            <div className="chatLine">Godviewer83: Kann es sein, dass ich schon einmal hier war? Ich bin mir nicht sicher... vllt kennt man sich ;)</div>
                            <div className="chatLine">DasprächtigeEinhorn92: hi du warst doch letzte woche schon mal da!</div>
                        </div>
                        <textarea rows="5" cols="50" maxLength={220} placeholder="Nachricht..." />
                    </div>
                </div>
                <div className="chatManager">
                    <form action="">
                        <input type="text" placeholder="username" />
                        <button>Suche</button>
                    </form>
                    <div>
                        {messages.filter(message => messages.includes({"username":"Godviewer83"})).map(message => {
                            <div>
                                <input type="checkbox" />
                                <div>{message.username}</div>
                                <div>{message.msg}</div>
                            </div>
                        })}
                    </div>
                </div>
            </article>
        </section>
    )
}