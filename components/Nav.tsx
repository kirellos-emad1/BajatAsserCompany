import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { signOut, auth } from "@/auth";

const Nav = async () => {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center bg-white border-b-2 border-gray-200/90 fixed h-24 top-0  w-full px-80">
      {!session?.user ? (
        <div className="flex gap-x-4 ">
          <Button variant="default" className="font-medium  font-sans text-lg ">
            <Link href="/auth/login">تسجيل دخول</Link>
          </Button>
          <Button
            variant="default"
            className="font-medium  font-sans text-lg   "
          >
            <Link href="/auth/register" className="">
              انشاء حساب
            </Link>
          </Button>
        </div>
      ):<div className="flex gap-x-4">
        <form
              action={async () => {
                "use server";

                await signOut();
              }}
            >
              <Button type="submit">تسجيل خروج</Button>
            </form>
        </div>}
      <div className="flex gap-x-4 ">
        <p className=" font-medium  font-sans text-lg  p-2 rounded-md border-black">
          <Link href="/" className="text-black/80">
            طلب تمويل
          </Link>
        </p>
        <p className=" font-medium  font-sans text-lg  p-2 rounded-md border-black">
          <Link href="/" className="text-black/80">
            السيارات
          </Link>
        </p>
        <p className=" font-medium  font-sans text-lg   p-2 rounded-md border-black">
          <Link href="/" className="text-black/80">
            عن الشركة
          </Link>
        </p>
        <p className=" font-medium  font-sans text-lg   p-2 rounded-md border-black">
          <Link href="/" className="text-black/80">
            الرئيسية
          </Link>
        </p>
      </div>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
