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
import Updatedanime from "@/components/updatedAnime";
import { popularData } from "@/utils/popularData";
import { recentData } from "@/utils/recentData";
import { trendingData } from "@/utils/trendingData";
import { randomData } from "@/utils/randomData";

const animeList = data.results;
const anime = popularData.results.slice(0, 5);
const recentAnime = recentData.results.slice(0, 5);
const trendingAnime = trendingData.results.slice(0, 5);
const randomAnime = randomData.results.slice(0, 5);
console.log(recentAnime);
console.log(randomAnime);

const Home = () => {
  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_70px] min-h-screen  bg-gray-900 overflow-hidden">
      <Header />
      <main className="max-w-[100vw] ">
        <ul>
          <Emblacarousel animeList={animeList} />
        </ul>

        <Card />
        <div className=" flex justify-center items-center h-[2200px] md:h-[1100px] lg:h-[76vh] px-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-[98%] w-[95vw]">
            <Updatedanime cardTitle={"Recent Rlease"} anime={recentAnime} />
            <Updatedanime cardTitle={"New Release"} anime={recentAnime} />
            <Updatedanime cardTitle={"Trending"} anime={trendingAnime} />
            <Updatedanime cardTitle={"Random Anime"} anime={randomAnime} />
          </div>
        </div>
      </main>

      <footer className="bg-blue-500 flex flex-col justify-center items-center gap-5 lg:gap-2">
        <ul className="flex gap-8 text-sm text-white">
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
        <div className="max-w-sm lg:max-w-7xl text-white">
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