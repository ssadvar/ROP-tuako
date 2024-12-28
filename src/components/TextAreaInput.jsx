import React from "react";
import Image from "next/image";
import "@/assets/styles/textAreaInputStyle.css"

export default function MyInput({ikona, nazovIkony, type = "text", value, onChange, onKeyPress}){
    return(
        <>
            <div className="textareaInput">
                <Image className="ikona"
                    src={ikona}
                    height="28"
                    width="28"
                    alt={ikona}
                />
                <textarea
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={nazovIkony}
                    onKeyDown={onKeyPress}
                >

                </textarea>
            </div>
        </>
    )
}