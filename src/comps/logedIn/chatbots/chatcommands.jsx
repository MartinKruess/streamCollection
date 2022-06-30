import { Aside } from "../../reusable/aside"

export const ChatCommands = () => {

    const commands = [
        {
            name: "commands",
            result: "Das hier sind die Commands ...",
            event: null,
            permission: "viewer",
            cd: 120
        },
        {
            name: "discord",
            result: "Es freut mich, dass du dich nach meinem Discord erkundigst",
            event: null,
            permission: "mods",
            cd: 120
        },
        {
            name: "commands2",
            result: "Das hier sind die Commands ...",
            event: null,
            permission: "mods",
            cd: 120
        },
        {
            name: "commands2",
            result: "Das hier sind die Commands ...",
            event: null,
            permission: "mods",
            cd: 120
        },
        {
            name: "commands2",
            result: "Das hier sind die Commands ...",
            event: null,
            permission: "mods",
            cd: 120
        },
        {
            name: "commands2",
            result: "Das hier sind die Commands ...",
            event: null,
            permission: "mods",
            cd: 120
        },
    ]

    return (
            <section className="pSection">
            <Aside />
            <article className="pArticle">
            <h1>COMMANDS</h1>
                <div className="botCommandContainer">
                    <div className="commandContainer">
                        <div className="commandLine head">
                            <div className="commandValue">Command Name</div>
                            <div className="commandValue plus">Output</div>
                            <div className="commandValue">Event</div>
                            <div className="commandValue">Permission</div>
                            <div className="commandValue minus">Cooldown</div>
                        </div>
                        {commands.map((command, i) => (
                            <div className="commandLine" key={i}>
                                <div className="commandValue">{command.name}</div>
                                <div className="commandValue plus">{command.result}</div>
                                <div className="commandValue">{command.event}</div>
                                <div className="commandValue">{command.permission}</div>
                                <div className="commandValue minus">{command.cd}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        Neue Commands
                    </div>
                </div>                
            </article>
        </section>
    )
}