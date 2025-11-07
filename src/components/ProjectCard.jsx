import React from "react";

const ProjectCard = ({ title, description, tech, github, live }) => {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-xl p-6 shadow-lg border border-gray-700 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>
        <p className="text-sm text-gray-400 italic mb-4">
          Tech Stack: {tech.join(", ")}
        </p>
      </div>

      {/* Conditional Rendering: Show buttons only if they exist */}
      <div className="flex gap-4 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
          >
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md text-sm"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
