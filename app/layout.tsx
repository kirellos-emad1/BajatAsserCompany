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
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711708729/logo_lfzqra.jpg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "16x16",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711708729/logo_lfzqra.jpg",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711708729/logo_lfzqra.jpg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711708729/logo_lfzqra.jpg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711708729/logo_lfzqra.jpg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "167x167",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711708729/logo_lfzqra.jpg",
    }],
  verification:
  {
    google: 'google',
    yandex: "yandex",
    yahoo: "yahoo",
  },
  title: "بهجة عسير - وسيط السيارات الرائد في المملكة العربية السعودية",
  description:
    ".اكتشف أفضل السيارات مع بهجة عسير، وسيط السيارات الرائد في المملكة العربية السعودية. متخصصون في بيع وتمويل السيارات الفاخرة لأكثر من 40 عامًا",
  keywords: "وسيط سيارات, وكالة سيارات, تمويل سيارات, المملكة العربية السعودية, بهجة عسير, السيارات, سيارات للبيع, تمويل, تمويل شركات, تمويل افراد, سيارات السعودية, اسعار السيارات في المملكة, كار بروكر",
  authors: [{ name: "Bahjat Asser", url: "https://www.bahjat-asser.com" }, { name: "بهجة عسير", url: "https://www.bahjat-asser.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <SessionProvider>
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
