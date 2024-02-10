import React from "react";
import { animeInfo } from "@/utils/animeInfo";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import Link from "next/link";
import Button from "@/components/button";

const Watchepisode = ({id}) => {
  return (
    <div className="bg-gray-700 w-[300px]">
      <div className="bg-gray-800 h-[70px] px-4">
        <div className="text-lg text-white ">List of Episode</div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <IoIosMenu className="h-[30px] w-[30px] text-white" />
            <select
              name=""
              id=""
              className="w-[70px] h-[20px] bg-gray-700 text-white text-end pr-2"
            >
              {animeInfo.episodes.map((element, index) => (
                <option value="" key={index}>
                  {element.number}
                </option>
              ))}
            </select>
          </div>
          <div className="flex bg-gray-800 justify-center items-center h-[25px]">
            <IoIosSearch className="text-white" />
            <input
              type="text"
              placeholder="Find Number"
              className="h-full w-[100px] bg-transparent outline-none text-white px-2 text-sm"
            />
          </div>
        </div>
      </div>
      <div className=" h-full p-2">
        <div className="grid grid-cols-5 gap-1">
          {animeInfo.episodes.map((element, index) => (
            <Link href={`${element.number.toString()}`} key={index}>
              <Button
                variant={"nextButton"}
                className={`${
                  Number(id) === element.number ? "text-pink-600" : ""
                } w-full`}
              >
                {element.number}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchepisode;
