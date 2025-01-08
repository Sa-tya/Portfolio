"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            I&apos;m a Software Engineer with 3 years of experience in full-stack development. 
            With my BCA & MCA background, I&apos;ve developed expertise in modern web technologies 
            and cloud solutions.
          </p>
          <p>
            My tech stack includes JavaScript, React, Redux, Node.js, Next.js, NestJS, 
            Angular, MongoDB, SQL, and AWS services. I&apos;m particularly passionate about AI 
            and its applications in software development.
          </p>
        </div>
      </motion.div>
    </section>
  );
} 