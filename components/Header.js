import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md py-3 px-5 md:px-10 bg-white ">
      {/* left */}
      <div className="relative h-10 flex items-center cursor-pointer my-auto">
        <Image
         
          src="https://www.edigitalagency.com.au/wp-content/uploads/airbnb-logo-png-transparent-background.png"
          
          height={100}
          width={100}
         
      
          className="object-contain object-left"
        />
      </div>
      {/* middle - Search */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
        <input
          type="text"
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-2 px-1 bg-transparent outline-none"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="md:mx-2 hidden md:inline-flex h-8 cursor-pointer bg-red-400 text-white rounded-full p-2" />
      </div>
      {/* right */}
      <div className="flex space-x-4 items-center justify-end">
        <p className="hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex space-x-2 rounded-full border-2 p-2 shadow-md">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
