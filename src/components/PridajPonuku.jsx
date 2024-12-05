"use client";
import react from "react"
import Image from "next/image"
import icons from "../constants/icons.jsx"
import Link from "next/link.js";
import HomePalmicka from "@/components/HomePalmicka.jsx";

export default function PridajPonuku(){
    return(
        <>
            
            <Link 
                className="PridajPonuku" 
                href="/formular/novaPonuka"   
            >
                <Image 
                    src={icons.plusCircle}
                    height="28"
                    width="28"
                    alt="plus"
                />
            </Link>
        </> 
    )
}