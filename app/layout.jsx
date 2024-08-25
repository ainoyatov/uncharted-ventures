
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Footer from "../components/footer/footerLinks"
import HeaderMenu from "../components/header/header"
import NavBar from '../components/navigation/NavBar'


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* <HeaderMenu /> */}
          <NavBar />
        </div>
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
