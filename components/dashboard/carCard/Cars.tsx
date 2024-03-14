"use client";
import React, { useEffect, useState } from "react";
import { CarCardWrapper } from "./CarCardWrapper";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface CarsData {
  id: string;
  images: [string];
  brand: string;
  model: string;
  vehicleClass: string;
  yearOfManufacture: string;
  fuelType: string;
  transmission: string;
  horsePower: string;
  price: string;
  engineCapacity: string;
  AutomotivePropulsionSystems: string;
  addToMainPage: string;
}

const Cars = () => {
  const [cars, setCars] = useState<CarsData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    async function getCarsData() {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCars(data);
    }
    getCarsData();
  }, []);

  const changeImage = (delta: number) => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + delta + cars[0].images.length) % cars[0].images.length
    );
  };

  return (
    <section className="mx-4">
      {cars?.map((car) => (
        <CarCardWrapper key={car.id}>
          <div className="relative">
            <button
              className="absolute w-14 h-14 top-[40%] left-2 transform -translate-y-1/2 bg-gray-200/20 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
              onClick={() => changeImage(-1)}
            >
              <BsArrowLeftCircleFill className="text-center w-14 h-14 text-gray-100/50" />
            </button>
            <button
              className="absolute w-14 h-14  top-[40%] right-2 transform -translate-y-1/2 bg-gray-200/20 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
              onClick={() => changeImage(1)}
            >
              <BsArrowRightCircleFill className="text-center w-14 h-14 text-gray-100/50" />
            </button>
            <div className="w-full ">
              <Image
                src={car.images[currentImageIndex]}
                layout="responsive"
                width={100}
                height={100}
                className="rounded-t-lg "
                priority
                alt="car img"
              />
            </div>
            <div className="py-4 px-4 space-y-2">
              <div dir="rtl" className="flex items-center ">
                <span className="font-bold">ماركة السيارة : </span>
                <p className="text-right font-sans">{car.brand}</p>
              </div>
              <div dir="rtl" className="flex">
                <span className="font-bold">موديل السيارة : </span>
                <p className="text-right font-sans">{car.model}</p>
              </div>
              <div dir="rtl" className="flex">
                <span className="font-bold">فئة السيارة : </span>
                <p className="text-right font-sans">{car.vehicleClass}</p>
              </div>
              <div dir="rtl" className="flex">
                <span className="font-bold">سعة المحرك : </span>
                <p dir="ltr" className="text-right font-sans">
                  {car.engineCapacity} CC{" "}
                </p>
              </div>
            </div>
          </div>
        </CarCardWrapper>
      ))}
    </section>
  );
};

export default Cars;
