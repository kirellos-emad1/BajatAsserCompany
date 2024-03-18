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
  stock: string;
}

import { Skeleton } from "@/components/ui/skeleton";

const Cars = () => {
  const [cars, setCars] = useState<CarsData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  console.log(cars);

  useEffect(() => {
    async function getCarsData() {
      try {
        const res = await fetch("/api/main-page-car");
        const data = await res.json();
        setCars(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Make sure to set loading to false even if there's an error
      }
    }

    getCarsData();
  }, []);

  const changeImage = (delta: number) => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + delta + cars[0].images.length) % cars[0].images.length
    );
  };
  const skeletons = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="h-[600px] rounded-lg">
      <CarCardWrapper>
        <div className="w-full h-[300px]">
          <Skeleton className="w-full h-[300px] rounded-xl" />
          <div dir="rtl" className="flex my-5 items-center justify-center">
            <Skeleton className="h-4 w-[50px]" />
          </div>
          <div dir="rtl" className="grid gap-1">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
      </CarCardWrapper>
    </div>
  ));

  if (loading) {
    return (
      <section className="mx-4 grid  md:grid-cols-2  lg:grid-cols-3 gap-3">
        {skeletons}
      </section>
    );
  }
  return (
    <section
      dir="rtl"
      className="my-2 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3"
    >
      {cars?.map((car) => (
        <CarCardWrapper key={car.id}>
          <div className="relative ">
            <div className="w-full h-[300px] ">
              <button
                className="absolute w-14 h-14 top-[50%] z-50 left-2 transform -translate-y-1/2 bg-gray-200/20 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
                onClick={() => changeImage(-1)}
              >
                <BsArrowLeftCircleFill className="text-center w-14 h-14 text-gray-100/50" />
              </button>
              <button
                className="absolute w-14 h-14  top-[50%] z-50 right-2 transform -translate-y-1/2 bg-gray-200/20 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
                onClick={() => changeImage(1)}
              >
                <BsArrowRightCircleFill className="text-center w-14 h-14 text-gray-100/50" />
              </button>
              <Image
                src={car.images[currentImageIndex]}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg "
                priority
                alt="car img"
              />
            </div>
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
          </div>
        </CarCardWrapper>
      ))}
    </section>
  );
};

export default Cars;
