import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-[80vh] w-full py-20 px-6 md:px-20 relative z-10 flex flex-col justify-center pointer-events-none">
      <div className="max-w-5xl mx-auto text-center pointer-events-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent font-mono text-base mb-10 block font-medium drop-shadow-md"
        >
          05. CONTACT
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif mb-12 text-white drop-shadow-2xl font-bold"
        >
          Let's Build Together.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-100 mb-16 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-medium"
        >
          Open to Software Engineering Internship Opportunities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-12"
        >
          <a href="mailto:varunnarayanjaincorporate@gmail.com" className="text-gray-200 hover:text-accent transition-colors drop-shadow-lg hover:scale-110 transform duration-300">
            <Mail size={40} />
          </a>
          <a href="https://github.com/VarunNarayanJain12" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-accent transition-colors drop-shadow-lg hover:scale-110 transform duration-300">
            <Github size={40} />
          </a>
          <a href="https://www.linkedin.com/in/varun-narayan-jain-b45697256" className="text-gray-200 hover:text-accent transition-colors drop-shadow-lg hover:scale-110 transform duration-300">
            <Linkedin size={40} />
          </a>
        </motion.div>

        <footer className="mt-40 text-sm font-mono text-gray-400">
          <p>© 2025 Varun Narayan Jain. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
