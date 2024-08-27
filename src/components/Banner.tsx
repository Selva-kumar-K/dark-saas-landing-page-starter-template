import React from "react";

export const Banner = () => {
  return (
    <div className="px-[16px] py-[12px] bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))]">
      <div className="text-center">
        <p className="font-medium">
          <span className="hidden sm:inline">Introducing a completely redesigned interface - </span>
          <a href="#" className="underline underline-offset-4">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};
