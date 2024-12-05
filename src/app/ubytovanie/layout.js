import Hlavicka from "@/components/Hlavicka";
import Pata from "@/components/Pata";

export default function RootLayout({ children }) {
    return (  
    <>
        <Hlavicka/>
        {children}
    </>
    );
  }