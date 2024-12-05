//import localFont from "next/font/local";
import HomePalmicka from "@/components/HomePalmicka";


export default function RootLayout({ children }) {
  return (
    <>
        <div className="kontajnerPalmicka">
          <HomePalmicka/>
        </div>
        {children}
    </>
  );
}
