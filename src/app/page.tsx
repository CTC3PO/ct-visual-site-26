"use client";

import { motion } from "framer-motion";

import Gallery from "@/components/gallery/Gallery";
import SkillsMatrix from "@/components/skills/SkillsMatrix";
import Narrative from "@/components/sections/Narrative";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 lg:px-24 flex justify-between items-center z-50 mix-blend-difference text-system-bg">
        <span className="font-serif font-black text-xl uppercase tracking-tighter">CT / 25</span>
        <div className="flex gap-8 font-sans text-xs uppercase tracking-widest font-bold">
          <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Narrative Section */}
      <Narrative />

      {/* Projects Gallery */}
      <Gallery />

      {/* Skills Matrix */}
      <SkillsMatrix />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
