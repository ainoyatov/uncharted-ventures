import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Footer from "@/components/footer/footerLinks"
import HeaderMenu from "@/components/header/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uncharted Ventures",
  description: "A Real Estate investment firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:pt-12 flex flex-row justify-center  md:ml-0">
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
