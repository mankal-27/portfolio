import React from "react";
import { motion } from "framer-motion";
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
    <section id="skills" className="bg-transparent text-slate-100 py-24 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-slate-200 border-b border-white/10 pb-3 inline-block">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, i) => (
                    <SkillBadge
                      key={i}
                      icon={skill.icon}
                      label={skill.label}
                      color={skill.color}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
