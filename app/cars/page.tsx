import Nav from "@/components/Nav";
import { getAllCars } from "@/data-access/cars";
import Image from "next/image";
import { CarCardWrapper } from "@/components/dashboard/carCard/CarCardWrapper";
import Cars from "@/components/dashboard/carCard/Cars";
const page = async () => {
  const cars = await getAllCars();

  return (
    <main className="">
      <Nav />
      <section>
        <Cars/>
      </section>
    </main>
  );
};

export default page;
