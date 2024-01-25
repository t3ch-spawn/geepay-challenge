import React from "react";
import Sidebar from "./sidebar";
import Header from "./Header";
import Graph from "./Graph";
import Orders from "./Orders";
import AllStats from "./AllStats";
import Platforms from "./Platforms";

export default function Home() {
  return (
    <div className="flex w-full relative bg-[#FAFAFA]">
      {/* The sidebar that's on the extreme left */}
      <div>
        <Sidebar />
      </div>

      {/* Main part of the analytics */}
      <div className="w-full">
        <Header />

        {/* Container of everything else except the header */}
        <div className="flex flex-col gap-4 p-4 justify-center w-full">
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
