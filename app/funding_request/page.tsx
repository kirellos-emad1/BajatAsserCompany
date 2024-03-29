import { FundForm } from "@/components/requestFund/FundForm";
import Nav from "@/components/Nav";
import Image from "next/image";
import styles from "../about_us/AboutUs.module.css";


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
