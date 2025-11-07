import React from "react";

const About = ({ title, description }) => {
  return (
    <section id="about" className="min-h-[60vh] bg-gray-950 text-gray-100 py-16 px-6 flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">{title}</h2>
      <p className="max-w-3xl text-center text-lg leading-relaxed text-gray-300">
        {description}
      </p>
      <img src="./manjuHill.jpeg" alt="Manjunath" className="w-32 h-32 rounded-full mb-4 border-2 border-blue-400" />
    </section>
  );
};

export default About;
