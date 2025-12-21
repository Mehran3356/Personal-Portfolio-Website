import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import lifeSaverimg from "../assets/Projects/lifesaver.png"
import Portfolioimg from "../assets/Projects/portfolio.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Life Saver Kust",
      description:
        "A responsive platform connecting patients with blood donors, managing donation events and certificates. Features role-based access with Super Admin and Admins for efficient donor and event management.",
      image: lifeSaverimg,
      tech: ["React", "Node", "MongoDB", "Express", "Tailwind"],
      github: "https://github.com/Mehran3356/Blood-Donation",
      demo: "https://life-saver-kust.vercel.app/",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "A personal portfolio built using React, Tailwind, Vite, and hosted on Vercel. Includes animated sections, scrollspy navbar, resume, and responsive design.",
      image: Portfolioimg,
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/Mehran3356/Personal-Portfolio-Website",
      demo: "personal-portfolio-website-green-kappa.vercel.app",
    },
  ];
  return (
    <section
      id="projects"
      className="py-28 bg-linear-to-b from-black via-gray-950 to-black text-white border-t border-gray-800 scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              key={project.id}
              className="bg-gray-900/70 backdrop-blur-md rounded-2xl border-gray-800 shadow-lg hover:shadow-blue-500/10 transition overflow-hidden"
            >
              {/* project image  */}
              <div className="h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* project content  */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                {/* project description  */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tect Stack  */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Icons  */}

                <div className="flex items-center gap-4">
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition text-xl"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition text-xl"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
