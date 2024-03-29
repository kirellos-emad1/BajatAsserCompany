import Nav from "@/components/Nav";
import Image from "next/image";
import styles from "../about_us/AboutUs.module.css"
import Cars from "@/components/dashboard/carCard/Cars";
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
  title: "بهجة عسير - سيارات للبيع في المملكة العربية السعودية",
  description:
    ".استكشف مجموعتنا الواسعة من السيارات الفاخرة المعروضة للبيع في بهجة عسير. جودة عالية وأسعار تنافسية في قلب المملكة",
  keywords: "سيارات للبيع, السيارات الفاخرة, المملكة العربية السعودية, بهجة عسير, كار بروكر",
}


const page = async () => {

  return (
    <main className="">
      <Nav />
      <header className="w-full ">
        <div className=" relative  lg:h-[600px] h-[400px] ">
          <div className={styles.imageContainer + "relative"}>
            {/* Apply blue fade overlay using CSS */}
            <div className={styles.blueOverlay}></div>
            <Image
              src="/cars-img.jpg"
              fill
              style={{ objectFit: "cover" }}
              priority
              alt="car image"
            />
          </div>
        </div>
      </header>
      <section dir="rtl" className="  py-10 lg:px-32  px-10">
        <h1 className=" text-blue-900 my-5 font-sans font-bold w-full lg:text-[44px] text-[38px]">
          السيارات
        </h1>
        <hr />
      </section>
      <section className="  py-10 lg:px-32  px-10">
        <Cars />
      </section>
    </main>
  );
};

export default page;
