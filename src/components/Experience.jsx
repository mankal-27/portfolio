import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="bg-gray-950 text-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Experience</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            logo={exp.logo}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            points={exp.points}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
