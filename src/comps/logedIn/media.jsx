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
    let imagesFromDB = []

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
    imagesFromDB = data
    console.log(imagesFromDB)
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
                    <div>
                        {imagesFromDB.map((image, i, key)=>{
                            return(
                                <div>
                                    <div key={key}>{image[i].name}</div>
                                    <img key={key} src={image[i].view} alt="" />
                                </div>
                            )}
                        )}
                        
                    </div>
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
                    </ul>
                </div>
            </article>
        </section>
    )
}