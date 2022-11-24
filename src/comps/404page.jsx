import { useEffect, useState } from "react"
import img404_01 from "../assets/images/img404_01.png"

export const Page404 = () => {
    const [action, setAction] = useState(false)
    const character = document.getElementById("character")
    const block = document.getElementById("block")
    
    const jump = () => {
        setAction(true)
        console.log("YES", action)
        if(action){
            setTimeout(() => {}, 500)
            setAction(false)
            console.log("NO", action)
        }
    }

    const checkDead = setInterval(() => {
        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
        if(blockLeft<3 && blockLeft>0 && characterTop>=23){
            block.style.animation = "none"
            block.style.display = "none"
            alert("You Lose!")
        }
    },5)

    return (
        <section className="errorSection">
            <h1 className="h1">Error 404</h1>
            <h2 className="h2">- Page not found</h2>
            <hr />
            <h3 className="h3">Welcome to the Void.</h3>
            <div className="errorIMG">
                <img src={img404_01} alt="" />
            </div>
            <div >
                <hr />
                <p>If you have some time...</p>
                <hr />
                <div id="game" onClick={jump}>
                    <div id="character" className={action ? "animate" : ""}></div>
                    <div id="block"></div>
                </div>
            </div>
        </section>
    )
}