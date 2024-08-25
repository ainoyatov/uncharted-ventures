
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Footer from "../components/footer/footerLinks"
import HeaderMenu from "../components/header/header"


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="lg:pt-12 flex flex-row justify-center md:ml-0">
          <HeaderMenu />
        </div>
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
