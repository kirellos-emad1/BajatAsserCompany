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
      <section className="w-full flex items-center justify-center">
        <section className="w-5/6  py-20   font-sans font-black">
          <h1 className=" font-bold font-serif text-3xl m-2 lg:text-5xl md:text-4xl  text-black">
            المملكة العربية السعودية ، الرياض
          </h1>
          <p className=" m-2 text-2xl text-blue-800/95">حي القادسيه</p>
        </section>
      </section>
      <section className=" w-full flex flex-col items-center justify-center  ">
        <section className="grid grid-1 w-5/6 lg:grid-cols-4 lg:grid gap-4 md:grid-cols-2 justify-items-center ">
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
              من 9 صباحا الي 9 مساء
            </p>
          </AnimationCard>
          <AnimationCard>
            <CalendarIcon className="w-10 h-10 " />
            <h2 className="font-sans font-bold text-xl my-2">ايام العمل</h2>
            <p className=" font-sans font-medium text-md">
              من الاحد الي الخميس
            </p>
          </AnimationCard>
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.959385894775!2d46.828937499999995!3d24.831062499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eff65b6e75a97%3A0xb49fe3c882ccf180!2z2YXYudix2LYg2KjZh9is2Kkg2LnYs9mK2LEg2YTZhNiz2YrYp9ix2KfYqiDZgdix2Lkg2KfZhNmC2KfYr9iz2YrYqQ!5e0!3m2!1sen!2seg!4v1709580864433!5m2!1sen!2seg"
          className="  w-5/6 my-20 rounded-md h-80 "
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default page;
