"use client";
import Slider from "@/components/slider";
import { data } from "@/utils/data";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "@/components/button";
import Link from "next/link";
import Cover from "@/components/cover";
import Emblacarousel from "@/components/embacarousel";
import Head from "next/head";
import Header from "@/components/header";
import Card from "@/components/card";
import { popularData } from "@/utils/popularData";
import { recentData } from "@/utils/recentData";
import { trendingData } from "@/utils/trendingData";
import { randomData } from "@/utils/randomData";
import ListCard from "@/components/listCard";
import Recentepisode from "@/components/recentEpisode";
import Footer from "@/components/footer";
import { axiosInstance } from "@/services/api";
import Loading from "@/components/loading";

const animeList = data.results;
// const anime = popularData.results.slice(0, 5);
// const trendingAnime = trendingData.results.slice(0, 5);
// const randomAnime = randomData.results.slice(0, 5);

const Home = () => {
  const [recentAnime, SetrecentAnime] = useState();
  const [trendingAnime, SettrendingAnime] = useState();
  const [randomAnime, SetrandomAnime] = useState();
  const [popularAnime, SetpopularAnime] = useState();
  const [isLoading, SetisLoading] = useState(false);

  const fetchRecentA = async () => {
    try {
      const response = await axiosInstance.get("/meta/anilist/recent-episodes");
      SetisLoading(true);
      if (response.data.results) {
        SetrecentAnime(response.data.results);
        SetrandomAnime(response.data.results.slice(5, 10));
      }
      console.log("error API");
    } catch (error) {
      console.log(error);
    } finally {
      SetisLoading(false);
    }
  };
  const fetchTrendingA = async () => {
    try {
      const response = await axiosInstance.get("/meta/anilist/trending");
      SetisLoading(true);
      if (response.data.results) {
        SettrendingAnime(response.data.results);
      }
      console.log("error API");
    } catch (error) {
      console.log(error);
    } finally {
      SetisLoading(false);
    }
  };

  const fetchPopularA = async () => {
    try {
      const response = await axiosInstance.get("/meta/anilist/popular");
      SetisLoading(true);
      if (response.data.results) {
        SetpopularAnime(response.data.results);
      }
      console.log("error API");
    } catch (error) {
      console.log(error);
    } finally {
      SetisLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentA();
    fetchTrendingA();
    fetchPopularA();
  }, []);

  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_300px] min-h-screen  bg-gray-900 overflow-hidden">
      <Header isScrolled={""} />
      <main className="max-w-[100vw] ">
        {recentAnime && popularAnime && trendingAnime ? 
          <>
            <ul>
          <Emblacarousel animeList={animeList} />
        </ul>

        <Card cardTitle={"Trending"} />

        <div className=" flex justify-center items-center h-[2200px] md:h-[1100px] lg:h-[600px] px-5 pb-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-[98%] w-[95vw] ">
            <ListCard
              cardTitle={"Recent Rlease"}
              anime={recentAnime}
              isLoading={isLoading}
            />
            <ListCard
              cardTitle={"Popular"}
              anime={popularAnime}
              isLoading={isLoading}
            />
            <ListCard
              cardTitle={"Trending"}
              anime={trendingAnime}
              isLoading={isLoading}
            />
            <ListCard
              cardTitle={"Random Anime"}
              anime={randomAnime}
              isLoading={isLoading}
            />
          </div>
        </div>

        <Recentepisode />
          </>  : <Loading />
      }
      </main>
      <Footer />
    </div>
  );
};

export default Home;
