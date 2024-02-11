"use client";
import React, { useState } from "react";
import Button from "./button";
import { animeInfo } from "@/utils/animeInfo";
import Card from "./card";
import Image from "next/image";
console.log(animeInfo.characters);

const Watchcharacters = () => {
  const [active, SetActive] = useState("Character");

  return (
    <div className="h-full w-screen px-1 sm:px-5 md:px-6  mt-10 pt-2">
      <div className="flex justify-center items-center gap-2 bg-gray-700 max-w-[250px] p-2 rounded-lg">
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
        className=" h-[1000px] w-screen md:w-[95vw] ml-0 mt-5 gap-2  grid grid-cols-4 grid-rows-7 
      sm:grid-cols-5 sm:grid-rows-5 sm:h-[700px]
      md:grid-cols-4 md:grid-rows-7 md:h-[1300px] md:gap-5
      lg:grid-cols-5 lg:grid-rows-6 lg:h-[1300px]
      xl:grid-cols-6 xl:grid-rows-5 xl:h-[1100px]
      2xl:grid-cols-7 2xl:grid-rows-4 2xl:h-[1000px]

      "
      >
        {/* {
          h-[100px] w-[100px] hover:h-[110px] hover:w-[110px]
          md:w-[150px] md:h-[150px] md:hover:w-[160px]  md:hover:h-[160px]
            lg:w-[180px] lg:h-[180px] lg:hover:w-[190px]  lg:hover:h-[190px]
            2xl:w-[200px] 2xl:h-[200px] 2xl:hover:w-[210px]  2xl:hover:h-[210px]
        } */}
        {animeInfo.characters.map((element, index) => (
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
                src={element.image}
                width="100"
                height="100"
                alt=""
                className="h-full w-full hover:opacity-60"
              />
              <p
                className={`absolute top-0 right-0 text-[12px] rounded-bl-lg ${
                  element.role.toLowerCase() === "main"
                    ? "bg-pink-600 px-2"
                    : element.role.toLowerCase() === "supporting"
                    ? "bg-green-600 px-1"
                    : ""
                }`}
              >
                {element.role}
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-nowrap">{element.name.first}</p>
            </div>
          </div>
        ))}
      </div>
      <Card cardTitle={"Recommendation"} />
    </div>
  );
};

export default Watchcharacters;