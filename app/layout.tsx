import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bahjat Asser - Premier Car Broker in Saudi Arabia",
  description:
    "Bahjat Asser is the leading car broker in Saudi Arabia, established for over 40 years. We specialize in exporting high-quality vehicles to customers in Saudi Arabia .",
  keywords:
    "car broker, car dealership, vehicle export, Saudi Arabia, Bahjat Asser, automotive",
  authors: [{ name: "Bahjat Asser", url: "https:/www.bahjatasser.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
