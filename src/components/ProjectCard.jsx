import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, github, live, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group h-full relative overflow-hidden"
    >
      {/* Subtle hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-brand-400 transition-colors">{title}</h3>
        <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-brand-500/10 text-brand-300 border border-brand-500/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex gap-4 mt-auto pt-4 border-t border-white/5">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 px-4 py-2 rounded-lg text-sm transition-all duration-300 backdrop-blur-sm"
          >
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-brand-500 hover:bg-brand-400 text-white shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.23)] px-4 py-2 rounded-lg text-sm transition-all duration-300"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
