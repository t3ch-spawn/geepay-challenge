import React, { useEffect } from "react";
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
  return (
    <Card styles="relative flex flex-col justify-between gap-5 w-full max-w-[900px] -1200:max-w-[initial]">
      {/* Top part of the graph */}
      <div className="flex justify-between">
        <p className="text-xl font-semibold">Sales Trends</p>

        {/* Sort container */}
        <div className="flex text-sm items-center gap-4">
          <p className="font-medium">Sort by:</p>
          <div className="flex border-[#E1DFDF] border-[1px] items-center gap-2 rounded-[20px] p-2 px-4">
            <p className="font-[400]">Weekly</p>
            <img src={arrDown} alt="" />
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
        <div className="flex relative w-full justify-around overflow-hidden">
          {graphContent.map((bar, idx) => {
            return <EachBar key={idx} month={bar.month} height={bar.height} />;
          })}

          <img
            className="absolute w-full h-full bottom-4 left-0 object-contain z-[2]"
            src={graphLines}
            alt=""
          />
        </div>
      </div>
    </Card>
  );
}

function EachBar(props) {
  useEffect(() => {
    const allBars = document.querySelectorAll(".graph-bar");
    gsap.fromTo(
      allBars,
      {
        scaleY: 0,
      },
      { scaleY: 1, duration: 1, ease: "power3.inOut" }
    );
  }, []);

  return (
    <div className="flex flex-col gap-8 z-[5] cursor-pointer graph-bar_container h-full justify-end relative">
      {props.month == "Jun" ? (
        <div className="bg-black w-[100px] h-[30px] rounded-[7px] absolute top-[0px] left-[50%] translate-x-[-50%] text-white flex justify-center items-center ">
          <p className="z-[14] relative w-full h-full flex justify-center items-center text-xs"> $45.000</p>
          <div
            className="bg-black w-[30px] h-[15px] absolute bottom-[-6px]"
            style={{ clipPath: "polygon(100% 0, 0 0, 50% 100%)" }}
          ></div>
        </div>
      ) : (
        ""
      )}
      <div
        className={`${
          props.month == "Jun" ? "active" : ""
        } graph-bar w-[33px]  bg-[#34caa51a] rounded-t-2xl hover:bg-[#34caa5] origin-bottom`}
        data-height={props.height}
        style={{
          height: `${Math.floor((props.height / 50) * 100)}%`,
        }}
      ></div>
      <p className="text-[#9E9E9E] font-semibold">{props.month}</p>
    </div>
  );
}
