import React, { useEffect } from "react";
import Card from "./reusables/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const platforms = [
  {
    name: "Book Bazaar",
    price: " $2,500,000",
    percent: "+15%",
    color: "#6160DC",
    width: "50%",
  },
  {
    name: "Artisan Aisle",
    price: "$1,800,000",
    percent: "+10%",
    color: "#54C5EB",
    width: "40%",
  },
  {
    name: "Toy Troop",
    price: "$1,200,000",
    percent: "+8%",
    color: "#FFB74A",
    width: "20%",
  },
  {
    name: "XStore",
    price: "$700,000",
    percent: "+5%",
    color: "#FF4A55",
    width: "20%",
  },
];

export default function Platforms() {
  return (
    <Card styles="w-full flex-col justify-between flex gap-5 max-w-[600px] -1200:max-w-[initial] platforms_container">
      {/* Top part with headings */}
      <div className="flex justify-between">
        <p className="text-[#26282C] dark:text-white font-semibold">Top Platform</p>{" "}
        <p className="text-[#34CAA5] font-medium cursor-pointer">See All</p>
      </div>

      <div className="flex flex-col gap-5">
        {/* The rest of the Platforms card */}
        {platforms.map((platform, idx) => {
          return (
            <EachPlatform
              key={idx}
              name={platform.name}
              color={platform.color}
              price={platform.price}
              width={platform.width}
              percent={platform.percent}
            />
          );
        })}
      </div>
    </Card>
  );
}

function EachPlatform(props) {
  useEffect(() => {

  }, []);
  return (
    <div className="flex flex-col gap-3">
      {/* Name */}
      <p className="text-[#22242C] dark:text-white font-semibold">{props.name}</p>

      {/* Bar */}
      <div className="bg-[#F5F5F5] dark:bg-gray-700 h-[10px] w-full rounded-[10px]">
        <div
          className={`h-[100%] rounded-[10px] platform-bar origin-left`}
          style={{ backgroundColor: props.color, width: props.width }}
        ></div>
      </div>

      {/* Price and percent */}
      <div className="flex justify-between items-center font-[400] text-[#525252] dark:text-[#a8a8a8]">
        <p className="">{props.price}</p>
        <p>{props.percent}</p>
      </div>
    </div>
  );
}
