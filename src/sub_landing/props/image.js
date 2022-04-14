import { useRef, useState } from "react";
import "./css/image.css"
import noimg from "../images/no-img.jpg"

export function Image({src,onFileChanged,name}){

    const [currentSrc, setCurrentSrc] = useState(src||noimg)

    function uploadHandler(e){

        const blobUrl=URL.createObjectURL(e.target.files[0]);
        if(typeof onFileChanged == "function"){
            onFileChanged(e.target.file[0],blobUrl)
        }

        setCurrentSrc(blobUrl)
    }

    return <label htmlFor="am_img_uploader">
        <input onChange={uploadHandler} hidden type={"file"} id="am_img_uploader" name={name} autoComplete="false" accept="image/*"></input>
        <div className="img_wrapper">
        <div className="img_overlay">
            <div className="centerer">
            Subir
            </div>
        </div>
        <div className="pseudo_img" style={{backgroundImage:`url(${currentSrc})`}}></div>
        </div>
    </label>
}