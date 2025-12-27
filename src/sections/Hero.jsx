import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: -20, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-12 left-1/2 text-xl md:text-2xl font-mono text-gray-100 drop-shadow-md font-medium whitespace-nowrap z-20"
      >
        HEY, MY NAME IS VARUN NARAYAN JAIN
      </motion.div>

      <div className="z-10 text-center mix-blend-difference">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-light tracking-[0.2em] uppercase mb-6 text-white drop-shadow-lg"
        >
          A SOFTWARE
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-7xl md:text-[10rem] font-serif font-bold tracking-tighter text-white drop-shadow-2xl leading-none"
        >
          DEVELOPER.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl font-mono text-gray-100 mt-8 max-w-3xl mx-auto drop-shadow-md font-medium"
        >
          Software Engineering Student focused on DSA, Full-Stack Systems, and Applied AI
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-10 md:left-20 text-sm md:text-lg font-mono text-gray-100 flex flex-col gap-3 drop-shadow-md font-medium"
      >
        <span>C++ / PYTHON / REACT</span>
        <span>THREE.JS / ML / DOCKER</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 right-10 md:right-20 text-sm md:text-lg font-mono text-gray-100 flex flex-col gap-3 text-right drop-shadow-md font-medium"
      >
        <span>BASED IN INDIA</span>
        <span>OPEN TO WORK</span>
      </motion.div>
    </section>
  );
};

export default Hero;
