import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import Link from "next/link";
import Button from "./button";

const Cover = ({ element }) => {
  return (
    <>
      <div
        className="relative h-[600px] pb-10 px-10 justify-between flex items-end bg-cover bg-center bg-no-repeat max-w-[100vw]"
        style={{ backgroundImage: `url("${element.cover}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-transparent z-3 "></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-gray-900 to-transparent z-3 "></div>
        <div
          className="z-10 min-w-[300px] w-2/4 flex flex-col justify-end gap-5 p-3
      "
        >
          <h1 className="text-green-400 text-xl lg:text-3xl">
            #{element.rating} <span className="text-pink-600">Spotlight</span>
          </h1>
          <h1 className="text-white text-2xl lg:text-4xl font-semibold tracking-wide">
            {element.title.english}
          </h1>
          <div className="flex gap-10 ">
            <label htmlFor="" className={"flex items-center gap-1"}>
              <label
                htmlFor=""
                className="h-4 w-4 p-[4px] bg-white  rounded-full flex justify-center items-center"
              >
                <FaPlay className="" />
              </label>
              <p className="text-white">{element.type}</p>
            </label>
            <label htmlFor="" className={"flex items-center gap-1"}>
              <label
                htmlFor=""
                className="h-4 w-4 p-[4px] bg-white  rounded-full flex justify-center items-center"
              >
                <CiCalendarDate />
              </label>
              <p className="text-white">{element.releaseDate}</p>
            </label>

            <label htmlFor="">
              <p className="text-white bg-gray-800 p-1 rounded-lg text-pink-700">
                {element.status}
              </p>
            </label>
          </div>
          <div className="h-[10ch]">
            <p className=" max-h-[8ch] max-w-[98%] text-overflow-ellipsis  overflow-ellipsis line-clamp-3 text-gray-300 text-[13px] lg:text-md">
              Gold Roger was known as the Pirate King, the strongest and most
              infamous being to have sailed the Grand Line. The capture and
              death of Roger by the World Government brought a change throughout
              the world. His last words before his death revealed the location
              of the greatest treasure in the world, One Piece. It was this
              revelation that brought about the Grand Age of Pirates Gold Roger
              was known as the Pirate King, the strongest and most infamous
              being to have sailed the Grand Line. The capture and death of
              Roger by the World Government brought a change throughout the
              world. His last words before his death revealed the location of
              the greatest treasure in the world, One Piece. It was this
              revelation that brought about the Grand Age of Pirates{" "}
              <span className="">...</span>
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
