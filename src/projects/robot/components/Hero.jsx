import Section from "./Section.jsx";
import { curve } from "../assets/";
import { robot } from "../assets/";
import { heroBackground } from "../assets/";
import Button from "./Button.jsx";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants/data.js";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating.jsx";
import Notification from "./Notification.jsx";
import CompanyLogos from "./CompanyLogos.jsx";

function Hero() {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative ">
              Brainwave
              <img
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
                src={curve}
              />
            </span>
          </h1>
          <p className="body-1 maw--3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI witin Brainwave. Upgrade your Productivity
            with brainwave, the ope AI chat app.
          </p>
          <Button hrer="/pricing" white>
            Get Started
          </Button>
        </div>
        {/*Rest of Hero Section*/}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[21%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating
                  className="
    absolute left-4 right-4 bottom-5
    md:left-1/2 md:right-auto md:bottom-8
    md:w-[31rem] md:-translate-x-1/2
  "
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => {
                      return (
                        <li className="p-5" key={index}>
                          <img src={icon} width={25} height={25} alt={icon} />
                        </li>
                      );
                    })}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] lg:flex bottom-[11rem] w-[18rem] "
                    title="Code Generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] -z-10 left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%]  md:w-[138%] lg:-top-[104%]">
            <img
              width={1440}
              height={1800}
              src={heroBackground}
              className="w-full"
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
        <div className="z-2">
          <CompanyLogos />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
}

export default Hero;
