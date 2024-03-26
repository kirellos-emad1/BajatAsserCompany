import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import { SessionProvider } from "next-auth/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "32x32",
      url: "../public/logo.jpeg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "16x16",
      url: "../public/logo.jpeg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "32x32",
      url: "../public/logo.jpeg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "16x16",
      url: "../public/logo.jpeg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "../public/logo.jpeg",
    },
  ],
  verification:
  {
    google: 'google',
    yandex: "yandex",
    yahoo: "yahoo",
  },
  title: "Bahjat Asser - Premier Car Broker in Saudi Arabia",
  description:
    "Bahjat Asser is the leading car broker in Saudi Arabia, established for over 40 years. We specialize in selling and funding high-quality vehicles to customers in Saudi Arabia.",
  keywords:
    "car broker, car dealership, vehicle export, Saudi Arabia, Bahjat Asser, automotive, بهجت عسير, تمويل سيارات, المملكة العربية السعودية’ سيارات للبيع, تمويل, وسيط سيارات, سيارات, وكالة سياراتو كار بروكر",
  authors: [{ name: "Bahjat Asser", url: "https:/www.bahjat-asser.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <link
        rel="icon"
        href="/logo.jpeg"
        type="image/jpeg"
        sizes="any"
        className="w-full h-full rounded-full"
      />
      <link
        rel="apple-touch-icon"
        href="/logo.jpeg"
        className="w-full h-full rounded-full"
        sizes="any"
      />
      <body className={inter.className}>
        <SessionProvider>
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
