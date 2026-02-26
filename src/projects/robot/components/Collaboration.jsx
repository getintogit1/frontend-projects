import Section from "./Section.jsx";
import { collabContent, collabText, collabApps } from "../constants/data.js";
import { check, brainwaveSymbol } from "../assets";
import Button from "./Button.jsx";
import { LeftCurve, RightCurve } from "./design/Collaboration.jsx";

function Collaboration() {
  return (
    <Section>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="mb-4 md:mb-8 h2">
            AI Chat App for seamless Collaboration
          </h2>
          {/*Content */}
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  {/*Check Images */}
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="h6 body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>

        {/*Carousel*/}
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 mt-4 lg-w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          {/*Wrapper Outer Cirlce*/}
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            {/*Inner Cirlce*/}
            <div className="flex w-60 aspect-square border border-n-6 rounded-full m-auto">
              <div className="p-[0.2rem] bg-conic-gradient aspect-square m-auto rounded-full w-[4rem] ">
                {/*Logo*/}
                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8 ">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            {/*Carousel*/}
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      src={app.icon}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            {/*Detail Line from button to carousel*/}
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Collaboration;
