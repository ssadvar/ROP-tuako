//import localFont from "next/font/local";
import HomePalmicka from "@/components/HomePalmicka";
import "@/assets/styles/palmicka.css"

export default function RootLayout({ children }) {
  return (
    <>
        <HomePalmicka/>
        {children}
    </>
  );
}
