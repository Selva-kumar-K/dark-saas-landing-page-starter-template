"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo", key: "1" },
  { src: quantumLogo, alt: "Quantum Logo", key: "2" },
  { src: echoLogo, alt: "Echo Logo", key: "3" },
  { src: celestialLogo, alt: "Celestial Logo", key: "4" },
  { src: pulseLogo, alt: "Pulse Logo", key: "5" },
  { src: apexLogo, alt: "Apex Logo", key: "6" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white">
      <div className="py-[72px] sm:py-24">
        <h1 className="text-white/70 text-center text-xl">
          Trusted by the world's most innovative teams
        </h1>
        <div className="pt-[36px]">
          <div className="flex gap-[64px] overflow-hidden before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-20 after:w-20 relative  before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
            {images.map(({ src, alt, key }) => (
              <Image
                src={src}
                alt={alt}
                key={key}
                className="w-[148px] h-[32px] flex-none"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
