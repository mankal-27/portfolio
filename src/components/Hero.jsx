import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}Manjunath_R_K.pdf`;

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center px-6 relative overflow-hidden">
            {/* Background glowing orb effect specific to Hero */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <motion.h1 
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Hi, I'm <span className="text-gradient">Manjunath</span> 👋🏻
                </motion.h1>

                <motion.h2 
                    className="text-xl md:text-2xl text-slate-400 mb-8 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    A passionate Full Stack Developer crafting web experiences.
                    <hr className="w-1/4 mx-auto my-6 border-slate-700/50" />
                    <span className="font-mono text-base tracking-wider text-brand-300">
                      Backend | Frontend | Automation | OSS
                    </span>
                </motion.h2>

                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-500 hover:bg-brand-400 text-white font-medium px-8 py-3 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;