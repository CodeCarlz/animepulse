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

const animeList = data.results;
const anime = popularData.results;
const recentAnime = recentData.results;
const trendingAnime = trendingData.results;
const randomAnime = randomData.results;

const Home = () => {
  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_300px] min-h-screen  bg-gray-900 overflow-hidden">
      <Header />
      <main className="max-w-[100vw] ">
        <ul>
          <Emblacarousel animeList={animeList} />
        </ul>

        <Card />
        <div className=" flex justify-center items-center h-[2200px] md:h-[1100px] lg:h-[80vh] px-5 pb-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-[98%] w-[95vw]">
            <ListCard cardTitle={"Recent Rlease"} anime={recentAnime} />
            <ListCard cardTitle={"New Release"} anime={anime} />
            <ListCard cardTitle={"Trending"} anime={trendingAnime} />
            <ListCard cardTitle={"Random Anime"} anime={randomAnime} />
          </div>
        </div>
        <Recentepisode />
      </main>

      <footer
        className="relative bg-[#1e1a1b] flex flex-col justify-center items-center gap-5 lg:gap-2 bg-cover lg:bg-contain bg-top lg:bg-right bg-no-repeat"
        style={{ backgroundImage: `url(/onepunchs.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent z-3 "></div>
        <ul className="flex gap-8 text-sm text-white z-10">
          <li>
            <Link href={""}>Terms of service</Link>
          </li>
          <li>
            <Link href={""}>Policy</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
        </ul>
        <div className="max-w-sm lg:max-w-7xl text-white z-10">
          <p className="text-sm lg:text-lg">
            Anime Pulse does not store any files on our server, we only linked
            to the media which is hosted on 3rd party services.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
