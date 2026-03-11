"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/shared/projects";

export default function Gallery() {
  return (
    <section id="work" className="mt-16 pb-32">
      <div className="flex justify-between items-end mb-12 px-2">
        <h2 className="text-3xl md:text-5xl max-w-xl">Archive / Focus</h2>
        <div className="flex flex-col items-end">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-black opacity-30">Assemble [2025]</span>
          <span className="font-sans text-[9px] uppercase tracking-widest opacity-20 hidden md:block mt-1">Web Dev (Left) — AI/ML (Right)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-3 md:auto-rows-[minmax(140px,auto)]">
        {PROJECTS.map((project, index) => {
          // Re-balanced 6-project pattern: More compact for 1-scroll view
          let gridConfig = "md:col-span-6 md:row-span-3"; // default
          
          // Row 1
          if (index === 0) gridConfig = "md:col-span-7 md:row-span-3"; // Dalat
          if (index === 1) gridConfig = "md:col-span-5 md:row-span-3"; // Mindful
          
          // Row 2
          if (index === 2) gridConfig = "md:col-span-4 md:row-span-4"; // Housing
          if (index === 3) gridConfig = "md:col-span-8 md:row-span-4"; // Nutri
          
          // Row 3
          if (index === 4) gridConfig = "md:col-span-7 md:row-span-3"; // GenAI
          if (index === 5) gridConfig = "md:col-span-5 md:row-span-3"; // Pacman
          
          const cardContent = (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="h-full group relative flex flex-row md:flex-col bg-system-muted overflow-hidden border border-system-text/5"
            >
              {/* Image / Visual Area - Priority Grow */}
              <div className="relative w-24 h-24 md:w-full flex-grow overflow-hidden bg-system-bg shrink-0">
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
                <div className="absolute inset-0 bg-system-text/10 group-hover:bg-system-text/0 transition-colors duration-500" />
                
                {/* Floating Meta (Desktop only) */}
                <div className="absolute top-4 left-4 z-10 hidden md:block">
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-bold px-2 py-1 bg-system-bg text-system-text border border-system-text/5">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Bottom Info Bar - Minimalist, No Grow */}
              <div className="px-4 py-3 md:px-4 md:py-3 bg-system-bg flex flex-col justify-center shrink-0 transition-colors duration-300 group-hover:bg-system-text group-hover:text-system-bg">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xs md:text-base font-black uppercase leading-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[7px] md:text-[9px] uppercase tracking-widest opacity-60 font-bold">
                      {project.category}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
                
                <div className="mt-4 hidden group-hover:block transition-all duration-300">
                  <p className="font-sans text-[10px] leading-relaxed opacity-80 uppercase tracking-wider font-medium">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );

          return (
            <div key={project.id} className={gridConfig}>
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
