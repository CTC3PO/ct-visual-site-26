"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/shared/projects";

export default function Gallery() {
  return (
    <section id="work" className="mt-16 pb-32">
      <div className="flex justify-between items-end mb-12 px-2">
        <h2 className="text-3xl md:text-5xl max-w-xl">Archive / Focus</h2>
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-black opacity-30 mb-2">Assemble [2025]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 md:auto-rows-[minmax(200px,auto)]">
        {PROJECTS.map((project, index) => {
          // A refined 6-project pattern for balanced asymmetry (Edward style)
          let gridConfig = "md:col-span-6 md:row-span-4"; // default
          
          if (index === 0) gridConfig = "md:col-span-8 md:row-span-6"; 
          if (index === 1) gridConfig = "md:col-span-4 md:row-span-4"; 
          if (index === 2) gridConfig = "md:col-span-4 md:row-span-5"; 
          if (index === 3) gridConfig = "md:col-span-8 md:row-span-3"; 
          if (index === 4) gridConfig = "md:col-span-6 md:row-span-5"; 
          if (index === 5) gridConfig = "md:col-span-6 md:row-span-5"; 
          
          const cardContent = (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="h-full group relative flex flex-col bg-system-muted overflow-hidden border border-system-text/5"
            >
              {/* Image / Visual Area */}
              <div className="relative flex-grow overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110"
                    style={{ backgroundColor: project.imagePlaceholderColor }}
                  />
                )}
                <div className="absolute inset-0 bg-system-text/10 group-hover:bg-system-text/0 transition-colors duration-500" />
                
                {/* Floating Meta */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-bold px-2 py-1 bg-system-bg text-system-text">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Bottom Info Bar - Minimalist */}
              <div className="p-4 bg-system-bg flex flex-col justify-between transition-colors duration-300 group-hover:bg-system-text group-hover:text-system-bg">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase leading-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[10px] uppercase tracking-widest opacity-60 font-bold">
                      {project.category}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
                
                <div className="mt-4 hidden group-hover:block transition-all duration-300">
                  <p className="font-sans text-[11px] leading-relaxed opacity-80 uppercase tracking-wider font-medium">
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
