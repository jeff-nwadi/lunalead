"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { ArrowUpRight, CheckCircle2, Monitor, Code, Palette, Smartphone, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const tiles = [
  {
    id: 1,
    title: "Vura Gallery",
    subtitle: "AI-Powered Calibration Tool",
    content: (
      <div className="relative w-full h-full bg-forest dark:bg-black rounded-2xl overflow-hidden group">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
        >
          <source src="/videos/vura-preview.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest to-emerald-accent" />
        </video>
        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-sm font-bold text-accent mb-2 uppercase tracking-widest">Case Study</p>
          <h3 className="text-2xl font-bold text-white mb-2">Revolutionizing Wall Layouts</h3>
          <ArrowUpRight className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    ),
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Performance",
    subtitle: "Lighthouse Score",
    content: (
      <div className="flex flex-col items-center justify-center h-full p-8 bg-champagne dark:bg-forest/20 rounded-2xl border border-forest/10 dark:border-white/10 transition-all hover:bg-white/5">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64" cy="64" r="58"
              stroke="currentColor" strokeWidth="8"
              fill="transparent" className="text-forest/10 dark:text-champagne/10"
            />
            <motion.circle
              cx="64" cy="64" r="58"
              stroke="currentColor" strokeWidth="8"
              fill="transparent" className="text-emerald-accent"
              strokeDasharray="364.4"
              initial={{ strokeDashoffset: 364.4 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black">100</span>
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Score</span>
          </div>
        </div>
        <p className="mt-6 text-sm font-bold tracking-widest uppercase opacity-60">Verified Core Web Vitals</p>
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Expertise",
    subtitle: "The Stack",
    content: (
      <div className="h-full p-6 bg-forest/5 dark:bg-white/5 rounded-2xl border border-forest/10 dark:border-white/10 overflow-hidden">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-6 text-center">Engineered With</h4>
        <div className="grid grid-cols-2 gap-4">
          {[
            { Icon: Code, name: "Next.js" },
            { Icon: Zap, name: "Motion" },
            { Icon: Palette, name: "Branding" },
            { Icon: Monitor, name: "SaaS" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-3 rounded-xl bg-background/50 border border-forest/5 shadow-sm">
              <item.Icon size={18} className="mb-2 text-accent" />
              <span className="text-[10px] font-bold uppercase">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "The Niche",
    content: (
      <div className="h-full relative overflow-hidden rounded-2xl group">
        <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" 
          alt="Luxury Pet Product" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-gradient-to-t from-forest to-transparent text-champagne">
          <p className="text-[10px] font-black uppercase tracking-widest mb-1">Focus</p>
          <p className="text-lg font-bold">Specialized in Pet-Tech & D2C</p>
        </div>
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "Testimonial",
    content: (
      <div className="h-full p-8 flex flex-col justify-center bg-accent text-champagne rounded-2xl">
        <p className="text-xl font-medium leading-relaxed mb-6 italic">
          &ldquo;Lunalead didn&apos;t just build a website; they architected a brand and a performance-first experience that converted 40% better on day one.&rdquo;
        </p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-champagne/20 flex items-center justify-center font-bold">JD</div>
          <div>
            <p className="text-sm font-bold">Founder, Vura AI</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Digital Product Consultant</p>
          </div>
        </div>
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Availability",
    content: (
      <div className="h-full p-6 flex flex-col items-center justify-center bg-forest dark:bg-black/40 text-champagne rounded-2xl border border-champagne/10 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Real-time Status</p>
        <h3 className="text-4xl font-black mb-4 uppercase leading-none text-center">Accepting <br /><span className="text-emerald-accent">1 project</span></h3>
        <p className="text-sm font-medium px-4 py-2 bg-champagne/10 rounded-full">For April 2026</p>
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
];

export function BentoGrid() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
        {tiles.map((tile, idx) => (
          <motion.div
            key={tile.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
              "relative group h-full transition-all duration-500",
              tile.className
            )}
          >
            {tile.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
