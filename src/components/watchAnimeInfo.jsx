import React from "react";
// import { animeInfo } from "@/utils/animeInfo";
import Image from "next/image";

const Watchanimeinfo = ({ animeInfo }) => {
  const dateFormat = animeInfo?.startDate
    ? new Date(
        animeInfo?.startDate.year,
        animeInfo?.startDate.month - 1,
        animeInfo?.startDate.day
      ).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div
      className="bg-gray-700 h-[550px] flex flex-col gap-2 sm:gap-5 xl:gap-2 text-sm px-2
    sm:flex-row sm:h-[400px]
    md:h-[300px]
    xl:flex-col xl:h-full xl:w-[500px]
    "
    >
      <div className="bg-red-500 h-[250px] w-full  sm:w-[150px] xl:w-full overflow-hidden">
        <Image
          height="100"
          width="100"
          src={animeInfo?.image}
          alt=""
          className="h-full w-full"
        />
      </div>
      <div
        className=" h-full w-full gap-5 flex flex-col sm:flex-col text-white
      "
      >
        <div>
          <p className="text-2xl text-pink-600">
            {animeInfo?.title.english ??
              animeInfo?.title.romaji ??
              animeInfo?.title.native}
          </p>
          <div className="flex gap-2 text-sm">
            <p>PG-13</p>
            <div className="flex">
              <p>HD</p>
              <p>CC</p>
              <p>M</p>
            </div>
            <p>TV</p>
            <p>24 min</p>
          </div>
          <div className="">
            <p className="text-[12px] text-gray-400">
              {animeInfo?.description?.length >= 190
                ? `${animeInfo?.description.slice(0, 190)}...`
                : animeInfo?.description}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col md:gap-12 md:flex-row xl:flex-col xl:gap-0
        "
        >
          <div className="">
            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Type:</p>
              <p className="">TV</p>
            </div>

            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Date aired:</p>
              <p className="">{dateFormat}</p>
            </div>

            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Status:</p>
              <p className="">{animeInfo?.status}</p>
            </div>
            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Genre:</p>
              {animeInfo?.genres.map((element, index) => (
                <p key={index}>{element}</p>
              ))}
            </div>
          </div>

          <div>
            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Country:</p>
              <p className="">{animeInfo?.countryOfOrigin}</p>
            </div>
            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Scores:</p>
              <p className="">8,71 /1,302,298 views</p>
            </div>
            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Premiered:</p>
              <p className="">{animeInfo?.releaseDate}</p>
            </div>
            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Duration:</p>
              <p className="">{animeInfo?.duration} min</p>
            </div>
            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Episode:</p>
              <p className="">{animeInfo?.totalEpisodes}</p>
            </div>
            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Studios:</p>
              <p className="">{animeInfo?.studios}</p>
            </div>
            <div className="flex gap-1 items-start">
              <p className="text-pink-600">Producer:</p>
              <p className="">Shueisha, fuji TV, TAPs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchanimeinfo;
