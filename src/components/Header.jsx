import React, { useEffect, useRef, useState, useContext } from "react";
import search from "../assets/search-icon.svg";
import calendar from "../assets/calendar.svg";
import justin from "../assets/Justin.svg";
import notification from "../assets/notification.svg";
import arrDown from "../assets/header-down.svg";
import gsap from "gsap";
import { Context } from "../App";
import logo from "../assets/logo.svg";

export default function Header() {
  const [isMobileSide, setMobileSide] = useContext(Context);
  const [liveDate, setLiveDate] = useState("");
  const timeline = useRef(null);
  const [modalShowm, setModalShown] = useState(false);
  const [deskModalShowm, setDeskModalShown] = useState(false);
  useEffect(() => {
    // This removes the 'inactive' class on initial mount
    const burger = document.querySelector(".burger");
    burger.classList.remove("inactive");

    gsap.set(".modal-item", {
      opacity: 0,
      x: 40,
    });

    timeline.current = gsap
      .timeline({ paused: true })
      .to(".modal", {
        scaleY: 1,
        ease: "power2.in",
      })
      .to(".modal-item", {
        opacity: 1,
        x: 0,
      });
  }, []);

  useEffect(() => {
    modalShowm ? timeline.current.play() : timeline.current.reverse();
  }, [modalShowm]);

  function handleModal() {
    setModalShown(!modalShowm);
  }

  function handleDeskModal() {
    setDeskModalShown(!deskModalShowm);
  }

  function handleMobileSidebar() {
    setMobileSide(!isMobileSide);
  }

  // Use effect that gets the date
  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const monthName = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const formattedDate = `${monthName} ${day}, ${year}`;
    setLiveDate(formattedDate);
  }, []);

  return (
    <>
      {/* Overlay that pops up when user mobile modal comes up */}
      <div
        className={`fixed top-0 left-0 bg-[transparent] h-full w-full z-[15] ${
          modalShowm ? "block" : "hidden"
        }`}
        onClick={handleModal}
      ></div>
      {/* Overlay that pops up when user desktop modal comes up */}
      <div
        className={`fixed top-0 left-0 bg-[transparent] h-full w-full z-[15] ${
          deskModalShowm ? "block" : "hidden"
        }`}
        onClick={handleDeskModal}
      ></div>

      {/* Overlay that toggles with mobile side bar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-overlay z-[23] duration-[800ms] ${
          isMobileSide
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMobileSidebar}
      ></div>

      {/* Container for hamburger that toggles the icons modal for the sidebar(only shows for mobile) */}
      <div
        onClick={handleMobileSidebar}
        className={`${
          isMobileSide ? "active" : "inactive"
        } burger hidden -1024:flex flex-col fixed left-2 top-3  justify-center  items-center gap-2 h-[40px] w-[40px] rounded-[50%] cursor-pointer z-[50] overflow-hidden`}
      >
        <div className="line-1 bg-black dark:bg-white h-[2px] border-none absolute w-[50%] rounded-md translate-y-[-4px]"></div>
        <div className="line-2 bg-black dark:bg-white h-[2px] border-none absolute w-[50%] rounded-md translate-y-[4px]"></div>
      </div>

      {/* Container for desktop header */}
      <div className="font-inter sticky top-0 flex justify-between items-center w-full px-8 py-3 bg-[#FAFAFA] dark:bg-darkBg duration-500 dark:border-gray-700 border-b-2 border-[#E5EAEF] z-20">
        {/* Left part of the dashboard */}
        <div className="font-semibold flex items-center gap-2 justify-center -1024:w-full">
          {/* This image only appears on mobile */}
          <img src={logo} alt="" className="hidden -1024:flex max-w-[30px]" />
          Dashboard
        </div>

        {/* Right part of the dashboard that has search, date, user detail */}
        <div className="flex gap-6 w-[85%] justify-end items-center -1024:hidden">
          {/* Search Container */}
          <div className="relative w-full max-w-[400px]">
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

          {/* Date container */}
          <div className="flex max-w-[200px] items-center w-fit gap-2 font-medium">
            <img src={calendar} className="min-w-[25px]" alt="" />

            <p className="text-sm font-[600] text-[#26282C] dark:text-white">
              {liveDate}
            </p>
          </div>

          {/* Notification container */}
          {/* <div className="flex items-center h-[25px] w-[30px] border-2 border-black rounded-[50%]">
        </div> */}
          <img
            className="w-full p-2 border-[#DADDDD] border-[1px] rounded-[50%] max-w-[35px] svg-icon"
            src={notification}
            alt=""
          />

          {/* Container for user */}
          <div
            onClick={handleDeskModal}
            className="border-[#DADDDD] dark:border-gray-700 w-full max-w-[220px] border-[1px] rounded-[100px] flex p-[0.1rem] px-3 items-center gap-2 cursor-pointer"
          >
            <img src={justin} alt="" />
            <div className="font-[400] text-center">
              <p className="text-[#26282C] dark:text-white text-[1rem] font-[500]">
                Justin Bergson
              </p>
              <p className="text-[#787486] text-sm font-[500] dark:text-[#a8a8a8]">
                Justin@gmail.com{" "}
              </p>
            </div>
            <img
              src={arrDown}
              className={`${
                deskModalShowm ? "active" : ""
              } header-arr max-w-[25px] svg-icon`}
              alt=""
            />

            {/* Container for drop down */}
            <div
              className={`${
                deskModalShowm ? "active" : ""
              } font-inter desk-modal origin-top overflow-hidden absolute flex -1024:hidden flex-col items-start gap-3 bg-white dark:bg-darkCard z-[30] p-5 top-[60px] dark:border-gray-700 border-[#EDF2F7] border-[1px] right-[20px] shadow-xl rounded-xl scale-y-1`}
            >
              <p>Profiles</p>
              <p>Teams</p>
              <p>Billing</p>
              <p>Switch Account</p>
            </div>
          </div>
        </div>

        {/* container that controls the mobile view */}
        <div
          onClick={handleModal}
          className="gap-3 border-[#DADDDD] dark:border-gray-700 rounded-[100px] border-[1px] p-1 cursor-pointer hidden -1024:flex"
        >
          <img src={justin} className="max-w-[30px]" alt="" />
        </div>

        {/* Container for modal */}
        <div className="font-inter modal origin-top overflow-hidden absolute hidden -1024:flex flex-col items-start gap-4 bg-white dark:bg-darkCard z-[30] p-5 top-[60px] dark:border-gray-700 border-[#EDF2F7] border-[1px] right-[20px] shadow-xl rounded-xl scale-y-0">
          {/* Container for name, mail and picture */}
          <div className="modal-item flex items-center gap-3 ">
            <img src={justin} className="max-w-[30px]" alt="" />
            <div className="font-[400]">
              <p className="text-[#26282C] dark:text-white text-[1rem] font-[500]">
                Justin Bergson
              </p>
              <p className="text-[#787486] dark:text-[#a8a8a8] text-sm font-[500]">
                Justin@gmail.com{" "}
              </p>
            </div>
          </div>
          <p className="modal-item">Profiles</p>
          <p className="modal-item">Teams</p>
          <p className="modal-item">Billing</p>
          <p className="modal-item">Switch Account</p>
          {/* Container for date */}
          <div className="modal-item flex max-w-[200px] items-center w-fit gap-2 font-medium">
            <img src={calendar} className="min-w-[25px] svg-icon" alt="" />

            <p className="text-sm font-[600] text-[#26282C] dark:text-white">
              {liveDate}
            </p>
          </div>

          {/* Container for notification */}
          <img
            className="modal-item w-full p-2 border-[#DADDDD] border-[1px] rounded-[50%] max-w-[35px] svg-icon"
            src={notification}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
