"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Bone, PawPrint, Heart, Star, Sparkles } from "lucide-react";
import Magnetic from "../shared/Magnetic";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  rotateOffset?: number;
}

const FloatingElement = ({ children, className, delay = 0, duration = 4, yOffset = 20, rotateOffset = 5 }: FloatingElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(elementRef.current, { opacity: 0, scale: 0 });
        
        gsap.to(elementRef.current, 
          { scale: 1, opacity: 1, duration: 1, delay, ease: "power3.out" }
        );

        gsap.to(elementRef.current, {
          y: -yOffset,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay
        });

        gsap.to(elementRef.current, {
          rotate: rotateOffset,
          duration: duration * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay
        });
      });
      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      gsap.set(elementRef.current, { opacity: 1, scale: 1 });
    });

    return () => mm.revert();
  }, [delay, duration, yOffset, rotateOffset]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const blur1Ref = useRef<HTMLDivElement>(null);
  const blur2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Initial state set via JS for progressive enhancement
      gsap.set([logoRef.current, titleRef.current, descriptionRef.current, buttonsRef.current], { 
        opacity: 0,
        y: 30
      });

      tl.to(logoRef.current, 
        { scale: 1, opacity: 1, duration: 0.8, delay: 0.2, y: 0 }
      )
      .to(titleRef.current,
        { y: 0, opacity: 1, duration: 1 },
        "-=0.4"
      )
      .to(descriptionRef.current,
        { opacity: 0.7, duration: 1 },
        "-=0.6"
      )
      .to(buttonsRef.current,
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.8"
      );

      gsap.to(blur1Ref.current, {
        scale: 1.1,
        opacity: 0.08,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(blur2Ref.current, {
        scale: 1.15,
        opacity: 0.12,
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-40 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-visible">
           {/* Golden Retriever Card */}
          <FloatingElement className="absolute top-[0%] left-[2%] md:top-[12%] md:left-[8%] scale-[0.6] md:scale-100" delay={0.2} duration={8} yOffset={15} rotateOffset={5}>
            <div className="relative w-32 h-40 md:w-44 md:h-56 bg-white p-2 md:p-3 rounded-2xl shadow-2xl border-2 border-white/20 transform -rotate-6 overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600"
                alt="Happy Dog"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </FloatingElement>

          {/* Persian Cat Card */}
          <FloatingElement className="absolute top-[3%] right-[2%] md:top-[18%] md:right-[5%] scale-[0.6] md:scale-100" delay={0.5} duration={10} yOffset={12} rotateOffset={-4}>
             <div className="relative w-28 h-36 md:w-40 md:h-52 bg-white p-2 md:p-3 rounded-2xl shadow-2xl border-2 border-white/20 transform rotate-8 overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600"
                alt="Majestic Cat"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </FloatingElement>

          {/* Rabbit Card */}
          <FloatingElement className="absolute bottom-[20%] left-[2%] md:bottom-[20%] md:left-[5%] scale-[0.6] md:scale-100" delay={0.8} duration={7} yOffset={10} rotateOffset={3}>
            <div className="relative w-32 h-40 md:w-36 md:h-48 bg-white p-2 md:p-3 rounded-2xl shadow-2xl border-2 border-white/20 transform rotate-3 overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=600"
                alt="Cute Rabbit"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </FloatingElement>

          {/* Bird Card */}
          <FloatingElement className="absolute bottom-[2%] right-[2%] md:bottom-[10%] md:right-[8%] scale-[0.6] md:scale-100" delay={0.3} duration={9} yOffset={18} rotateOffset={6}>
            <div className="relative w-32 h-44 md:w-48 md:h-64 bg-white p-2 md:p-3 rounded-2xl shadow-2xl border-2 border-white/20 transform -rotate-3 overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1551085254-e96b210db58a?auto=format&fit=crop&q=80&w=800"
                alt="White Cockatoo"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </FloatingElement>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={logoRef} className="mb-10 flex justify-center">
            <Image 
              src="/images/Logo.svg" 
              alt="Lunalead Studio" 
              width={200} 
              height={60} 
              className="h-8 w-auto"
              priority
            />
          </div>
          
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-wide mb-8 leading-[0.9] clash-display text-foreground">
            Digital Direction <br />
            for <span className="text-accent">Elite Pet Brands</span>.
          </h1>
          
          <p ref={descriptionRef} className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            We fuse high-performance Next.js engineering with bespoke brand design to help pet-tech founders scale their vision into industry-leading digital experiences.
          </p>
          
          <div ref={buttonsRef} className="mt-14 flex flex-wrap gap-6 justify-center">
            <Magnetic>
              <Link href="/work" className="px-10 py-5 bg-foreground text-background font-bold rounded-full hover:shadow-2xl transition-all shadow-xl">
                Explore Our Work
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/services" className="px-10 py-5 border border-foreground/30 rounded-full font-bold hover:bg-foreground/5 transition-all">
                Our Methodology
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
      
      <div 
        ref={blur1Ref}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent blur-[150px] -z-10 rounded-full opacity-[0.05]" 
      />
      <div 
        ref={blur2Ref}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest blur-[120px] -z-10 rounded-full opacity-[0.1]" 
      />
    </section>
  );
}
