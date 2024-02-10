"use client";
import React, { useState } from "react";
import Button from "./button";
import { animeInfo } from "@/utils/animeInfo";
import Card from "./card";
console.log(animeInfo.characters);

const Watchcharacters = () => {
  const [active, SetActive] = useState("Character");

  return (
    <div className="h-full w-screen px-11  mt-10 pt-2">
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
      <div className="h-[1000px] w-[90vw] ml-5 mt-5  grid grid-cols-8 grid-rows-4 gap-2">
        {animeInfo.characters.map((element, index) => (
          <div
            className={`h-[200px] w-[200px] hover:h-[210px] hover:w-[210px] text-white hover:text-pink-600`}
            key={index}
          >
            <div
              className={`relative h-full bg-zinc-900 rounded-lg overflow-hidden text-white`}
            >
              <img
                src={element.image}
                alt=""
                className="h-full w-full hover:opacity-60"
              />
              <p
                className={`absolute top-0 right-0 text-sm  px-2 ${
                  element.role.toLocaleLowerCase() === "main"
                    ? "bg-pink-600"
                    : element.role.toLocaleLowerCase() === "supporting"
                    ? "bg-green-600"
                    : ""
                }`}
              >
                {element.role}
              </p>
            </div>
            <div className="flex justify-center">
              <p className="">{element.name.first}</p>
            </div>
          </div>
        ))}
      </div>
      <Card cardTitle={"Recommendation"} />
    </div>
  );
};

export default Watchcharacters;
