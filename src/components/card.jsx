import Link from "next/link";
import Image from "next/image";

const Card = ({ element, index }) => {
  return (
    <Link
      href={`/watch/${(
        element.title.english ??
        element.title.romaji ??
        element.title.native
      )
        .replace(/.*: /, "")
        .replace(/\s/g, "-")
        .toLowerCase()}/${element?.id}`}
      className="flex h-[300px] w-[300px] min-w-[267px] rounded-xl overflow-hidden ml-2 mr-3"
      key={index}
    >
      <div className="flex flex-col justify-center items-center gap-2 py-5 bg-gradient-to-r from-gray-700">
        <p className="flex items-end white flex-1 h-screen w-[50px] writing-mode-vertical-rl whitespace-nowrap pb-5 max-h-[90vh] overflow-hidden">
          <span className="-rotate-90 max-w-full text-md ">
            {element.title.english ??
              element.title.romaji ??
              element.title.native}
          </span>
        </p>
        <p className="text-2xl font-semibold text-green-300 ">{index + 1}</p>
      </div>
      <div className="w-full max-h-full object-cover">
        <Image
          src={element?.image}
          height="100"
          width="100"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  );
};

export default Card;
