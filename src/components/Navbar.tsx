import Image from "next/image";
import React from "react";
import logoSass from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="px-4 bg-black py-[16px]">
      <div className="flex justify-between items-center">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
          <Image src={logoSass} alt="logo" className="w-10 h-10 relative" />
        </div>
        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden hover:border-opacity-80">
          <MenuIcon className="text-white" />
        </div>

        <nav className="space-x-[24px] hover:text-opacity-30 items-center hidden sm:flex">
          <a href="#" className="text-white hover:text-slate-300 transition">About</a>
          <a href="#" className="text-white hover:text-slate-300 transition">Features</a>
          <a href="#" className="text-white hover:text-slate-300 transition">Updates</a>
          <a href="#" className="text-white hover:text-slate-300 transition">Help</a>
          <a href="#" className="text-white hover:text-slate-300 transition">Customers</a>
          <button className="px-[16px] bg-white rounded-lg py-[10px] hover:bg-slate-200 transition">Get for free</button>
        </nav>
      </div>
    </div>
  );
};
