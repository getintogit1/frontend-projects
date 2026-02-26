import { useEffect, useState, useRef } from "react";
import { MouseParallax } from "react-just-parallax";

const base = import.meta.env.BASE_URL;
const file02 = base + "portfolio/PlusSvg";
export const Gradient = () => {
  return (
    <>
      <div
        className="relative z-0 h-6 mx-2.5 rounded-b-[1.25rem] shadow-xl
                      !bg-n-11/90 
                      !dark:bg-zinc-900/60 "
      />

      <div
        className="relative z-0 h-6 mx-6 rounded-b-[1.25rem] shadow-xl
                      !bg-n-11/60                       !dark:bg-zinc-900/40  lg:mx-20"
      />
    </>
  );
};
export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-0 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-0 pointer-events-none xl:block" />
    </>
  );
};
