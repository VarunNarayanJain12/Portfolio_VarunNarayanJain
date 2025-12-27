import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles, Stars, Float } from '@react-three/drei';

const BackgroundParticles = () => {
  return (
    <>
      {/* Distant Stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Floating Particles */}
      <Sparkles 
        count={200} 
        scale={12} 
        size={2} 
        speed={0.4} 
        opacity={0.5} 
        color="#ffffff"
      />
      
      <Sparkles 
        count={100} 
        scale={15} 
        size={4} 
        speed={0.3} 
        opacity={0.3} 
        color="#a855f7" // Purple
      />

      <Sparkles 
        count={100} 
        scale={10} 
        size={3} 
        speed={0.5} 
        opacity={0.3} 
        color="#00ffff" // Cyan
      />
    </>
  );
};

export default BackgroundParticles;
