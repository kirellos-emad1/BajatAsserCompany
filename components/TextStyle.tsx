"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
interface TextProps{
    header:string;
    para:string;
}
const TextStyle = ({header, para}:TextProps) => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: false,
      });
    });
  return (
    <article data-aos="zoom-in"  className=" bg-blue-800/80 hover:bg-blue-900/80 font-sans text-neutral-100 rounded-md  p-10 my-5">
          <h1 className="text-2xl mb-2   font-sans font-bold">
            {header}
          </h1>
          <hr className=" m-4 border-white/40 " />
          {para &&
          <p className="my-2 ">
            {para}
          </p>
        }
        </article>
  )
};

export default TextStyle;
