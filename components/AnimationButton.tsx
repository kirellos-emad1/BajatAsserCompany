"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "./ui/button";

interface AnimationButtonProps {
  children: React.ReactNode;
}

export const AnimationButton = ({ children }: AnimationButtonProps) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  });
  return (
    <Button
      data-aos="zoom-in"
      className=" lg:my-4 md:my-3 my-2 lg:text-xl md:text-base text-sm p-2 lg:font-bold md:font-semibold font-medium font-sans  rounded-none lg:p-10 md:p-7"
    >
      {children}
    </Button>
  );
};
