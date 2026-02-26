import Skills from "./Skills.jsx";
import Timeline from "./Timeline.jsx";

import { aboutMeItems } from "../constant/data.js";
import { ScrollParallax } from "react-just-parallax";

function About() {
  return (
    <section className="pt-20 md:pt-28" id="about">
      <div className="container">
        {/*Title */}
        <div>
          <h2>About Me</h2>
          <p>
            {" "}
            I'm a skilled full-stack engineer with interest in backend
            developement and web-security. On this page,you can learn more about
            my knowledge stack and my previous work experience.
          </p>
        </div>
        {/*Wrapper  */}
        <div className="relative border mt-8 px-8 py-4 rounded-lg border-zinc-300 dard:border-zinc-800">
          <Skills />

          <ScrollParallax isAbsolutelyPositioned>
            <>
              <ul
                className="
      hidden xl:flex
      absolute -right-25 top-1/2 -translate-y-1/2
      px-2 py-2
      !bg-n-2/50 backdrop-blur
      border border-n-1/10 rounded-2xl
      z-20
    gap-3
    "
              >
                {aboutMeItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id} className="flex items-center ">
                      <span>{item.title}</span>
                      <Icon size={22} className="text-blue-600" />
                    </li>
                  );
                })}
              </ul>
            </>
          </ScrollParallax>
          <Timeline />
        </div>
      </div>
    </section>
  );
}

export default About;
