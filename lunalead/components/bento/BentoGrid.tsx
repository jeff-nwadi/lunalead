"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { 
  Stethoscope, 
  Dog, 
  Database, 
  Zap, 
  Sparkles, 
  Cpu, 
  Heart, 
  ArrowUpRight 
} from "lucide-react";

const tiles = [
  {
    id: 1,
    title: "Integrations",
    subtitle: "Seamless pet-tech connectivity.",
    content: (
      <div className="h-full p-8 bg-background border border-foreground/10 rounded-4xl flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
        <div>
          <h3 className="text-2xl font-bold mb-2">Integrations</h3>
          <p className="text-sm opacity-60">Easily integrations of third party apps.</p>
        </div>
        <div className="flex gap-4 mt-8">
          {[Stethoscope, Dog, Database].map((Icon, i) => (
            <div key={i} className="w-14 h-14 rounded-full bg-forest/5 dark:bg-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
              <Icon size={24} />
            </div>
          ))}
        </div>
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 2,
    title: "Impact",
    content: (
      <div className="h-full relative overflow-hidden rounded-4xl group">
        <Image 
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" 
          alt="Impact" 
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 p-8 z-10">
          <h3 className="text-xl font-bold text-white leading-tight">
            Small changes and big impact <br /> on the way!
          </h3>
        </div>
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Brand DNA",
    content: (
      <div className="h-full relative overflow-hidden rounded-4xl group">
        <Image 
          src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800" 
          alt="Brand DNA" 
          width={800}
          height={1200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
        />
        <div className="absolute top-8 left-8">
          <span className="px-6 py-3 bg-white/90 backdrop-blur-md text-black font-black italic rounded-xl text-xl uppercase tracking-tighter shadow-xl">
            Brand DNA.
          </span>
        </div>
      </div>
    ),
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Innovation",
    content: (
      <div className="h-full p-8 bg-background border border-foreground/10 rounded-4xl flex flex-col justify-center gap-4 group hover:shadow-2xl transition-all duration-500">
        {[
          { text: "Innovative", Icon: Zap, color: "text-purple-500 bg-purple-500/10" },
          { text: "Revolutionary", Icon: Sparkles, color: "text-pink-500 bg-pink-500/10" },
          { text: "Empowering", Icon: Cpu, color: "text-blue-500 bg-blue-500/10" },
        ].map((tag, i) => (
          <div key={i} className={cn("px-6 py-3 rounded-full flex items-center gap-3 w-fit transition-transform hover:translate-x-2 duration-300", tag.color)}>
            <span className="text-sm font-bold uppercase tracking-wider">{tag.text}</span>
            <tag.Icon size={16} />
          </div>
        ))}
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "Focus",
    content: (
      <div className="h-full p-8 bg-accent/10 dark:bg-accent/5 rounded-4xl border border-accent/20 flex flex-col justify-between group hover:bg-accent/20 transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
          <Heart size={32} fill="currentColor" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Focus</h3>
          <p className="text-sm opacity-60">Handcrafted solutions for elite pet entrepreneurs.</p>
        </div>
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
];

export function BentoGrid() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 clash-display"
          >
            Bespoke Pet Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg opacity-60"
          >
            Full range of digital architectures to effectively enhance <br className="hidden md:block" /> your pet brand&apos;s global presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[340px]">
          {tiles.map((tile, idx) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={cn(
                "relative transition-all duration-500",
                tile.className
              )}
            >
              {tile.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
