import React from "react";
import search from "../assets/search-icon.svg";
import calendar from "../assets/calendar.svg";
import justin from "../assets/justin.svg";
import notification from "../assets/notification.svg";
import arrDown from "../assets/header-down.svg";

export default function Header() {
  return (
    <div className="sticky top-0 flex justify-between items-center w-full px-8 py-3 bg-[#FAFAFA] border-b-2 border-[#E5EAEF] z-20">
      {/* Left part of the dashboard */}
      <div className="font-semibold">Dashboard</div>

      {/* Right part of the dashboard that has search, date, user detail */}
      <div className="flex gap-6 w-[85%] justify-end items-center -1024:hidden">
        {/* Search Container */}
        <div className="relative w-full max-w-[400px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-[#DADDDD] border-2 rounded-[30px] px-4 p-2 pl-8 focus:outline-none focus:shadow-xl duration-300 placeholder:text-[#A3A3A3] text-sm"
          />
          <img
            className="absolute top-[50%] translate-y-[-50%] left-2"
            src={search}
            alt=""
          />
        </div>

        {/* Date container */}
        <div className="flex max-w-[200px] items-center w-fit gap-2 font-medium">
          <img src={calendar} className="min-w-[25px]" alt="" />

          <p className="text-sm font-[600] text-[#26282C]">November 15, 2023</p>
        </div>

        {/* Notification container */}
        {/* <div className="flex items-center h-[25px] w-[30px] border-2 border-black rounded-[50%]">
        </div> */}
        <img
          className="w-full p-2 border-[#DADDDD] border-[1px] rounded-[50%] max-w-[35px]"
          src={notification}
          alt=""
        />

        {/* Container for user */}
        <div className="border-[#DADDDD] w-full max-w-[220px] border-[1px] rounded-[100px] flex p-[0.1rem] px-3 items-center gap-2 cursor-pointer">
          <img src={justin} alt="" />
          <div className="font-[400] text-center">
            <p className="text-[#26282C] text-[1rem] font-[500]">
              Justin Bergson
            </p>
            <p className="text-[#787486] text-sm font-[500]">
              Justin@gmail.com{" "}
            </p>
          </div>
          <img src={arrDown} className="max-w-[25px]" alt="" />
        </div>
      </div>

      {/* container that controls the mobile view */}
      <div className=" gap-3 border-[#DADDDD] rounded-[100px] border-[1px] p-1 cursor-pointer hidden -1024:flex">
        <img src={justin} className="max-w-[30px]" alt="" />
      </div>

      {/* Container for mobile */}
      <div>
        {/* Container for name, mail and picture */}
        <div></div>

        {/* Container for date */}
        <div></div>

        {/* Container for notification */}
        <div></div>
      </div>
    </div>
  );
}
