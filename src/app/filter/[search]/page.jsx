"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ListCard from "@/components/listCard";
import SearchCard from "@/components/searchCard";
import { axiosInstance } from "@/services/api";
import { SEARCH_ANIME } from "@/services/endpoint";
import { requestHandler } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
axiosInstance;

const Page = ({ params }) => {
  const { search } = params;
  const [searchAnime, SetSearchAnime] = useState(null);
  const fetchAnime = async () => {
    await requestHandler(
      async () => await axiosInstance.get(`${SEARCH_ANIME}/${search}`),
      async (data) => {
        SetSearchAnime(data);
        console.log(searchAnime);
      },
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    fetchAnime();
  }, []);
  return (
    <div className="grid grid-rows-[1fr_100px] lg:grid-rows-[1fr_300px] justify-center  min-h-screen   bg-gray-900 overflow-hidden">
      <Header
        isScrolled={"bg-gradient-to-t from-pink-900"}
        scrolledInput={"bg-gradient-to-t from-neutral-300"}
      />
      <main className=" pt-[50px] lg:pt-[70px] px-5 h-full min-h-[900px] py-10">
        <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_350px]  gap-5">
          {/* <h1 className="text-pink-600 text-3xl">Filter</h1> */}
          <div className=" h-full grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 auto-rows-max gap-5">
            {searchAnime?.results?.map((element, index) => (
              <SearchCard element={element} key={index} />
            ))}
          </div>

          <div>
            <ListCard
              cardTitle={"Top Rated"}
              anime={searchAnime?.results.slice(0, 10)}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
