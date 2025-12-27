import React from 'react';
import { Float } from '@react-three/drei';

const Shape = ({ position, rotation, scale, color, geometry: Geometry }) => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position} rotation={rotation} scale={scale}>
        <Geometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.4} 
          metalness={0.8} 
          transparent 
          opacity={0.6} 
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

const FloatingShapes = () => {
  return (
    <group>
      {/* Icosahedrons */}
      <Shape 
        position={[-4, 2, -5]} 
        rotation={[0, 0, 0]} 
        scale={0.5} 
        color="#a855f7" 
        geometry={(props) => <icosahedronGeometry args={[1, 0]} {...props} />} 
      />
      <Shape 
        position={[4, -2, -4]} 
        rotation={[1, 1, 0]} 
        scale={0.6} 
        color="#00ffff" 
        geometry={(props) => <icosahedronGeometry args={[1, 0]} {...props} />} 
      />
      
      {/* Torus */}
      <Shape 
        position={[-3, -3, -2]} 
        rotation={[0.5, 0.5, 0]} 
        scale={0.4} 
        color="#ffffff" 
        geometry={(props) => <torusGeometry args={[0.8, 0.2, 16, 32]} {...props} />} 
      />
      <Shape 
        position={[3, 3, -3]} 
        rotation={[0, 1, 0]} 
        scale={0.5} 
        color="#d8b4fe" 
        geometry={(props) => <torusGeometry args={[0.8, 0.2, 16, 32]} {...props} />} 
      />

      {/* Octahedron */}
      <Shape 
        position={[0, -4, -6]} 
        rotation={[0, 0, 1]} 
        scale={0.8} 
        color="#8ec5fc" 
        geometry={(props) => <octahedronGeometry args={[1, 0]} {...props} />} 
      />
    </group>
  );
};

export default FloatingShapes;
