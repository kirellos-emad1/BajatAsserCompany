import { FundForm } from "@/components/requestFund/FundForm";
import Nav from "@/components/Nav";
import Image from "next/image";
import styles from "../about_us/AboutUs.module.css";
import { Metadata } from "next";

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
  title: "بهحة عسير - تمويل السيارات في المملكة العربية السعودية",
  description:
    ".حلول تمويل السيارات المبتكرة من بهجة عسير. تمويل شخصي وتمويل للشركات لتسهيل شراء السيارات في المملكة",
  keywords: "تمويل سيارات, تمويل شخصي, تمويل شركات, بهجة عسير, المملكة العربية السعودية, كار بروكر",
}


const FundingRequest = () => {
  return (
    <main>
      <Nav />
      <header className="w-full ">
        <div className=" relative  lg:h-[600px] h-[400px] ">
          <div className={styles.imageContainer + "relative"}>
            {/* Apply blue fade overlay using CSS */}
            <div className={styles.blueOverlay}></div>
            <Image
              src="/funding-img.jpg"
              fill
              style={{ objectFit: "cover" }}
              priority
              alt="car image"
            />
          </div>
        </div>
      </header>
      <section dir="rtl" className="  py-10 lg:px-44  px-10">
        <h1 className=" text-blue-900 my-5 font-sans font-bold w-full lg:text-[44px] text-[38px]">
          طلب التمويل
        </h1>
        <hr />
      </section>
      <section
        className="flex flex-col items-center justify-center w-full h-full py-10 "
        dir="ltr"
      >
        <h1 className=" font-bold font-serif  my-2 lg:text-5xl md:text-3xl text-3xl  text-blue-900/90">
          ٤٠ عام خبره في عالم السيارات
        </h1>
        <section className="p-10">
          <FundForm />
        </section>
      </section>
    </main>
  );
};

export default FundingRequest;
