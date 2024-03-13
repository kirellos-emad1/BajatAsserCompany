import Nav from "@/components/Nav";
import { getAllCars } from "@/data-access/cars";
import Image from "next/image";
import { CarCardWrapper } from "@/components/dashboard/carCard/CarCardWrapper";
const page = async () => {
  const cars = await getAllCars();

  return (
    <main className="">
      <Nav />
      <section>
        {cars?.map((car) => (
          <CarCardWrapper headerLabel={car.model || ""} key={car.id}>
            <div className="flex flex-wrap flex-col items-center justify-center">
              <Image
                src={car.images[0] }
                width={200}
                height={200}
                priority
                alt="car img"
              />
              <p className="bg-black/30 p-1 rounded-xl w-[100px] text-white text-center">
                {car.fuelType}
              </p>
              <p>{car.engineCapacity} CC</p>
            </div>
          </CarCardWrapper>
        ))}
      </section>
    </main>
  );
};

export default page;
