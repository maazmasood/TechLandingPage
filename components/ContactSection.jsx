import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              Have questions about our robots or want to schedule a demo? 
              Our team is here to help. Reach out to us using the contact 
              information below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-500" />
                <span>info@robotechinnovations.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-500" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
            </div>
          </motion.div>
          <motion.form
  className="space-y-6 p-6 bg-gray-800 rounded-lg shadow-lg"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:bg-gray-600 focus:ring-0 p-2 transition duration-200"
      placeholder="Enter your name"
      required
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:bg-gray-600 focus:ring-0 p-2 transition duration-200"
      placeholder="Enter your email"
      required
    />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:bg-gray-600 focus:ring-0 p-2 transition duration-200"
      placeholder="Type your message here"
      required
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  >
    Send Message
  </button>
</motion.form>

        </div>
      </div>
    </section>
  )
}