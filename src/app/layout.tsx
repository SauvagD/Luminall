import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "./index.css";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
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
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>

      <body
        className={cn(
          "min-h-screen font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <div className="z-[-1] fixed h-3/6 w-full" />
        <div className="z-10">
          <Header />
          <div className="w-full py-[10px]" />
          <main className="min-h-screen p-8 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
