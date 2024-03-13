
import Image from "next/image";


export const Header = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image src='/logo.png' width={100} height={100} alt="logo"/>
    </div>
  );
};
