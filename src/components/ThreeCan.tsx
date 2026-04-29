/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Can({ color = '#00FF00' }: { color?: string }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Can Body */}
        <mesh ref={mesh} receiveShadow castShadow>
          <cylinderGeometry args={[1, 1, 3, 32]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.9} 
            roughness={0.1}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Top/Bottom Rings */}
        <mesh position={[0, 1.5, 0]}>
          <torusGeometry args={[1.05, 0.05, 16, 100]} />
          <meshStandardMaterial color="#888" metalness={1} roughness={0} />
        </mesh>
        <mesh position={[0, -1.5, 0]}>
          <torusGeometry args={[1.05, 0.05, 16, 100]} />
          <meshStandardMaterial color="#888" metalness={1} roughness={0} />
        </mesh>
      </Float>
    </group>
  );
}

export default function ThreeCan({ color }: { color?: string }) {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color={color} />
        
        <Can color={color} />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
