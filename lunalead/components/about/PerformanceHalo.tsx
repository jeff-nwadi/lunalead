"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PerformanceHalo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef1 = useRef<HTMLDivElement>(null);
  const orbitRef2 = useRef<HTMLDivElement>(null);
  const orbitRef3 = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(orbitRef1.current, {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: "none"
    });
    
    gsap.to(orbitRef2.current, {
      rotation: -360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });
    
    gsap.to(orbitRef3.current, {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: "none"
    });

    gsap.to(haloRef.current, {
      scale: 1.1,
      opacity: 0.8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef, dependencies: [] });

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center overflow-visible">
      
      <div 
        ref={haloRef}
        className="absolute w-32 h-32 md:w-48 md:h-48 bg-emerald rounded-full blur-[60px] md:blur-[90px] opacity-60 z-0" 
      />
      
      <div className="relative z-10 text-center">
        <div className="text-[80px] md:text-[120px] font-black leading-none clash-display text-white drop-shadow-2xl">
          100
        </div>
        <div className="text-white/40 font-bold uppercase tracking-[0.4em] text-[8px] md:text-xs -mt-2 md:-mt-4">
          Lighthouse Score
        </div>
      </div>

      <div ref={orbitRef1} className="absolute w-[60%] h-[60%] border border-white/5 rounded-full z-20 pointer-events-none">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 whitespace-nowrap">
          <span className="text-[8px] uppercase font-black text-white/40 tracking-widest mr-2">FCP</span>
          <span className="text-white font-black text-[10px] md:text-xs">0.6s</span>
        </div>
      </div>

      <div ref={orbitRef2} className="absolute w-[80%] h-[80%] border border-white/5 rounded-full z-20 pointer-events-none">
        <div className="absolute top-1/2 -left-3 -translate-y-1/2 px-3 py-1 bg-emerald/20 backdrop-blur-md rounded-full border border-emerald/30 whitespace-nowrap rotate-90 md:rotate-0">
          <span className="text-[8px] uppercase font-black text-white/40 tracking-widest mr-2">LCP</span>
          <span className="text-white font-black text-[10px] md:text-xs">0.8s</span>
        </div>
      </div>

      <div ref={orbitRef3} className="absolute w-[95%] h-[95%] border border-white/5 rounded-full z-20 pointer-events-none">
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 whitespace-nowrap">
          <span className="text-[8px] uppercase font-black text-white/40 tracking-widest mr-2">SEO</span>
          <span className="text-white font-black text-[10px] md:text-xs">100%</span>
        </div>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

    </div>
  );
}
