import React from "react";
import Image from "next/image";
import "@/assets/styles/myInputStyle.css"

export default function MyInput({ikona, nazovIkony, type = "text", value, onChange}){
    return(
        <>
            <div className="myinput">
                <Image
                    src={ikona}
                    height="28"
                    width="28"
                    alt={ikona}
                />
                <input 
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={nazovIkony}
                />
            </div>
        </>
    )
}