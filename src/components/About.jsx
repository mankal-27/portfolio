import React from "react";
import { motion } from "framer-motion";

const About = ({ title, description }) => {
  const profileImgUrl = `${import.meta.env.BASE_URL}manjuHill.jpeg`;

  return (
    <section id="about" className="min-h-[60vh] bg-transparent text-slate-100 py-24 px-6 relative z-10 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src={profileImgUrl} 
            alt="Manjunath" 
            className="w-40 h-40 object-cover rounded-full mb-8 shadow-[0_0_30px_rgba(14,165,233,0.3)] border-4 border-slate-800" 
        />
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-100">
          <span className="text-gradient">{title}</span>
        </h2>
        <motion.p 
            className="text-center text-xl leading-relaxed text-slate-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
