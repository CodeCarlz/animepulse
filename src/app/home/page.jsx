import Slider from "@/components/slider";
import { data } from "@/utils/data";
import React from "react";
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

const animeList = data.results;
const anime = popularData.results.slice(0, 5);
const recentAnime = recentData.results.slice(0, 5);
const trendingAnime = trendingData.results.slice(0, 5);
const randomAnime = randomData.results.slice(0, 5);

const Home = () => {
  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_300px] min-h-screen  bg-gray-900 overflow-hidden">
      <Header isScrolled={""} />
      <main className="max-w-[100vw] ">
        <ul>
          <Emblacarousel animeList={animeList} />
        </ul>

        <Card />
        <div className=" flex justify-center items-center h-[2200px] md:h-[1100px] lg:h-[600px] px-5 pb-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-[98%] w-[95vw]">
            <ListCard cardTitle={"Recent Rlease"} anime={recentAnime} />
            <ListCard cardTitle={"New Release"} anime={anime} />
            <ListCard cardTitle={"Trending"} anime={trendingAnime} />
            <ListCard cardTitle={"Random Anime"} anime={randomAnime} />
          </div>
        </div>
        <Recentepisode />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
