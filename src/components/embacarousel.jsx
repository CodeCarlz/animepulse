"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Cover from "./cover";


const Emblacarousel = ({ children, animeList }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla max-w-[99vw] max-h-[100%]" ref={emblaRef}>
      <div className="embla__container ">
        {animeList.map((element, index) => (
          <div key={index} className="embla__slide ">
            <Cover
              element={element}
              scrollNext={scrollNext}
              scrollPrev={scrollPrev}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emblacarousel;
