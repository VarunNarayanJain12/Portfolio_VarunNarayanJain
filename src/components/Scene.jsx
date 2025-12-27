import React, { useState, useEffect, useRef } from 'react';
import { Environment, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import FloatingSphere from './FloatingSphere';
import BackgroundParticles from './BackgroundParticles';
import FloatingShapes from './FloatingShapes';
import ParticleFace from './ParticleFace';
import CyberLattice from './CyberLattice';
import HolographicTesseract from './HolographicTesseract';
import * as THREE from 'three';

const Scene = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sphereGroupRef = useRef();
  const faceGroupRef = useRef();
  const latticeGroupRef = useRef();
  const tesseractGroupRef = useRef();

  useFrame(() => {
    const scrollY = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollY / height, 0), 1);
    setScrollProgress(progress);

    // Transition Logic
    // 0.00 - 0.15: Sphere Visible (Hero)
    // 0.15 - 0.35: Face Visible (About)
    // 0.35 - 0.60: Lattice Visible (Skills)
    // 0.60 - 1.00: Tesseract Visible (Projects & Contact)
    
    if (sphereGroupRef.current && faceGroupRef.current && latticeGroupRef.current && tesseractGroupRef.current) {
      // 1. Sphere Logic (Hero)
      const sphereOpacity = 1 - Math.min(Math.max((progress - 0.10) * 10, 0), 1);
      sphereGroupRef.current.scale.setScalar(sphereOpacity);
      sphereGroupRef.current.visible = sphereOpacity > 0;

      // 2. Face Logic (About)
      let faceOpacity = 0;
      if (progress < 0.25) {
         faceOpacity = Math.min(Math.max((progress - 0.10) * 10, 0), 1);
      } else {
         faceOpacity = 1 - Math.min(Math.max((progress - 0.30) * 10, 0), 1);
      }
      faceGroupRef.current.scale.setScalar(faceOpacity);
      faceGroupRef.current.visible = faceOpacity > 0;
      if (faceGroupRef.current.children[0]?.material?.uniforms) {
         faceGroupRef.current.children[0].material.uniforms.uOpacity.value = faceOpacity;
      }

      // 3. Lattice Logic (Skills)
      let latticeOpacity = 0;
      if (progress < 0.50) {
         latticeOpacity = Math.min(Math.max((progress - 0.30) * 10, 0), 1);
      } else {
         latticeOpacity = 1 - Math.min(Math.max((progress - 0.55) * 10, 0), 1);
      }
      latticeGroupRef.current.scale.setScalar(latticeOpacity * 1.2);
      latticeGroupRef.current.visible = latticeOpacity > 0;

      // 4. Tesseract Logic (Projects)
      const tesseractOpacity = Math.min(Math.max((progress - 0.55) * 10, 0), 1);
      tesseractGroupRef.current.scale.setScalar(tesseractOpacity);
      tesseractGroupRef.current.visible = tesseractOpacity > 0;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="cyan" intensity={0.5} />
      
      <BackgroundParticles />
      <FloatingShapes />

      <group ref={sphereGroupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <FloatingSphere />
        </Float>
      </group>

      <group ref={faceGroupRef} visible={false} scale={0}>
        <ParticleFace />
      </group>

      <group ref={latticeGroupRef} visible={false} scale={0}>
        <CyberLattice />
      </group>

      <group ref={tesseractGroupRef} visible={false} scale={0}>
        <HolographicTesseract />
      </group>
      
      <Environment preset="city" />
    </>
  );
};

export default Scene;
