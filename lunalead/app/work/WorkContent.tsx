"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getProjects, SanityProject } from "@/services/sanity";
import { urlFor } from "@/lib/sanity";

gsap.registerPlugin(ScrollTrigger);

export default function WorkContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  useLayoutEffect(() => {
    if (isLoading || projects.length === 0) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" }
      );

      // Projects Animation
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card: any, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none"
            },
            delay: (i % 2) * 0.15
          }
        );
      });

      // Subtle parallax for some images
      const images = gsap.utils.toArray(".parallax-img");
      images.forEach((img: any) => {
        gsap.to(img, {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projects, isLoading]);

  return (
    <section ref={containerRef} className="bg-background text-foreground pt-32 pb-60 transition-colors duration-500 min-h-screen selection:bg-accent selection:text-white">
      <div className="container mx-auto px-6">
        <header ref={headerRef} className="mb-20 md:mb-32 text-center md:text-left max-w-5xl">
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 block font-clash">Portfolio</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] clash-display tracking-wide mb-8 md:mb-12">
            SELECTED <br />
            <span className="text-accent">WORKS.</span>
          </h1>
          <p className="text-lg md:text-2xl text-foreground/80 max-w-3xl font-medium leading-relaxed">
            Where precision engineering meets bespoke brand design. 
            We build digital flagships that scale with your vision.
          </p>
        </header>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4 opacity-50">
            <Loader2 className="animate-spin text-accent" size={48} />
            <p className="clash-display font-medium tracking-widest text-sm uppercase">Fetching Case Studies...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="py-40 text-center border border-white/10 rounded-[3rem] bg-white/5">
             <p className="text-foreground/40 font-clash font-black text-2xl">No Case Studies Found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 px-2 md:px-0">
            {projects.map((project: SanityProject, idx: number) => {
              // Assign layout properties based on index to create a dynamic masonry feel
              const isHuge = idx % 3 === 2;
              const aspect = idx % 4 === 0 ? "aspect-[4/5]" : (idx % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]");
              
              return (
                <div 
                  key={project._id} 
                  className={cn(
                    "project-card relative group flex flex-col pt-0",
                    isHuge ? "md:row-span-1" : "",
                    idx % 2 === 1 ? "md:mt-40" : "" // Stagger effect
                  )}
                >
                  <div className={cn(
                    "relative overflow-hidden rounded-[3rem] md:rounded-[5rem] bg-white/5 transition-transform duration-700 group-hover:scale-[1.01] border border-white/10 shadow-2xl shadow-black/20",
                    aspect
                  )}>
                    <div className="parallax-img absolute inset-0 -top-[20%] h-[140%] w-full">
                      <Image 
                        src={urlFor(project.mainImage).width(1200).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        priority={idx < 2}
                      />
                      <div className="absolute inset-0 bg-black/20 transition-opacity duration-700 group-hover:opacity-0" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-16 text-foreground">
                      <span className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">{project.category}</span>
                      <h3 className="text-3xl md:text-6xl font-black clash-display mb-10 leading-none">{project.title}</h3>
                      <Link 
                        href={`/work/${project.slug?.current || project._id}`}
                        className="flex items-center gap-4 group/btn font-black text-lg uppercase tracking-widest w-fit"
                      >
                        View Project 
                        <div className="h-12 w-12 rounded-full bg-foreground text-background flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-500">
                          <ArrowUpRight size={24} />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Information below card */}
                  <div className="mt-8 md:mt-12 md:px-6">
                    <div className="flex justify-between items-start text-foreground">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="h-1 w-8 bg-accent" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{project.category}</span>
                        </div>
                        <h3 className="text-2xl md:text-5xl font-black clash-display leading-tight">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Dynamic CTA */}
        <div className="mt-40 md:mt-80 relative overflow-hidden rounded-[3rem] md:rounded-[4rem] bg-accent text-foreground p-10 md:p-32 text-center group">
          <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-150 transition-transform duration-1000 rounded-full" />
          <div className="relative z-10">
            <span className="text-foreground/60 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 md:mb-8 block font-mono italic">Curating Excellence</span>
            <h2 className="text-3xl md:text-8xl font-black mb-10 md:mb-16 clash-display leading-tight md:leading-none tracking-wide md:tracking-tighter">
              READY TO BUILD <br className="hidden md:block" /> YOUR FLAGSHIP?
            </h2>
            <Link 
              href="/contact"
              className="flex items-center gap-4 md:gap-6 bg-foreground text-background px-6 py-4 md:px-16 md:py-8 rounded-full font-black text-lg md:text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95"
            >
              Start Collaboration <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
