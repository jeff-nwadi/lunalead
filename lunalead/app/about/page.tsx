"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PerformanceHalo from "@/components/about/PerformanceHalo";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(textColRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(imageColRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 0.2 }
    );

    if (philosophyRef.current) {
      const items = gsap.utils.toArray(philosophyRef.current.children);
      
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, { scope: containerRef, dependencies: [] });

  return (
    <section ref={containerRef} className="pt-36 pb-20 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <div ref={textColRef} className="opacity-0">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Origin Story</span>
          <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] clash-display">
            Specialized <br />
            <span className="text-accent">by Passion.</span>
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
        </div>
        
        <div ref={imageColRef} className="relative opacity-0 flex items-center justify-center py-20 lg:py-0">
          <PerformanceHalo />
        </div>
      </div>

      <div className="py-20 border-t border-forest/10 dark:border-white/10 text-foreground">
        <div ref={philosophyRef} className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="opacity-0">
            <h3 className="text-2xl font-bold mb-6 italic text-accent">Our Philosophy</h3>
            <p className="opacity-70 leading-relaxed">
              We don&apos;t just build websites; we architect digital directions. Every pixel is a strategy, every line of code is performance.
            </p>
          </div>
          <div className="opacity-0">
            <h3 className="text-2xl font-bold mb-6 italic text-accent">Performance First</h3>
            <p className="opacity-70 leading-relaxed">
              If it isn&apos;t fast, it isn&apos;t selling. We target 100/100 Lighthouse scores because that&apos;s what elite brands deserve.
            </p>
          </div>
          <div className="opacity-0">
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
