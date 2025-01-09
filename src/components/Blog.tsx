"use client";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Indian Torch Seller",
    excerpt: "A story to create fear and then sell your product...",
    date: "2024-08-13",
    readTime: "5 min read",
    link: "https://medium.com/@satyapra6275/indian-torch-seller-1f43b64f039c"
  },
  {
    title: "Create Microservice in NestJS",
    excerpt: "Best practices for building scalable and maintainable web applications...",
    date: "2024-07-28",
    readTime: "4 min read",
    link: "https://medium.com/@satyapra6275/create-microservice-in-nestjs-f5b2ed32cee3"
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.a
              key={post.title}
              href={post.link}
              whileHover={{ y: -5 }}
              className="block p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                         border border-blue-500/20"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-gray-400">{post.date}</span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400">{post.excerpt}</p>
              <div className="mt-4 text-blue-400 hover:text-blue-300">Read more →</div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 