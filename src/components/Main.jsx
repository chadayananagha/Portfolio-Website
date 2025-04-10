import React from "react";

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 min-h-screen flex flex-col justify-center items-center text-center py-24 transition-all duration-300">
      {/* Main heading */}
      <h1 className="text-5xl font-bold text-white mb-4 transition-transform transform hover:scale-110">
        Hi, I'm Anagha
      </h1>

      {/* Subtitle */}
      <h3 className="text-2xl font-semibold text-gray-100 mb-4">
        Full Stack Web Developer
      </h3>

      {/* Description */}
      <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto px-4">
        Welcome to my portfolio! I'm passionate about building intuitive and
        user-friendly web applications. Let's build something great together!
      </p>

      {/* Action Button */}
      <div className="mt-8">
        <a
          href="/projects" // Change this to your projects page URL
          className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Main;
