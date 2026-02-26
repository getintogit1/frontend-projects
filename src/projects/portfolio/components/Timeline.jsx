import { timelineItems } from "../constant/data.js";
import { timelineItems2 } from "../constant/data.js";
function Timeline() {
  return (
    <div className="mt-11 space-y-8">
      {/*Title*/}
      <div>
        <h3>Work History</h3>
        <p>
          Below you will find a summary of my past employment experience. If you
          want to see you can{" "}
          <a
            href="#"
            className="border-b hover:border-emerald-600 transition-colors hover:text-emerald-600 "
          >
            Download my resume
          </a>
        </p>
      </div>

      {/*Wrapper*/}
      <div className="grid md:grid-cols-2 gap-10 ">
        {/*Left*/}
        <div className="border-l border-zinc-300 dark_border-zinc-900 space-y-4">
          {timelineItems.map((item) => (
            <div key={item.id} className="space-y-2 pl-7 relative">
              {/*Rounded Point*/}
              <div className=" absolute -left-2.5 top-1.4 bg-emerald-700/40 size-5 rounded-full flex items-center justify-center animate-pulse">
                <span className="size-2.5 bg-emerald-600 rounded-full block" />
              </div>

              <h3>{item.title}</h3>
              <div className="flex flex-wrap items-center gap-4 divide-x divide-zinc-700 dark:divide-zinc-200">
                {item.list.map((label, index) => (
                  <p className="pr-3" key={index}>
                    {label}
                  </p>
                ))}
              </div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>

        {/*Right*/}
        <div className="border-l border-zinc-300 dark_border-zinc-900 space-y-20 ">
          {timelineItems2.map((item) => (
            <div key={item.id} className="space-y-4 pl-9 relative ">
              {/*Rounded Point*/}
              <div className=" absolute -left-2.5 top-1.4 bg-blue-700/40 size-5 rounded-full flex items-center justify-center animate-pulse">
                <span className="size-2.5 bg-blue-600 rounded-full block" />
              </div>

              <h3>{item.title}</h3>
              <div className="flex flex-wrap items-center gap-4 divide-x divide-zinc-700 dark:divide-zinc-200">
                {item.list.map((label, index) => (
                  <p className="pr-3" key={index}>
                    {label}
                  </p>
                ))}
              </div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
