import { FundForm } from "@/components/requestFund/FundForm";
import Nav from "@/components/Nav";
import Image from "next/image";
import styles from "../about_us/AboutUs.module.css";
import type { Metadata } from "next";
import zz from '../../public/logo.jpeg'

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "32x32",
      url: "../../public/logo.jpeg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "16x16",
      url: "../../public/logo.jpeg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "32x32",
      url: "../../public/logo.jpeg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "16x16",
      url: "../../public/logo.jpeg",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "../../public/logo.jpeg",
    },
  ],
  verification:
  {
    google: 'google',
    yandex: "yandex",
    yahoo: "yahoo",
  },
  title: "Bahjat Asser - طلب التمويل",
  description:
    "Bahjat Asser is the leading car broker in Saudi Arabia, established for over 40 years. We specialize in selling and funding high-quality vehicles to customers in Saudi Arabia.",
  keywords:
    "car broker, car dealership, vehicle export, Saudi Arabia, Bahjat Asser, automotive, بهجت عسير, تمويل سيارات, المملكة العربية السعودية’ سيارات للبيع, تمويل, وسيط سيارات, سيارات, وكالة سياراتو كار بروكر, طلب تمويل للسيارات, طلب تمويل,طلب تمويل للشركات,",
  authors: [{ name: "Bahjat Asser", url: "https:/www.bahjat-asser.com/cars" }],
};

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
