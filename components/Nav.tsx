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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex lg:justify-evenly md:flex-row lg:flex-row md:justify-evenly justify-between flex-row-reverse items-center px-5 lg:px-5 md:px-0 ">
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className=" border-1 p-1 border-gray-400/10 rounded-lg shadow"
        >
          {!showMenu && <IoMenu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden fixed inset-0 pt-3  bg-white z-40">
          <button
            onClick={toggleMenu}
            className=" border-1 p-1 ml-4 m-2 border-gray-400/10 rounded-lg shadow"
          >
            <IoClose className="w-8 h-8"></IoClose>
          </button>
          <div
            dir="rtl"
            className="flex flex-col items-start mr-5 gap-2 h-full"
          >
            <ul className="text-lg font-medium font-sans">
              <li className="py-2">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="text-black/80 hover:text-black"
                >
                  الرئيسية
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/about_us"
                  onClick={toggleMenu}
                  className="text-black/80 hover:text-black"
                >
                  عن الشركة
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/funding_request"
                  onClick={toggleMenu}
                  className="text-black/80 hover:text-black"
                >
                  طلب تمويل
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/cars"
                  onClick={toggleMenu}
                  className="text-black/80 hover:text-black"
                >
                  السيارات
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/contact_us"
                  onClick={toggleMenu}
                  className="text-black/80 hover:text-black"
                >
                  اتصل بنا
                </Link>
              </li>
              {!session?.user ? (
                <>
                  <li className="py-2">
                    <Link
                      href="/auth/login"
                      onClick={toggleMenu}
                      className="text-black/80 hover:text-black"
                    >
                      تسجيل دخول
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/auth/register"
                      onClick={toggleMenu}
                      className="text-black/80 hover:text-black"
                    >
                      انشاء حساب
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {session.user.role === "ADMIN" ||
                  session.user.role === "MEMBER" ? (
                    <li className="py-2">
                      <Button className="text-white hover:text-black">
                        <Link
                          href="/dashboard"
                          className="text-white hover:text-black"
                        >
                          لوحه التحكم
                        </Link>
                      </Button>
                    </li>
                  ) : null}
                  <li className="py-2">
                    <Button
                      onClick={() => signOut()}
                      className="text-white hover:text-black"
                    >
                      تسجيل خروج
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex font-medium  text-lg lg:space-x-8 md:space-x-3 font-sans">
        {!session?.user ? (
          <>
            <Button>
              <Link
                href="/auth/register"
                className="text-white hover:text-black"
              >
                انشاء حساب
              </Link>
            </Button>
            <Button>
              <Link href="/auth/login" className="text-white hover:text-black">
                تسجيل دخول
              </Link>
            </Button>
          </>
        ) : (
          <>
            {session.user.role === "ADMIN" || session.user.role === "MEMBER" ? (
              <Button className="text-white hover:text-black">
                <Link href="/dashboard" className="text-white hover:text-black">
                  لوحه التحكم
                </Link>
              </Button>
            ) : null}
            <Button
              onClick={() => signOut()}
              className="text-white hover:text-black"
            >
              تسجيل خروج
            </Button>
          </>
        )}
      </div>
      <div
        dir="rtl"
        className="hidden text-lg font-medium md:flex lg:space-x-8 font-sans md:space-x-3"
      >
        <Link
          href="/"
          className="text-black/80 lg:mx-8 md:mx-3 hover:text-black"
        >
          الرئيسية
        </Link>
        <Link href="/about_us" className="text-black/80 hover:text-black">
          عن الشركة
        </Link>
        <Link
          href="/funding_request"
          className="text-black/80 hover:text-black"
        >
          طلب تمويل
        </Link>
        <Link href="/cars" className="text-black/80 hover:text-black">
          السيارات
        </Link>
        <Link href="/contact_us" className="text-black/80 hover:text-black">
          اتصل بنا
        </Link>
      </div>
      {/* Logo */}
      <Link href="/" passHref>
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-24"
        />
      </Link>
    </nav>
  );
};

export default Nav;
