"use client";

import { motion } from "framer-motion";

export default function Narrative() {
  return (
    <section id="about-long" className="mt-48 pb-32 max-w-4xl">
      <div className="flex flex-col gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pl-12 md:pl-24"
        >
          <span className="absolute left-0 top-0 font-serif text-6xl opacity-10 leading-none">"</span>
          <p className="font-serif text-3xl md:text-5xl leading-tight tracking-tight">
            I build <span className="text-system-accent">logic systems</span> for the physical world. 
            My background in urban planning taught me to see cities as complex, multi-layered data sets. 
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-auto max-w-3xl"
        >
          <p className="font-sans text-lg opacity-80 leading-relaxed font-medium">
            Today, I translate that spatial sensibility into digital products. Whether it's architecting 3D GIS platforms or designing agentic AI workflows, my goal is to create interfaces that feel as intentional as a well-planned urban grid.
          </p>
          <p className="font-sans text-lg opacity-80 leading-relaxed font-medium">
            I believe that the best technology doesn't just solve problems—it establishes a new vocabulary for how we interact with information. I'm a developer who prioritizes visual fidelity as much as system integrity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
