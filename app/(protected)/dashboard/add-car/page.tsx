import React from "react";
import { AddCarForm } from "@/components/dashboard/AddCarForm";
const page = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full h-full py-10 bg-gray-300/20 "
      dir="ltr"
    >
      <AddCarForm />
    </section>
  );
};

export default page;
