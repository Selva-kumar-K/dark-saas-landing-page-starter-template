import React from "react";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-black text-white px-[16px] py-[72px] sm:py-[96px] bg-[linear-gradient(to_bottom,#200D42,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] overflow-clip relative">
      <div className="absolute rounded-[100%] h-[375px] sm:w-[1536px] sm:h[768px] w-[750px] lg:w-[2460px] lg:h-[1200px] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="relative">
        <div className="text-center">
          <a
            href=""
            className="border border-slate-50/40 px-3 py-1 rounded-lg inline-flex items-center space-x-[16px]"
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
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="mt-8 text-6xl sm:text-9xl font-bold text-center tracking-tighter leading-[72px]">
              One Task <br></br>at a Time
            </h1>
            <Image
              src={cursorImage}
              alt=""
              className="absolute top-[108px] right-[476px] hidden sm:block"
            />
            <Image
              src={messageImage}
              alt=""
              className="absolute top-[56px] left-[498px] hidden sm:block"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center leading-[22px] mt-[32px] max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-[20px] bg-white rounded-lg py-[10px] hover:bg-slate-200 transition text-black font-semibold">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
