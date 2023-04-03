import React from "react";

function Header() {
  return (
    <>
      <header
        role="banner"
        className="px-2 py-3 md:px-0 text-gray-800 shadow-sm fixed top-0 left-0 w-full font-light text-[17px] xl:text-[19px] bg-white/90 backdrop-blur-sm transition-all duration-300 z-10 responsive-page"
      >
        <div className="md:flex items-center justify-between sm:px-12 md:px-16 mx-auto max-w-4xl xl:max-w-7xl">
          <a
            href="#home"
            className="hidden md:block text-lg xl:text-[22px] font-medium"
          >
            HS
          </a>
          <nav id="mainmenu" role="navigation" aria-label="Main menu">
            <ul className="flex items-center justify-evenly" role="menubar">
              <li className="pr-2 md:pr-3 xl:pr-4" role="none">
                <a
                  className="hover:underline underline-offset-2 decoration-2 decoration-gray-600"
                  href="#home"
                  role="menuitem"
                >
                  Home
                </a>
              </li>
              <li className="px-2 md:px-3 xl:px-4" role="none">
                <a
                  className="hover:underline underline-offset-2 decoration-2 decoration-gray-600"
                  href="#projects"
                  role="menuitem"
                >
                  Projects
                </a>
              </li>
              <li className="px-2 md:px-3 xl:px-4" role="none">
                <a
                  className="hover:underline underline-offset-2 decoration-2 decoration-gray-600"
                  href="#skills"
                  role="menuitem"
                >
                  Skills
                </a>
              </li>
              <li className="pl-2 md:pl-3 xl:pl-4" role="none">
                <a
                  className="hover:underline underline-offset-2 decoration-2 decoration-gray-600"
                  href="#contact"
                  role="menuitem"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
