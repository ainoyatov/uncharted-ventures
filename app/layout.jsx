
import "./globals.css";
import { Suspense } from "react";
import Footer from "../components/footer/footerLinks"
import NavBar from '../components/navigation/NavBar'


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
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
