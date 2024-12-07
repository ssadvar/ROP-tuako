"use client";
import React from "react";
import Image from "next/image";
import icons from "./../constants/icons.jsx";
import Link from "next/link.js";
import "@/assets/styles/palmicka.css"


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