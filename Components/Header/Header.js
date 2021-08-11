import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
const Header = () => {
  return (
    <header className="md:px-10 sticky top-0 z-50  grid grid-cols-3 p-5 bg-white shadow-md">
      {/* {left} */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto z-100">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex md:shadow-sm  items-center md:border-2 py-2 rounded-full">
        <input
          className="text-sm text-gray-600 pl-5 bg-transparent flex-1 outline-none "
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className=" hidden
        md:inline-flex
         bg-red-400 h-8
         text-white
         rounded-full p-2 cursor-pointer
         md:mx-2
         "
        />
      </div>
      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
