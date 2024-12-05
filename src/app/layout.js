//import localFont from "next/font/local";
import Pata from "@/components/Pata";
import "./globals.css";

export const metadata = {
  title: "TUAKO ubytovanie",
  description: "Stránka s ubytovaním",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body>

        {children}
        
        <Pata/>

      </body>
    </html>
  );
}
