import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ logo, company, role, period, points, index }) => {
  const logoUrl = `${import.meta.env.BASE_URL}${logo}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden group"
    >
      {/* Subtle hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4 border-l-2 border-brand-500 pl-4 py-1">
            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-brand-400 transition-colors">
              {company}
            </h3>
          </div>
          <img
            src={logoUrl}
            alt={`${company} logo`}
            className="w-14 h-14 object-cover rounded-xl shadow-lg border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-white"
          />
        </div>

        <div className="mb-4">
          <p className="text-lg font-medium text-brand-300">{role}</p>
          <p className="text-sm text-slate-400 font-mono mt-1">{period}</p>
        </div>

        <ul className="mt-6 space-y-3">
          {points.map((point, i) => (
            <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-3">
              <span className="text-brand-500 mt-1 flex-shrink-0">▹</span>
              <span className="group-hover:text-slate-200 transition-colors">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
