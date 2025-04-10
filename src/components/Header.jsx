import React, { useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/anu.png"; // Import the profile picture

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-6 shadow-xl transition-all duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 relative group">
          <img
            src={profilePic}
            alt="Anagha Chadayan"
            className="w-16 h-16 rounded-full object-cover transform transition-transform duration-500 hover:scale-125 hover:rotate-6 hover:shadow-2xl"
          />
          <Link
            to="/"
            className="text-3xl font-extrabold text-white transform transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:text-yellow-300"
          >
            Anagha Chadayan
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                to="/about"
                className="text-lg font-medium hover:text-gray-200 transition-colors duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-lg font-medium hover:text-gray-200 transition-colors duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        {/* Resume Download Links (English and German) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/Resume/Anagha_Chadayan_Resume - English.pdf" // Correct English resume path
            download="Anagha_Chadayan_Resume - English.pdf" // This will trigger download with this filename
            className="bg-yellow-500 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          >
            Resume (English)
          </a>
          <a
            href="/Resume/Anagha_Chadayan_Lebenslauf.pdf" // Correct German resume path
            download="Anagha_Chadayan_Lebenslauf.pdf" // This will trigger download with this filename
            className="bg-yellow-500 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          >
            Lebenslauf (Deutsch)
          </a>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          <span
            className={`block w-8 h-1 bg-white mb-2 transition-all duration-300 transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-white mb-2 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-white mb-2 transition-all duration-300 transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 transition-all duration-300 transform scale-110 shadow-2xl`}
      >
        <ul className="space-y-4 text-center">
          <li>
            <Link
              to="/about"
              className="block text-xl font-medium hover:text-gray-200 transition-colors duration-300 transform hover:scale-110"
              onClick={toggleMenu} // Close the menu on click
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block text-xl font-medium hover:text-gray-200 transition-colors duration-300 transform hover:scale-110"
              onClick={toggleMenu} // Close the menu on click
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="/Resume/Anagha_Chadayan_Resume - English.pdf" // Correct English resume path
              download="Anagha_Chadayan_Resume - English.pdf" // Triggers download
              className="block text-xl font-medium hover:text-gray-200 transition-colors duration-300 transform hover:scale-110"
              onClick={toggleMenu} // Close the menu on click
            >
              Resume (English)
            </a>
          </li>
          <li>
            <a
              href="/Resume/Anagha_Chadayan_Lebenslauf.pdf" // Correct German resume path
              download="Anagha_Chadayan_Lebenslauf.pdf" // Triggers download
              className="block text-xl font-medium hover:text-gray-200 transition-colors duration-300 transform hover:scale-110"
              onClick={toggleMenu} // Close the menu on click
            >
              Lebenslauf (Deutsch)
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
