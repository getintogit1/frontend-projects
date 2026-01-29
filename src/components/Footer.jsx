import { contactInfo, footerLists, socialIcons } from "../constants/data.js";
import { motion } from "motion/react";
import * as variants from "../motion/animation.js";

function Footer() {
  return (
    <footer className="pt-14 pb-5 bg-white">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Footer Top */}
        <motion.div
          variants={variants.fadeInUp}
          className="grid gap-10 sm:grid-cols-2   lg:grid-cols-4"
        >
          {/*Footer brand*/}
          <div className="">
            {/*Footer Logo*/}
            <div className="">
              <img
                src="/images/logo-white.png"
                alt="footer logo"
                width={150}
                height={50}
              />
            </div>

            {/*Links*/}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <a
                  href="#"
                  key={item.id}
                  className="flex items-center gap-1.5 hover:text-green-70 hover:underline transition-colors"
                >
                  {<item.icon />}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          {/*Footer list */}

          {footerLists.map((item) => (
            <motion.div
              variants={variants.fadeInUp}
              key={item.id}
              className="space-y-3"
            >
              <p className="text-lg font-semibold">{item.title}</p>
              <ul className="space-y-2.5">
                {item.links.map((link, index) => (
                  <motion.li
                    variants={variants.fadeInUp}
                    className="hover:text-green-50 transition-colors"
                    key={index}
                  >
                    {link.label}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          {/*Social Profile*/}

          <div>
            <p className="text-lg font-semibold">Social Profiles</p>
            <div className="flex mt-5 gap-5">
              {socialIcons.map((icon) => (
                <motion.button
                  variants={variants.fadeInUp}
                  className="secondary-btn p-3.5 bg-white-97 hover_bg-white-99 hover:shadow-md transition-all"
                >
                  <a href="">{<icon.icon />}</a>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Footer Bottom*/}
        <p className="mt-16 text-center lg_mt-20">
          &copy; {new Date().getFullYear()} EasyLearn. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
