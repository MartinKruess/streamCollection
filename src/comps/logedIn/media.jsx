import { useEffect, useRef, useState, useContext } from "react";
import { fetchURL } from "../../App";
import { Aside } from "../reusable/aside"
import { AppContext } from '../context/userContext'
import { MediaContext } from "../context/mediaContext";

export const Media = () => {

    const {mediaData, setMediaData} = useContext(MediaContext)
    const {logedUserData} = useContext(AppContext)
    
    const MDI = mediaData[0].images
    const MDV = mediaData[0].videos
    const MDS = mediaData[0].sounds
    console.log("MDI", MDI)
    
    const fileInputRef = useRef()
    const [image, setImage] = useState()
    const [preview, setPreview] = useState()
    const [tab, setTab] = useState("images")
    const userData = JSON.parse(localStorage.getItem('logedUserData'))
    
    const userID = userData.userID
    const imgData = {
        userID: userID,
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
        
        fetch(`${fetchURL}/imageUpload`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(imgData)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("MEDIA-DATA", mediaData)
            mediaData[0].images.push(data.ImagesFromDB)
            setMediaData([...mediaData])
        })        
        .catch(console.log)
    }

    const tabHandler = (tabPrefix) => {
        setTab(tabPrefix)
    }

    const deleteHandler = (img) => {
        console.log("lösche IMG", img)
        // fetch("/imageUpload" => req, res)
        // look at container id and delete _id from DB
    }

    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle mediaArticle">
                <div className="mediaSwitch">
                    <button className="switchBox" onClick={() => tabHandler("images")}>Images</button>
                    <button className="switchBox" onClick={() => tabHandler("sounds")}>Sounds</button>
                    <button className="switchBox" onClick={() => tabHandler("videos")}>Videos</button>
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
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0]
                                    if (file && file.type.substring(0, 5) === "image") { setImage(file) } else { setImage(null) }
                                }} />
                        </button>
                    )}

                    {tab === "images" &&
                        <div className="imagesCon">
                            {MDI.length > 0 && MDI[0].map((image, i) => {
                                return (
                                    <div className="imgCard" id={image._id} key={i}>
                                        <div className="imgName">{image.name}</div>
                                        <div className="deleteBtn" onClick={() => deleteHandler(this.image)}>x</div>
                                        <img src={image.view} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {tab === "sounds" &&
                        <div>
                            <div className="mediaBox">
                                <form className="mediaSettings">
                                    <label htmlFor="soundSwitch">On/Off</label><br />
                                    <input type="checkbox" name="SoundVolumeSwitch" id="soundSwitch" /><br />
                                    <label htmlFor="">Volume:</label>
                                    <input type="range" name="volumePercentage" min="0" max="100" />
                                </form>

                                <ul className="yourMedia">
                                    <li>sound 1.title01.feat.end</li>
                                    <li>sound 1.title01.feat.end</li>
                                    <li>sound 1.title01.feat.end</li>
                                    <li>sound 1.title01.feat.end</li>
                                    <li>sound 1.title01.feat.end</li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </article>
        </section>
    )
}