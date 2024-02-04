import React from "react";

const ListCard = ({ cardTitle, image, title, type, duration, anime }) => {
  console.log(anime);

  return (
    <div className="bg-gradient-to-r from-gray-700 grid grid-rows-[50px_1fr]">
      <div className="bg-gradient-to-r from-pink-700 text-lg font-semibold flex items-center pl-8">
        {cardTitle}
      </div>
      <div className=" flex flex-col p-2 gap-3">
        {anime.slice(0, 5).map((element, index) => (
          <div
            key={index}
            className="flex gap-5 ml-4 md:ml-6 lg:ml-8 min-w-[230px]"
          >
            <img
              src={element.image}
              alt=""
              className="h-20 rounded-lg max-w-[60px]"
            />
            <div className="flex flex-col justify-center text-white">
              <p className="text-lg font-medium max-h-[60px] max-w-[25ch] overflow-hidden">
                {element.title.english
                  ? element.title.english
                  : element.title.romaji
                  ? element.title.romaji
                  : element.title.native}
              </p>
              <div className="flex gap-3 md:gap-4 lg:gap-5 text-sm ">
                <p>{element.type}</p>
                <p>EP{element.episodeNumber}</p>
                <p>
                  {element.duration ? element.duration : "N/A"}{" "}
                  {element.duration ? <span>min</span> : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCard;
