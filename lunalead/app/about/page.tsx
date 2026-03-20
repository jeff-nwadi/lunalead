"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="pt-20 pb-20 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Origin Story</span>
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9]">
            Specialized <br />
            <span className="text-accent italic">by Passion.</span>
          </h1>
          <div className="space-y-6 text-xl opacity-70 leading-relaxed">
            <p>
              Lunalead Studio was born from a simple realization: the pet industry is booming, 
              but its digital presence is often stuck in the early 2000s.
            </p>
            <p>
              As a former digital artist turned agency founder, I saw the gap between 
              world-class pet products and their sub-par online experiences. We moved 
              from Nigeria to the global stage to fix that.
            </p>
            <p className="font-bold text-foreground">
              We believe pet brands deserve the same technical excellence as Silicon Valley SaaS.
            </p>
          </div>
          
          <div className="mt-12">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 text-2xl font-black group"
            >
              Let&apos;s Build the Future <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-forest/10 rounded-[60px] overflow-hidden rotate-3 border border-forest/10">
            <img 
              src="https://images.unsplash.com/photo-1541591047357-124c9487315b?auto=format&fit=crop&q=80&w=1200" 
              alt="Studio" 
              className="w-full h-full object-cover grayscale" 
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full -z-10 blur-3xl opacity-30" />
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-forest rounded-full -z-10 blur-3xl opacity-20" />
        </motion.div>
      </div>

      <div className="py-20 border-t border-forest/10 dark:border-white/10 text-foreground">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-6 italic text-accent">Our Philosophy</h3>
            <p className="opacity-70 leading-relaxed">
              We don&apos;t just build websites; we architect digital directions. Every pixel is a strategy, every line of code is performance.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 italic text-accent">Performance First</h3>
            <p className="opacity-70 leading-relaxed">
              If it isn&apos;t fast, it isn&apos;t selling. We target 100/100 Lighthouse scores because that&apos;s what elite brands deserve.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 italic text-accent">Global Reach</h3>
            <p className="opacity-70 leading-relaxed">
              Based in Nigeria, building for the world. We combine local creative flair with international engineering standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
