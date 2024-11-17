"use client";
import react from "react"
import Image from "next/image"
import icons from "./../constants/icons.jsx"
import Link from "next/link.js";
import MyInput from "./MyInput.jsx"
import "@/assets/styles/registraciaStyle.css"
import MyButton from "./MyButton.jsx";

export default function Registracia(){
    return(
        <div className="formularRegistracie">
            <div className="clipboardIkona">
                <Image
                    src={icons.clipboard}
                    height="28"
                    width="28"
                    alt="clipboard"
                />
            </div>
            <div>
                <MyInput 
                    ikona={icons.user}
                    nazovIkony={"meno"}
                />
            </div>
            <div>
                <MyInput 
                    ikona={icons.user}
                    nazovIkony={"priezvisko"}
                />
            </div>
            <div>
                <MyInput 
                    ikona={icons.atSign}
                    nazovIkony={"email"}
                />
            </div>
            <div>
                <MyInput 
                    ikona={icons.phone}
                    nazovIkony={"telefónne číslo"}
                />
            </div>
            <div>
                <MyInput 
                    ikona={icons.lock}
                    nazovIkony={"heslo"}
                />
                <Image 
                    src={icons.eyeOn}
                    height="28"
                    width="28"
                    alt="eyeOn"
                />
            </div>
            <div className="buttonRegistracia">
                <MyButton 
                    nazov={"Registrovať sa"}
                    uloha={() => {}}
                />  
            </div>
            <div className="linkPrihlasenia">
                <Link href="/autentifikacia/prihlasenie">
                    Už ste registrovaný? Prihláste sa.
                </Link>
            </div>
            
        </div>
    )
}