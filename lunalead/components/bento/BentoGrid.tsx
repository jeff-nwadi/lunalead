"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { cn } from "../../lib/utils";
import BentoImageCarousel from "./BentoImageCarousel";
import { 
  Stethoscope, 
  Dog, 
  Database, 
  Zap, 
  Sparkles, 
  Cpu, 
  Heart 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tiles = [
  {
    id: 1,
    title: "Integrations",
    subtitle: "Seamless pet-tech connectivity.",
    content: (
      <div className="h-full p-8 bg-champagne text-forest border border-forest/10 rounded-4xl flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
        <div>
          <h3 className="text-2xl font-bold mb-2">Integrations</h3>
          <p className="text-sm font-bold opacity-80">Easily integrations of third party apps.</p>
        </div>
        <div className="flex gap-4 mt-8">
          {[Stethoscope, Dog, Database].map((Icon, i) => (
            <div key={i} className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest group-hover:scale-110 transition-transform duration-500">
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
        <BentoImageCarousel 
          images={[
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=800"
          ]}
          alt="Elite Cat"
          className="rounded-4xl h-full"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
        <div className="absolute top-8 right-8 flex gap-2 z-20">
          {[1,2,3,4].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center">
                <span className="text-[8px] font-black text-white">100</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 p-8 z-20">
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
        <BentoImageCarousel 
          images={[
            "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
          ]}
          alt="Elite Dog"
          className="rounded-4xl h-full"
          interval={5000}
        />
        <div className="absolute top-8 left-8 z-20">
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
      <div className="h-full p-8 bg-champagne text-forest rounded-4xl border border-forest/10 flex flex-col justify-between group hover:bg-white transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-forest text-champagne flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
          <Heart size={32} fill="currentColor" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Our Focus</h3>
          <p className="text-sm font-bold opacity-80">Handcrafted solutions for elite pet entrepreneurs.</p>
        </div>
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
];

export function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state via CSS-in-JS for progressive enhancement
      const headerElements = headerRef.current?.children || [];
      const gridItems = gridRef.current?.children || [];

      gsap.set([...headerElements, ...gridItems], { opacity: 0, y: 30 });

      gsap.to(headerElements, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          }
        }
      );

      if (gridRef.current) {
        gsap.to(gridItems,
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 75%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 clash-display">
            Bespoke Pet Solutions
          </h2>
          <p className="text-lg">
            Full range of digital architectures to effectively enhance <br className="hidden md:block" /> your pet brand&apos;s global presence.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[340px]">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className={cn(
                "relative transition-all duration-500",
                tile.className
              )}
            >
              {tile.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
