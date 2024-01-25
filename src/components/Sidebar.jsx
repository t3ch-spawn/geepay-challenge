import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import shipBox from "../assets/shipment_box.svg";
import discount from "../assets/discount-shape.svg";
import category from "../assets/category.svg";
import info from "../assets/info-circle.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import trend from "../assets/trend-up.svg";
import profile from "../assets/profile-2user.svg";
import line from "../assets/side-line.svg";
import right from "../assets/sidebar-right.svg";
import logout from "../assets/logout.svg";
import settings from "../assets/settings.svg";

const topPics = [
  {
    icon: logo,
    bg: "",
  },
  {
    icon: category,
    bg: "",
  },
  {
    icon: trend,
    bg: "",
  },
  {
    icon: profile,
    bg: "",
  },
  {
    icon: shipBox,
    bg: "",
  },
  {
    icon: discount,
    bg: "",
  },
  {
    icon: info,
    bg: "",
  },
  {
    icon: sun,
    bg: "#34CAA5",
  },
  {
    icon: moon,
    bg: "",
  },
];

const bottomPics = [
  {
    icon: right,
  },
  {
    icon: settings,
  },
  {
    icon: logout,
  },
];

export default function Sidebar() {
  const lineEl = useRef();

  function translateLine(e) {
    console.log();
    const top = e.currentTarget
      .querySelector("img")
      .getBoundingClientRect().top;
    const lineHeight = lineEl.current.getBoundingClientRect().height;
    const targetHeight = e.target.getBoundingClientRect().height;
    console.log(e.target.getBoundingClientRect());
    lineEl.current.style.top = `${top - 20}px`;
  }

  return (
    <div className="sticky top-0 flex flex-col min-w-[70px] justify-between min-h-[100vh] max-w-[70px] bg-[#F7F8FA] border-r-2 border-[#EBECF2] px-2 pt-5 -1024:hidden">
      {/* Top part of the sidebar */}
      <div className="flex flex-col gap-1 items-center cursor-pointer relative">
        {topPics.map((pic, idx) => {
          return (
            <div
              key={idx}
              onClick={translateLine}
              className={`w-fit rounded-[50%] p-2 hover:bg-[#EBECF2] duration-200`}
              style={{ backgroundColor: pic.bg }}
            >
              <img src={pic.icon} alt="" />
            </div>
          );
        })}
        <img
          ref={lineEl}
          className="absolute right-[-9px] top-16 duration-200 ease-in-out"
          src={line}
          alt=""
        />
      </div>

      {/* Bottom part of the sidebar */}
      <div className="flex flex-col gap-1 items-center cursor-pointer relative mb-8">
        {bottomPics.map((pic, idx) => {
          return (
            <div
              key={idx}
              // onClick={translateLine}  
              className={`w-fit rounded-[50%] p-2 hover:bg-[#EBECF2] duration-200`}
              style={{ backgroundColor: pic.bg }}
            >
              <img src={pic.icon} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
