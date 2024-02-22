import { Aside } from "../reusable/aside"
import { useRef, useContext } from 'react';
import { fetchURL } from "../../App";
import { AppContext } from '../context/userContext'

export const Alerts = () => {

    const {mediaData, setMediaData} = useContext(AppContext)

    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle">
                <div className="buildContainer">
                    <div className="assetsPanel">
                        <div className="soundSelect">
                            <select name="" id="">
                                {mediaData.sounds.map((sound, i) => {
                                    <option key={i} value="">{sound.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="imageSelect">
                            <select name="" id="">
                                {mediaData.images.map((image, i) => {
                                    <option key={i} value="">{image.name}</option>
                                })}
                            </select> 
                        </div>
                        <div className="videoSelect">
                            <select name="" id="">
                                {mediaData.videos.map((video, i) => {
                                    <option key={i} value="">{video.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="textSelect">
                            <select name="" id="">
                                <option key={i} value="">Times New Roman</option>
                            </select>
                        </div>
                        <button>Save</button>
                    </div>
                    <canvas classNAme="buildCanvas"></canvas>
                </div>
                
            </article>
        </section>
    )
}