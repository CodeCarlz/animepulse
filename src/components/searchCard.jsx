import Image from "next/image";
import React from "react";

const SearchCard = ({ element }) => {
  return (
    <>
      <div className="text-white flex flex-col max-h-[300px]">
        <div className="bg-blue-500 h-full w-full overflow-hidden relative ">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent z-3  top-44"></div>
          <Image
            height="100"
            width="100"
            src={element.image}
            alt=""
            className="h-full w-full "
          />
          {/* <p className="absolute left-5 bottom-0 font-extrabold">CC 5</p> */}
          <p className="absolute right-2 bottom-2 font-bold bg-gray-400  px-2 rounded-sm text-gray-700 text-sm">
            {element.totalEpisodes} EP
          </p>
        </div>
        <div className="h-[60px] bg-gray-800 pl-1 flex flex-col justify-between">
          <p className="text-[14px] max-h-[32px] leading-4 md:overflow-hidden text-overflow-ellipsis  line-clamp-2">
            {element?.title?.english ??
              element?.title?.romaji ??
              element?.title?.native}
          </p>
          <p className="text-[12px] text-gray-500">
            {element?.type ? element?.type : "N/A"} . {element?.releaseDate}
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
