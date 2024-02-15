"use client";
import React, { useState } from "react";
import Button from "./button";
import Image from "next/image";
import Scrollfunction from "./scrollFunction";
import { trendingData } from "@/utils/trendingData";

const Watchcharacters = ({ animeInfo }) => {
  const [active, SetActive] = useState("Character");

  return (
    <div className="h-full w-screen px-1  mt-10 pt-2">
      <div className="flex ml-5 md:ml-9 lg:ml-6 xl:ml-10 justify-center items-center gap-2 bg-gray-700 max-w-[250px] p-2 rounded-lg">
        <Button
          variant={"watchButton"}
          className={`text-lg ${active === "Character" ? "bg-pink-600" : ""}`}
          onClick={() => SetActive("Character")}
        >
          Character
        </Button>
        <Button
          variant={"watchButton"}
          className={`text-lg ${active === "Relate" ? "bg-pink-600" : ""}`}
          onClick={() => SetActive("Relate")}
        >
          Relate
        </Button>
      </div>
      <div
        className="mx-auto w-[90vw] lg:w-[95vw] mt-5 gap-x-4 gap-y-10  grid grid-cols-4  
      sm:grid-cols-5  
      md:grid-cols-4  
      lg:grid-cols-5  
      xl:grid-cols-6  
      2xl:grid-cols-7 
      mb-5 pb-4
      "
        style={{ gridAutoRows: "minmax(0, auto)" }}
      >
        {animeInfo?.characters?.map((element, index) => (
          <div
            className={` text-white hover:text-pink-600
            max-h-[100px] 
            md:max-h-[150px]
            lg:max-h-[180px]
            2xl:max-h-[200px]
            transition-transform ease-in-out duration-300 transform hover:scale-110
            `}
            key={index}
          >
            <div
              className={`relative h-full bg-zinc-900 rounded-lg overflow-hidden text-white `}
            >
              <Image
                src={element?.image}
                width="100"
                height="100"
                alt=""
                className="h-full w-full hover:opacity-60"
              />
              <p
                className={`absolute top-0 right-0 text-[12px] rounded-bl-lg ${
                  element?.role.toLowerCase() === "main"
                    ? "bg-pink-600 px-2"
                    : element?.role.toLowerCase() === "supporting"
                    ? "bg-green-600 px-1"
                    : ""
                }`}
              >
                {element?.role}
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-nowrap">
                {element?.name?.first?.length > 9
                  ? element?.name?.first.slice(0, 8)
                  : element?.name?.first}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Scrollfunction
        anime={animeInfo?.recommendations}
        title={"Recommendation"}
      />
    </div>
  );
};

export default Watchcharacters;
