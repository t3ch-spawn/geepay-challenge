import React from "react";

export default function Card(props) {
  return (
    <div
      className={`${props.styles} border-[#EDF2F7] dark:bg-darkCard dark:border-gray-700  border-[2px] rounded-xl p-4 bg-white relative`}
    >
      {props.children}
    </div>
  );
}
