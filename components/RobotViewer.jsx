// components/RobotViewer.js
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

const RobotViewer = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <primitive object={scene} scale={1} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default RobotViewer;
