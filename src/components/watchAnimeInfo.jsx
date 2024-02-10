import React from 'react'
import { animeInfo } from "@/utils/animeInfo";

const Watchanimeinfo
 = () => {
    const dateFormat = new Date(
      animeInfo.startDate.year,
      animeInfo.startDate.month - 1,
      animeInfo.startDate.day
    ).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  return (
    <div className="bg-gray-700  w-[450px] flex flex-col text-sm">
      <div className="h-[380px]  flex flex-col gap-3 text-white">
        <div className="h-[230px] bg-gray-800 flex justify-center">
          <img src="/one_piece.jpg" alt="" className="h-full w-screen" />
        </div>
        <div className=" h-[70px] flex flex-col gap-2 px-2">
          <p className="text-2xl text-pink-600">{animeInfo.title.english}</p>
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
              {animeInfo.description.slice(0, 190)}
              {animeInfo.description.length > 190 ? <span>...</span> : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="text-white flex-1 px-2">
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
          <p className="">{animeInfo.status}</p>
        </div>
        <div className="flex gap-1 items-start">
          <p className="text-pink-600">Genre:</p>
          {animeInfo.genres.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
        <div className="flex gap-1 items-start">
          <p className="text-pink-600">Country:</p>
          <p className="">{animeInfo.countryOfOrigin}</p>
        </div>
        <div className="flex gap-1 items-start">
          <p className="text-pink-600">Scores:</p>
          <p className="">8,71 /1,302,298 views</p>
        </div>
        <div className="flex gap-1 items-start">
          <p className="text-pink-600">Premiered:</p>
          <p className="">{animeInfo.releaseDate}</p>
        </div>
        <div className="flex gap-1 items-start">
          <p className="text-pink-600">Duration:</p>
          <p className="">{animeInfo.duration} min</p>
        </div>
        <div className="flex gap-1 items-start">
          <p className="text-pink-600">Episode:</p>
          <p className="">{animeInfo.totalEpisodes}</p>
        </div>
        <div className="flex gap-1 items-start">
          <p className="text-pink-600">Studios:</p>
          <p className="">{animeInfo.studios}</p>
        </div>
        <div className="flex gap-1 items-start">
          <p className="text-pink-600">Producer:</p>
          <p className="">Shueisha, fuji TV, TAPs</p>
        </div>
      </div>
    </div>
  );
}

export default Watchanimeinfo

