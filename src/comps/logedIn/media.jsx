import { useEffect, useRef, useState } from "react";
import { fetchURL } from "../../App";
import { Aside } from "../reusable/aside"

export const Media = () => {

    const fileInputRef = useRef()
    const [image, setImage] = useState()
    const [preview, setPreview] = useState()
    const imgData = {
        userID: 'new ObjectId("629db3da45ed1f32964ffb0c"', //localStorage.getItem(loginToken.userID),
        view: "",
        name: "",
        size: "",
        type: "",
        }

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result) // ???
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
        }
    }, [image])

    const imgFetch = async (e) => {
            imgData.view = preview,
            imgData.name = image.name
            imgData.size = image.size
            imgData.type = image.type
    
        console.log(imgData)
        
        const response = await fetch(`${fetchURL}/imageUpload`,
    {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(imgData)
    })
    const data = await response.json()
    console.log("Data", {data})
    }

    return (
            <section className="pSection">
            <Aside />
            <article className="pArticle mediaArticle">
                <div className="mediaSwitch">
                    <div className="switchBox">Images</div>
                    <div className="switchBox">Sounds</div>
                    <div className="switchBox">Videos</div>
                    {preview ? (
                    <div className="imgUploadSpace">
                        <img className="imgSpace" src={preview} alt="" />
                        <button onClick={imgFetch}>Upload</button>
                    </div>)
                    : (<button className="uploadSpace" onClick={() => {
                        //e.preventDefault()
                        fileInputRef.current.click()
                    }} >
                        <input className="uploading" type="file" ref={fileInputRef}
                        accept = "image/*"
                        onChange={(e) => {
                            const file = e.target.files[0]
                            if(file && file.type.substring(0, 5) === "image") {setImage(file)} else {setImage(null)}
                            
                        }}/>
                    </button>
                    )}
                </div>
                <div className="mediaBox">
                    <form className="mediaSettings">
                        <label htmlFor="soundSwitch">On/Off</label><br />
                        <input type="checkbox" name="SoundVolumeSwitch" id="soundSwitch"/><br />
                        <label htmlFor="">Volume:</label>
                        <input type="range" name="volumePercentage" min="0" max="100"/>
                    </form>
                    <ul className="yourMedia">
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1.title01.feat.end</li>
                        <li>sound 1</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}


/*
1 Minute Video 30FPS 720p ~ 40MB
10 Videos / User = 600MB
1 Minuten Track ~ 1,5MB

650MB / User

10.000 User ~ 6.500.000 MB (6.500GB ~ 6.5TB)
*/