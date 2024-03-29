import Nav from "@/components/Nav";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import { BsEye } from "react-icons/bs";
import { GiStairsGoal } from "react-icons/gi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

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
  title: "عن بهجة عسير - تاريخنا في سوق السيارات السعودي",
  description:
    ".تعرف على بهجة عسير، الرائد في سوق السيارات بالمملكة العربية السعودية. مع أكثر من 40 عامًا من الخبرة، نحن نضمن لك الجودة والثقة",
  keywords: "عن الشركة, بهجة عسير, تاريخ, سوق السيارات, المملكة العربية السعودية",
}


const page = () => {
  return (
    <main className="">
      <Nav />
      <header className="w-full ">
        <div className=" relative  lg:h-[800px] h-[600px] ">
          <div className={styles.imageContainer + "relative"}>
            {/* Apply blue fade overlay using CSS */}
            <div className={styles.blueOverlay}></div>
            <Image
              src="/about-us.jpg"
              fill
              style={{ objectFit: "cover" }}
              priority
              alt="car image"
            />
          </div>
        </div>
      </header>
      <section dir="rtl" className=" bg-regal-blue py-10 lg:px-44  px-10">
        <div className="  lg:p-10 p-0 w-full">
          <h1 className=" text-white mb-5 font-sans font-bold w-full lg:text-[44px] text-[38px]">
            عن الشركة
          </h1>
          <hr />
        </div>
        <article className="lg:p-10 p-0 w-full">
          <p className=" text-white font-sans mt-5 font-medium   text-[20px]">
            يعتبر موقعنا من المواقع المختصة في مجال السيارات ،حيث تضع شركائها
            محور أولوياتها وتقدم لهم أحدث عروض السيارات ، وتركز بدقة على تقديم
            افضل الخدمات المتطورة والحلول التمويلية الإسلامية.
          </p>
        </article>
        <section className="grid lg:grid-cols-2   md:grid-cols-1 gap-y-3 justify-items-center place-content-center">
          <div className=" flex flex-col items-center justify-center mt-7  text-white bg-regal-blue/50  lg:w-[500px] md:w[500px] w-full p-0 ">
            <div className="flex items-center p-2">
              <BsEye className=" size-10" />
            </div>
            <div className="text-center font-sans space-y-4 ">
              <div className=" text-[28px] ">رويتنا</div>
              <p className=" text-[22px]">
                نقوم بجعل شركائنا اقرب إلينا من خلال ابتكار حلول المناسبة تجعل
                من تمويل السيارات تجربة سلسة معتمدين في ذلك على فريق عمل متمكن
                بقيادتها
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center mt-7  text-white bg-regal-blue/50  lg:w-[500px] md:w[500px] w-full p-0">
            <div className="flex items-center p-2">
              <GiStairsGoal className=" size-10" />
            </div>
            <div className="text-center font-sans space-y-4 ">
              <div className=" text-[28px] ">مهمتنا</div>
              <p className=" text-[22px]">
                نحن ملتزمون بتقديم اسهل طريقة لعملائنا ،للحصول على تمويل
                السيارات من خلال توفير حلول التمويل المبتكرة من خلال خبرتنا في
                السوق و البنوك والشركات وجهات التمويل الأخرى ، هدفنا بأن نكون
                الخيار الأول لكل من يرغب في تمويل سيارة أحلامه ونعمل على تميز في
                تقديم ارقى خدمات
              </p>
            </div>
          </div>
        </section>
      </section>
      <section dir="rtl" className=" py-10 lg:px-44  px-10">
        <div className="">
          <article className="w-full flex items-center justify-between">
            <h1 className="text-[28px] py-5  text-black font-sans font-semibold  ">
              الشركاء
            </h1>
          </article>
          <hr />
          <div className="mt-2 mb-10   grid grid-cols-4 gap-3 place-content-center justify-items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/SABB_Bank_Logo.png"
                alt="SABB_Bank_Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/saudi-hollandi-bank.png"
                alt="saudi-hollandi-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/The_Saudi_Investment_Bank_Logo.png"
                alt="The_Saudi_Investment_Bank_Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/fransi-saudi-bank.webp"
                alt="fransi-saudi-bank"
                width={250}
                height={250}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/emirates_NBD-bank.jpg"
                alt="emirates_NBD-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/alriad-bank.png"
                alt="alriad-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/aljazira-bank.png"
                alt="aljazira-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/alinma-bank.png"
                alt="alinma-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/albilad-bank.png"
                alt="albilad-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/alawal-bank.png"
                alt="alawal-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/al-rajhi-bank.jpg"
                alt="al-rajhi-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/al-ahly-bank.webp"
                alt="al-ahly-bank"
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
