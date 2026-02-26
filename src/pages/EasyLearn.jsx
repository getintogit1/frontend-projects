import React from "react";
import Header from "../projects/easylearn/components/Header.jsx";
import Hero from "../projects/easylearn/components/Hero.jsx";
import Benefits from "../projects/easylearn/components/Benefits.jsx";
import Courses from "../projects/easylearn/components/Courses.jsx";
import Testimonials from "../projects/easylearn/components/Testimonials.jsx";
import FaqSec from "../projects/easylearn/components/FaqSec.jsx";
import Footer from "../projects/easylearn/components/Footer.jsx";
import "../projects/easylearn/index.css";

console.log("EASYLEARN PAGE RENDER");
const EasyLearn = () => {
  return (
    <div className="easylearn">
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Courses />
        <Testimonials />
        <FaqSec />
      </main>
      <Footer />
    </div>
  );
};

export default EasyLearn;
