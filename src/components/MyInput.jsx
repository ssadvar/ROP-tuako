import React from "react";
import Image from "next/image";
import "@/assets/styles/myInputStyle.css"

export default function MyInput({ikona, nazovIkony, type = "text", value, onChange, onKeyPress}){
    return(
        <>
            <div className="myinput">
                <Image
                    className="ikona"
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
                    onKeyDown={onKeyPress}
                />
            </div>
        </>
    )
}