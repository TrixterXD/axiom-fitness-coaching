import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header/Header";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "AXIOM — Strength & Conditioning",
  description: "Personal training and online fitness coaching.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
