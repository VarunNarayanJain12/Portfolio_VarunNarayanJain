import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "ExamGuard AI",
    description: "AI-Powered Cheating Detection System. Developed an AI-based monitoring system using real-time webcam analysis and CNN models to detect suspicious behavior. Enabled automated alerts, reporting dashboards, and post-exam video review for scalable online assessments.",
    tags: ["Python", "FastAPI", "TensorFlow", "OpenCV", "Next.js"],
    link: "#",
    github: "https://github.com/VarunNarayanJain12/AI_Cheat_Detection"
  },
  {
    title: "Jharkhand Smart Tourism",
    description: "Built a full-stack tourism platform with authentication, PostgreSQL, and an AI chatbot for itinerary assistance. Solved the lack of centralized, intelligent digital assistance for tourism planning.",
    tags: ["React.js", "TypeScript", "Supabase", "PostgreSQL", "LLM APIs"],
    link: "#",
    github: "https://github.com/VarunNarayanJain/Jharkhand_Smart_Tourism_Platform_2025"
  },
  {
    title: "ELICIT-25",
    description: "Designed and deployed a cyberpunk-themed website for a large technical fest. Features multi-section routing, animated UI, and performance-optimized deployment.",
    tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://elicit-25.vercel.app/",
    github: "https://github.com/VarunNarayanJain12/ELICIT-25"
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen w-full py-20 px-6 md:px-20 relative z-10 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent font-mono text-lg mb-12 block drop-shadow-md font-medium"
        >
          03. PROJECTS
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-black/50 backdrop-blur-lg p-10 rounded-xl hover:bg-black/70 transition-all border border-white/10 hover:border-accent/50 shadow-lg"
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-serif text-white drop-shadow-lg">{project.title}</h3>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-200 hover:text-white transition-colors"><Github size={24} /></a>
                  <a href={project.link} className="text-gray-200 hover:text-white transition-colors"><ExternalLink size={24} /></a>
                </div>
              </div>
              <p className="text-gray-100 mb-10 leading-relaxed text-lg font-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-sm font-mono text-accent bg-accent/10 px-3 py-1.5 rounded border border-accent/20 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
