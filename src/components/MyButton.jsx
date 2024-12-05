import react, { useEffect } from "react";

import "@/assets/styles/MyButtonStyle.css"

export default function MyButton({nazov, uloha}){

    return(
        <button 
            className="button" 
            onClick={() => uloha()}>
            {nazov}
        </button>
    )
}