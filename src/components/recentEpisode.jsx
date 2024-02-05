import { recentData } from "@/utils/recentData";
import React from "react";
console.log(recentData.results.slice(0, 12));

const recentAnime = recentData.results.slice(0, 12);
const Recentepisode = () => {
  return (
    <div className="flex flex-col gap-2 h-[1500px] sm:h-[1200px] md:h-[1050px] lg:h-[750px] p-5">
      <p className="text-2xl text-pink-600">Recent Episode</p>
      <div className="text-white  h-full min-w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {recentAnime.map((element, index) => (
          <div
            className=" text-white flex flex-col h-[180px] sm:h-[230px] md:max-h-[270px] md:min-h-[270px]  "
            key={index}
          >
            <div className="bg-green-400 h-full w-full relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent z-3 "></div>
              <img src={element.image} alt="" className="h-full w-full" />
              {/* <p className="absolute left-5 bottom-0 font-extrabold">CC 5</p> */}
              <p className="absolute right-2 bottom-2 font-bold bg-gray-400  px-2 rounded-lg text-gray-700 text-sm">
                {element.episodeNumber} EPS
              </p>
            </div>
            <div className="h-[30%] bg-gray-800">
              <p className="text-[16px] h-[32px] leading-4">
                {element.title.english.slice(0, 28)}
              </p>
              <p className="text-[12px]">{element.type} . Oct 01, 2023</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recentepisode;
