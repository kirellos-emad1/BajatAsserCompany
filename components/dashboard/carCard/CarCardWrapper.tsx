"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "./Header";

import AOS from "aos";
import "aos/dist/aos.css";

interface CarCardWrapperProps {
  children: React.ReactNode;
}

export const CarCardWrapper = ({ children }: CarCardWrapperProps) => {
  return (
    <Card className="lg:w-[400px] md:w-[300px] w-full shadow-md p-0">
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  );
};
