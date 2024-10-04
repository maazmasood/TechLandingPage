import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import Link from 'next/link'

// Dynamically import RobotViewer, making sure SSR is disabled
const RobotViewer = dynamic(() => import('./RobotViewer'), { 
  ssr: false 
});

const products = [
  {
    name: "RoboAssist X1",
    description: "Personal assistant robot with advanced AI capabilities.",
    image: "/assets/3d/Snowball.glb",
    credits: (
      <p>
        Snowball by <a href="https://poly.pizza/m/fczOpkNRDqR" target="_blank" rel="noopener noreferrer">Anonymous</a> 
        <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer"> [CC-BY] </a>
        via <a href="https://poly.pizza/m/fczOpkNRDqR" target="_blank" rel="noopener noreferrer">Poly Pizza</a>.
      </p>
    )
  },
  {
    name: "IndustriBot Pro",
    description: "Heavy-duty industrial robot for manufacturing and logistics.",
    image: "/assets/3d/robot.glb",
    credits: (
      <p>
  Super Robot ! by <a href="https://poly.pizza/m/eV232rQZrgh" target="_blank" rel="noopener noreferrer">Romain Revert</a> 
  <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer"> [CC-BY] </a>
  via <a href="https://poly.pizza/m/eV232rQZrgh" target="_blank" rel="noopener noreferrer">Poly Pizza</a>.
</p>
    )
  },
  {
    name: "MediCare Bot",
    description: "Specialized robot for healthcare and medical assistance.",
    image: "/assets/3d/MechQuadruped.glb",
    credits: (
      <p>
  MechQuadruped by <a href="https://poly.pizza/m/5x1hRpbmdfo" target="_blank" rel="noopener noreferrer">3Donimus</a> 
  <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer"> [CC-BY] </a>
  via <a href="https://poly.pizza/m/5x1hRpbmdfo" target="_blank" rel="noopener noreferrer">Poly Pizza</a>.
</p>

    )
  }
]

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
             
                <div className="w-full h-64">
                  <RobotViewer modelPath={product.image} />
                </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2"> {product.credits}</h3>
                <p className="text-gray-400">{product.description}</p>
                <p className="text-gray-200">*Slide Over Image to zoom</p>
                <Link href="#contact" ><button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Order Now!
                </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
