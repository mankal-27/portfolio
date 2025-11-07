import React from "react";

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Manjunath</span>👋🏻
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                A passionate Full Stack Developer crafting web experiences.
                <hr />
                Backend Developer | Frontend Developer | Automation | OSS Enthu
            </h2>
            <div className="flex gap-4">
                <a 
                    href={`${import.meta.env.BASE_URL}Manjunath_R_K.pdf`}
                    download
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
                >
                    Download Resume
                </a>
                <a
                    href="#contact"
                    className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-lg"
                >
                    Contact Me
                </a>
            </div>
        </section>
    )
}

export default Hero;