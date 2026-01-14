import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Courses from "./components/Courses.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FaqSec from "./components/FaqSec.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
        <Testimonials />
        <FaqSec />
      </main>
      <Footer />
    </>
  );
};

export default App;
