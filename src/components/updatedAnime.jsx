import { popularData } from "@/utils/popular";
import React from "react";

const Updatedanime = ({cardTitle , image, title, type, duration}) => {
  const anime = popularData.results.slice(0, 5);
  console.log(anime);

  return (
    <div className="bg-gradient-to-r from-gray-700 grid grid-rows-[50px_1fr]">
      <div className="bg-gradient-to-r from-pink-700 text-lg font-semibold flex items-center pl-8">
        {cardTitle}
      </div>
      <div className=" flex flex-col p-2 gap-3">
        {anime.map((element, index) => (
          <div className="flex gap-5 ml-4 md:ml-6 lg:ml-8">
            <img src={element.image} alt="" className="h-20 rounded-lg" />
            <div className="flex flex-col justify-center text-white">
              <p className="text-lg font-medium">{element.title.english}</p>
              <div className="flex gap-3 md:gap-4 lg:gap-5 text-sm ">
                <p>{element.type}</p>
                <p>EP1</p>
                <p>
                  {element.duration} <span>min</span>{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updatedanime;
