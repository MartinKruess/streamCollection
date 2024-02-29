import { useEffect, useRef, useState, useContext } from "react";
import { fetchURL } from "../../App";
import { Aside } from "../reusable/aside"
import { AppContext } from '../context/userContext'
import { MediaContext } from "../context/mediaContext";

export const Media = () => {

    const {mediaData, setMediaData} = useContext(MediaContext)
    const {logedUserData} = useContext(AppContext)
    
    const fileInputRef = useRef()
    const [image, setImage] = useState()
    const [preview, setPreview] = useState()
    const [tab, setTab] = useState("images")

    const loginToken = localStorage.getItem('loginToken')
    const userDataOfLS = JSON.parse(localStorage.getItem('logedUserData'))
    const userID = userDataOfLS.userID
    
    const imgData = {
        userID: userID,
        view: "", 
        name: "",
        size: "",
        type: "",
    }

    const [MDI, setMDI] = useState([])
    const MDV = mediaData.videos
    const MDS = mediaData.sounds
    const fetchImgFromDB = async () => {
        const res = await fetch(`${fetchURL}/media/getAllImages`, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': fetchURL,
                'Content-Type': 'application/json',
                'authToken': loginToken,
            }
        })
        
        try {
            console.log("Media: Loading...")
            const data = await res.json();
            setMediaData({...mediaData, images: data.ImagesFromDB})
            setMDI(mediaData.images)
            console.log("Media: MDI", MDI)
            
        } catch (error) {
            console.log("Leider ein Fail", error)
        }
    }

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
            fetchImgFromDB()
        }
    }, [image])

    const imgFetch = async (e) => {
        imgData.view = preview,
        imgData.name = image.name
        imgData.size = image.size
        imgData.type = image.type

        fetch(`${fetchURL}/media/imageUpload`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authToken': loginToken,
            },
            body: JSON.stringify(imgData)
        })
        .then((res) => res.json())
        .then((data) => {
            setPreview()
            setMediaData({...mediaData, images: data.ImagesFromDB})
            setImage()
        })
        .catch(console.log)
    }

    const tabHandler = (tabPrefix) => {
        setTab(tabPrefix)
    }

    const deleteHandler = async (id, type) => {
        console.log("Media: lösche IMG", id)
        const res = await fetch(`${fetchURL}/media/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'authToken': loginToken,
            },
            body: JSON.stringify({_id:id, type: type})
        })
       const data = await res.json()
       setMDI([])
       setMDI(data)
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
                        <div className="imagesBox">
                            {MDI.length > 0 && MDI.map((image, i) => {
                                return (
                                    <div className="imgCard" id={image._id} key={i}>
                                        <div className="imgName">{image.name}</div>
                                        <div className="deleteBtn" onClick={() => deleteHandler(image._id, "img")}>x</div>
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
                    {tab === "videos" &&
                        <div>
                            <div className="videoBox">
                                <form className="mediaSettings">
                                    <label htmlFor="soundSwitch">On/Off</label><br />
                                    <input type="checkbox" name="VideoVolumeSwitch" id="soundSwitch" /><br />
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