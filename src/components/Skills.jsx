import React from "react";
import SkillBadge from "./SkillBadge";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaGoogle,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFigma,
  SiExpress,
  SiPrisma,
  SiRedis,
  SiElasticsearch,
  SiSwagger,
  SiKubernetes,
  SiNginx,
  SiJest,
  SiGrafana,
  SiJsonwebtokens,
  SiOpenai,
  SiEslint,
  SiPrettier,
  SiMongodb
} from "react-icons/si";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { icon: FaReact, label: "React", color: "text-sky-400" },
        { icon: SiTypescript, label: "TypeScript", color: "text-blue-400" },
        { icon: SiFigma, label: "Figma", color: "text-purple-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
        { icon: SiExpress, label: "Express.js", color: "text-gray-400" },
        { icon: SiPrisma, label: "Prisma", color: "text-indigo-400" },
        { icon: SiRedis, label: "Redis", color: "text-red-400" },
        { icon: SiElasticsearch, label: "Elasticsearch", color: "text-yellow-500" },
        { icon: SiSwagger, label: "Swagger", color: "text-lime-400" },
        { icon: FaDatabase, label: "Microservices", color: "text-purple-400" },
        { icon: FaDatabase, label: "Event-driven Architecture", color: "text-teal-400" },
        { icon: FaPython, label: "Python", color: "text-yellow-300" },
        { icon: SiMongodb, label: "Mongoose (ODM)", color: "text-green-300" }

      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { icon: FaDocker, label: "Docker", color: "text-sky-400" },
        { icon: SiKubernetes, label: "Kubernetes", color: "text-blue-400" },
        { icon: FaAws, label: "AWS", color: "text-yellow-400" },
        { icon: SiNginx, label: "NGINX", color: "text-green-400" },
      ],
    },
    {
      title: "Testing & Monitoring",
      skills: [
        { icon: SiJest, label: "Jest", color: "text-red-400" },
        { icon: SiGrafana, label: "Grafana", color: "text-orange-400" },
      ],
    },
    {
      title: "Authentication & AI",
      skills: [
        { icon: SiJsonwebtokens, label: "JWT", color: "text-yellow-400" },
        { icon: SiOpenai, label: "OpenAI", color: "text-green-400" },
      ],
    },
    {
      title: "Tooling & Workflow",
      skills: [
        { icon: SiEslint, label: "ESLint", color: "text-purple-400" },
        { icon: SiPrettier, label: "Prettier", color: "text-pink-400" },
        { icon: FaGitAlt, label: "Git", color: "text-orange-500" },
        { icon: FaGithub, label: "GitHub", color: "text-gray-300" },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-950 text-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto space-y-10">
        {skillGroups.map((group, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill, i) => (
                <SkillBadge
                  key={i}
                  icon={skill.icon}
                  label={skill.label}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
