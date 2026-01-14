import { motion } from "motion/react";
import * as variants from "../motion/animation.js";

function Title({ text, title, link }) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4 ">
      <div>
        <motion.h2
          variants={variants.fadeInUp}
          className="nax-w-[640px] mt-4 mb-6"
        >
          {title}
        </motion.h2>
        <motion.p variants={variants.fadeInUp}>{text}</motion.p>
      </div>
      <motion.button variants={variants.fadeInUp} className="secondary-btn">
        {link}
      </motion.button>
    </div>
  );
}

export default Title;
