import Button from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Recentepisode from "@/components/recentEpisode";
import Watchanimeinfo from "@/components/watchAnimeInfo";
import Watchcharacters from "@/components/watchCharacters";
import Watchepisode from "@/components/watchEpisode";
import { animeInfo } from "@/utils/animeInfo";
import React from "react";

const page = ({ params }) => {
  const { id, anime } = params;
  console.log(animeInfo);

  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_300px] justify-center  min-h-screen   bg-gray-900 overflow-hidden">
      <Header isScrolled={"bg-gradient-to-t from-pink-900"} />
      <main>
        <div className="pt-[50px] lg:pt-[70px] flex justify-center">
          <div className=" h-[750px] w-[95vw] flex  gap-5">
            <div className="flex gap-1 w-[80vw]">
              {/* list of episode*/}
              <Watchepisode id={id} />
              {/* video player */}
              <div className="bg-gray-700 flex-1 flex flex-col">
                <div className="bg-red-400 h-[70vh]">
                  <img
                    src="/one_piece.jpg"
                    alt=""
                    className="w-screen h-full"
                  />
                </div>
                <div className="">
                  <p className="text-white">soon to fix</p>
                </div>
              </div>
            </div>
            {/* anime details */}
            <Watchanimeinfo />
          </div>
        </div>
        <Watchcharacters />
      </main>
      <Footer />
    </div>
  );
};

export default page;
