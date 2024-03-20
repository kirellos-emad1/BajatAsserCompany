"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
              <li>
                <Link
                  href="/dashboard"
                  className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
                >
                  المستخدمين
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/dashboard/personal-fund-requests"
                  onClick={toggleMenu}
                  className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
                >
                  مراجعه طلبات التمويل للافراد
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/dashboard/company-fund-requests"
                  onClick={toggleMenu}
                  className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
                >
                  مراجعه طلبات التمويل للشركات
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/dashboard/archive-fund-requests"
                  onClick={toggleMenu}
                  className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
                >
                  مراجعه طلبات التمويل الموارشفه
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/dashboard/add-car"
                  onClick={toggleMenu}
                  className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
                >
                  اضافه سياره
                </Link>
              </li>

              <li className="py-2">
                <Button className="text-white hover:text-black">
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className="text-white hover:text-black"
                  >
                    العودة للصفحة الرئيسية
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Menu */}

      <div
        dir="rtl"
        className="hidden text-lg font-medium md:flex lg:space-x-8 font-sans md:space-x-3"
      >
        <Button>
          <Link
            href="/"
            className="text-white lg:mx-8 md:mx-3 hover:text-black"
          >
            العودة للصفحة الرئيسية
          </Link>
        </Button>
      </div>
      <div className="hidden md:flex font-medium  text-md lg:space-x-6 md:space-x-1 font-sans">
        <Link
          href="/dashboard"
          className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
        >
          المستخدمين
        </Link>
        <Link
          href="/dashboard/personal-fund-requests"
          className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
        >
          مراجعه طلبات التمويل للافراد
        </Link>
        <Link
          href="/dashboard/company-fund-requests"
          className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
        >
          مراجعه طلبات التمويل للشركات
        </Link>
        <Link
          href="/dashboard/archive-fund-requests"
          className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
        >
          مراجعه طلبات التمويل الموارشفه
        </Link>
        <Link
          href="/dashboard/add-car"
          className="text-black/80 lg:mx-6 md:mx-1 hover:text-black"
        >
          اضافه سياره
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
