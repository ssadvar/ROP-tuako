import React from 'react'
import "@/assets/styles/autentifikaciaStranky.css"
import FormularPridajPonuku from '@/components/FormularPridajPonuku'
import HomePalmicka from '@/components/HomePalmicka'

export default function page() {
  return (
    <div >
      <div className="kontajnerPalmicka">
        <HomePalmicka/>
      </div>
      <div className="autentifikaciaStranky">
        <FormularPridajPonuku/>
      </div>
    </div>
  )
}