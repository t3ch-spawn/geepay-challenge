import React, { useEffect } from "react";
import Card from "./reusables/Card";
import view from "../assets/orders-view.svg";
import marcus from "../assets/marcus.svg";
import jaydon from "../assets/jaydon.svg";
import corey from "../assets/corey.svg";
import cooper from "../assets/cooper.svg";
import phillip from "../assets/phillip.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const orders = [
  {
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
    img: marcus,
  },
  {
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
    img: jaydon,
  },
  {
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
    img: corey,
  },
  {
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
    img: cooper,
  },
  {
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
    img: phillip,
  },
];

export default function Orders() {
  return (
    <Card styles="w-full flex flex-col justify-between gap-6  max-w-[900px] -1200:max-w-[initial] overflow-auto orders_container">
      {/* Top part of the orders */}
      <div className="flex justify-between w-full ">
        <p className="text-xl font-semibold">Last Orders</p>

        <p className="text-[#34CAA5] font-medium cursor-pointer">See All</p>
      </div>

      {/* Bottom part, containing the details of the order */}
      <div className="flex-col flex gap-4 overflow-x-scroll bottom-order">
        {/* Container for heading */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[minmax(220px,_1fr)_repeat(3,_minmax(140px,_1fr))_70px] gap-2 text-[#9CA4AB] font-medium">
            <p>Name</p>
            <p>Date</p>
            <p>Amount</p>
            <p>Status</p>
            <p>Invoice</p>
          </div>

          <div className="w-full h-[2px] bg-[#EDF2F6] dark:bg-gray-700"></div>
        </div>

        {/* The orders */}
        {orders.map((order, idx, arr) => {
          return (
            <div key={idx} className="flex flex-col gap-4">
              <EachOrder
                name={order.name}
                date={order.date}
                amount={order.amount}
                img={order.img}
                status={order.status}
              />

              {arr.length - 1 == idx ? (
                ""
              ) : (
                <div className="w-full h-[2px] bg-[#EDF2F6] dark:bg-gray-700"></div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function EachOrder(props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

  }, []);
  return (
    <div className="grid grid-cols-[minmax(220px,_1fr)_repeat(3,_minmax(140px,_1fr))_70px] items-start justify-items-start gap-2">
      {/* Name container */}
      <div className="order-item flex gap-3 items-center">
        <img src={props.img} className="max-w-[30px]" alt="" />
        <p className="font-medium text-[#3A3F51] dark:text-white">{props.name}</p>
      </div>

      {/* Date container */}
      <p className="order-item font-[400]">{props.date}</p>

      {/* Amount container */}
      <p className="order-item font-medium text-[#0D062D] dark:text-white">{props.amount}</p>

      {/* Status container */}
      <p
        className={`${
          props.status == "Refund" ? "text-[#ED544E]" : "text-[#34CAA5]"
        } font-[400] order-item `}
      >
        {props.status}
      </p>

      {/* Invoice container */}
      <div className="order-item cursor-pointer flex items-center gap-2">
        <img src={view} alt="" className="svg-icon" />
        <p className="font-[400] text-[#0D062D] dark:text-white text-sm">View</p>
      </div>
    </div>
  );
}
