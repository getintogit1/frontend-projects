import Header from "../projects/portfolio/components/Header.jsx";
import Hero from "../projects/portfolio/components/Hero.jsx";
import About from "../projects/portfolio/components/About.jsx";
import Project from "../projects/portfolio/components/Project.jsx";
import Certificates from "../projects/portfolio/components/Certificates.jsx";
import Contact from "../projects/portfolio/components/Contact.jsx";
import "../projects/portfolio/index.css";

function Portfolio() {
  return (
    <>
      <div className="portfolio pt-35">
        <Header />
        <main>
          <Hero />
          <About />
          <Project />
          <Contact />
        </main>
        <p className="text-center py-4 text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Portfolio;
