"use client";
import Player from "@/components/artplayer";
import Button from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Recentepisode from "@/components/recentEpisode";
import Watchanimeinfo from "@/components/watchAnimeInfo";
import Watchcharacters from "@/components/watchCharacters";
import Watchepisode from "@/components/watchEpisode";
import { axiosInstance } from "@/services/api";
import { INFO_ANIME, INFO_GOGO, WATCH_ANIME } from "@/services/endpoint";
import { requestHandler } from "@/utils/helpers";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id, anime } = params;

  // Callback function to update the state with the selected episode ID
  const [animeInfo, setAnimeInfo] = useState(null);
  const [animeVideo, setAnimeVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAnime = async () => {
    await requestHandler(
      async () => await axiosInstance.get(`${INFO_ANIME}/${id}`),
      async (data) => {
        setAnimeInfo(data);
        await fetchAnimeVideo(data?.episodes[0]?.id);
      },
      (err) => console.log(err)
    );
  };

  const fetchAnimeGogo = async () => {
    await requestHandler(
      async () => await axiosInstance.get(`${INFO_GOGO}/${anime}`),
      async (data) => {
        setAnimeInfo(data);
        await fetchAnimeVideo(data?.episodes[0]?.id);
      },
      (err) => console.log(err)
    );
  };
  const fetchAnimeVideo = async (EpisodeId) => {
    setIsLoading;
    if (!EpisodeId) return;
    await requestHandler(
      async () => await axiosInstance.get(`${WATCH_ANIME}/${EpisodeId}`),
      async (data) => {
        setAnimeVideo(data);
      },
      (err) => console.log(err),
      setIsLoading
    );
  };

  useEffect(() => {
    fetchAnime();
    if (!animeInfo) {
      fetchAnimeGogo();
    }
  }, [id]);

  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_300px] justify-center  min-h-screen   bg-gray-900 overflow-hidden">
      <Header
        isScrolled={"bg-gradient-to-t from-pink-900"}
        scrolledInput={"bg-gradient-to-t from-neutral-300"}
      />
      <main className="h-full ">
        <div className="pt-[50px] lg:pt-[70px] flex justify-center">
          <div className=" h-full  xl:h-[700px] w-[95vw] flex flex-col xl:flex-row gap-5">
            <div className="flex flex-col-reverse xl:flex-row gap-1 3xl:w-[80vw]">
              {/* list of episode*/}
              <Watchepisode
                id={id}
                animeInfo={animeInfo}
                fetchAnimeVideo={fetchAnimeVideo}
              />
              {/* video player */}
              <div className="w-full   xl:w-[50vw] 2xl:w-[60vw] bg-gray-700 flex-1 flex flex-col">
                <div className="w-full h-[40vh] md:h-[50vh] lg:h-[70vh] text-white">
                  {/* <img
                    src="/one_piece.jpg"
                    alt=""
                    className="w-screen h-full"
                  /> */}
                  {animeVideo && !isLoading && (
                    <Player animeVideo={animeVideo} />
                  )}
                </div>
                <div className=" h-[50px] flex justify-center items-center">
                  <p className="text-pink-600 text-sm md:text-lg lg:text-3xl">
                    {animeInfo?.title.english}
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

export default Page;
