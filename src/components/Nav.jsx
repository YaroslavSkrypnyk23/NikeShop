import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul
          className={`flex-1 flex items-center justify-center gap-16  max-lg:hidden`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-montserrat leading-normal text-lg ${
                  active === link.label
                    ? "font-bold bg-slate-200 px-3 py-2 rounded-3xl"
                    : ""
                }`}
                onClick={() => setActive(link.label)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className={`${!toggle ? "hidden" : "flex"} absolute p-6 bg-slate-500 text-white-400 top-20 right-0 mx-8 rounded-xl w-[150px] items-center`}>
          <ul className={`flex-1 flex flex-col gap-5 `}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-montserrat leading-normal text-lg ${
                    active === link.label
                      ? "font-bold"
                      : ""
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.label);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
