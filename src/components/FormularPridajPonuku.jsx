"use client";
import React, {useState}from "react"
import Image from "next/image"
import icons from "../constants/icons.jsx"
import Link from "next/link.js";
import MyInput from "./MyInput.jsx";
import MyButton from "./MyButton.jsx";
import pridavaniaPonukStyle from "@/assets/styles/pridavaniaPonukStyle.css"
import HomePalmicka from "./HomePalmicka.jsx";
import FileInput from "./fileInput.jsx";
import TextAreaInput from "@/components/TextAreaInput.jsx"
import { useRouter } from 'next/navigation'
import { pridaniePonuky } from "@/library/appwrite.js";

export default function FormularPridajPonuku(){
    const [nazov_ponuky, setNazov] = useState('')
    const [lokacia, setLokacia] = useState('')
    const [cena, setCena] = useState('')
    const [popis, setPopis] = useState('')
    const router = useRouter()
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('');

    async function pridajPonuku() {               //metoda trim -> odsranuje medzery zo zaciatku a konca vstupov, neovplyvnuje vsak medzery v strede
        if(nazov_ponuky.trim() && lokacia.trim() && cena.trim() && popis.trim() && popis.length <= 500){
            try{
                console.log("Ponuka je správne zadaná");
                const novy = await pridaniePonuky(nazov_ponuky, lokacia, parseFloat(cena), popis)    //vytiahnutie floatu zo stringu
                router.push('/')      //presmerovanie po pridani ponuky na hlavnu stranku
                console.log("nazov_ponuky:", nazov_ponuky, "lokacia:", lokacia, "cena:", cena, "eur", "popis:", popis);

            }catch(error){
                alert("Chyba pri pridavani ponuky: " + error)
                setModal(true);        
                setModalText('Chyba pri pridavani ponuky: ' + error.message);
            }
        }else{
            if(!nazov_ponuky.trim() || !lokacia.trim() || !cena.trim() || !popis.trim()){
                setModal(true)
                setModalText('Vyplňte všetky políčka')
            }else if (popis.length > 500) {
                setModal(true);
                setModalText('Popis nesmie mať viac ako 500 znakov')
            }
        }
    }

    return(
        <>
            <div className="formularPonuk">
            {modal && <div className="modal">{modalText}</div>} 
                <div>
                    <MyInput 
                        ikona={icons.edit}
                        nazovIkony={"Názov ponuky"}
                        value={nazov_ponuky}
                        onChange={(e) => {setNazov(e.target.value)}}
                    />
                </div>

                <div>
                    <MyInput 
                        ikona={icons.mapPinYellow}
                        nazovIkony={"Lokácia"}
                        value={lokacia}
                        onChange={(e) => {setLokacia(e.target.value)}}
                    />
                </div> 

                <div>
                    <MyInput 
                        type={"number"}
                        ikona={icons.moneyYellow}
                        nazovIkony={"Cena"}
                        value={cena}
                        onChange={(e) => {setCena(e.target.value)}}
                    />
                </div>

                <div>
                    <TextAreaInput 
                        ikona={icons.info}
                        nazovIkony={"Popis"}
                        value={popis}
                        onChange={(e) => {setPopis(e.target.value)}}
                    />
                </div>

                <div>
                    <FileInput 
                        ikona={icons.spinka}
                        nazovIkony={"Nahraj obrázok"}
                    />
                </div>
                
                <div className="buttonPrihlasenia">
                    <MyButton 
                        nazov={"Pridať ponuku"}
                        uloha={pridajPonuku}
                    />  
                </div>
            </div>
        </>
    )
}