"use client";
import { data } from "@/utils/data";
import React, { useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import Button from "./button";

const Card = () => {
  const animeList = data.results;
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 292,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -292,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-[full]  text-white h-[25rem] flex justify-start items-center gap-2 md:gap-4 lg:gap-6 transition delay-5000 overflow-hidden">
      <p className="absolute top-1 left-7 text-pink-600 text-3xl">Trending</p>
      <div
        className=" scrollControl max-w-[85vw] md:max-w-[89vw] lg:max-w-[92vw] h-full flex items-center overflow-scroll ml-5  "
        ref={scrollContainerRef}
      >
        {/* CARD */}
        {animeList.map((element, index) => (
          <div
            className="flex h-[300px] w-[400px] min-w-[268px] rounded-xl overflow-hidden ml-2 mr-3"
            key={index}
          >
            <div className="flex flex-col justify-center items-center gap-2 py-5 bg-gradient-to-r from-gray-700">
              <p className="flex items-end white flex-1 h-screen w-[50px] writing-mode-vertical-rl whitespace-nowrap pb-5 ">
                <span className="-rotate-90 max-w-full text-md">
                  {element.title.english}
                </span>
              </p>
              <p className="text-2xl font-semibold text-green-300 ">
                {index + 1}
              </p>
            </div>
            <div className="w-full max-h-full object-cover">
              <img
                src={element.image}
                alt=""
                className="w-full h-full object-cover ease-in duration-100 blur-[0.7px] hover:blur-none  "
              />
            </div>
          </div>
        ))}
      </div>
      <div className="z-10 flex flex-col gap-3">
        <Button variant="nextButton" size="xl" onClick={scrollLeft}>
          <MdNavigateNext />
        </Button>
        <Button variant="nextButton" size="xl">
          <MdNavigateNext className="rotate-180" onClick={scrollRight} />
        </Button>
      </div>
    </div>
  );
};

export default Card;
