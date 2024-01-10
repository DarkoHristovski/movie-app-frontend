import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setIsModalOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://www.svgrepo.com/show/34896/movie.svg"
            alt="..."
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            menuOpen ? "top-[9%] z-50" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="#">
                All movies
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Best rated
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Newst
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Impressum
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
            onClick={() => {
              setIsModalOpen((prev) => {
                return !prev;
              });
            }}
          >
            Add movie
          </button>
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            onClick={toggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
