"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
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
      <main className="pt-[50px] lg:pt-[70px] px-5 h-[1200px]">
        <div className=" h-full grid grid-cols-5 grid-rows-3 gap-5">
          {searchAnime?.results?.map((element, index) => (
            <SearchCard element={element} key={index} />
          ))}
          {/* {console.log(searchAnime)} */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
