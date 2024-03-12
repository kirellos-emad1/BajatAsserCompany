"use client";
import { useEffect } from "react";
import { Card, CardContent,  CardHeader } from "@/components/ui/card";
import { Header } from "@/components/requestFund/Header";
import { Social } from "@/components/auth/Social";
import AOS from "aos";
import "aos/dist/aos.css";


interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  });
  return (
    <Card  className="lg:w-[800px] border-t-0 pb-7  w-auto  md:w-[550px] ">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>

    </Card>
  );
};
