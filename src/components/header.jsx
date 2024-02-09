"use client";
import React from "react";
import Slider from "@/components/slider";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import Button from "@/components/button";
import useScrolled from "@/utils/useScrolled";
import Link from "next/link";

const Header = ({ isScrolled }) => {
  const scrolled = useScrolled();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex h-[50px] lg:h-[70px]  justify-between px-10 ${
        scrolled ? "bg-gradient-to-t from-pink-900 " : isScrolled
      }`}
    >
      <div className="flex gap-5 items-center">
        <Slider className="p-5">
          <GiHamburgerMenu className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
        </Slider>
        <Link href={"/home"}>
          <img src="/logo.png" alt="" className="h-10 w-48" />
        </Link>
        <div className="bg-white p-2 rounded-xl hidden lg:flex">
          <input
            type="text"
            className={`outline-none ${
              scrolled ? "text-black font-extrabold" : "text-gray-700"
            } font-medium`}
          />
          <button className="p-2">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div>
          <button className="p-2 lg:hidden">
            <FaSearch />
          </button>
        </div>
        <div>
          <div>
            <Button className={"lg:py-3 px-4 lg:text-md"}>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
