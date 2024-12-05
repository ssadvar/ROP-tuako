//import localFont from "next/font/local";
import Pata from "@/components/Pata";
import "./globals.css";
import palmicka from "@/assets/icons/palmicka.png"

export const metadata = {
  title: "TUAKO ubytovanie",
  description: "Stránka s ubytovaním",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <link rel="icon" href="/palmicka.png" sizes="any" />
      <body>
        {children}
        
        <Pata/>

      </body>
    </html>
  );
}
