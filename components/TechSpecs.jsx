import React from 'react'
import { motion } from 'framer-motion'

const specs = [
  { name: "Processor", value: "Quantum AI Chip" },
  { name: "Memory", value: "1 TB Neural Network" },
  { name: "Power Source", value: "Fusion Reactor" },
  { name: "Operating System", value: "RoboOS 5.0" },
  { name: "Sensors", value: "360° LiDAR, Thermal, Ultrasonic" },
  { name: "Connectivity", value: "5G, Wi-Fi 6E, Bluetooth 5.2" },
  { name: "Materials", value: "Carbon Fiber, Titanium Alloy" },
  { name: "Weight", value: "50 kg" }
]

export default function TechSpecs() {
  return (
    <section id="specs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Specifications
        </motion.h2>
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <motion.div 
                key={index}
                className="flex justify-between items-center border-b border-gray-700 py-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-400">{spec.name}</span>
                <span className="font-semibold">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}