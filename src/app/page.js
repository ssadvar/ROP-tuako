//git add .
//git commit
//git push

import React from "react"
import Hlavicka from "@/components/Hlavicka.jsx"
import Banner from "@/components/Banner.jsx";
import Karta from "@/components/Karta.jsx"

import "@/assets/styles/domovStyle.css"
import "@/assets/styles/palmicka.css"

export default function Home() {
  return (
    <div>
      <Hlavicka />
      <Banner/>
      <section className="kartickyPonuk">
       
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
        <Karta />
      </section>
    </div>  
  );
}
