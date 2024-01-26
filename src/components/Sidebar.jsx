import React, { useEffect, useRef, useContext } from "react";
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

  return (
    <>
      <div className="sticky top-0 flex flex-col min-w-[70px] justify-between min-h-[100vh] max-w-[70px] bg-[#F7F8FA] border-r-2 border-[#EBECF2] px-2 pt-5 -1024:hidden">
        {/* Top part of the sidebar */}
        <div className="flex flex-col gap-4 items-center cursor-pointer relative">
          <img src={logo} alt="" />
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

          {/* Container for light and dark toggle */}
          <div className="overflow-hidden flex flex-col gap-3 bg-white py-2 rounded-[100px] items-center justify-around w-full max-w-[100px] self-center">
            <img className="" src={moon} alt="" />
            <div className=" h-[30px] w-[30px] rounded-[50%] bg-[#34CAA5]  flex items-center justify-center">
              <img className="" src={sun} alt="" />
            </div>
          </div>
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

      {/* container the mobile view */}
      <div
        className={`sidebar-mobile hidden -1024:flex flex-col justify-around items-center gap-8 fixed top-0 left-0 h-full w-[0%] max-w-[280px]  bg-[#F7F8FA] z-[30] ${
          isMobileSide ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8">
          {/* Container for top icons in a grid */}
          <div className="overflow-hidden grid grid-cols-2 gap-8 justify-items-center">
            {topPics.map((pic, idx) => {
              return (
                <img key={idx} className="sidebar-item" src={pic.icon} alt="" />
              );
            })}
          </div>

          {/* Container for light and dark toggle */}
          <div className="overflow-hidden flex bg-white py-2 rounded-[100px] items-center justify-around w-full max-w-[100px] self-center">
            <img className="sidebar-item" src={moon} alt="" />
            <div className="sidebar-item h-[30px] w-[30px] rounded-[50%] bg-[#34CAA5]  flex items-center justify-center">
              <img className="" src={sun} alt="" />
            </div>
          </div>
        </div>

        {/* Container for bottom icons */}

        <div className="overflow-hidden flex flex-wrap gap-8 justify-around">
          {bottomPics.map((pic, idx) => {
            return (
              <img key={idx} className="sidebar-item" src={pic.icon} alt="" />
            );
          })}
        </div>
      </div>
    </>
  );
}
