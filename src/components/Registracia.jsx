"use client";
import React, {useState} from "react"
import Image from "next/image"
import icons from "./../constants/icons.jsx"
import Link from "next/link.js";
import MyInput from "./MyInput.jsx"
import "@/assets/styles/registraciaStyle.css"
import MyButton from "./MyButton.jsx";
import { prihlasitSa, vytvorenieUzivatela } from "@/library/appwrite.js"
import { useRouter } from 'next/navigation'

export default function Registracia(){            
        const [meno, setMeno] = useState('')
        const [priezvisko, setPriezvisko] = useState('')
        const [tel_cislo, setTel_cislo] = useState('')
        const [email, setEmail] = useState('')
        const [heslo, setHeslo] = useState('')
        const [modal, setModal] = useState(false);
        const [modalText, setModalText] = useState('');
        const router = useRouter()
        const [jePlatnyEmail, setJePlatnyEmail] = useState(true);     // stav na sledovanie platnosti emailu - nastavim stav na true
      
        const registracia = async () => {           //metoda trim -> odsranuje medzery zo zaciatku a konca vstupov, neovplyvnuje vsak medzery v strede
            if(meno.trim() && priezvisko.trim() && email.trim() && tel_cislo.trim() && tel_cislo.length <= 12 && heslo.trim() && heslo.length >= 8){
                try {
                    await vytvorenieUzivatela(meno, email, heslo, tel_cislo, priezvisko)
                    const overEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regularny vyraz - overenie standardneho formatu emailov

                    if (!overEmail.test(email)) {
                        setJePlatnyEmail(false);
                        console.log("Zadaný email nie je platný.");
                    } else {
                        setJePlatnyEmail(true);
                        console.log("Email je platný.");
                        router.push('/')  //presmerovanie po registracii na hlavnu stranku
                        console.log("meno:", meno, "priezvisko:", priezvisko, "email:", email, "tel_cislo:", tel_cislo, "heslo:", heslo);
                    }
                    
                } catch (error) {       //vypisy chyb
                    alert("Chyba pri registrácii: " + error)
                    setModal(true);        
                    setModalText('Chyba pri registrácii: ' + error.message);
                }
            }else{
                if(!meno.trim() || !priezvisko.trim() || !email.trim() || !tel_cislo.trim() || !heslo.trim()){
                    setModal(true)
                    setModalText('Vyplňte všetky políčka')
                }else if(heslo.length < 8){
                    setModal(true)
                    setModalText('Heslo musí mať aspoň 8 znakov')
                }else if (tel_cislo.length > 12) {
                    setModal(true);
                    setModalText('Telefónne číslo nesmie mať viac ako 12 číslic')
                }
            }
        }    

    return(
        <div className="formularRegistracie">
            {modal && <div className="modal">{modalText}</div>} 
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
                    value={meno}
                    onChange={(e) => {setMeno(e.target.value)}}     //e = event
                />
            </div>
            <div>
                <MyInput 
                    ikona={icons.user}
                    nazovIkony={"priezvisko"}
                    value={priezvisko}
                    onChange={(e) => {setPriezvisko(e.target.value)}}
                />
            </div>
            <div>
                <MyInput
                    type={email} 
                    ikona={icons.atSign}
                    nazovIkony={"email"}
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </div>
            <div>
                <MyInput 
                    ikona={icons.phone}
                    nazovIkony={"telefónne číslo"}
                    value={tel_cislo}
                    onChange={(e) => {setTel_cislo(e.target.value)}}
                />
            </div>
            <div>
                <MyInput 
                    type="password"
                    ikona={icons.lock}
                    nazovIkony={"heslo"}
                    value={heslo}
                    onChange={(e) => {setHeslo(e.target.value)}}
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
                    uloha={registracia}
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



{/*

    */}