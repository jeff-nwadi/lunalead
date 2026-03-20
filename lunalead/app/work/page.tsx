"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "../../lib/utils";

const projects = [
  {
    id: "vura",
    title: "Vura",
    subtitle: "Gallery Calibration Tool",
    headline: "Revolutionizing Wall Layouts with AI.",
    problem: "The difficulty of physical gallery wall math and visualization.",
    solution: "A bespoke calibration tech using computer vision to project layouts in real-time.",
    stack: ["Next.js", "Tailwind", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "high-fidelity",
    title: "EcoSound",
    subtitle: "High-Fidelity Social Experience",
    headline: "Redefining Audio Communities.",
    problem: "Legacy social platforms prioritize engagement over high-fidelity audio quality.",
    solution: "A custom audio engine and playlist state management system for audiophiles.",
    stack: ["Zustand", "Web Audio API", "Next.js"],
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function WorkPage() {
  return (
    <section className="pt-20 pb-20 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-20"
      >
        <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Case Studies</span>
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-wide clash-display">
          Selected Works. <br />
          <span className="text-accent underline decoration-4 underline-offset-8">Precision</span> meets passion.
        </h1>
      </motion.div>

      <div className="space-y-40">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
              idx % 2 !== 0 && "lg:flex-row-reverse"
            )}
          >
            <div className={cn(idx % 2 !== 0 && "lg:order-2")}>
              <div className="relative group overflow-hidden rounded-3xl aspect-[4/3] bg-forest/10 border border-forest/10">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-forest/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>

            <div>
              <p className="text-accent font-bold mb-4">{project.subtitle}</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{project.headline}</h2>
              <div className="space-y-6 mb-10 opacity-70 leading-relaxed text-lg">
                <p><strong>The Problem:</strong> {project.problem}</p>
                <p><strong>The Solution:</strong> {project.solution}</p>
              </div>
              <div className="flex flex-wrap gap-3 mb-12">
                {project.stack.map(s => (
                  <span key={s} className="px-4 py-2 bg-foreground/5 rounded-full text-xs font-bold uppercase">{s}</span>
                ))}
              </div>
              <button className="flex items-center gap-2 group text-xl font-bold">
                View Full Case Study <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Concept Work Grid */}
      <div className="mt-40">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 italic">Concept Work</h3>
            <p className="opacity-60 max-w-sm">Pushing the boundaries of pet-tech digital design.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-forest/5 rounded-2xl border border-forest/5 overflow-hidden group relative">
              <Image 
                src={`https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                alt="Concept" 
                width={800}
                height={800}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-champagne font-bold">Luxury Pet UI Concept {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
