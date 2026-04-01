import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="bg-transparent text-slate-100 py-24 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100">
          Professional <span className="text-gradient">Experience</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 relative">
          {/* Subtle background glow for the grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[100px] pointer-events-none -z-10" />
          
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              logo={exp.logo}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              points={exp.points}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
