import react from "react"
import Image from "next/image"
import icons from "./../constants/icons.jsx"
import "@/assets/styles/bannerStyle.css"


export default function Banner(){
    return(
        <div className="bannerBox">
            <Image
                src={icons.lavyList}
                height="129"
                width="181"
                alt="palmovy list"
                className="lavyList"
            />
            <p className="nazov">TUAKO</p>
            <Image
                src={icons.pravyList}
                height="129"
                width="181"
                alt="palmovy list"
                className="pravyList"
            />

        </div>
    )
}