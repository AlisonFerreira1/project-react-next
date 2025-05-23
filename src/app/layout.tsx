import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="flex flex-row justify-between py-6 px-20 border-b-2 border-b-gray-500  sm:items-start  ">
            <div className="flex gap-16 text-xl">
              <Link href={"/"}>Home</Link>
              <Link href={"./habilidade"}>habilidades</Link>
              <Link href={"./contatos"}>contatos</Link>
              <Link href={"./experiencia"}>experiencia</Link>
              <Link href={"./projetos"}>projetos</Link>
            </div>
            <Image
              src="/logo.svg"
              alt="Next.js logo"
              width={80}
              height={38}
            ></Image>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
