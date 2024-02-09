import Button from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { animeInfo } from "@/utils/animeInfo";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { IoIosSearch, IoIosMenu } from "react-icons/io";

const page = ({ params }) => {
  const { id, anime } = params;
  console.log(animeInfo);
  {
    animeInfo.episodes.map((element, index) => {
      console.log("id:", id);
      console.log("element.number:", element.number);
    });
  }

  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_300px] justify-center  min-h-screen   bg-gray-900 overflow-hidden">
      <Header isScrolled={"bg-gradient-to-t from-pink-900"} />
      <main>
        <div className="pt-[50px] lg:pt-[70px] flex justify-center">
          <div className="bg-green-400 h-[750px] w-[95vw] flex  gap-5">
            <div className="flex gap-1 w-[80vw]">
              {/* list of episode*/}
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
                          <option value="">{element.number}</option>
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

              {/* video player */}
              <div className="bg-blue-400 flex-1 flex flex-col">
                <div className="bg-red-400 h-[70vh]">
                  <img
                    src="/one_piece.jpg"
                    alt=""
                    className="w-screen h-full"
                  />
                </div>
                <div className="">
                  {id} {anime.replace(/-/g, " ")}
                </div>
              </div>
            </div>
            {/* anime details */}
            <div className="bg-gray-700  w-[450px] flex flex-col text-sm">
              <div className="h-[380px]  flex flex-col gap-3 text-white">
                <div className="h-[230px] bg-gray-800 flex justify-center">
                  <img
                    src="/one_piece.jpg"
                    alt=""
                    className="h-full w-screen"
                  />
                </div>
                <div className=" h-[70px] flex flex-col gap-2 px-2">
                  <p className="text-2xl text-pink-600">One Piece</p>
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
                      Gol D. Roger, known as the Pirate King, was feared and
                      respected for his incredible strength and prominence in
                      the Grand Line. However, his capture and execution by the
                      World
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
                  <p className="">Oct 20, 1999</p>
                </div>
                <div className="flex gap-1 items-start">
                  <p className="text-pink-600">Status:</p>
                  <p className="">Releasing</p>
                </div>
                <div className="flex gap-1 items-start">
                  <p className="text-pink-600">Genre:</p>
                  <p className="">
                    Action, Adventure, Comedy, Drama, Fantasy, Shounen, Super
                    power, isekai
                  </p>
                </div>
                <div className="flex gap-1 items-start">
                  <p className="text-pink-600">Country:</p>
                  <p className="">Japan</p>
                </div>
                <div className="flex gap-1 items-start">
                  <p className="text-pink-600">Scores:</p>
                  <p className="">8,71 /1,302,298 views</p>
                </div>
                <div className="flex gap-1 items-start">
                  <p className="text-pink-600">Premiered:</p>
                  <p className="">Fall 1999</p>
                </div>
                <div className="flex gap-1 items-start">
                  <p className="text-pink-600">Duration:</p>
                  <p className="">24 min</p>
                </div>
                <div className="flex gap-1 items-start">
                  <p className="text-pink-600">Episode:</p>
                  <p className="">?</p>
                </div>
                <div className="flex gap-1 items-start">
                  <p className="text-pink-600">Studios:</p>
                  <p className="">Toel Anime</p>
                </div>
                <div className="flex gap-1 items-start">
                  <p className="text-pink-600">Producer:</p>
                  <p className="">Shueisha, fuji TV, TAP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
