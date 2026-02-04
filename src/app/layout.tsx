import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400'],
  variable: '--font-cormorant',
  style: 'italic'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['100', '200', '400'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "Sensi by Patrizia | Sonothérapie & Sophrologie",
  description: "Harmonie sonore et présence à soi à Luxembourg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans bg-sauge text-creme`}>
        {children}
      </body>
    </html>
  );
}
