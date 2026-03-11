"use client";

import { motion } from "framer-motion";

const SKILL_PILLARS = [
  {
    title: "Urban Systems",
    subtitle: "Spatial Intelligence",
    skills: ["3D GIS / Mapbox", "OpenCity Data", "Zoning Text Analysis", "Urban Policy AI"],
    description: "Decoding physical environments into actionable digital layers."
  },
  {
    title: "Digital Intelligence",
    subtitle: "Agentic Systems",
    skills: ["Next.js Architect", "AI Workflow Design", "ML Modeling (XGBoost)", "Agentic Coding"],
    description: "Building autonomous systems that bridge reasoning and execution."
  },
  {
    title: "Visual Craft",
    subtitle: "High-End Narrative",
    skills: ["Framer Motion", "Editorial Design", "Brand Strategy", "Modern Typography"],
    description: "Elevating technical interfaces into premium brand experiences."
  }
];

export default function SkillsMatrix() {
  return (
    <section id="about" className="mt-16 pb-24 border-t border-system-text/10 pt-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <h2 className="text-huge leading-[0.8] mb-8 md:mb-0">Expertise</h2>
        <div className="max-w-md">
           <p className="font-sans text-xl opacity-60 leading-relaxed italic">
            "A design-centric developer doesn't just write code; they architect the intersection of physical space and digital logic."
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        {SKILL_PILLARS.map((pillar, index) => (
          <motion.div 
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col group"
          >
            <div className="mb-8 overflow-hidden h-32 flex items-end">
              <span className="font-serif font-black text-6xl md:text-7xl uppercase opacity-10 group-hover:opacity-100 group-hover:text-system-accent transition-all duration-700 block">
                {pillar.title.split(' ')[0]}
              </span>
            </div>
            
            <div className="border-l-2 border-system-text/20 pl-6 h-full">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-black opacity-40 mb-2 block">
                {pillar.subtitle}
              </span>
              <h3 className="text-2xl font-black uppercase mb-4">{pillar.title}</h3>
              <p className="font-sans text-sm opacity-60 mb-8 leading-relaxed">
                {pillar.description}
              </p>
              
              <ul className="flex flex-col gap-3">
                {pillar.skills.map(skill => (
                  <li key={skill} className="font-sans text-[11px] uppercase tracking-widest font-bold flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-system-accent"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
