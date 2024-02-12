import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative bg-[#1e1a1b] w-screen flex flex-col justify-center items-center gap-5 lg:gap-2 bg-cover lg:bg-contain bg-top lg:bg-right bg-no-repeat"
      style={{ backgroundImage: `url(/onepunchs.png)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent z-3 "></div>
      <ul className="flex gap-8 text-sm text-white z-10">
        <li>
          <Link href={""}>Terms of service</Link>
        </li>
        <li>
          <Link href={""}>Policy</Link>
        </li>
        <li>
          <Link href={""}>Contact</Link>
        </li>
      </ul>
      <div className="max-w-sm lg:max-w-7xl text-white z-10">
        <p className="text-sm lg:text-lg">
          Anime Pulse does not store any files on our server, we only linked to
          the media which is hosted on 3rd party services.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
