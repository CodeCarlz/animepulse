import React, { useState } from "react";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import Link from "next/link";
import Button from "@/components/button";
import { axiosInstance } from "@/services/api";
import { WATCH_ANIME } from "@/services/endpoint";

const Watchepisode = ({ id, animeInfo, fetchAnimeVideo }) => {
  // Callback function to handle the button click
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);
  const handleButtonClick = async (episodeId) => {
    await fetchAnimeVideo(episodeId);
    setSelectedEpisodeId(episodeId);
  };

  return (
    <div className="bg-gray-700 h-full ">
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
              {animeInfo?.episodes.map((element, index) => (
                <option value="" key={index}>
                  {element?.number}
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
      <div className=" h-full max-h-[300px] xl:max-h-[680px] p-2 overflow-y-auto scrollDesign">
        <div className="grid grid-cols-7 sm:grid-cols-8 md:grid-cols-9 lg:grid-cols-10 xl:grid-cols-5 gap-1 ">
          {animeInfo?.episodes.map((element, index) => (
            <Button
              variant={"nextButton"}
              className={`${
                !selectedEpisodeId
                  ? "first:text-pink-600"
                  : element?.id === selectedEpisodeId
                  ? "text-pink-600"
                  : ""
              } w-full `}
              onClick={() => handleButtonClick(element?.id)}
              key={index}
            >
              {element?.number}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchepisode;
