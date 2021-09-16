import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 p-5 md:px-10 shadow-md">
      {/* logo */}
      <div className="h-7 flex my-auto items-center relative cursor-pointer  ">
        <Image
          src="/logo/logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* searchBox */}
      <div className="flex items-center rounded-full md:border-2 shadow-md md:shadow-none pr-2  py-2">
        <input
          type="text"
          className="w-full outline-none pl-5 my-auto bg-transparent text-xs sm:text-sm placeholder-gray-400 "
          placeholder="Start your search..."
        />
        <SearchIcon className="hidden md:inline-flex h-6  rounded-full bg-red-400 inline-flex p-1 mr-2" />
      </div>
      {/* menu */}
      <div className="relative flex justify-end items-center space-x-3">
        <h4 className="text-xs hidden md:inline-flex cursor-pointer" >Become a host</h4>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex h-10 space-x-1 cursor-pointer border-2 rounded-full items-center p-2">
          <MenuIcon  className="h-4"/>
          <div className="relative">
          <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white"></div>
          <UserCircleIcon className="h-8" />
          </div>
        </div>
      </div>
    </header>
  );
};
