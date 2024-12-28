//import localFont from "next/font/local";
import Pata from "@/components/Pata";
import "./globals.css";
import palmicka from "@/assets/icons/palmicka.png"
import {GlobalProvider} from '@/contexts/globalnyStav.js'

export const metadata = {
  title: "TUAKO ubytovanie",
  description: "Stránka s ubytovaním",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <link rel="icon" href="/palmicka.png" sizes="any" />
      <body>
        <GlobalProvider>
          {children}  
        </GlobalProvider>

        <Pata/>

      </body>
    </html>
  );
}
