import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Battery, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: "Advanced AI",
    description: "Our robots are powered by state-of-the-art artificial intelligence, enabling them to learn and adapt to new situations."
  },
  {
    icon: Battery,
    title: "Long-lasting Power",
    description: "Equipped with high-capacity batteries and efficient power management systems for extended operation."
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Lightning-fast processing and actuation allow our robots to react quickly to their environment."
  },
  {
    icon: Shield,
    title: "Robust Security",
    description: "Built-in security features protect against unauthorized access and ensure safe operation."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}