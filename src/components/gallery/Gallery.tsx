"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/shared/projects";

export default function Gallery() {
  return (
    <section id="work" className="mt-8 pb-16">
      <div className="flex justify-between items-end mb-8 px-2">
        <h2 className="text-major font-black uppercase">Projects</h2>
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Assemble [2025]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {PROJECTS.map((project, index) => {
          const cardContent = (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex flex-col bg-system-muted overflow-hidden border border-system-text/5 transition-all duration-500 hover:border-system-text/20 h-full"
            >
              {/* Image / Visual Area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-system-bg shrink-0">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105"
                    style={{ backgroundColor: project.imagePlaceholderColor }}
                  />
                )}
                <div className="absolute inset-0 bg-system-text/5 group-hover:bg-system-text/0 transition-colors duration-500" />
                
                {/* Floating Meta */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="font-sans text-[8px] uppercase tracking-[0.2em] font-black px-1.5 py-0.5 bg-system-bg text-system-text border border-system-text/10">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Bottom Info Bar - Ultra Compact */}
              <div className="px-3 py-3 bg-system-bg flex flex-col justify-center shrink-0 transition-colors duration-300 group-hover:bg-system-text group-hover:text-system-bg">
                <div className="flex justify-between items-center gap-2">
                  <div className="overflow-hidden">
                    <h3 className="text-[10px] md:text-[11px] font-black uppercase leading-tight truncate">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[7px] md:text-[8px] uppercase tracking-[0.2em] opacity-40 font-black">
                      {project.category}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          );

          return (
            <div key={project.id} className="h-full">
              {project.link || project.github ? (
                <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {cardContent}
                </a>
              ) : (
                cardContent
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
