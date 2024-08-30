import React from "react";
import ArrowIcon from "../assets/icons/arrow-w.svg";

export const Hero = () => {
  return (
    <div className="bg-black text-white px-[16px] py-[72px] bg-[linear-gradient(to_bottom,#200D42,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
      <div className="">
        <div className="text-center">
          <a
            href=""
            className="border border-opacity-30 px-3 py-1 rounded-lg inline-flex items-center space-x-[16px]"
          >
            <span className="text-transparent bg-clip-text [webkit-background-clip:text] bg-[linear-gradient(to_right,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE_100%)]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-[10px]">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>

        <h1 className="mt-8 text-7xl font-bold text-center tracking-tighter leading-[72px]">
          One Task at a Time
        </h1>
        <p className="text-center leading-[22px] mt-[32px]">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex justify-center mt-8">
          <button className="px-[20px] bg-white rounded-lg py-[10px] hover:bg-slate-200 transition text-black font-semibold">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
