import { certificates } from "../constant/data.js";
import { RiStarFill } from "@remixicon/react";

function Certificates() {
  return (
    <section className="pt-20" id="testimonials">
      <div className="container">
        {/* Title */}
        <div>
          <h2 className="section-title">Certificates</h2>
        </div>

        {/* Wrapper */}
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <div
              key={c.id}
              className="group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-zinc-900 hover:shadow-2xl transition"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4 text-lg font-semibold">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
