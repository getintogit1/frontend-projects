import Title from "./Title";
import { coursesSecItems } from "../constants/data.js";

import { motion } from "motion/react";
import * as variants from "../motion/animation.js";

function Courses() {
  return (
    <section>
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <Title
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          title="Our Courses"
          link="View All"
        />

        {/*Card Wrapper*/}
        <div className="grid gap-5 lg:grid-cols-2 mt-8 lg:mt-16">
          {coursesSecItems.map((item) => (
            <motion.div
              variants={variants.fadeIn}
              className="bg-white p-7 lg:p-10 rounded-xl"
              key={item.id}
            >
              <div>
                <img
                  src={item.img}
                  alt={item.title}
                  width={560}
                  height={266}
                  className="w-full h-full object-cover rounded-[10px] "
                />
              </div>
              {/*Content of A card*/}
              <div classsName="mt-6">
                {/*Tags*/}
                <div className="flex items-center flex-wrap">
                  {item.tags.map((tag, index) => (
                    <span
                      className="border border-orange-75 p-2 rounded-md bg-orange-97 mr-2"
                      key={index}
                    >
                      {tag.tag}
                    </span>
                  ))}
                  <p className="ml-auto font-medium"> {item.instructor}</p>
                </div>
                {/*Meta Data*/}

                <div className="my-6 space-y-1.5">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
              {/*Button*/}
              <button className="bg-white-97 w-full p-3.5 rounded-md hover:text-orange-50 hover:border-orange-50 transition border border-white-97">
                Get it Now
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Courses;
