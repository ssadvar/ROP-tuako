'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { getPrihlasenyUzivatel } from '@/library/appwrite'

const GlobalnyStav = createContext()

export const useGlobalnyStav = () => useContext(GlobalnyStav)

export const GlobalProvider = ({children}) => {

    const [pouzivatel, setPouzivatel] = useState(null)
    
    useEffect(() => {    //nevies pouzit await! :(

        async function ziskajPouzivatela(){
            const prihlasenyPouzivatel = await getPrihlasenyUzivatel()

            if(prihlasenyPouzivatel){
                setPouzivatel(prihlasenyPouzivatel)
                console.log(prihlasenyPouzivatel)
            }
        }
        ziskajPouzivatela()
    }, [])

    return (
        <GlobalnyStav.Provider
            value={{
                pouzivatel,
                setPouzivatel,

            }}
        >
            {children}
        </GlobalnyStav.Provider>

    )
}

