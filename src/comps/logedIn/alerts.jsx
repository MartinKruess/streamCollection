import { Aside } from "../reusable/aside"
import { useRef, useContext, useEffect, useState } from 'react';
import { fetchURL } from "../../App";
import { AppContext } from '../context/userContext'
import { MediaContext } from "../context/mediaContext";

export const Alerts = () => {
    const [imgSelect, setImgSelect] = useState([])
    const loginToken = localStorage.getItem('loginToken')
    const { mediaData, setMediaData } = useContext(MediaContext)
    const canvasRef = useRef()

    const loadImgToCanvas = () => {
        
    }

    const MDI = mediaData.images
    // const MDV = mediaData.videos
    // const MDS = mediaData.sounds

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
            console.log("Loading...")
            const data = await res.json();
            setMediaData({...mediaData, images: data.ImagesFromDB})
        } catch (err) {
            console.log("Leider ein Fail", err)
        }
    }

    useEffect(() => {
        
        fetchImgFromDB()
    }, [])

    const imgChosen = (imgID) => {

        const imgInfo = MDI.find((img) => {
            console.log(img._id)
            return img._id === imgID
        })
        console.log("imgInfo", imgInfo)

        setImgSelect((prev) => [...prev, imgInfo])
        console.log("Inner Func", imgSelect)
    }
    console.log("global", imgSelect)
    console.log("MDI", MDI)

    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle">
                <div className="buildContainer">
                    <div className="assetsPanel">
                        <div className="soundSelect">
                            <select name="" id="">
                                {/* {MDS.length > 0 && MDS[0].map((sound, i) => { */}
                                    <option value="">sound.name</option>
                                {/* })} */}
                            </select>
                        </div>
                        <div className="imageSelect">
                            <select name="" id="" onChange={(e) => imgChosen(e.target.value)}>
                                <option>Please choose</option>
                                {MDI.length > 0 && MDI.map((image, i) => (
                                    <option key={i} id={image._id} value={image._id} >{image.name}</option>
                                ))}
                            </select> 
                        </div>
                        <div className="videoSelect">
                            <select name="" id="">
                                {/* {MDV.length > 0 && MDV[0].map((video, i) => { */}
                                    <option value="">video.name</option>
                                {/* })} */}
                            </select>
                        </div>
                        <div className="textSelect">
                            <select name="" id="">
                                <option value="">Times New Roman</option>
                            </select>
                        </div>
                        <button>Save</button>
                    </div>
                    <canvas className="buildCanvas" ref={canvasRef}>
                        
                    </canvas>
                </div>
                
            </article>
        </section>
    )
}