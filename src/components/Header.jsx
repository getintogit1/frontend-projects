import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { useState } from "react";
import { navItems } from "../constants/data.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-5">
      <div className="container flex items-center justify-between border-b-white-95 pb-5">
        {/* LOGO */}
        <a href="#">
          <img src="/images/logo.png" alt="logo" width={170} height={50} />
        </a>
        {/* MOBILE MENU */}
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          {/*CLOSE MENU*/}
          <button className="absolute top-8 right-8" onClick={handleClick}>
            <RiCloseLine size={30} />
          </button>

          {/*LIST */}
          <ul className="space-y-5 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="text-lg font-medium hover:text-orange-50 transition-colors "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/*LOGIN BUTTON*/}
          <button className="primary-btn mt-12 max-w-40 w-full">Login</button>
        </nav>

        {/*MENU BUTTON*/}
        <button className="lg:hidden" onClick={handleClick}>
          <RiMenuLine />
        </button>

        {/*LG Menu*/}
        <div className="max-lg:hidden flex items-center gap-10 ">
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="hover:text-orange-50 transition-colors font-medium text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/*LG LOGIN BUTTON*/}
          <button className="max-lg:hidden primary-btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
