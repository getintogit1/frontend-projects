import Title from "./Title";
import { benefitItems } from "../constants/data.js";

import { RiArrowRightUpLine } from "@remixicon/react";

// Motion
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";

function Benefits() {
  return (
    <section className="section">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/*Title */}
        <Title
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          title="Benefits"
          link="View All"
        />
        {/*Card Wrappe r*/}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {benefitItems.map((item) => (
            // Card
            <motion.div
              variants={variants.fadeInUp}
              className="bg-white p-10 flex-col rounded-xl"
            >
              {/* icon */}
              <div className="bg-orange-75 w-[55] h-24 flex items-center justify-center mx-auto rounded-xl mb-8">
                <img src={item.icon} alt={item.title} width={64} height={64} />
              </div>
              {/* content */}
              <div className="mb-4 text-center space-y-3">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>

              {/*Button */}
              <button className="mt-auto ml-auto border-white-95 w-14 h-14 flex items-center justify-center rounded-md text-orange-50 transition-colors hover:bg-orange-50 hover:text-white">
                <RiArrowRightUpLine size={26} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
