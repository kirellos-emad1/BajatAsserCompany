"use client";
import React, { useEffect, useState } from "react";
import { CarCardWrapper } from "./CarCardWrapper";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { deleteCar } from "@/actions/deleteCar";
import { addCarToMainPage } from "@/actions/addCarToMainPage";
import { carAvailability } from "@/actions/carAvailability";
import { Skeleton } from "@/components/ui/skeleton";
import { IoCarSport } from "react-icons/io5";
import { Cars as CarsData } from "@prisma/client";
interface CarsProps {
  cars: CarsData[]; // Assuming CarsData is defined elsewhere
}

const Cars: React.FC<any> = ({ cars }) => {
  // const [cars, setCars] = useState<CarsData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { data: session } = useSession();
  // const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState<string>("");
  const updateQuery = (query: string) => {
    setQuery(query.trim());
  };
  console.log(query);
  const showCar =
    query === ""
      ? cars
      : cars.filter(
          (car:any) =>
            car.brand.toLowerCase().includes(query.toLowerCase()) ||
            car.model.toLowerCase().includes(query.toLowerCase()) ||
            car.vehicleClass.toLowerCase().includes(query.toLowerCase())
        );
  // useEffect(() => {
  //   async function getCarsData() {
  //     try {
  //       const res = await fetch("/api/cars");
  //       const data = await res.json();
  //       setCars(data);
  //       setLoading(false); // Set loading to false when data is fetched
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false); // Make sure to set loading to false even if there's an error
  //     }
  //   }

  //   getCarsData();
  // }, []);

  const changeImage = (delta: number) => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + delta + cars[0].images.length) % cars[0].images.length
    );
  };
  const skeletons = Array.from({ length: 20 }, (_, index) => (
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

  // if (loading) {
  //   return (
  //     <section className="mx-4 grid  md:grid-cols-2  lg:grid-cols-3 gap-3">
  //       {skeletons}
  //     </section>
  //   );
  // }
  return (
    <section dir="rtl">
    <div className="flex mb-5 items-center">
      <div className="flex w-full gap-2 max-w-sm items-center">
        <Input
          name="query"
          className="rounded-lg placeholder:font-sans"
          placeholder="بحث..."
          type="search"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        />
        <Button
          onClick={() => updateQuery(query)}
          className="rounded-lg"
          type="submit"
        >
          <IoCarSport />
        </Button>
      </div>
    </div>
    <section dir="rtl" className="mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3">

    {showCar.map((car:any) => (
      <CarCardWrapper key={car.id}>
        <div className="relative">
          <div className="w-full h-[300px]">
            <button
              className="absolute w-14 h-14 top-[50%] z-50 left-2 transform -translate-y-1/2 bg-gray-200/20 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
              onClick={() => changeImage(-1)}
            >
              <BsArrowLeftCircleFill className="text-center w-14 h-14 text-gray-100/50" />
            </button>
            <button
              className="absolute w-14 h-14 top-[50%] z-50 right-2 transform -translate-y-1/2 bg-gray-200/20 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
              onClick={() => changeImage(1)}
            >
              <BsArrowRightCircleFill className="text-center w-14 h-14 text-gray-100/50" />
            </button>
            <Image
              src={car.images[currentImageIndex]}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
              priority
              alt="car img"
            />
          </div>
        </div>
          <div dir="rtl" className=" flex mt-5 items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button>التفاصيل</Button>
              </DialogTrigger>
              <DialogContent className=" h-full  w-full overflow-auto   ">
                <DialogHeader className="flex items-center justify-center">
                  <DialogTitle>تفاصيل السيارة</DialogTitle>
                </DialogHeader>
                <div className="relative ">
                  <div className="w-full  h-[500px]  ">
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
                <div className="grid gap-1">
                  <div dir="rtl" className="flex  ">
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
                  <div dir="rtl" className="flex">
                    <span className="font-bold">سنة الصنع : </span>
                    <p className="text-right font-sans">
                      {car.yearOfManufacture}
                    </p>
                  </div>

                  {car.horsePower && (
                    <div dir="rtl" className="flex">
                      <span className="font-bold">القدره الحصانيه : </span>
                      <p dir="ltr" className="text-right font-sans">
                        {car.horsePower} HP{" "}
                      </p>
                    </div>
                  )}
                  {car.price && (
                    <div dir="rtl" className="flex">
                      <span className="font-bold">سعر السيارة : </span>
                      <p dir="ltr" className="text-right font-sans">
                        {car.price} ريال سعودي{" "}
                      </p>
                    </div>
                  )}
                  {car.AutomotivePropulsionSystems && (
                    <div dir="rtl" className="flex">
                      <span className="font-bold">نظام التحكم في الجرس : </span>
                      <p dir="ltr" className="text-right font-sans">
                        {car.AutomotivePropulsionSystems}
                      </p>
                    </div>
                  )}
                  {car.transmission && (
                    <div dir="rtl" className="flex">
                      <span className="font-bold">ناقل الحركة : </span>
                      <p dir="ltr" className="text-right font-sans">
                        {car.transmission}
                      </p>
                    </div>
                  )}
                  {car.fuelType && (
                    <div dir="rtl" className="flex">
                      <span className="font-bold">نوع الوقود : </span>
                      <p dir="ltr" className="text-right font-sans">
                        {car.fuelType}
                      </p>
                    </div>
                  )}
                  <div dir="rtl" className="flex">
                    <span className="font-bold">الحاله : </span>
                    <p dir="ltr" className="text-right font-sans">
                      {car.stock ? " متوفره" : "غير متوفره"}
                    </p>
                  </div>
                </div>

                {!session?.user ||
                  (session?.user.role !== "USER" && (
                    <DialogFooter>
                      <div className="flex gap-3 font-sans items-center justify-center">
                        <form
                          onSubmit={async (e) => {
                            e.preventDefault();
                            await deleteCar(car.id);
                            const res = await fetch("/api/cars");
                            const data = await res.json();
                            // setCars(data);
                          }}
                        >
                          <DialogClose>
                            <Button
                              variant="destructive"
                              size="sm"
                              type="submit"
                              className="hover:bg-white hover:text-destructive"
                            >
                              حذف السيارة
                            </Button>
                          </DialogClose>
                        </form>
                        {!car.addToMainPage ? (
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              await addCarToMainPage(car.id, true);
                              const res = await fetch("/api/cars");
                              const data = await res.json();
                              // setCars(data);
                            }}
                          >
                            <DialogClose>
                              <Button size="sm" type="submit">
                                عرض السيارة في الصفحه الرئسيه
                              </Button>
                            </DialogClose>
                          </form>
                        ) : (
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              await addCarToMainPage(car.id, false);
                              const res = await fetch("/api/cars");
                              const data = await res.json();
                              // setCars(data);
                            }}
                          >
                            <DialogClose>
                              <Button
                                size="sm"
                                variant="outline"
                                className=" border-destructive text-destructive border-2"
                                type="submit"
                              >
                                حذف السيارة من الصفحه الرئسيه
                              </Button>
                            </DialogClose>
                          </form>
                        )}
                        {!car.stock ? (
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              await carAvailability(car.id, true);
                              const res = await fetch("/api/cars");
                              const data = await res.json();
                              // setCars(data);
                            }}
                          >
                            <DialogClose>
                              <Button size="sm" type="submit">
                                السيارة متوفره الان
                              </Button>
                            </DialogClose>
                          </form>
                        ) : (
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              await carAvailability(car.id, false);
                              const res = await fetch("/api/cars");
                              const data = await res.json();
                              // setCars(data);
                            }}
                          >
                            <DialogClose>
                              <Button
                                size="sm"
                                variant="outline"
                                className=" border-destructive text-destructive border-2"
                                type="submit"
                              >
                                السيارة غير متوفره الان
                              </Button>
                            </DialogClose>
                          </form>
                        )}
                      </div>
                    </DialogFooter>
                  ))}
              </DialogContent>
            </Dialog>
          </div>
          <div className="py-4 px-4 space-y-2">
            <div dir="rtl" className="flex items-center">
              <span className="font-bold">ماركة السيارة: </span>
              <p className="text-right font-sans">{car.brand}</p>
            </div>
            <div dir="rtl" className="flex">
              <span className="font-bold">موديل السيارة: </span>
              <p className="text-right font-sans">{car.model}</p>
            </div>
            <div dir="rtl" className="flex">
              <span className="font-bold">فئة السيارة: </span>
              <p className="text-right font-sans">{car.vehicleClass}</p>
            </div>
            <div dir="rtl" className="flex">
              <span className="font-bold">سعة المحرك: </span>
              <p dir="ltr" className="text-right font-sans">
                {car.engineCapacity} CC
              </p>
            </div>
          </div>
        </CarCardWrapper>
      ))}
      </section>
    </section>
  );
};

export default Cars;
