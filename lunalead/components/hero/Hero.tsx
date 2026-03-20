"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bone, PawPrint, Heart, Star, Sparkles } from "lucide-react";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const FloatingElement = ({ children, className, delay = 0, duration = 4, yOffset = 20 }: FloatingElementProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -yOffset, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      opacity: { duration: 1, delay },
      scale: { duration: 1, delay },
      y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Floating Icons Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-visible">
          <FloatingElement className="absolute top-[10%] left-[10%] text-accent/20" delay={0.2} duration={5} yOffset={30}>
            <Bone size={64} className="rotate-45" />
          </FloatingElement>
          <FloatingElement className="absolute top-[20%] right-[15%] text-accent/15" delay={0.5} duration={6} yOffset={25}>
            <PawPrint size={48} className="-rotate-12" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-[30%] left-[15%] text-accent/10" delay={0.8} duration={4.5} yOffset={20}>
            <Heart size={40} />
          </FloatingElement>
          <FloatingElement className="absolute bottom-[10%] right-[10%] text-accent/20" delay={0.3} duration={5.5} yOffset={35}>
            <Star size={56} className="rotate-12" />
          </FloatingElement>
          <FloatingElement className="absolute top-[15%] left-[45%] text-accent/25" delay={1.2} duration={3} yOffset={15}>
            <Sparkles size={32} />
          </FloatingElement>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-10 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image 
                src="/images/Logo.svg" 
                alt="Lunalead Studio" 
                width={240} 
                height={60} 
                className="h-12 w-auto"
                priority
              />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-8 leading-[0.9] clash-display text-foreground">
            Digital Direction <br />
            for <span className="text-accent">Elite Pet Brands</span>.
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
          >
            We fuse high-performance Next.js engineering with bespoke brand design to help pet-tech founders scale their vision into industry-leading digital experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-14 flex flex-wrap gap-6 justify-center"
          >
            <button className="px-10 py-5 bg-foreground text-background font-bold rounded-full hover:scale-105 hover:shadow-2xl transition-all shadow-xl">
              Explore Our Work
            </button>
            <button className="px-10 py-5 border border-foreground/30 rounded-full font-bold hover:bg-foreground/5 transition-all">
              Our Methodology
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Dynamic Background Blurs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent blur-[150px] -z-10 rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest blur-[120px] -z-10 rounded-full" 
      />
    </section>
  );
}
