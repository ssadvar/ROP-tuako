"use client"
import React, {useState} from "react";
import Image from "next/image";
import icons from "@/constants/icons";
import Link from "next/link.js";
import MyInput from "./MyInput.jsx";
import "@/assets/styles/formularPrihlaseniaStyle.css"
import MyButton from "./MyButton.jsx";
import { useRouter } from 'next/navigation'
import { prihlasitSa, odhlasitSa } from "@/library/appwrite.js";

export default function FormularPrihlasenia(){
    const [email, setEmail] = useState('');     //nastavenie stavu email na prazdny string
    const [heslo, setHeslo] = useState('');      //nastavenie stavu hesla na prazdny string
    const [jePlatnyEmail, setJePlatnyEmail] = useState(true);     // stav na sledovanie platnosti emailu - nastavim stav na true
    const overEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regularny vyraz - overenie standardneho formatu emailov
    const router = useRouter()

    const handleLogin = async () => {             // Vypise obsah inputov do konzoly
        if (!overEmail.test(email)) {
            setJePlatnyEmail(false);
            console.log("Zadaný email nie je platný.");
        } else {
            setJePlatnyEmail(true);
            console.log("Email je platný.");
            await prihlasitSa(email, heslo)
            //presmerovanie po prihlaseni na hlavnu stranku

            console.log('email:', email);       //vypis do konzoly 
            console.log('heslo:', heslo);

            setEmail('');       //Vyprazdni input -> nastavi stav inputu na ''
            setHeslo('');
        }
    }

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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}        // Ukladá hodnotu inputu do stavu
                />
               {!jePlatnyEmail && <p style={{ color: "red" }}>Zadaný email nie je platný.</p>} 
            </div>
            <div>
                <MyInput 
                    type="password"
                    ikona={icons.lock}
                    nazovIkony={"heslo"}
                    value={heslo}
                    onChange={(e) => setHeslo(e.target.value)}       // Ukladá hodnotu inputu do stavu
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
                    uloha={() => handleLogin()} 
                />
                 <MyButton 
                    nazov={"Odhlasit sa"}
                    uloha={() => odhlasitSa()} 
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