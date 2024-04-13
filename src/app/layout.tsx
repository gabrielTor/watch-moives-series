import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import { LOGO } from "@/utils/getFullImgSrc";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ctrl+Stream",
  description: "Watch Free Movies, series, anime",
  openGraph: {
    images: LOGO,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Navbar />
        </Suspense>
        <main className="min-h-screen bg-liteBlue">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
