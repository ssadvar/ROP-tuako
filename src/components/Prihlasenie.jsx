"use client";
import React from "react"
import Image from "next/image"
import icons from "./../constants/icons.jsx"
import Link from "next/link.js";
import { useGlobalnyStav } from "@/contexts/globalnyStav.js";


export default function Prihlasenie(){

    const {pouzivatel} = useGlobalnyStav() 

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
            <span>{pouzivatel ? pouzivatel.meno : 'Prihlásiť sa'}</span>
        </Link>
    )
}