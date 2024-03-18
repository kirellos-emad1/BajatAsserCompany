import Nav from "@/components/Nav";
import { getAllCars } from "@/data-access/cars";
import Image from "next/image";
import styles from "../about_us/AboutUs.module.css"
import Cars from "@/components/dashboard/carCard/Cars";
const page = async () => {
  const cars = await getAllCars();

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
      <section  className="  py-10 lg:px-32  px-10">
        <Cars/>
      </section>
    </main>
  );
};

export default page;
