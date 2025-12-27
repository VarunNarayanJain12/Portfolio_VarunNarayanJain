import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, GradientTexture } from '@react-three/drei';
import * as THREE from 'three';

const FloatingSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.1;
    meshRef.current.rotation.y = t * 0.15;
    // Floating effect
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#ffffff"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      >
        <GradientTexture
          stops={[0, 0.3, 0.6, 1]}
          colors={['#ffffff', '#d8b4fe', '#a855f7', '#00ffff']} // White, Light Purple, Purple, Cyan
          size={1024}
         />
      </MeshDistortMaterial>
    </mesh>
  );
};

export default FloatingSphere;
