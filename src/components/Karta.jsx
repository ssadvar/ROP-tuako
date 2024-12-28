"use client";
import React from "react";
import Image from "next/image";
import icons from "./../constants/icons.jsx"
import { useRouter } from "next/navigation.js";
import Link from "next/link.js";
import "@/assets/styles/kartaStyle.css"


export default function Karta({ponuka}){
    const router = useRouter();

    return(
        <Link 
            className="karta"
            href={`/ubytovanie/${ponuka.$id}`}
        >
            <div className="nazov">{ponuka.nazov_ponuky}</div>
            <div>{ponuka.lokacia}</div>
            <div>
            <Image 
                src={icons.fullStar}
                height="15"
                width="15"
                alt="star"
                />
            <Image 
                src={icons.fullStar}
                height="15"
                width="15"
                alt="star"
            />
            <Image 
                src={icons.star}
                height="15"
                width="15"
                alt="star"
            />
            <Image 
                src={icons.star}
                height="15"
                width="15"
                alt="star"
            />
            <Image 
                src={icons.star}
                height="15"
                width="15"
                alt="star"
                />
            </div>
            <div>1 noc</div>
            <div className="cena">{ponuka.cena}$</div>
        </Link>
    )
}