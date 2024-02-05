"use client";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Cover from "./cover";
import Button from "./button";
import { MdNavigateNext } from "react-icons/md";

const Emblacarousel = ({ children, animeList }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    emblaApi.autoplay();
  }, [emblaApi]);

  return (
    <div className="relative embla max-w-[99vw] max-h-[100%]" ref={emblaRef}>
      <div className="embla__container ">
        {animeList.map((element, index) => (
          <div key={index} className="embla__slide ">
            <Cover element={element} />
          </div>
        ))}
      </div>
      <div className="z-20 flex flex-col gap-3 absolute right-8 bottom-10">
        <Button variant="nextButton" size="sm" onClick={scrollNext}>
          <MdNavigateNext />
        </Button>
        <Button variant="nextButton" size="sm" onClick={scrollPrev}>
          <MdNavigateNext className="rotate-180" />
        </Button>
      </div>
    </div>
  );
};

export default Emblacarousel;
