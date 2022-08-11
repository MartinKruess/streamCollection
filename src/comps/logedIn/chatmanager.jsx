import { Aside } from "../reusable/aside"
import { ChatWidget } from "./chatWidget";

export const ChatManager = () => {  

    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle">
                <ChatWidget />
            </article>
        </section>
    )
}