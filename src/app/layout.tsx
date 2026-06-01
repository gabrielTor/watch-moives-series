import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LOGO } from "@/utils/getFullImgSrc";
import { ActiveLinkProvider } from "@/context/ActiveLinkContext";
import { getActiveLinks } from "@/_actions/videoActions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ctrl+Stream",
  description: "Watch Free Movies, series, anime",
  openGraph: {
    images: LOGO,
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { en: link, es: spanishLink } = await getActiveLinks();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveLinkProvider link={link} spanishLink={spanishLink}>
          <Navbar />
          <main className="min-h-screen bg-gray-950">{children}</main>
          <Footer />
        </ActiveLinkProvider>
      </body>
    </html>
  );
}
