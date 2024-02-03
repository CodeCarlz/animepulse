import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-rows-[70px_1fr_50px] min-h-screen">
      <header className="flex items-end bg-red-500 pl-96">
        <ul className="flex gap-10 text-white text-md font-medium">
          <li>
            <Link href={"home"}>Home</Link>
          </li>
          <li>
            <Link href={""}>Trending</Link>
          </li>
          <li>
            <Link href={""}>Recent Update</Link>
          </li>
          <li>
            <Link href={""}>New Release</Link>
          </li>
        </ul>
      </header>
      <div className="flex justify-center  bg-pink-200">
        <div className="w-2/3 bg-gray-600">
          <img src="/logo.png" alt="" className="h-20 w-30" />
        </div>
      </div>
      <footer className="pl-96 text-white text-sm bg-blue-500 ">
        &copy; Anime Pulse. All rights reserved.
      </footer>
    </main>
  );
}
