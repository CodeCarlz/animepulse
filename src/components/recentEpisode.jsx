import { recentData } from "@/utils/recentData";
import React from "react";
import ListCard from "./listCard";
console.log(recentData.results.slice(0, 10));

const recentAnime = recentData.results.slice(0, 10);
const Recentepisode = () => {
  return (
    <div className="relative grid grid-rows-[1fr_800px] lg:grid-cols-[1fr_600px] gap-20 lg:gap-2  lg:h-[800px] px-2">
      <div className=" flex flex-col gap-2 h-full ">
        <p className=" text-2xl text-pink-600">Recent Episode</p>
        <div
          className=" text-white  h-[1200px] w-[92vw] grid grid-cols-2 
        sm:grid-cols-2  sm:h-[1200px] sm:w-[95vw]
        md:grid-cols-5  md:h-[650px]
        lg:grid-cols-5  lg:h-[740px] lg:w-[70vw]
        gap-2"
        >
          {recentAnime.map((element, index) => (
            <div
              className=" text-white flex flex-col h-[170px] sm:h-[180px]  md:h-[320px]  lg:h-[360px] "
              key={index}
            >
              <div className=" h-full w-full relative ">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent z-3 "></div>
                <img src={element.image} alt="" className="h-full w-full " />
                {/* <p className="absolute left-5 bottom-0 font-extrabold">CC 5</p> */}
                <p className="absolute right-2 bottom-2 font-bold bg-gray-400  px-2 rounded-lg text-gray-700 text-sm">
                  {element.episodeNumber} EPS
                </p>
              </div>
              <div className="h-[60px] bg-gray-800 pl-1 flex flex-col justify-between">
                <p className="text-[14px] max-h-[32px] leading-4 md:overflow-hidden">
                  {element.title.english.slice(0, 47)}
                  <span
                    className={`${
                      element.title.english.length > 47 ? "visible" : "hidden"
                    }`}
                  >
                    ...
                  </span>
                </p>
                <p className="text-[12px] text-gray-500">
                  {element.type} . Oct 01, 2023
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-2  mr-5">
        <h1 className="text-2xl text-pink-600">Most Viewed</h1>
        <div className=" flex flex-col gap-3 bg-gray-800 py-2">
          {recentAnime.slice(0, 8).map((element, index) => (
            <div key={index} className="flex gap-3 ml-2 min-w-[230px]">
              <div className="flex flex-col justify-center">
                <p className="text-2xl font-semibold text-white">
                  0{index + 1}
                </p>
                <span className="h-[2px] bg-pink-600"></span>
              </div>
              <img
                src={element.image}
                alt=""
                className="h-20 rounded-lg max-w-[60px]"
              />
              <div className="flex flex-col justify-center text-white">
                <p className="text-[13px] font-medium max-h-[60px] max-w-[25ch] overflow-hidden">
                  {element.title.english
                    ? element.title.english
                    : element.title.romaji
                    ? element.title.romaji
                    : element.title.native}
                </p>
                <div className="flex gap-3 md:gap-4 lg:gap-5 text-[11px] ">
                  <p>{element.type}</p>
                  <p>EP{element.episodeNumber}</p>
                  <p>
                    {element.duration ? element.duration : "N/A"}{" "}
                    {element.duration ? <span>min</span> : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recentepisode;
