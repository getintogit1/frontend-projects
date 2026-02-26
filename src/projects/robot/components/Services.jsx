import Section from "./Section.jsx";
import Header from "./Header.jsx";
import { service1, service2, service3, check } from "../assets";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import {
  brainwaveServices,
  brainwaveServicesIcons,
} from "../constants/data.js";
import Generating from "./Generating";

function Services() {
  return (
    <Section id="how-to-use" crosses>
      <div className="container">
        <Header
          title="generative AI made for creators"
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="relative">
          {/*Big picture*/}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={service1}
              />
            </div>

            {/*Text right to the picture*/}
            <div className="relative z-1 ml-auto max-w[17rem]">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 text-n-4 mb-[3rem]">
                Brainwave unlocke the potential of AI powered Applications
              </p>
              <ul>
                {brainwaveServices.map((item, i) => (
                  <li
                    className="flex items-start py-4 border-b border-n-5"
                    key={i}
                  >
                    <img src={check} width={24} height={24} />

                    <p className="ml-4 body-2 text-n-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/*Second Service*/}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/*Left Card*/}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded 3xl overflow-hidden">
              {/*Backgorund Image */}
              <div className="abolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  heigth={750}
                  alt="robot"
                />
              </div>

              {/*Text on the picture*/}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-2 text-n-4 mb-[3rem]">
                  Automatically enhance your photos using AI app&appos;s photo
                  editing feature.
                </p>
              </div>
              {/*Chat icon in left window over the picture*/}
              <PhotoChatMessage />
            </div>
            {/*Right part*/}
            <div className="p-4 bg-n-7 overflow-hidden rounded-3xl lg:min-h-[36rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Genertaion</h4>
                <p className="body-2 text-n-4 mb-[3rem]">
                  Worlds most powerfull video gerneration engine!
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, index) => (
                    <li
                      className={` rounded-2xl flex items-center justify-center ${index === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]" : " flex md:w-15 md:h-15 bg-n-6 h-10 w-10"}`}
                      key={index}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center bg-n-7 w-full h-full rounded-[1rem]"
                            : ""
                        }
                      >
                        <img
                          src={icon}
                          width={24}
                          height={24}
                          alt="service Icon"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/*Image on te right*/}
              <div className="relative h-[20rem] bg-n-8 rounded-2xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="scary robot"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
}

export default Services;
