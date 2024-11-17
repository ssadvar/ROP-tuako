"use client";
import react from "react";
import Image from "next/image";
import icons from "./../constants/icons.jsx";
import Link from "next/link.js";


export default function HomePalmicka(){
    return(
        
        <Link 
            className="palmicka"
            href="/"
        >
            <Image
                src={icons.palmicka} 
                height="32"
                width="32"
                alt="logo"
            />
        </Link>
    )
}