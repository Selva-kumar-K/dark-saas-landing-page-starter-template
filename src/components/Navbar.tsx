import Image from "next/image";
import Logo from ".././assets/images/logosaas.png";
import Menu from ".././assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-between p-4">
        <div className="relative">
          <div className="w-12 h-14 bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))] blur-md"></div>

          <div className="absolute top-0 bottom-0">
            <Image src={Logo} alt="" className="rounded-lg h-12 w-12" />
          </div>
        </div>

        <div className="border border-white border-opacity-30 rounded-lg p-2 sm:hidden">
          <Menu className="text-white" />
        </div>

        <nav className="hidden sm:flex space-x-6 items-center">
          <a
            href=""
            className="text-white opacity-60 hover:opacity-75 transition"
          >
            About
          </a>
          <a
            href=""
            className=" text-white opacity-60 hover:opacity-75 transition"
          >
            Features
          </a>
          <a
            href=""
            className=" text-white opacity-60 hover:opacity-75 transition"
          >
            Updates
          </a>
          <a
            href=""
            className=" text-white opacity-60 hover:opacity-75 transition"
          >
            Help
          </a>
          <a
            href=""
            className=" text-white opacity-60 hover:opacity-75 transition"
          >
            Customers
          </a>
          <button className="px-3 py-2 bg-white text-black rounded-lg ">
            Get for free
          </button>
        </nav>
      </div>
    </div>
  );
};
