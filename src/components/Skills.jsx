import React from "react";
import SkillBadge from "./SkillBadge";
import { FaNodeJs, FaReact, FaGitAlt, FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiElasticsearch } from "react-icons/si";

const Skills = () => {
  const skillGroups = [
    {
      title: "Backend",
      skills: [
        { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
        { icon: SiExpress, label: "Express.js", color: "text-gray-400" },
        { icon: SiMongodb, label: "MongoDB", color: "text-emerald-500" },
        { icon: SiElasticsearch, label: "Elasticsearch", color: "text-yellow-500" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { icon: FaReact, label: "React", color: "text-sky-400" },
        { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-teal-400" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { icon: FaGitAlt, label: "Git / GitHub", color: "text-orange-500" },
        { icon: FaAws, label: "AWS", color: "text-yellow-400" },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-950 text-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {skillGroups.map((group, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">{group.title}</h3>
            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill, i) => (
                <SkillBadge key={i} icon={skill.icon} label={skill.label} color={skill.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
