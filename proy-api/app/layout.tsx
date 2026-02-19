import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import Header from "./components/header";


export default function RootLayout({children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <div className="flex flex-col min-h-screen"></div>
      </body>
    </html>
  );
}
