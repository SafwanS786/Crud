import React from "react";
export default function Heading({ theme }) {
  return (
    <div
      className={`flex flex-col  text-white gap-4 p-2 md:p-4 rounded-2xl ${
        theme === "light"
          ? "bg-[#7B61FF]"
          : "bg-[#01081d] border border-[#1d2939]"
      }`}
    >
      <span className="text-base sm:text-lg md:text-2xl ">ONLINE COURSE</span>
      <h1 className="text-xs sm:text-sm md:text-xl">
        Sharpen Your Skills with <br />
        Professional Online Courses
      </h1>
    </div>
  );
}
