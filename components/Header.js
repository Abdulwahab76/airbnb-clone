import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
    if(router.pathname === '/search'){
      setSearchInput('')
    }
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md py-3 px-5 md:px-10 bg-white ">
      {/* left */}
      <div className="relative h-10 flex items-center cursor-pointer my-auto">
        <Image
          onClick={() => router.push("/")}
          src="https://www.edigitalagency.com.au/wp-content/uploads/airbnb-logo-png-transparent-background.png"
          height={100}
          width={100}
          className="object-contain object-left"
        />
      </div>
      {/* middle - Search */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-2 px-1 bg-transparent outline-none"
          placeholder={placeholder || 'Start your search '}
        />
        {searchInput && (
          <XMarkIcon
            onClick={() => setSearchInput("")}
            className="h-4 cursor-pointer"
          />
        )}
        <MagnifyingGlassIcon onClick={search} className="md:mx-2 hidden md:inline-flex h-8 cursor-pointer bg-red-400 text-white rounded-full p-2" />
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-1">
          <DateRangePicker
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            ranges={[selectionRange]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UserIcon className="h-5" />
            <input
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex ">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
