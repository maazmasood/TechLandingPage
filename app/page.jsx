'use client'

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Stars, Text } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProductShowcase from '@/components/ProductShowcase'
import TechSpecs from '@/components/TechSpecs'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'




export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <main className="absolute overflow-y-hidden w-full min-h-screen flex-col bg-gray-900 text-white">
      <Navbar />
      
      <HeroSection />


      <AboutSection />
      <FeaturesSection />
      <ProductShowcase />
      <TechSpecs />
      <ContactSection />
      <Footer />
    </main>
  )
}