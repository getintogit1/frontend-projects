import Title from "./Title";
import { faqItems } from "./../constants/data.js";
import { RiAddLine } from "@remixicon/react";
import { useState } from "react";
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";

function FaqSec() {
  const [openId, setOpenId] = useState(faqItems[0].id ?? null);
  function handleClick(id) {
    setOpenId((oId) => (oId === id ? null : id));
  }

  return (
    <section className="section pb-[90px] lg:mb-[160px]">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container "
      >
        <div className="grid gap-10 p-5 lg:grid-cols-[0.7_1fr]  items-start bg-white rounded-md md:p-10  ">
          {/*Title */}
          <Title
            title="Frequently Asked Questions"
            text="Still have any questions? Contact our team via support@skillbridge.com "
            link="See all FAQs"
          />
          {/*Question Wrapper*/}
          <div className="border  border-white-95 grid p-6">
            {faqItems.map((item) => (
              // Question
              <motion.div
                variants={variants.fadeInUp}
                className="space-y-3.5"
                key={item.id}
              >
                <div className="flex items-center justify-between gap-12 border-b-white-95 pb-3 md:px-5">
                  {/*Title*/}
                  <h4 className="text-lg sm:text-xl">{item.title}</h4>
                  <button
                    className="w-10 h-10 bg-orange-75 flex items-center justify-center rounded-md aspect-square hover:bg-orange-75/80 transition-colors"
                    onClick={() => handleClick(item.id)}
                  >
                    <RiAddLine
                      className={`transition ${openId === item.id ? "rotate-45" : ""}`}
                      size={30}
                    />
                  </button>
                </div>

                {/*Text*/}
                <div
                  className={`max-h-0 overflow-y-hidden transition-all ${openId === item.id ? "max-h-[200px]" : ""}`}
                >
                  <p className="px-5 pb-3">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FaqSec;
