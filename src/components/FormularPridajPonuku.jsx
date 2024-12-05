"use client";
import react from "react"
import Image from "next/image"
import icons from "../constants/icons.jsx"
import Link from "next/link.js";
import MyInput from "./MyInput.jsx";
import MyButton from "./MyButton.jsx";
import registraciaStyle from "@/assets/styles/registraciaStyle.css"
import HomePalmicka from "./HomePalmicka.jsx";


export default function FormularPridajPonuku(){
    return(
        <>
            <div className="formularRegistracie">
                <div className="clipboardIkona">
                    <MyInput 
                        ikona={icons.edit}
                        nazovIkony={"Názov"}
                    />
                </div>

                <div className="loginIkona">
                    <MyInput 
                        ikona={icons.mapPinYellow}
                        nazovIkony={"Lokácia"}
                    />
                </div> 

                <div className="loginIkona">
                    <MyInput 
                        ikona={icons.info}
                        nazovIkony={"Popis"}
                    />
                </div>
                
                <div className="buttonPrihlasenia">
                    <MyButton 
                        nazov={"Pridať ponuku"}
                        uloha={() => {}}
                    />  
                </div>
            </div>
        </>
    )
}