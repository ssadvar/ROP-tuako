import react from "react";
import Image from "next/image";
import "@/assets/styles/myInputStyle.css"

export default function MyInput({ikona, nazovIkony}){
    return(
        <>
            <div className="myinput">
                <Image
                    src={ikona}
                    height="28"
                    width="28"
                    alt={ikona}
                />
                <input placeholder={nazovIkony}/>
            </div>
        </>
    )
}