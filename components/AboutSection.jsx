import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

const RobotViewer = dynamic(() => import('./RobotViewer'), {
  ssr: false
});

function RobotModel() {
  const { scene } = useGLTF("/assets/3d/Astronaut.glb");
  return <primitive object={scene} scale={[1.5, 1, 1.5]} position={[0, -2, 0]} />;
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title Section */}
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-12 py-6 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About RoboTech Innovations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-semibold mb-4 py-6 text-white">Our Mission</h3>
<p className="text-gray-400 mb-4 leading-relaxed text-lg">
  At RoboTech Innovations, we are committed to revolutionizing the field of robotics for the betterment of humanity. 
  Our mission is to create intelligent, sustainable, and adaptable robots that seamlessly integrate into everyday life, driving innovation and improving well-being.
</p>
<p className="text-gray-400 mb-4 leading-relaxed mt-4 text-lg">
  Through advanced research in artificial intelligence, machine learning, and eco-friendly technologies, 
  we design robots that not only meet the needs of today but also anticipate the challenges of tomorrow.
</p>
<p className="text-gray-400 mb-4 leading-relaxed mt-4 text-lg">
  Our vision is to empower industries and individuals alike by providing cutting-edge robotic solutions 
  that enhance efficiency, foster creativity, and contribute to a brighter future for all.
</p>
<p className="text-gray-400 mb-4 leading-relaxed mt-4 text-lg">
Astronaut by <a href="https://poly.pizza/m/dLHpzNdygsg" target="_blank" rel="noopener noreferrer">Poly</a> by Google 
  <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer"> [CC-BY] </a>
  via <a href="https://poly.pizza/m/dLHpzNdygsg" target="_blank" rel="noopener noreferrer">Poly Pizza</a>.

</p>

          </motion.div>

          {/* RobotViewer Section */}
          <motion.div
            className="flex justify-center items-center w-full h-96"  // Centering the canvas
          >
            <Canvas className="w-full h-full" camera={{ position: [0, 1, 5], fov: 50 }} shadows>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <spotLight 
                  position={[10, 10, 10]} 
                  angle={0.15} 
                  penumbra={1} 
                  intensity={1} 
                  castShadow 
                />
                <RobotModel />          
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
