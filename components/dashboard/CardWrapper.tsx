"use client";
import { useEffect } from "react";
import { Card, CardContent,  CardHeader } from "@/components/ui/card";
import { Header } from "./Header";

import AOS from "aos";
import "aos/dist/aos.css";
import { BackButton } from "../auth/BackButton";


interface CardWrapperProps {
  children: React.ReactNode;
}

export const CardWrapper = ({
  children,

}: CardWrapperProps) => {
  return (
    <Card className="lg:w-[800px]  pb-7  w-auto  md:w-[550px] ">
      <CardHeader>
        <Header  />
      </CardHeader>
      <CardContent>{children}</CardContent>

    </Card>
  );
};