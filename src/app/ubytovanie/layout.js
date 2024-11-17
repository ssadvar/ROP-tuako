import HomePalmicka from "@/components/HomePalmicka";

export default function RootLayout({ children }) {
    return (  
    <>
        <HomePalmicka/>
        {children}
    </>
    );
  }