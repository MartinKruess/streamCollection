import { Aside } from "../../reusable/aside"

export const AutoCommands = () => {

    // const client = new tmi.Client({ /* ... */ });
    // client.connect().catch(console.error);

    return (
            <section className="pSection">
            <Aside />
            <article className="pArticle">
                <div className="bigBox">Chatbox</div>
                <div>
                    <h2>Commands</h2>
                    <ul>
                        <li>!hi</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}