import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Tata Advanced Systems Limited (TASL), Mumbai",
    period: "June 2025 – July 2025",
    description: "Automated raster layer ingestion pipelines in Bhugyan GIS, improving map rendering efficiency. Designed CLI and Docker-based workflows to automate WMS map publishing. Built an extensible automation framework supporting coordinate conversions and spatial algorithms."
  }
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Manipal University Jaipur",
    period: "2023 – 2027",
    details: "GPA: 9.01 / 10.0"
  },
  {
    degree: "Intermediate (CBSE)",
    institution: "DAV Public School, Jamshedpur",
    period: "2021 – 2023",
    details: ""
  },
  {
    degree: "Matriculation (ICSE)",
    institution: "St. Joseph’s Convent High School",
    period: "2021",
    details: ""
  }
];

const achievements = [
  "Dean’s List of Excellence (three times) at Manipal University Jaipur for GPA above 9.",
  "Winner – Randomize MUJ Hackathon (₹15,000) for AI-based exam monitoring system.",
  "Top 5 finalist at Techkriti, IIT Kanpur for CNN-based skin lesion classification."
];

const positions = [
  {
    role: "Technical Secretary",
    org: "MUJ ACM Student Chapter",
    period: "May 2025 – Present",
    desc: "Led technical operations, infrastructure setup, tooling, and workflow optimization for chapter events."
  },
  {
    role: "Event Organizer & Volunteer",
    org: "YES PLUS MUJ Student Chapter",
    period: "Oct 2023 – Present",
    desc: "Organized workshops, managed logistics, and supported outreach initiatives."
  }
];

const Experience = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 relative z-10 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent font-mono text-lg mb-16 block drop-shadow-md font-medium"
        >
          04. EXPERIENCE & EDUCATION
        </motion.span>

        <div className="space-y-20">
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-serif text-white mb-10 drop-shadow-lg">Experience</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-accent pl-10 relative bg-black/30 backdrop-blur-md p-8 rounded-r-xl"
                >
                  <span className="absolute -left-[11px] top-8 w-5 h-5 bg-black border-4 border-accent rounded-full" />
                  <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 text-base font-mono text-gray-200">
                    <span className="text-accent font-semibold">{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-100 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-serif text-white mb-10 drop-shadow-lg">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                    <span className="text-base font-mono text-gray-300">{edu.period}</span>
                  </div>
                  <div className="text-accent font-mono text-lg mb-3 font-medium">{edu.degree}</div>
                  {edu.details && <div className="text-gray-200 text-base">{edu.details}</div>}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-serif text-white mb-10 drop-shadow-lg">Achievements</h3>
            <ul className="space-y-6">
              {achievements.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 text-gray-100 text-lg"
                >
                  <span className="text-accent mt-1.5 text-xl">▹</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Positions */}
          <div>
            <h3 className="text-3xl font-serif text-white mb-10 drop-shadow-lg">Positions of Responsibility</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {positions.map((pos, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-8 rounded-xl border border-white/10"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{pos.role}</h4>
                  <div className="text-accent text-base mb-3 font-medium">{pos.org}</div>
                  <div className="text-sm font-mono text-gray-400 mb-5">{pos.period}</div>
                  <p className="text-base text-gray-200 leading-relaxed">{pos.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
