import react from "react"
import Prihlasenie from "./Prihlasenie.jsx"
import Vyhladavanie from "./Vyhladavanie.jsx"
import HomePalmicka from "./HomePalmicka.jsx"
import "@/assets/styles/hlavickaStyle.css"


export default function Hlavicka(){
    return(
        <header className="hlavicka">
            <Prihlasenie />     {/*vlozenie komponentu prihlasenie (ikona + odkaz na podstranku)*/}
            <Vyhladavanie />    {/*vlozenie komponentu vyhladavanie (ikona + input)*/}
            <HomePalmicka />    {/*vlozenie komponentu palmicky (ikona = odkaz na domovsku stranku)*/}
        </header>
    )
}