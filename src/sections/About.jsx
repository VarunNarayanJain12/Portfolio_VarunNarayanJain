import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen w-full py-20 px-6 md:px-20 flex items-center relative z-10 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent font-mono text-base mb-6 block drop-shadow-md font-medium"
        >
          01. ABOUT
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif mb-12 text-white drop-shadow-lg"
        >
          Engineering with <br />
          <span className="text-gray-300">Purpose & Precision.</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl text-gray-100 leading-relaxed space-y-8 drop-shadow-md bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10"
        >
          <p>
            I am a Software Engineering student pursuing B.Tech in Computer Science at Manipal University Jaipur (GPA 9.01/10). 
            I focus on building strong fundamentals in data structures, algorithms, and system-oriented development.
          </p>
          <p>
            My work spans full-stack applications, automation pipelines, and applied machine learning systems, with an emphasis 
            on writing clean, scalable, and maintainable code. I enjoy solving real-world problems through a combination of 
            analytical thinking and modern engineering practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
