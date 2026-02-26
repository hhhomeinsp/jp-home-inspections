import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JP Home Inspections | Greater Boston's Trusted Home Inspector",
  description:
    "Professional home inspections in Greater Boston, MA. InterNACHI certified, licensed & insured. Buyer's inspections, pre-listing, new construction, radon testing & more.",
  keywords:
    "home inspection, Boston, Massachusetts, home inspector, buyer inspection, pre-listing inspection, radon testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
