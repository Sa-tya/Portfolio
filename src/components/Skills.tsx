"use client";
import { motion } from "framer-motion";

const skillCategories = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
  ],
  "Frameworks & Libraries": [
    "React",
    "Redux",
    "Angular",
    "Next.js",
    "Node.js",
    "NestJS",
  ],
  "Databases": [
    "MongoDB",
    "PostgreSQL",
    "SQL",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Linux",
  ],
  "Core Skills": [
    "Data Structures",
    "Algorithms",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-8 lg:px-16 bg-black/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                             px-4 py-2 rounded-full border border-blue-500/20"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 