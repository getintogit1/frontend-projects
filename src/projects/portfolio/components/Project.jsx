import { projectsItems } from "../constant/data.js";
import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";

function Project() {
  return (
    <section id="projects" className="min-h-screen scroll-mt-24">
      <div className="container pt-20">
        {/*Title*/}
        <div>
          <h2 className="section-title">Projects</h2>
          <p className="max-w-lg">
            Explore a selection of my recent work, showcasing innovative
            solutions and creative implementations across various technologies.
          </p>
        </div>

        {/*Wrapper*/}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          {projectsItems.map((item) => (
            <div
              key={item.id}
              className="border border-zinc-300 rounded-md overflow-hidden bg-zinc-100/40 dark:border-zinc-800 dark:bg-zinc-900/40 !hover:border-emerald-600/50 hover:shadow-lg hover:shadow-emerald/600/10 transition-all group"
            >
              {/*Image*/}

              <div className="overflow-hidden relative aspect-video">
                <img
                  src={item.img}
                  alt={item.label}
                  className=" w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {/*Overlay*/}
                <div className="absolute inset-0 bg-black/60 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition.opacity">
                  <a
                    href={item.link}
                    target="_blank"
                    className="size-12 flex items-center bg-emerald-600 rounded-full justify-center hover:bg-emerald-700 transition-colors"
                  >
                    {/*
                      <RiExternalLinkLine />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="size-12 flex items-center bg-white rounded-full justify-center hover:bg-zinc-200 transition-colors"
                  >
*/}{" "}
                    <RiGithubFill />
                  </a>
                </div>
              </div>

              {/*Content*/}
              <div>
                <h3 className="text-xl group-hover:text-emerald-600 pt-2 transition-colors">
                  {item.title}
                </h3>
                <p className="line-clamp-2 hover:line-clamp-none">
                  {item.text}
                </p>
                {/*tags*/}
                <div className="flex gap-2 pt-2 flex-wrap">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 text-sm bg-emerald-600/10 rounded-full border border-emerald-600/20 text-emerald-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
