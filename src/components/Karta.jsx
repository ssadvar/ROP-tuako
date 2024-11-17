"use client";
import react from "react";
import Image from "next/image";
import icons from "./../constants/icons.jsx"
import { useRouter } from "next/navigation.js";
import Link from "next/link.js";
import "@/assets/styles/kartaStyle.css"


export default function Karta(){
    const router = useRouter();

    const id = "aaaaaaaaaaaaaaa"

    return(
        <Link 
            className="karta"
            href={`/ubytovanie/${id}`}
        >
            <div className="nazov">nazov</div>
            <div>miesto</div>
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
            <div className="cena">250$</div>
        </Link>
    )
}