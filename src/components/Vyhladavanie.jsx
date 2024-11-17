import react from "react";
import Image from "next/image";
import icons from "./../constants/icons.jsx";
import MyInput from "./MyInput.jsx";

export default function Vyhladavanie(){
    return(
        <>
            <div>
                <MyInput 
                    ikona={icons.search}
                    nazovIkony={"hľadaj"}
                />
            </div>
            <Image
                className="tag"
                src={icons.tag}
                height="28"
                width="28"
                alt="tag"
            />
        </>
    )
}