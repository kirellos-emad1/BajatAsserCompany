import { Poppins } from "next/font/google";


interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="">
      <p className="black text-right text-sm">{label}</p>
    </div>
  );
};