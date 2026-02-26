import { socialLink, navItems } from "../constant/data.js";
import ToggleTheme from "./ToggleTheme.jsx";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState();

  function handle_click(params) {
    setIsOpen(!isOpen);
  }

  function handle_active_link(id) {
    setIsOpen(false);
    setActiveLink((al) => (al = id));
  }

  return (
    <header className="fixed top-0 left-0 w-full pt-5 z-40">
      <div className="container">
        <div className="flex items-center justify-between bg-zinc-100/80 rounded-full px-4 py-3 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-80 backdrop-blur-lg">
          {/*social links*/}
          <div className="flex items-center  gap-3.5">
            {socialLink.map((item) => (
              <a href="#" className="hover:text-emerald-600 transition-colors">
                <item.icon />
              </a>
            ))}
          </div>

          {/*Mobile Menu */}
          <ul
            className={`lg:hidden text-zinc-800 absolute top-full right-6 bg-zinc-200 min-w-36 mt-3 rounded-lg p-5 space-y-3 scale-y-0 transition-transform origin-top-right ${isOpen ? "scale-y-100" : ""}`}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                {" "}
                <a
                  href={item.href}
                  className={`hover:text-emerald-600 transition-colors font-medium ${item.href === activeLink ? "text-emerald-600" : ""}`}
                  onClick={() => handle_active_link(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/*Dektop Menu*/}
          <ul className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`font-semibold text-zinc-800 dark:text-zinc-400  dark:hover:text-emerald-600 hover:text-emerald-600 transition-colors ${item.href === activeLink ? "!text-emerald-600" : ""}`}
                  onClick={() => handle_active_link(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/*Btns*/}
          <div className="flex items-center gap-2.5">
            <ToggleTheme />
            <button className="lg:hidden" onClick={handle_click}>
              {isOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
