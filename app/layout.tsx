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
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711678089/logo_qju69s.jpg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "16x16",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711678089/logo_qju69s.jpg",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711678089/logo_qju69s.jpg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711678089/logo_qju69s.jpg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711678089/logo_qju69s.jpg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "167x167",
      url: "https://res.cloudinary.com/dcmejeicn/image/upload/v1711678089/logo_qju69s.jpg",
    }],
  verification:
  {
    google: 'google',
    yandex: "yandex",
    yahoo: "yahoo",
  },
  title: "Bahjat Asser - Premier Car Broker in Saudi Arabia",
  description:
    "Bahjat Asser is the leading car broker in Saudi Arabia, established for over 40 years. We specialize in selling and funding high-quality vehicles to customers in Saudi Arabia.",
    keywords: "car broker, car dealership, vehicle export, Saudi Arabia, Bahjat Asser, automotive, بهجة عسير, تمويل سيارات, المملكة العربية السعودية, سيارات للبيع, تمويل, وسيط سيارات, سيارات, وكالة سيارات, كار بروكر, بهجة عسير, تمويل شركات, تمويل افراد, سيارات السعودية, اسعار السيارات في المملكة العربية السعودية, عن الشركة, بنوك تمويل للسيارات, عن بهجة عسير",
    authors: [{ name: "Bahjat Asser", url: "https://www.bahjat-asser.com" },{name:"بهجة عسير", url:"https://www.bahjat-asser.com"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      {/* <link
        rel="icon"
        href="https://res.cloudinary.com/dcmejeicn/image/upload/v1711678089/logo_qju69s.jpg"
        type="image/jpeg"
        sizes="any"
        className="w-full h-full rounded-full"
      />
      <link
        rel="apple-touch-icon"
        href="https://res.cloudinary.com/dcmejeicn/image/upload/v1711678089/logo_qju69s.jpg"
        className="w-full h-full rounded-full"
        sizes="any"
      /> */}
      <body className={inter.className}>
        <SessionProvider>
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
