import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <motion.h2
        className="text-4xl font-extrabold text-blue-700 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I'm <span className="font-semibold text-blue-800">Elvis Muasya</span>, a passionate fullstack developer skilled in building intuitive user interfaces with <strong>React</strong> and <strong>Tailwind CSS</strong>, and powerful APIs using <strong>Django</strong>, <strong>Flask</strong>, and <strong>Python</strong>. I’m driven by clean code, engaging design, and problem-solving.
      </motion.p>
    </section>
  );
};

export default About;
