import React, { useEffect, useState } from "react";
import arrDown from "../assets/arrow-down.svg";
import graphLines from "../assets/graph-lines.png";
import gsap from "gsap";
import Card from "./reusables/Card";
import shape from "../assets/graph-shape.svg";

const prices = ["50.000", "40.000", "30.000", "20.000", "10.000", "5.000", "0"];
const graphContent = [
  {
    bg: "#34caa51a",
    month: "Jan",
    height: 12,
  },
  {
    bg: "#34caa51a",
    month: "Feb",
    height: 20,
  },
  {
    bg: "#34caa51a",
    month: "Mar",
    height: 6,
  },
  {
    bg: "#34caa51a",
    month: "Apr",
    height: 27,
  },
  {
    bg: "#34caa51a",
    month: "Mei",
    height: 13,
  },
  {
    bg: "#34caa51a",
    month: "Jun",
    height: 36,
  },
  {
    bg: "#34caa51a",
    month: "Jul",
    height: 13,
  },
  {
    bg: "#34caa51a",
    month: "Aug",
    height: 22,
  },
  {
    bg: "#34caa51a",
    month: "Sep",
    height: 30,
  },
  {
    bg: "#34caa51a",
    month: "Okt",
    height: 8,
  },
  {
    bg: "#34caa51a",
    month: "Nov",
    height: 28,
  },
  {
    bg: "#34caa51a",
    month: "Des",
    height: 25,
  },
];

export default function Graph() {
  const [isGraphModalShown, setIsGraphModalShown] = useState(false);
  const [periodicState, setPeriodicState] = useState("Weekly");

  function handleGraphModal() {
    setIsGraphModalShown(!isGraphModalShown);
  }

  function updatePeriod(e) {
    const period = e.currentTarget.textContent;
    setPeriodicState(period);
  }

  return (
    <Card styles="relative flex flex-col justify-between gap-5 w-full max-w-[900px] -1200:max-w-[initial]">
      {/* Top part of the graph */}
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold -450:text-sm">Sales Trends</p>

        {/* Sort container */}
        <div className="flex text-sm items-center gap-4">
          <p className="font-medium -450:hidden">Sort by:</p>
          <div
            className={`${
              isGraphModalShown ? "active" : ""
            } graph-sortBox relative cursor-pointer flex border-[#E1DFDF]  dark:border-gray-700  border-[1px] items-center gap-2 rounded-[20px] p-2 px-4 -450:text-xs`}
            onClick={handleGraphModal}
          >
            <p className="font-[400]">{periodicState}</p>
            <img src={arrDown} className="svg-icon" alt="" />

            {/* Container for dropdown */}
            <div className="graph-modal flex flex-col gap-3  absolute bg-white dark:bg-darkCard shadow-2xl top-[140%] w-full border-[1px] border-[#E1DFDF] dark:border-gray-700 p-3 rounded-2xl left-0 origin-top">
              <p onClick={updatePeriod}>Yearly</p>
              <p onClick={updatePeriod}>Monthly</p>
              <p onClick={updatePeriod}>Weekly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom part of the graph */}
      <div className="flex gap-4 w-full relative">
        {/* Left side with the prices */}
        <div className="flex flex-col gap-6 ">
          {prices.map((price, idx) => {
            return (
              <p key={idx} className="text-[#9E9E9E] font-semibold text-sm">
                {price}
              </p>
            );
          })}
          <div className="h-[25px] w-full"></div>
        </div>

        {/* Right side with the bars */}
        <div className="w-full flex -700:overflow-x-scroll">
          {" "}
          <div className="graph-sheet flex w-full -700:overflow-x-scroll overflow-hidden -650:w-[initial] relative -1024:gap-3 justify-around -700:justify-start  ">
            {graphContent.map((bar, idx) => {
              return (
                <EachBar key={idx} month={bar.month} height={bar.height} />
              );
            })}

            <img
              className="absolute w-[200%] h-full bottom-14 -700:bottom-[3.3rem] left-0 object-cover z-[2]"
              src={graphLines}
              alt=""
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

function EachBar(props) {
  return (
    <div className="flex flex-col w-[33px] -650:w-[25px] gap-8 z-[5] cursor-pointer graph-bar_container h-full justify-end relative">
      {/* Shape showing price */}
      {props.month == "Jun" ? (
        <div className="june-shape bg-black dark:bg-white w-[100px] h-[30px] rounded-[7px] absolute top-[0px] left-[50%] translate-x-[-50%] dark:text-black font-[500] text-white flex justify-center items-center ">
          <p className="z-[14] relative w-full h-full flex justify-center items-center text-xs ">
            {" "}
            $45.000
          </p>
          <div
            className="bg-black dark:bg-white w-[30px] h-[15px] absolute bottom-[-6px]"
            style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
          ></div>
        </div>
      ) : (
        ""
      )}

      {/* //////////////////// */}
      <div
        className={`${
          props.month == "Jun" ? "active" : ""
        } graph-bar w-full  bg-[#34caa51a] rounded-t-2xl hover:bg-[#34caa5] origin-bottom`}
        data-height={props.height}
        style={{
          height: `${Math.floor((props.height / 50) * 100)}%`,
        }}
      ></div>
      <p className="text-[#9E9E9E] font-semibold -700:text-sm">{props.month}</p>
    </div>
  );
}
