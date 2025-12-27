import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Edges } from '@react-three/drei';
import * as THREE from 'three';

const HolographicTesseract = () => {
  const outerRef = useRef();
  const innerRef = useRef();
  const coreRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.2;
      outerRef.current.rotation.y = t * 0.3;
    }
    
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.3;
      innerRef.current.rotation.y = -t * 0.4;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.5;
      coreRef.current.rotation.z = t * 0.5;
    }
  });

  return (
    <group scale={0.8}>
      {/* Outer Cube Frame */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={outerRef}>
          <boxGeometry args={[3, 3, 3]} />
          <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.1} />
          <Edges scale={1} threshold={15} color="#00ffff" />
        </mesh>
      </Float>

      {/* Inner Cube Frame */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={innerRef}>
          <boxGeometry args={[1.8, 1.8, 1.8]} />
          <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.2} />
          <Edges scale={1} threshold={15} color="#a855f7" />
        </mesh>
      </Float>

      {/* Solid Core Cube */}
      <mesh ref={coreRef}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          roughness={0}
          metalness={1}
          transmission={0.5}
          thickness={1}
          transparent
          opacity={0.8}
        />
        <Edges scale={1} threshold={15} color="white" />
      </mesh>
      
      {/* Floating Data Blocks */}
      {[...Array(8)].map((_, i) => {
        const offset = 2.5;
        const x = (i % 2 === 0 ? 1 : -1) * offset * Math.random();
        const y = (i % 4 < 2 ? 1 : -1) * offset * Math.random();
        const z = (i < 4 ? 1 : -1) * offset * Math.random();
        
        return (
          <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={2}>
            <mesh position={[x, y, z]} scale={0.2}>
              <boxGeometry />
              <meshStandardMaterial color={i % 2 === 0 ? "#00ffff" : "#a855f7"} />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

export default HolographicTesseract;
