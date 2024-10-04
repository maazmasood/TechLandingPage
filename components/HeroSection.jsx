'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Stars } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleField from '@/components/ParticleField';

function RobotModels() {
  const { scene } = useGLTF("/assets/3d/ButterRobot.glb");
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    ref.current.position.x = Math.sin(t) * 2; // Adjust left-right movement
  });

  return <primitive ref={ref} object={scene} scale={[1.5, 1.5, 1.5]} position={[0, -1, 0]} />;
}

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative w-full overflow-hidden h-screen">
      <Canvas className="absolute inset-0" camera={{ position: [0, 1, 5], fov: 50 }} shadows>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1} 
            castShadow 
          />
          <RobotModels />
          <Stars />
          <ParticleField />
          <Preload all />
        </Suspense>
      </Canvas>

      {/* Heading and CTA */}
      <div className="absolute inset-0  mt-20 z-10 flex flex-col items-center justify-center text-center space-y-4">
        <motion.h1 
          className="text-white text-6xl font-bold"
          style={{ opacity }}
        >
          Welcome to the Future
        </motion.h1>
        <motion.p 
          className="text-white text-lg max-w-xl"
          style={{ opacity }}
        >
          
          Butter Robot by <a href="https://poly.pizza/m/9HIzs__db3k" target="_blank" rel="noopener noreferrer">Martin Calviello</a> 
  <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer"> [CC-BY] </a>
  via <a href="https://poly.pizza/m/9HIzs__db3k" target="_blank" rel="noopener noreferrer">Poly Pizza</a>.<br />
  Explore the cutting edge of robotics and technology. Join us in shaping the future! 

        </motion.p>
        <motion.button 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
          style={{ opacity }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
}
