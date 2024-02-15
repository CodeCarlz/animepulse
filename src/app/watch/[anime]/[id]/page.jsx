import Player from "@/components/artplayer";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Recentepisode from "@/components/recentEpisode";
import Watchanimeinfo from "@/components/watchAnimeInfo";
import Watchcharacters from "@/components/watchCharacters";
import Watchepisode from "@/components/watchEpisode";
import { axiosInstance } from "@/services/api";
import { INFO_ANIME, WATCH_ANIME } from "@/services/endpoint";
import React from "react";

const page = async ({ params }) => {
  const { id, anime } = params;

  const fetchAnime = async (endpoint) => {
    try {
      const response = await axiosInstance.get(`${endpoint}/${id}`);
      if (response.data) {
        return response.data;
      } else {
        throw new Error("Failed to fetch anime");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAnimeVideo = async (endpoint) => {
    try {
      const response = await axiosInstance.get(
        `${endpoint}/spy-x-family-episode-1`
      );
      if (response.data) {
        return response.data;
      } else {
        throw new Error("Failed to fetch anime");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const animeInfo = await fetchAnime(INFO_ANIME);
  const animeVideo = await fetchAnimeVideo(WATCH_ANIME);

  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_300px] justify-center  min-h-screen   bg-gray-900 overflow-hidden">
      <Header isScrolled={"bg-gradient-to-t from-pink-900"} />
      <main className="h-full ">
        <div className="pt-[50px] lg:pt-[70px] flex justify-center">
          <div className=" h-full  xl:h-[750px] w-[95vw] flex flex-col xl:flex-row gap-5">
            <div className="flex flex-col-reverse xl:flex-row gap-1 3xl:w-[80vw]">
              {/* list of episode*/}
              <Watchepisode id={id} animeInfo={animeInfo} />
              {/* video player */}
              <div className="w-full  xl:w-[50vw] 2xl:w-[60vw] bg-gray-700 flex-1 flex flex-col">
                <div className="w-full h-[70vh] text-white">
                  {/* <img
                    src="/one_piece.jpg"
                    alt=""
                    className="w-screen h-full"
                  /> */}
                  <Player animeVideo={animeVideo} />
                </div>
                <div className="">
                  <p className="text-white">
                    {animeInfo?.title.english} {animeInfo?.title?.romaji}
                  </p>
                </div>
              </div>
            </div>
            {/* anime details */}
            <Watchanimeinfo animeInfo={animeInfo} />
          </div>
        </div>
        <Watchcharacters animeInfo={animeInfo} />
      </main>
      <Footer />
    </div>
  );
};

export default page;
