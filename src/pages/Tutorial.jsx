import Header from "../projects/tutorial/components/Header.jsx";
import Footer from "../projects/tutorial/components/Footer.jsx";
import ComponentManger from "../projects/tutorial/components/ComponentManager.jsx";
import "../projects/tutorial/index.css";

function Tutorial() {
  return (
    <>
      <div className="tutorial">
        <Header />
        <main>
          <ComponentManger />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Tutorial;
