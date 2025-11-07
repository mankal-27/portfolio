import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const aboutText = `
Results-oriented Backend Developer with 4+ years of experience
building robust and scalable web applications using Node.js, React,
Express.js, MongoDB, and Elasticsearch. Passionate about clean code,
automation, and performance optimization to deliver seamless user experiences.
`;

  const experiences = [
    {
      logo: "logos/vymo.png",
      company: "Vymo",
      role: "Member of Technical Staff",
      period: "Sep 2022 - Dec 2023",
      points: [
        "Enhanced API performance by 40% through caching with Aerospike DB.",
        "Integrated Salesforce and improved workflow efficiency by 20%.",
        "Automated reporting (500+ files/month) with Node.js cron jobs.",
      ],
    },
    {
      logo: "logos/mountblue.jpeg",
      company: "MountBlue",
      role: "Software Developer Engineer",
      period: "May 2021 - Aug 2022",
      points: [
        "Developed custom lead and partner modules for enterprise clients.",
        "Optimized reporting system reducing report count by 43%.",
        "Collaborated with Vymo’s client teams to enhance platform features.",
      ],
    },
    {
      logo: "logos/freelance.webp",
      company: "Freelancer",
      role: "Software Developer",
      period: "Jan 2020 - May 2021",
      points: [
        "Built a financial data visualization app using React and MongoDB.",
        "Integrated multiple third-party APIs to increase engagement by 25%.",
        "Architected robust backend systems with Node.js and Express.",
      ],
    },
  ];
  const projects = [
    {
      title: "Lead Management Automation",
      description:
        "Automated inactive lead cleanup, reporting, and CSV exports using Node.js, MongoDB, and cron jobs. Increased efficiency by 40%.",
      tech: ["Node.js", "MongoDB", "Elasticsearch", "AWS S3"],
      github: "https://github.com/yourusername/lead-automation",
      live: "",
    },
    {
      title: "Financial Data Visualization Dashboard",
      description:
        "A React-based dashboard that visualizes market data with dynamic APIs and chart integrations.",
      tech: ["React", "Chart.js", "TailwindCSS"],
      github: "https://github.com/yourusername/finance-dashboard",
      live: "https://yourusername.github.io/finance-dashboard/",
    },
    {
      title: "Portfolio Website",
      description:
        "Your own portfolio built with React and Tailwind — this one!",
      tech: ["React", "TailwindCSS", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourusername.github.io/portfolio/",
    },
  ];
  return (
    <div className="font-sans scroll-smooth">
      <Hero />
      <About title="About Me" description={aboutText} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
