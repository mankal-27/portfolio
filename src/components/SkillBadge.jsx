import React from "react";
import { motion } from "framer-motion";

const SkillBadge = ({ icon: Icon, label, color, index }) => {
    return(
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{ y: -3, scale: 1.05 }}
        className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-colors px-4 py-2 rounded-full cursor-default backdrop-blur-sm"
      >
         {Icon && <Icon className={`${color} text-xl drop-shadow-[0_0_8px_currentColor]`} />}
         <span className="text-slate-200 text-sm font-medium tracking-wide">{label}</span>
      </motion.div>
    )
}
export default SkillBadge;