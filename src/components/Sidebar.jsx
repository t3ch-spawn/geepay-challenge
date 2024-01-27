import React, { useEffect, useRef, useContext, useState } from "react";
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
import { Context } from "../App";
import gsap from "gsap";

const topPics = [
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
  const timeline = useRef();
  const [isMobileSide, setMobileSide] = useContext(Context);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    gsap.set(".sidebar-item", { x: -50, opacity: 0 });
    gsap.set(".sidebar-mobile", { opacity: 0 });
    timeline.current = gsap
      .timeline({ paused: true })
      .to(".sidebar-mobile", {
        width: "100%",
        opacity: 1,
      })
      .to(".sidebar-item", {
        x: 0,
        opacity: 1,
      });
  }, []);

  useEffect(() => {
    isMobileSide ? timeline.current.play() : timeline.current.reverse();
  }, [isMobileSide]);

  const lineEl = useRef();

  function translateLine(e) {
    console.log();
    const top = e.currentTarget
      .querySelector("img")
      .getBoundingClientRect().top;
    const lineHeight = lineEl.current.getBoundingClientRect().height;
    const targetHeight = e.target.getBoundingClientRect().height;
    lineEl.current.style.top = `${top - 20}px`;
  }

  // UseEffect that controls the theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Function that'll toggle the theme
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    const bubbleDesktop = document.querySelector(".theme-bubble_desktop");
    const bubbleMobile = document.querySelector(".theme-bubble_mobile");
    bubbleDesktop.classList.toggle("active");
    bubbleMobile.classList.toggle("active");
  }

  return (
    <>
      <div className="sticky top-0 flex flex-col min-w-[70px] justify-between min-h-[100vh] max-w-[70px] bg-[#F7F8FA] dark:bg-darkSideBar duration-500 border-r-2 border-[#EBECF2] dark:border-gray-700 px-2 pt-5 -1024:hidden">
        {/* Top part of the sidebar */}
        <div className="flex flex-col gap-4 items-center cursor-pointer relative">
          <img src={logo} alt="" />
          {topPics.map((pic, idx) => {
            return (
              <div
                key={idx}
                onClick={translateLine}
                className={`w-fit rounded-[50%] p-2 hover:bg-[#EBECF2] dark:hover:bg-gray-700 duration-200`}
                style={{ backgroundColor: pic.bg }}
              >
                <img src={pic.icon} alt="" className="svg-icon" />
              </div>
            );
          })}

          {/* Container for light and dark toggle */}
          <div
            onClick={toggleTheme}
            className="overflow-hidden flex flex-col gap-4 bg-white dark:bg-gray-700 duration-500 py-3 rounded-[100px] items-center justify-around w-full max-w-[45px] self-center relative"
          >
            <img className=" z-[5]" src={sun} alt="" />
            <img className="svg-moon z-[5]" src={moon} alt="" />
            <div className="theme-bubble_desktop h-[35px] w-[35px] rounded-[50%] bg-[#34CAA5]  flex items-center justify-center absolute z-[3] bottom-[57%]"></div>
          </div>
          <img
            ref={lineEl}
            className="absolute right-[-8px] top-16 duration-200 ease-in-out"
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
                className={`w-fit rounded-[50%] p-2 hover:bg-[#EBECF2] dark:hover:bg-gray-700 duration-200`}
                style={{ backgroundColor: pic.bg }}
              >
                <img src={pic.icon} alt="" className="svg-icon" />
              </div>
            );
          })}
        </div>
      </div>

      {/* container the mobile view */}
      <div
        className={`sidebar-mobile hidden -1024:flex flex-col justify-around items-center gap-8 fixed top-0 left-0 h-full w-[0%] max-w-[280px]  bg-[#F7F8FA] dark:bg-darkCard z-[30] ${
          isMobileSide ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8">
          {/* Container for top icons in a grid */}
          <div className="overflow-hidden grid grid-cols-2 gap-8 justify-items-center">
            {topPics.map((pic, idx) => {
              return (
                <img
                  key={idx}
                  className="sidebar-item svg-icon"
                  src={pic.icon}
                  alt=""
                />
              );
            })}
          </div>

          {/* Container for light and dark toggle */}
          <div
            onClick={toggleTheme}
            className="overflow-hidden sidebar-item relative flex bg-white dark:bg-gray-700 py-[0.3rem] rounded-[100px] items-center justify-around w-full max-w-[100px] self-center"
          >
            <img className="sidebar-item z-[5]" src={sun} alt="" />
            <img className="sidebar-item svg-moon z-[5]" src={moon} alt="" />
            <div className="theme-bubble_mobile sidebar-item h-[30px] w-[30px] rounded-[50%] z-[3] bg-[#34CAA5] absolute flex items-center justify-center left-[3%]"></div>
          </div>
        </div>

        {/* Container for bottom icons */}

        <div className="overflow-hidden flex flex-wrap gap-8 justify-around">
          {bottomPics.map((pic, idx) => {
            return (
              <img
                key={idx}
                className="sidebar-item svg-icon"
                src={pic.icon}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
