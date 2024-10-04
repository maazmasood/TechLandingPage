import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RoboTech Innovations</h3>
            <p className="text-sm text-gray-400">Revolutionizing the future with cutting-edge robotics</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="#features" className="text-sm text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="#products" className="text-sm text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="#specs" className="text-sm text-gray-400 hover:text-white">Tech Specs</Link></li>
              <li><Link href="#contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} RoboTech Innovations. All rights reserved.
        </div>
      </div>
    </footer>
  )
}