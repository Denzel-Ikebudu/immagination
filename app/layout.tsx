import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Golos_Text } from "next/font/google";
import './globals.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"

const Bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-Bebas",
  subsets: ["latin"],
})

const golostext = Golos_Text({
  weight: "400",
  variable: "--font-golos-text",
  subsets: ["latin"],
})

const montserrat = Montserrat({
  weight: "400",
  variable: "--font-Montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Immagination",
  description: "Immagination design",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Bebas.variable} ${golostext.variable} ${montserrat.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}