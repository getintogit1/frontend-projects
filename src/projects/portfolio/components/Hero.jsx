import { heroItems, heroBtns } from "../constant/data.js";
import Generating from "./Generating.jsx";
import HeroIntro from "./HeroIntro.jsx";
import { useRef } from "react";
import ClickForEffect from "./ClickForEffect.jsx";
import { Gradient } from "./design/Hero";

import { ScrollParallax } from "react-just-parallax";
const base = import.meta.env.BASE_URL;
function Hero() {
  const ballsLayerRef = useRef(null);
  const rafRef = useRef(null);

  const ballsRef = useRef([]);

  const handleMouseMove = (e) => {
    const el = ballsLayerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      for (const node of ballsRef.current) {
        if (!node) continue;
        const v = Number(node.dataset.value) || 0;
        const base = node.dataset.base || "translate(-50%, -50%)";
        node.style.transform = `${base} translate3d(${relX * v * 10}px, ${relY * v * 10}px, 0)`;
      }
    });
  };

  const handleMouseLeave = () => {
    const el = ballsLayerRef.current;
    if (!el) return;
    //el.querySelectorAll("[data-value]").forEach((node) => {
    //  node.style.transform =
    //    node.getAttribute("data-base") || "translate(-50%, -50%)";
    //});
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/*  Background layer */}
      <ClickForEffect containerRef={ballsLayerRef} ballsRef={ballsRef} />

      {/* Content layer */}
      <div className="relative z-20  container">
        {" "}
        <div className="grid gap-14 md:grid-cols-2 md:items-center  backdrop-blur-md">
          {/*Content*/}

          <div>
            <HeroIntro />

            <h1 className="text-2xl my-[10px_16px]">
              Full Stack Developer & Creative Problem Solver
            </h1>
            <p>
              Passionate full stack Developer with 3+years of experience
              Building scalable web applications.
            </p>
          </div>
          {/*Image*/}
          <div className="w-2xs h-72 rounded-full overflow-hidden mx-auto lg:mx-0">
            <img
              src={base + "/portfolio/hero-img.png"}
              alt="hero image"
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/*Wrapper */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center md:divide-x divide-zinc-200 mt-3 gap-5 dark:divide-zinc-200">
          {heroItems.map((item) => (
            <div key={item.id} className="flex gap-2">
              <span className="size-10 flex bg-zinc-100 items-center justify-center rounded-full border border-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-900">
                <item.icon size={26} />
              </span>
              <div className="space-y-1">
                <h2 className="text-lg">{item.subtitle}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/*Hero Btns*/}
        <div className="flex flex-col gap-4 mt-8 sm:flex-row ">
          {heroBtns.map((item) => (
            <button
              key={item.id}
              className="btn border-emerald-700 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:-z-10 before:scale-y-0 hover:before:scale-y-100 before:transition-transform  before:bg-emerald-600 hover:text-zinc-100 backdrop-blur-md"
            >
              <span>
                <item.icon />
              </span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
