import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Graph from "./Graph";
import Orders from "./Orders";
import AllStats from "./AllStats";
import Platforms from "./Platforms";
import search from "../assets/search-icon.svg";

export default function Home() {
  return (
    <div className="flex w-full relative bg-[#FAFAFA] dark:text-white dark:bg-darkBg duration-[500ms]">
      {/* The sidebar that's on the extreme left */}
      <div>
        <Sidebar />
      </div>

      {/* Main part of the analytics */}
      <div className="w-full">
        <Header />

        {/* Container of everything else except the header */}
        <div className="flex flex-col gap-4 p-4 justify-center w-full">
          {/* Search box that only shows on mobile */}
          <div className="relative w-full max-w-[400px] -1024:block hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-[#DADDDD] dark:bg-[transparent] dark:border-gray-700 border-2 rounded-[30px] px-4 p-2 pl-8 focus:outline-none focus:shadow-xl duration-300 placeholder:text-[#A3A3A3] text-sm"
            />
            <img
              className="absolute top-[50%] translate-y-[-50%] left-2"
              src={search}
              alt=""
            />
          </div>

          {/* left part with graph and orders */}
          <div className="flex h-full gap-4  w-[100%] justify-center -1200:flex-col">
            <Graph />
            <AllStats />
          </div>

          {/* Right part with order graph and platform  */}
          <div className="flex h-full gap-4 w-[100%] justify-center -1200:flex-col">
            <Orders />
            <Platforms />
          </div>
        </div>
      </div>
    </div>
  );
}
