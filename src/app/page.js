//git add .
//git commit
//git push
"use client"
import React, { useEffect, useState } from "react"
import Hlavicka from "@/components/Hlavicka.jsx"
import Banner from "@/components/Banner.jsx";
import Karta from "@/components/Karta.jsx"
import "@/assets/styles/domovStyle.css"
import "@/assets/styles/palmicka.css"
import { getPonuky } from "@/library/appwrite";

export default function Home() {

  const [ponuky, setPonuky] = useState([])
  
  useEffect(() => {
    async function nastavPonuky(){
      setPonuky((await getPonuky()).map((ponuka) => {
        return (
          <Karta 
            ponuka={ponuka}
          />
        )
      }))     
    }
    nastavPonuky()
    
  }, [])

  return (
    <div>
      <Hlavicka />
      <Banner/>
      <section className="kartickyPonuk">
      

        {ponuky}


      </section>
    </div>  
  );
}
