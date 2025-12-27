import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const CyberLattice = () => {
  const outerRef = useRef();
  const innerRef = useRef();
  const coreRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.1;
      outerRef.current.rotation.y = t * 0.15;
    }
    
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2;
      innerRef.current.rotation.y = -t * 0.1;
    }

    if (coreRef.current) {
      coreRef.current.rotation.z = t * 0.5;
      coreRef.current.rotation.x = Math.sin(t) * 0.2;
    }
  });

  return (
    <group scale={0.6}>
      {/* Outer Lattice Structure */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial 
            color="#00ffff" 
            wireframe 
            transparent 
            opacity={0.15} 
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>

      {/* Inner Geometric Core */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={innerRef}>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial 
            color="#a855f7" 
            wireframe 
            transparent 
            opacity={0.3} 
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>

      {/* Central Data Node */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={2}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Connecting Lines / Data Streams (Simulated with Points) */}
      <points>
        <sphereGeometry args={[2.5, 32, 32]} />
        <pointsMaterial 
          color="#00ffff" 
          size={0.02} 
          transparent 
          opacity={0.2} 
          sizeAttenuation={true} 
        />
      </points>
    </group>
  );
};

export default CyberLattice;
