"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript", "React", "Redux", "Node.js", "Next.js", 
  "NestJS", "Angular", "MongoDB", "SQL", "AWS", "Linux",
  "Data Structures", "Algorithms"
];

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
      </motion.div>
    </section>
  );
} 