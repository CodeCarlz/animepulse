"use client";
import React, { useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import Button from "./button";

import Card from "./card";

const Scrollfunction = ({ anime, title }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 292,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -292,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-[full]  text-white h-[25rem] flex justify-start items-center gap-2 md:gap-4 lg:gap-6 transition delay-5000 overflow-hidden">
      <p className="absolute top-1 left-7 text-pink-600 text-3xl">{title}</p>
      {!anime ? (
        ""
      ) : (
        <>
          <div
            className="scrollControl max-w-[85vw] md:max-w-[89vw] lg:max-w-[92vw] h-full flex items-center overflow-scroll ml-5  "
            ref={scrollContainerRef}
          >
            {/* CARD */}

            {anime?.map((element, index) => (
              <Card element={element} index={index} key={index} />
            ))}
          </div>
          <div className="z-10 flex flex-col gap-3">
            <Button variant="nextButton" size="xl" onClick={scrollLeft}>
              <MdNavigateNext />
            </Button>
            <Button variant="nextButton" size="xl">
              <MdNavigateNext className="rotate-180" onClick={scrollRight} />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Scrollfunction;
