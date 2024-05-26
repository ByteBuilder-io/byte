"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function ContactBanner() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "BYTE",
    },
    {
      text: "/",
      className: "text-[#72bf80] ",
    },
    {
      text: "BUILDER.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="/contact">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Contact
          </button>
        </a>
      </div>
    </div>
  );
}
