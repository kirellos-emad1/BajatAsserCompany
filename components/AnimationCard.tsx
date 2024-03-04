"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AnimationCardProps {
  children: React.ReactNode;
}

export const AnimationCard = ({ children }: AnimationCardProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  });
  return (
    <div
      data-aos="zoom-in"
      className=" flex flex-col gap-2  p-5  rounded-md shadow-lg hover:shadow-2xl text-white w-72 bg-blue-800/80 hover:bg-blue-900/80  h-44"
    >
      {children}
    </div>
  );
};
