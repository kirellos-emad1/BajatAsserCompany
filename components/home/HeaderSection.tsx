"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { AnimationButton } from "../AnimationButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/button";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const HeaderSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []); // Add an empty dependency array to ensure this effect runs only once

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <header className="w-full ">
      <div className=" relative  lg:h-[800px] h-[600px] ">
        <button
          className="absolute w-14 h-14 top-[50%] z-50 left-2 transform -translate-y-1/2 bg-gray-200/20 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
          onClick={handlePrevClick}
        >
          <BsArrowLeftCircleFill className="text-center w-14 h-14 text-gray-100/50" />
        </button>
        <button
          className="absolute w-14 h-14 top-[50%] z-50 right-2 transform -translate-y-1/2 bg-gray-200/20 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
          onClick={handleNextClick}
        >
          <BsArrowRightCircleFill className="text-center w-14 h-14 text-gray-100/50" />
        </button>
        <div
          dir="rtl"
          className="absolute z-20 font-serif  text-center transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
        >
          {currentIndex === 0 && (
            <div data-aos="fade-up" data-aos-duration="1000">
              <h1 className="text-white w-full text-[44px]">
                ٤٠ عامًا من الخبرة في عالم السيارات
              </h1>
              <h1 className="text-white my-4  font-medium text-4xl ">
                شركاؤك في رحلتك
              </h1>
              <Button className="text-xl  font-bold  font-sans  rounded-none p-10">
                <Link href="/about_us">اكشف اكثر عنا</Link>
              </Button>
            </div>
          )}
          {currentIndex === 1 && (
            <div data-aos="fade-down" data-aos-duration="1000">
              <h1 className="text-white w-full text-[44px]">
                نقدم الثقة والتميز في تمويل السيارات
              </h1>
              <h1 className="text-white my-4  font-medium text-4xl ">
                اربعين عام من الثقة
              </h1>
              <Button className="text-xl  font-bold  font-sans  rounded-none p-10">
                <Link href="/funding_request">احصل علي سيارتك الان</Link>
              </Button>
            </div>
          )}
        </div>
        <div className={styles.imageContainer + "relative"}>
          {/* Apply blue fade overlay using CSS */}
          <div className={styles.blueOverlay}></div>
          <Image
            src="/car.jpg"
            fill
            style={{objectFit:"cover"}}
            priority
            alt="car image"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
