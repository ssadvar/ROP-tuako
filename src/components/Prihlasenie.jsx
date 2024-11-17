"use client";
import react from "react"
import Image from "next/image"
import icons from "./../constants/icons.jsx"
import Link from "next/link.js";


export default function Prihlasenie(){
    return(
        <Link 
            className="prihlasenie" 
            href="/autentifikacia/prihlasenie"   
        >
            <Image 
                src={icons.login}
                height="28"
                width="28"
                alt="login"
            />
            <span>Prihlásiť sa</span>
        </Link>
    )
}