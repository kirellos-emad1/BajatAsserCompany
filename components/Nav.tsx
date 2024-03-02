"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { IoClose, IoMenu } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  const toggleMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="flex  max-md:justify-between max-md:px-4 max-md:flex-row-reverse justify-evenly  items-center  w-full ">
      {/* mobile navbar */}
      <div className="md:hidden flex relative  transition-all">
        {!showMenu?(

          <Button
          variant="outline"
          onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
          >
          <IoMenu className=" w-6 h-6" />
        </Button>
          ):(
            <Button
            variant="outline"
            onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
            >
            <IoClose className="w-7 h-7 transition-all"  />
          </Button>
          )}
        {showMenu ? (
          <div className="fixed left-0 shadow-4xl right-0 top-[7rem] pt-0  border-b border-b-white/20">
            <div className="flex flex-col items-center gap-x-4 bg-white h-screen ">
              <p className=" font-medium  font-sans text-lg  p-2 rounded-md border-black">
                <Link href="/" className="text-black/80" onClick={()=>setShowMenu((prevShowMenu) => !prevShowMenu)}>
                  طلب تمويل
                </Link>
              </p>
              <p className=" font-medium  font-sans text-lg  p-2 rounded-md border-black">
                <Link href="/" className="text-black/80" onClick={()=>setShowMenu((prevShowMenu) => !prevShowMenu)}>
                  السيارات
                </Link>
              </p>
              <p className=" font-medium  font-sans text-lg   p-2 rounded-md border-black">
                <Link href="/" className="text-black/80" onClick={()=>setShowMenu((prevShowMenu) => !prevShowMenu)}>
                  عن الشركة
                </Link>
              </p>
              <p className=" font-medium  font-sans text-lg   p-2 rounded-md border-black">
                <Link href="/" className="text-black/80" onClick={()=>setShowMenu((prevShowMenu) => !prevShowMenu)}>
                  الرئيسية
                </Link>
              </p>
              {!session?.user ? (
                <div className="flex flex-col items-center gap-x-4 ">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-medium w-20 font-sans  "
                    onClick={toggleMenu}
                  >
                    <Link href="/auth/login">تسجيل دخول</Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="font-medium  font-sans w-20"
                    onClick={toggleMenu}
                  >
                    <Link href="/auth/register" className="">
                      انشاء حساب
                    </Link>
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  onClick={() => {
                    toggleMenu;
                    signOut;
                  }}
                >
                  تسجيل خروج
                </Button>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* desktop navbar */}
      <div className="sm:flex hidden">
        {!session?.user ? (
          <div className="flex gap-x-4 ">
            <Button
              variant="default"
              size="sm"
              className="font-medium max-[768px]:hidden  font-sans text-lg "
              onClick={toggleMenu}
            >
              <Link href="/auth/login">تسجيل دخول</Link>
            </Button>
            <Button
              size="sm"
              variant="default"
              className="font-medium  max-[768px]:hidden font-sans text-lg"
              onClick={toggleMenu}
            >
              <Link href="/auth/register" className="">
                انشاء حساب
              </Link>
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            className="max-[768px]:hidden"
            onClick={() => {
              toggleMenu;
              signOut;
            }}
          >
            تسجيل خروج
          </Button>
        )}
      </div>
      <div className="flex gap-x-4 max-[768px]:hidden  ">
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
        <Image src="/logo.png" alt="logo" width={100} height={100}  className=" w-20" />
      </Link>
    </nav>
  );
};

export default Nav;

{
  /* {!session?.user ? (
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
) : (
  <div className="flex gap-x-4">
    <form
      action={async () => {
        "use server";

        await signOut();
      }}
    >
      <Button type="submit">تسجيل خروج</Button>
    </form>
  </div>
)}
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
</div> */
}

{
  /* {!session?.user ? (
          <div className="flex gap-x-4 ">
            <Button
              variant="default"
              className="font-medium  font-sans text-lg "
            >
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
        ) : (
          <Button type="button" onClick={()=>{
            toggleMenu
            signOut
            }}>
            تسجيل خروج
          </Button>
        )} */
}
