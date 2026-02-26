import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import { benefits } from "../constants/data.js";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

function Benefits() {
  return (
    <Section crosses id="features">
      <div className="container relative z-2">
        {/*heading*/}
        <Heading className="h2" title="Chat Smarter Not Harder" />

        {/*Benefits container*/}
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((b) => (
            //Card container backgorund image = gradient outline
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] overflow-hidden"
              style={{ backgroundImage: `url(${b.backgroundUrl})` }}
              key={b.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                {/*Card HEading*/}
                <h5 className="h5">{b.title}</h5>

                {/*Card Text*/}
                <p className="body-2 mb-6 text-n-3">{b.text}</p>
                <div className="flex items-center mt-auto">
                  {/*Card Icon*/}
                  <img src={b.iconUrl} width={48} height={48} alt={b.title} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {/*If card has property "light" apply gradient backgorund*/}
              {b.light && <GradientLight />}

              {/*Backgorund image visible on Hover*/}
              <div
                className="absolute  bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              ></div>
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                {b.imageUrl && (
                  <img
                    src={b.imageUrl}
                    width={380}
                    height={362}
                    alt={b.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Benefits;
