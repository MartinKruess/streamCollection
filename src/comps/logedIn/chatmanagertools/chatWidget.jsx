import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../../context/userContext";
import { fetchURL } from "../../../App";
import { socketMessageData } from "../chatbots/chatdata"
import io from 'socket.io-client'
import { ChatSearch } from "./chatsearch";


export const ChatWidget = () => {
    const { loginToken } = useContext(AppContext)
    const textAreaRef = useRef()
    const socketRef = useRef()
    const bottomRef = useRef(null)

    // Collect Messages
    const [socketMessages, setSocketMessages] = useState([])

    useEffect(() => {
        socketRef.current = io(fetchURL, {
            reconnectionDelayMax: 100000,
            auth: {
                token: loginToken
            },
        });
        console.log("TYPE", typeof socketMessageData())
        //setSocketMessages(socketMessageData)
        return () => {
            socketRef.current && socketRef.current.disconnect()
        }
    }, [])

    // Filter messages for Commands
    const [chatCommand, setChatCommand] = useState([])

    const manageMSG = (msgAction) => {
        switch (msgAction) {
            case "msgData":
                console.log("loading... msgData")
                break;
            case "timeoutUser":
                console.log("timeoutUser")
                break;
            case "blockUser":
                console.log("blockUser")
                break;
            case "msgDelete":
                console.log("msgDelete")
                break;

            default:
                break;
        }
    }
    
    const sendMessage = () => {
        socketRef.current.emit("message", {
            channel: 'RaikunGaming',
            username: 'RaikunGaming',
            message: textAreaRef.current.value
        })
        textAreaRef.current.value = null
    }

    useEffect(() => {
        socketRef.current.on("message", (msg) =>  {
            const newMSG = {
                badges: msg.badges,
                emotes: msg.emotes,
                firstMSG: msg.firstMSG,
                id: msg.id,
                message: msg.message,
                messageType: msg.messageType,
                mod: msg.mod,
                returningChatter: msg.returningChatter,
                subscriber: msg.subscriber,
                timestamp: new Date(msg.timestamp).toISOString().slice(11,19),
                turbo: msg.turbo,
                userID: msg.userID,
                username: msg.username,
            }
            setSocketMessages([...socketMessages, newMSG]) // setMessages ersetzen durch deinen Messages State Setter
        })

        return () => {
            socketRef.current && socketRef.current.off("message")
          }
    }, [socketMessages])

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });

    }, [socketMessages])
    console.log("SocketMSG", socketMessages)

    return(
        <div className="chatManagerContainer">
            <div className="chatBoxContainer">
                <h4 className="h4">SC - Chatmanager V.0.1.A</h4>
                <div className="chatBox">
                    {socketMessages.map((message, i) => {
                        return(
                            <div className="chatLine" key={i} ref={bottomRef}>
                                <div className="chatMSG">{message.timestamp} | <strong>{message.username}</strong> : <span>{message.message}</span></div>
                                    <div className="msgConfigBar">
                                    <div className="msg" onClick={() => manageMSG("msgData")}>D</div>
                                    <div className="msg" onClick={() => manageMSG("timeoutUser")}>T</div>
                                    <div className="msg" onClick={() => manageMSG("blockUser")}>B</div>
                                    <div className="msg " onClick={() => manageMSG("msgDelete")}>X</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <ChatSearch socketMessages={socketMessages} />
            </div>
            <div className="textareaContainer">
                <textarea rows="5" cols="50" maxLength={220} placeholder="Nachricht..." onKeyUp={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()} ref={textAreaRef} />
            </div>
        </div>
    )
}
