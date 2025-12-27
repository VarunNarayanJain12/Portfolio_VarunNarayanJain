import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Core Strengths", items: ["Data Structures & Algorithms", "Problem Solving", "Software Design"] },
  { category: "Languages", items: ["C++", "C", "Java", "Python", "SQL", "JavaScript"] },
  { category: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express.js", "TensorFlow", "Flask", "MERN Stack", "Tailwind CSS", "NumPy", "Pandas", "Scikit-learn"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "MySQL", "MongoDB", "Supabase", "Jupyter Notebook"] },
];

const Skills = () => {
  return (
    <section className="min-h-screen w-full py-20 px-6 md:px-20 relative z-10 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent font-mono text-lg mb-10 block drop-shadow-md font-medium"
        >
          02. SKILLS
        </motion.span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-gray-600 pt-8 bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10"
            >
              <h3 className="text-2xl font-serif mb-8 text-white drop-shadow-lg">{group.category}</h3>
              <ul className="space-y-4 font-mono text-lg text-gray-200">
                {group.items.map((item, i) => (
                  <li key={i} className="hover:text-accent transition-colors cursor-default drop-shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
