import { AnimationCard } from "@/components/AnimationCard";
import React from "react";
import { BiPhone } from "react-icons/bi";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";

const page = () => {
  return (
    <main
      dir="rtl"
      className="flex flex-col  justify-center  w-full h-full gap-10 bg-gray-300/20 "
    >
      {/* <header></header> */}
      <section className="px-40 pt-12 pb-5   font-sans font-black">
        <h1 className="text-3xl  ">المملكة العربية السعودية ، الرياض</h1>
        <p className=" text-xl text-blue-800/95">حي القادسيه</p>
      </section>
      <section className=" flex md:flex-row flex-wrap flex-col gap-3 items-center justify-center  m-0  sm:px-20 py-10">
        <AnimationCard>
          <Link className=" gap-2" href="tel:+9660557109911">
            <BiPhone className="w-10 h-10 " />
            <h2 className="font-sans font-bold text-xl my-4">اتصال علي</h2>
            <p className=" font-sans font-medium text-md">0557109911</p>
          </Link>
        </AnimationCard>
        <AnimationCard>
          <Link href="mailto:asser4cars@gmail.com">
            <TfiEmail className="w-10 h-10 " />
            <h2 className="font-sans font-bold text-xl my-4">
              البريد الالكتروني
            </h2>
            <p className=" font-sans font-medium text-md">
              asser4cars@gmail.com
            </p>
          </Link>
        </AnimationCard>
        <AnimationCard>
          <ClockIcon className="w-10 h-10 " />
          <h2 className="font-sans font-bold text-xl my-2">مواقيت العمل</h2>
          <p className=" font-sans font-medium text-md">
            {" "}
            من 9 صباحا الي 9 مساء
          </p>
        </AnimationCard>
        <AnimationCard>
          <CalendarIcon className="w-10 h-10 " />
          <h2 className="font-sans font-bold text-xl my-2">ايام العمل</h2>
          <p className=" font-sans font-medium text-md">من الاحد الي الخميس</p>
        </AnimationCard>
      </section>
      <section className=" flex items-center justify-center">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.959385894775!2d46.828937499999995!3d24.831062499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eff65b6e75a97%3A0xb49fe3c882ccf180!2z2YXYudix2LYg2KjZh9is2Kkg2LnYs9mK2LEg2YTZhNiz2YrYp9ix2KfYqiDZgdix2Lkg2KfZhNmC2KfYr9iz2YrYqQ!5e0!3m2!1sen!2seg!4v1709580864433!5m2!1sen!2seg"
        className=" w-5/6  rounded-md h-80 mb-20"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </section>
    </main>
  );
};

export default page;
