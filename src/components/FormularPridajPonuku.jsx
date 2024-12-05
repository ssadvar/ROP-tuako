"use client";
import react from "react"
import Image from "next/image"
import icons from "../constants/icons.jsx"
import Link from "next/link.js";
import MyInput from "./MyInput.jsx";


export default function FormularPridajPonuku(){
    return(
        <div>
            <MyInput 
                ikona={icons.edit}
                nazovIkony={"Nazov"}
            />
            <MyInput 
                ikona={icons.mapPinYellow}
                nazovIkony={"Nazov"}
            />
            <MyInput 
                ikona={icons.info}
                nazovIkony={"Nazov"}
            />
        </div>
    )
}