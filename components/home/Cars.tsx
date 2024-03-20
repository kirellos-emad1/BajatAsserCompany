"use client";
import React, { useEffect, useState } from "react";
import { CarCardWrapper } from "./CarCardWrapper";
import Image from "next/image";
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
  addToMainPage: boolean;
  stock: boolean;
  mainImage: string
}

import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const Cars = () => {
  const [cars, setCars] = useState<CarsData[]>([]);
  const [loading, setLoading] = useState(true);

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
        <Link href='/cars'>
        <CarCardWrapper key={car.id}>
          <div className="relative ">
            <div className="w-full h-[300px] ">
     
              <Image
                src={car.mainImage}
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
        </Link>
      ))}
    </section>
  );
};

export default Cars;
