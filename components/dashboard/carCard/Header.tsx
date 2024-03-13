import { Poppins } from "next/font/google";

import Image from "next/image";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image src='/logo.png' width={100} height={100} alt="logo"/>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};