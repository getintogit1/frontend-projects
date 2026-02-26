import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import { grid, check2, loading1 } from "../assets";
import Tagline from "./Tagline.jsx";
import { roadmap } from "../constants/data.js";

function Roadmap() {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading
          className="h2"
          tag="Ready to get Started"
          title="What we are Working on"
        />
        {/*Container for roadmap elements*/}
        <div className="relative grid gap-6 md:grid-cols-2 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In Progress";
            return (
              //*Background 4x Cards*

              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"} `}
              >
                {/*Second div for layout*/}
                <div className="relative p-7 bg-n-8 rounded-[2rem] overflow-hidden ">
                  {/*absolute position the grid*/}
                  <div className="absolute top-0 left-0 max-w-full">
                    {/*Grid Background*/}
                    <img
                      src={grid}
                      className="w-full h-full"
                      alt="grid"
                      width={550}
                      height={550}
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      {/*Roadmap Status Images*/}
                      <div className="flex items-center px-4 py-1 bg-conic-gradient text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className="mr-2.5"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    {/*Most Important Image*/}
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={640}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="mb-4 h4">{item.title}</h4>
                    <p className="body-2 text-n-3">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Roadmap;
