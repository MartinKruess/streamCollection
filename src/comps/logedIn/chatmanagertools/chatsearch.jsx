import { useState } from "react";

export const ChatSearch = (props) => {
    // the value of the search field 
    const [userMessages, setUserMessages] = useState([]);

    // the search result
    const [foundUsers, setFoundUsers] = useState(props.socketMessages);

    const findUserMessages = (e) => {
        const keyword = e.target.value

        if(keyword !== ""){
            const result = props.socketMessages.filter((message) => {
                return message.username.toLowerCase().startsWith(keyword.toLowerCase())
            })
            console.log(result)
            setUserMessages(result)
        }
        setFoundUsers(keyword)
    }

    return (
        <div className="chatFilter">
            <div className="visableChanger"><img src="" alt="" />ABC</div>
            <div className="isVisable">
                <input className="userSearchbar" type="text" placeholder="username" onChange={findUserMessages}/>
                <div className="filteredBox">
                    {userMessages.length > 0 && userMessages.map((message, i) => {
                        return(
                            <div className="chatLine" key={i}>
                                <div className="chatMSG">{message.timestamp} | <strong>{message.username}</strong> : <span>{message.message}</span></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}