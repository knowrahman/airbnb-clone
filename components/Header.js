import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { DateRange, DateRangePicker } from "react-date-range";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [noOfUsers, setNoOfUsers] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const handleSearch = () => {};

  const handleCancel = () => {
    setSearchInput("");
  };
  const handleSelect = (ranges) => {
    console.log(ranges.selection.startDate);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
    color: ["rgb(248, 113, 113)"],
  };
  return (
    <header className='sticky top-0 z-50 bg-white grid grid-cols-3 p-5 md:px-10 shadow-md'>
      {/* logo */}
      <div className='h-7 flex my-auto items-center relative cursor-pointer  '>
        <Image
          src='/logo/logo.png'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* searchBox */}
      <div className='flex items-center rounded-full md:border-2 shadow-md md:shadow-none pr-2  py-2'>
        <input
          type='text'
          className='w-full outline-none pl-5 pr-5 my-auto bg-transparent text-xs sm:text-sm placeholder-gray-400 '
          placeholder={
            (props.location && `${props.location} | ${props.noOfUsers}`) ||
            "Start your search..."
          }
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <SearchIcon className='hidden md:inline-flex h-6  rounded-full bg-red-400 inline-flex p-1 mr-2' />
      </div>
      {/* menu */}
      <div className='relative flex justify-end items-center space-x-3'>
        <h4 className='text-xs hidden md:inline-flex cursor-pointer'>
          Become a host
        </h4>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex h-10 space-x-1 cursor-pointer border-2 rounded-full items-center p-2'>
          <MenuIcon className='h-4' />
          <div className='relative'>
            <div className='absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white'></div>
            <UserCircleIcon className='h-8' />
          </div>
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col pt-5 col-span-3 mx-auto '>
          {isMobile ? (
            <DateRange
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
            />
          ) : (
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
            />
          )}
          <div className='flex  flex-col'>
            <div className='flex items-center border-b-2 border-red-400 border-opacity-20 pb-2'>
              <h2 className='flex-grow'>Number of guests</h2>
              <UserIcon className='h-6' />
              <input
                type='number'
                className='w-10 h-5 outline-none ml-2 text-red-400 self-end'
                min={1}
                max={50}
                value={noOfUsers}
                onChange={(e) => setNoOfUsers(e.target.value)}
              />
            </div>
          </div>
          <div className='flex pt-2'>
            <button className='flex-grow text-gray-400' onClick={handleCancel}>
              Cancel
            </button>
            <div className='flex-grow flex justify-center text-red-400'>
              <Link
                href={{
                  pathname: "/search",
                  query: {
                    location: searchInput,
                    startDate: startDate.toISOString,
                    endDate: endDate.toISOString,
                    noOfUsers,
                  },
                }}
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
