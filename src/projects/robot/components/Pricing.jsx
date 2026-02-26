import Section from "./Section.jsx";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading.jsx";
import PricingList from "./PricingList.jsx";
import { LeftLine, RightLine } from "./design/Pricing";

export default function Pricing() {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/*Sphere Image (only lg devices)*/}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            alt="sphere"
            width={255}
            heigth={255}
          />
          {/*Stars in te backgorund of sphere*/}
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={940}
              heigth={400}
              alt="stars"
            />
          </div>
        </div>
        {/*heading*/}
        <Heading
          className="h2"
          title="Pay Once, Use Forever"
          tag="Get started with brainwave"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/*More details link*/}
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
}
