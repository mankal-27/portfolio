import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="bg-gray-950 text-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
