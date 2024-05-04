import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luminall",
  description: "3D VFX studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="w-full p-2"></div>
        <main className="min-h-screen p-8 flex flex-col custom-shadow">
          {children}
        </main>
      </body>
    </html>
  );
}
