import React from "react";
import htmlLogo from "../assets/tech/html.svg";
import cssLogo from "../assets/tech/css.svg";
import jsLogo from "../assets/tech/js.svg";
import reactLogo from "../assets/tech/react.svg";
import tailwindLogo from "../assets/tech/tailwind.png";
import githubLogo from "../assets/tech/github.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 min-h-screen flex flex-col justify-center items-center text-center py-24 transition-all duration-300">
      {/* Main heading */}
      <h1 className="text-5xl font-bold text-white mb-4 transition-transform transform hover:scale-110 hover:text-yellow-400">
        Hi, I'm Anagha
      </h1>

      {/* Subtitle */}
      <h3 className="text-2xl font-semibold text-gray-100 mb-4 transition-all duration-300 hover:text-yellow-300">
        Full Stack Web Developer
      </h3>

      {/* Description */}
      <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto px-4 transition-all duration-300 hover:text-gray-100">
        Welcome to my portfolio! I'm passionate about building intuitive and
        user-friendly web applications. Let's build something great together!
      </p>

      {/* Action Button */}
      <div className="mt-8">
        <Link
          to="/projects"
          className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:rotate-6"
        >
          View My Work
        </Link>
      </div>

      {/* Tech Logos */}
      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 px-4">
        <img
          src={htmlLogo}
          alt="HTML"
          className="w-16 h-16 transform transition-all duration-500 hover:scale-125 hover:rotate-6 hover:shadow-lg hover:bg-white p-2 rounded-full"
        />
        <img
          src={cssLogo}
          alt="CSS"
          className="w-16 h-16 transform transition-all duration-500 hover:scale-125 hover:rotate-6 hover:shadow-lg hover:bg-white p-2 rounded-full"
        />
        <img
          src={jsLogo}
          alt="JavaScript"
          className="w-16 h-16 transform transition-all duration-500 hover:scale-125 hover:rotate-6 hover:shadow-lg hover:bg-white p-2 rounded-full"
        />
        <img
          src={reactLogo}
          alt="React"
          className="w-16 h-16 transform transition-all duration-500 hover:scale-125 hover:rotate-6 hover:shadow-lg hover:bg-white p-2 rounded-full"
        />
        <img
          src={tailwindLogo}
          alt="Tailwind"
          className="w-16 h-16 transform transition-all duration-500 hover:scale-125 hover:rotate-6 hover:shadow-lg hover:bg-white p-2 rounded-full"
        />
        <img
          src={githubLogo}
          alt="GitHub"
          className="w-16 h-16 transform transition-all duration-500 hover:scale-125 hover:rotate-6 hover:shadow-lg hover:bg-white p-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default Main;
