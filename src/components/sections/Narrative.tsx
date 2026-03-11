"use client";

import { motion } from "framer-motion";

export default function Narrative() {
  return (
    <section id="about-long" className="mt-4 pb-16 max-w-4xl">
      <div className="flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
        >
          <p className="font-sans text-base md:text-lg opacity-80 leading-relaxed font-medium">
            Today, I translate that spatial sensibility into digital products. Whether it's architecting 3D GIS platforms or designing agentic AI workflows, my goal is to create interfaces that feel as intentional as a well-planned urban grid.
          </p>
          <p className="font-sans text-base md:text-lg opacity-80 leading-relaxed font-medium">
            I believe that the best technology doesn't just solve problems—it establishes a new vocabulary for how we interact with information. I'm a developer who prioritizes visual fidelity as much as system integrity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
