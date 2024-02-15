import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import Link from "next/link";
import Button from "./button";

const Cover = ({ element }) => {
  return (
    <>
      <div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] pb-10  justify-between flex items-end bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url("${element?.cover}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-transparent z-3 "></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-gray-900 to-transparent z-3 "></div>
        <div
          className="z-10  w-[60vw] md:w-2/4 flex flex-col justify-end gap-2 md:gap-3 lg:gap-5 pl-3 md:pl-5 lg:pl-10
          transition-transform duration-1000 ease-in-out
      "
        >
          <h1 className="text-green-400 text-sm md:text-lg lg:text-3xl">
            #{element?.rating} <span className="text-pink-600">Spotlight</span>
          </h1>
          <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-semibold tracking-wide">
            {element.title.english ??
              element.title.romaji ??
              element.title.native}
          </h1>
          <div className="flex gap-10 ">
            <label htmlFor="" className={"flex items-center gap-1"}>
              <label
                htmlFor=""
                className="h-3 w-3 p-[3px]  bg-white  rounded-full flex justify-center items-center"
              >
                <FaPlay className="" />
              </label>
              <p className="text-white text-sm md:text-md lg:text-lg">
                {element.type}
              </p>
            </label>
            <label htmlFor="" className={"flex items-center gap-1"}>
              <label
                htmlFor=""
                className="h-3 w-3 p-[1px] bg-white  rounded-full flex justify-center items-center"
              >
                <CiCalendarDate />
              </label>
              <p className="text-white text-sm md:text-md lg:text-lg">
                {element.releaseDate}
              </p>
            </label>

            <label htmlFor="">
              <p className=" bg-gray-800 p-1 rounded-lg text-pink-700">
                {element.status}
              </p>
            </label>
          </div>
          <div className="h-[10ch]">
            <p className=" max-h-[10ch] md:max-h-[8ch] max-w-[98%] text-overflow-ellipsis  line-clamp-4 lg:line-clamp-3 text-gray-300 text-[13px] lg:text-md">
              {element?.description.replace(/<br\s*\/?>/g, "")}
            </p>
          </div>
          <Link href={"#"}>
            <Button>Watch Now</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cover;
