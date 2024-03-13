"use client";
import { useEffect } from "react";
import { Card, CardContent,  CardHeader } from "@/components/ui/card";
import { Header } from "./Header";

import AOS from "aos";
import "aos/dist/aos.css";


interface CarCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;

}

export const CarCardWrapper = ({
  children,
  headerLabel

}: CarCardWrapperProps) => {
  return (
    <Card className="lg:w-[500px] md:w-[400px] w-[300px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>

    </Card>
  );
};