//import { heroLogos } from "../constants/data.js";
import { RiPlayFill } from "@remixicon/react";
import Marquee from "react-fast-marquee";
import { heroLogos } from "../constants/data.js";

const base = import.meta.env.BASE_URL;
// Motion
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";

function Hero() {
  return (
    <section>
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* content*/}
        <div className="mt-[50px] md:mt-20 text-center">
          <div className="relative max-w-max mx-auto pt-8 pl-8 ">
            <motion.span
              variants={variants.fadeInUp}
              className="absolute top-0 left-0"
            >
              <img
                src={base + "/easylearn/shape-1.png"}
                alt="title shape"
                width={39}
                height={43}
              />
            </motion.span>

            <motion.div
              variants={variants.fadeInUp}
              className="flex items-center bg-white border-white-95 rounded-lg p-3.5 justify-center gap-2.5 max-w-max mx-auto flex-wrap text-center"
            >
              <span className="">
                <img
                  src={base + "/easylearn/shape-2.png"}
                  alt="title shape"
                  width={48}
                  height={48}
                />
              </span>
              <h1 className="text-2xl md:text-4xl text-center">
                <span className="text-green-50">Unlock</span> Your Creative
                Potential
              </h1>
            </motion.div>
          </div>
          <motion.p
            variants={variants.fadeInUp}
            className="text-2xl font-medium mt-4 md:text-[280]"
          >
            with Online Design and Development Courses.
          </motion.p>
          <motion.p variants={variants.fadeInUp}>
            Learn from Industry Experts and Enhance Your Skills.
          </motion.p>

          {/* Button Wrapper*/}
          <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
            <motion.button
              variants={variants.fadeInUp}
              className="primary-btn max-sm:w-[80%]"
            >
              Explore Courses
            </motion.button>
            <motion.button
              variants={variants.fadeInUp}
              className="secondary-btn max-sm:w-[80%]"
            >
              View Pricing
            </motion.button>
          </div>

          {/*Clients Logo*/}
          <motion.div
            variants={variants.fadeIn}
            className="mt-8 lg:mt-[100px] relative overflow-hidden"
          >
            <Marquee pauseOnHover={true}>
              {heroLogos.map((logo) => (
                //Logo
                <div className="px-14 py-5" key={logo.id}>
                  <img
                    src={logo.item}
                    alt="logo"
                    width={logo.width}
                    height={28}
                  />
                </div>
              ))}
            </Marquee>
            {/*Left Gradient*/}
            <div className="absolute  top-0 right-0 bg-gradient-to-l from-white--97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none" />

            {/*Right Gradient*/}
            <div className="absolute  top-0 left-0 bg-gradient-to-r from-white--97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none" />
          </motion.div>
        </div>

        {/* Banner*/}

        <motion.figure
          variants={variants.fadeIn}
          className="relative rounded-xl overflow-hidden mt-10 md:mt-14 lg:mt-[50px] max-w-[920px] w-full h-[500px] mx-auto "
        >
          <img
            src={base + "easylearn/hero-banner.png"}
            alt="hero-banner"
            width={940}
            height={500}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay*/}
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/*Play Button */}

          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2cursor-pointer">
            <span className="flex bg-white w-16 h-16 items-center justify-center rounded-full play-btn">
              <RiPlayFill size={30} />
            </span>
          </div>
        </motion.figure>
      </motion.div>
    </section>
  );
}

export default Hero;
