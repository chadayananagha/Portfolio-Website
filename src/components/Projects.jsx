import React from "react";

const projects = [
  {
    title: "x-share",
    description:
      "An app to manage and share subscriptions. Allows users to track, manage, and share subscriptions with friends or colleagues.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Responsive Design",
    ],
    liveDemo: "https://x-share.netlify.app/",
  },
  {
    title: "PokeFight",
    description:
      "An interactive game where players can choose and battle their favorite Pokémon. Full-stack application built with React and Node.js.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Responsive Design",
    ],
    liveDemo: "https://wbspokemonfight.netlify.app/",
  },
  {
    title: "Wander Love",
    description:
      "A CMS Blog App where anyone can post their travel blogs. It allows users to create, manage, and share their travel experiences with others using Contentful as a headless CMS.",
    techStack: [
      "React",
      "Contentful (CMS)",
      "Tailwind CSS",
      "Responsive Design",
    ],
    liveDemo: "https://wanderlov.netlify.app/",
  },
  {
    title: "Crossover PSD to HTML",
    description:
      "A project where a PSD design is converted into a responsive and fully functional HTML website.",
    techStack: ["React", "Tailwind CSS", "Responsive Design"],
    liveDemo: "https://crossover-psdhtml.netlify.app/",
  },
  {
    title: "CookBook",
    description:
      "A recipe app where users can browse and search for their favorite recipes. Built using HTML for the structure and a bit of JavaScript for interactivity, styled with Tailwind CSS. This project does not include a backend and is purely front-end.",
    techStack: ["Tailwind CSS", "HTML", "JavaScript", "Responsive Design"],
    liveDemo: "https://chadayananagha.github.io/CookBook/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 pt-12 pb-24 flex flex-col items-center">
      <div className="max-w-6xl w-full px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-white shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:rotate-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:text-white p-6 rounded-lg"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl font-semibold text-gray-800 mb-4 transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-white">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4 transition-all duration-300 ease-in-out hover:text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <strong className="text-gray-800">Tech Stack:</strong>
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors hover:bg-blue-500 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-actions flex justify-center items-center">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-secondary text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110 px-6 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
