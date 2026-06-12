"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

function AnimatedBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    // Slow organic rotation
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    // Subtle mouse parallax
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      mouse.x * 0.4,
      0.05
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      mouse.y * 0.3,
      0.05
    );
  });

  return (
    <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.6}>
      <MeshDistortMaterial
        color="#6366f1"
        distort={0.38}
        speed={1.4}
        roughness={0.05}
        metalness={0.15}
        transparent
        opacity={0.82}
        envMapIntensity={1.2}
      />
    </Sphere>
  );
}

function RimLight() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[6, 6, 4]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-6, -4, -4]} intensity={1.2} color="#818cf8" />
      <pointLight position={[0, -6, 6]} intensity={0.8} color="#4f46e5" />
    </>
  );
}

export default function HeroSphere() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <RimLight />
        <AnimatedBlob />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
