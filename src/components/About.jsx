import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="flex flex-col items-center justify-center px-4">
          <div className="w-full text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-white mb-4 text-center">
              Hi, I'm Anagha
            </h2>
            <p className="text-lg text-gray-200 mb-4">
              I completed my Master of Engineering in Computer Science and
              Engineering and later attended an intensive Full Stack Web and App
              Development bootcamp, where I gained hands-on experience in
              building modern web applications.
            </p>
            <p className="text-lg text-gray-200 mb-4">
              I'm now looking to bring my skills to a team and continue growing
              while working on exciting projects. I'm passionate about creating
              smooth, user-friendly experiences and constantly learning new
              technologies to improve my craft.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold text-white mb-8">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {/* Skill Icons */}
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-orange-500">
              <i className="fab fa-html5 fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">HTML</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-blue-500">
              <i className="fab fa-css3-alt fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">CSS</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-yellow-500">
              <i className="fab fa-js fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">JavaScript</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-blue-400">
              <i className="fab fa-react fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">React.js</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-green-500">
              <i className="fab fa-node fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">Node.js</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-purple-600">
              <i className="fas fa-database fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">MongoDB</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-blue-600">
              <i className="fas fa-database fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">MySQL</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-indigo-500">
              <i className="fas fa-database fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-green-700">
              <i className="fas fa-plug fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">RESTful API</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-black">
              <i className="fab fa-node fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">Express.js</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-pink-600">
              <i className="fab fa-php fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">PHP (basics)</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-teal-500">
              <i className="fas fa-cloud fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">Project Deployment</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-pink-500">
              <i className="fab fa-bootstrap fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">React Bootstrap</p>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-teal-600">
              <i className="fas fa-cogs fa-4x mb-4"></i>
              <p className="text-lg text-gray-200">Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-white mb-8">
            My Projects
          </h3>
          <p className="text-lg text-gray-200 mb-8">
            Take a look at some of the projects I've worked on. Feel free to
            check them out and see how I approach solving problems with code.
          </p>
          <div className="space-x-4">
            <a
              href="#x-share"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              x-share
            </a>
            <a
              href="#wbs-pokemon"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              PokeFight
            </a>
            <a
              href="https://wanderlov.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              Wanderlov
            </a>
            <a
              href="https://crossover-psdhtml.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              Crossover PSD to HTML
            </a>
            <a
              href="https://chadayananagha.github.io/CookBook/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              CookBook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
