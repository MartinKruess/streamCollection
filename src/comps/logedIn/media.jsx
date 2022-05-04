import { Aside } from "./aside";

export const Media = () => {
    return (
            <section className="pSection">
            <Aside />
            <article className="pArticle mediaArticle">
                <div className="mediaSwitch">
                    <div className="switchBox">Images</div>
                    <div className="switchBox">Sounds</div>
                    <div className="switchBox">Videos</div>
                    <div className="uploadSpace">Upload</div>
                    <div className="mediaBox">
                    <form className="mediaSettings">
                        <label htmlFor="soundSwitch">On/Off</label><br />
                        <input type="checkbox" name="SoundVolumeSwitch" id="soundSwitch"/><br />
                        <label htmlFor="">Volume:</label>
                        <input type="range" name="volumePercentage" min="0" max="100"/>
                    </form>
                    
                    <ul className="yourMedia">
                        <li>sound 1</li>
                        <li>sound 1</li>
                        <li>sound 1</li>
                        <li>sound 1</li>
                        <li>sound 1</li>
                        <li>sound 1</li>
                        <li>sound 1</li>
                        <li>sound 1</li>
                        <li>sound 1</li>
                        <li>sound 1</li>
                    </ul>
                </div>
                </div>
                
            </article>
        </section>
    )
}