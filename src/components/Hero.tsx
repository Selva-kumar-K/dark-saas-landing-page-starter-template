import ArrowIcon from "../assets/icons/arrow-w.svg";

export const Hero = () => {
  return (
    <div className=" bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] text-white">
      <div className="flex justify-center">
        <div className="mt-8 flex gap-3 border border-white/30 py-1 px-3 rounded-lg">
          <p className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE_100%)] text-transparent bg-clip-text [-webkit-background-clip:text]">
            Version 2.0 is here
          </p>
          <span className="text-white flex items-center">
            Read More
            <ArrowIcon className="text-white ml-[1px]" width="20" />
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <h1 className="text-7xl tracking-tighter font-semibold max-w-[300px]">
          One Task <span>at a Time</span>
        </h1>
      </div>
      <div className="mt-8 flex justify-center text-center">
        <p className="max-w-[330px]">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
      </div>

      <div className="relative">
        <div className="mt-8 text-center">
          <button className="bg-white text-black px-4 py-2 rounded-lg mb-3">
            Get for free
          </button>
        </div>

        <div className="absolute top-20 bg-black max-w-[350px] mx-auto h-screen rounded-[100%] bg[radial-gradient(closest_side,#000_82%,#9560EB)] border-4 border-purple-500 blur-sm">
        </div>
      </div>
    </div>
  );
};
