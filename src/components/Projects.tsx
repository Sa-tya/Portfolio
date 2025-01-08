"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "VCDMS",
    description: "A hardware management and streaming system built with VLC integration. Manages streaming hardware and provides real-time video streaming capabilities.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Nginx", "AWS", "VLC"],
    link: "#"
  },
  {
    title: "RadiumOne",
    description: "A fintech dashboard application providing comprehensive financial data visualization and management capabilities.",
    tech: ["Angular", "State Management", "TypeScript"],
    link: "#"
  },
  {
    title: "Inocord",
    description: "A sophisticated bot builder platform enabling users to create and manage custom bots. Contributing to both frontend and backend development.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
    link: "https://reverieinc.com/products/indocord/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
            //   target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                         border border-blue-500/20 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-sm text-blue-400">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 