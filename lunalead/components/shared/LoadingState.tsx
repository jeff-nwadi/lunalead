"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { PawPrint } from "lucide-react";

export function LoadingState() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      gsap.fromTo([iconRef.current, titleRef.current, subtitleRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );

      // Icon Pulse & Rotate
      gsap.to(iconRef.current, {
        scale: 1.1,
        rotate: 5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Subtitle glow/pulse
      gsap.to(subtitleRef.current, {
        opacity: 0.6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      <div
        ref={iconRef}
        className="mb-8 p-6 bg-accent rounded-full text-champagne shadow-2xl opacity-0"
      >
        <PawPrint size={48} />
      </div>
      <h2 
        ref={titleRef}
        className="text-2xl font-black italic tracking-tighter uppercase opacity-0"
      >
        Fetching your content<span className="text-accent">...</span>
      </h2>
      <p 
        ref={subtitleRef}
        className="mt-4 text-xs font-bold uppercase tracking-[0.3em] opacity-0"
      >
        Lunalead Intelligence
      </p>
    </div>
  );
}
