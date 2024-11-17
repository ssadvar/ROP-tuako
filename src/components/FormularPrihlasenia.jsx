"use client"
import react from "react";
import Image from "next/image";
import icons from "@/constants/icons";
import Link from "next/link.js";
import MyInput from "./MyInput.jsx";
import "@/assets/styles/formularPrihlaseniaStyle.css"
import MyButton from "./MyButton.jsx";

export default function FormularPrihlasenia(){
    return(
        <div className="formularPrihlasenia">
            <div className="loginIkona">
                <Image
                    src={icons.login_yellow}
                    height="28"
                    width="28"
                    alt="user"
                />
            </div>
            <div>
                <MyInput 
                    ikona={icons.user}
                    nazovIkony={"email"}
                />
            </div>
            <div>
                <MyInput 
                    ikona={icons.lock}
                    nazovIkony={"heslo"}
                />

                <Image
                    src={icons.eyeOff}
                    height="28"
                    width="28"
                    alt="eyeOff"
                />
            </div>
            <div className="buttonPrihlasenia">
                <MyButton
                    nazov={"Prihlásiť sa"}
                    uloha={() => {}}
                />
            </div>
            <div className="linkRegistracia">  
                <Link href="/autentifikacia/registracia">
                    Ešte nemáte vytvorený účet? Zaregistrujte sa.
                </Link>
            </div>  
        </div>
    )
}