import { useState } from "react"
import { Aside } from "../reusable/aside"

export const ActivityFeed = () => {

    const [activitys, setActivitys] = useState(["Aktivität 1: Raikun hat ein Sub Tier 1 verschenkt an NinoNanaNono", "Aktivität 2", "Aktivität 3", "Aktivität 4", "Aktivität 5", "Aktivität 6", "Aktivität 7", "Aktivität 8", "Aktivität 9",])

    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle">
                <div className="feedBox">
                    <form className="feedReset">
                        <input type="text" placeholder="username, word or theme" />
                        <button className="activityFilter">Kanalpunkte</button>
                        <button className="activityFilter">Follows</button>
                        <button className="activityFilter">Cheers</button>
                        <button className="activityFilter">Subs</button>
                        <button>Reset All</button>
                    </form>
                </div>
                <div className="activityFeedContainer">
                    {activitys
                        ? activitys.map((activity, i) => {
                        return (
                            <div className="feedContainer" key={i}>
                                <div className="feed">
                                    <div>{activity}</div>
                                </div>
                                <div className="arrow">
                                </div>
                            </div>
                        )
                    })
                        : "loading"}
                </div>
            </article>
        </section>
    )
}