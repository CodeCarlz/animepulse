import { data } from "@/utils/data";
import React from "react";
import Emblacarousel from "@/components/embacarousel";
import Header from "@/components/header";
import ListCard from "@/components/listCard";
import Recentepisode from "@/components/recentEpisode";
import Footer from "@/components/footer";
import { axiosInstance } from "@/services/api";
import Scrollfunction from "@/components/scrollFunction";
import {
  POPULAR_ANIME,
  RECENT_ANIME,
  TRENDING_ANIME,
} from "@/services/endpoint";

const fetchAnime = async (endpoint) => {
  let isLoading = true;
  try {
    const response = await axiosInstance.get(endpoint);
    if (response.data.results) {
      isLoading = false;
      return { data: response.data.results, isLoading };
    } else {
      throw new Error("Failed to fetch anime");
    }
  } catch (error) {
    isLoading = false;
    // alert(error);
    return;
    {
      data: null, isLoading;
    }
  }
};

const Home = async () => {
  const { data: recentAnime } = await fetchAnime(RECENT_ANIME);
  const { data: trendingAnime } = await fetchAnime(TRENDING_ANIME);
  const { data: popularAnime } = await fetchAnime(POPULAR_ANIME);

  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_300px] min-h-screen  bg-gray-900 overflow-hidden">
      <Header isScrolled={""} />
      <main className="max-w-[100vw] ">
        {recentAnime && popularAnime && trendingAnime && (
          <>
            <ul>
              <Emblacarousel animeList={popularAnime} />
            </ul>

            <Scrollfunction anime={trendingAnime} title={"Trending"} />

            <div className=" flex justify-center items-center h-[2250px] md:h-[1100px] lg:h-[600px] px-5 pb-10">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-[98%] w-[95vw] ">
                <ListCard cardTitle={"Recent Rlease"} anime={recentAnime} />
                <ListCard cardTitle={"Popular"} anime={popularAnime} />
                <ListCard cardTitle={"Trending"} anime={trendingAnime} />
                <ListCard
                  cardTitle={"Random Anime"}
                  anime={recentAnime.slice(5, 10)}
                />
              </div>
            </div>

            <Recentepisode
              recentAnime={recentAnime}
              popularAnime={popularAnime}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
