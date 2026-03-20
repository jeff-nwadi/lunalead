"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/config/services";
import ServiceCard from "@/components/services/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-background pt-32 pb-40">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="max-w-3xl mb-20 overflow-hidden">
          <span className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-4 block">Productized Offers</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9] clash-display text-foreground tracking-wide">
            Elite <span className="text-accent">Packages</span> <br />
            for Growth.
          </h1>
          <p className="text-xl opacity-70 leading-relaxed max-w-2xl">
            We don&apos;t do hourly rates. We do value-driven, world-class excellence. 
            Choose the level of speed and impact your brand needs to lead the market.
          </p>
        </div>

        <div 
          ref={gridRef} 
          className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 overflow-hidden"
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}


