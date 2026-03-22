"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/config/services";
import ServiceCard from "@/components/services/ServiceCard";
import Link from "next/link";
import Magnetic from "@/components/shared/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children,
          { opacity: 0, scale: 0.95, y: 20 },
          { 
            opacity: 1, 
            scale: 1,
            y: 0,
            duration: 0.8, 
            stagger: 0.08,
            ease: "expo.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            }
          }
        );
      }

      if (buttonRef.current) {
        gsap.fromTo(buttonRef.current,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 90%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-background pt-32 pb-40">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="max-w-3xl mb-20 overflow-hidden">
          <span className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-4 block">Our Solutions</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9] clash-display text-foreground tracking-wide">
            Full-Stack <span className="text-accent">Ecosystem</span> <br />
            for Elite Brands.
          </h1>
          <p className="text-xl opacity-70 leading-relaxed max-w-2xl">
            We provide a comprehensive digital architecture tailored for pet-tech founders. 
            From performance-first engineering to secure managed hosting, our ecosystem is built to scale.
          </p>
        </div>

        <div 
          ref={gridRef} 
          className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 overflow-hidden mb-24"
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
            />
          ))}
        </div>

        <div ref={buttonRef} className="flex justify-center">
          <Magnetic>
            <Link 
              href="/contact" 
              className="px-12 py-6 bg-foreground text-background font-black text-xl rounded-full transition-all hover:scale-105 active:scale-95 group"
            >
              Start Your Project <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}


