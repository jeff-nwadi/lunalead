"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getProjects, SanityProject } from "@/services/sanity";
import { urlFor } from "@/lib/sanity";
import PetsTracker from "@/public/images/pet tracker dashboard.webp";

gsap.registerPlugin(ScrollTrigger);

export default function WorkContent() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" }
      );

      const items = gsap.utils.toArray<HTMLDivElement>(".project-item");
      items.forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );

        const img = item.querySelector(".floating-asset");
        const isDesktop = window.innerWidth >= 1024;
        if (img && isDesktop) {
          gsap.to(img, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
          
          item.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            gsap.to(img, {
              rotateY: x * 15,
              rotateX: -y * 15,
              x: x * 30,
              y: y * 30 - 20, 
              duration: 0.5,
              ease: "power2.out"
            });
          });
          
          item.addEventListener("mouseleave", () => {
            gsap.to(img, {
              rotateY: 0,
              rotateX: 0,
              x: 0,
              y: -20,
              duration: 1,
              ease: "elastic.out(1, 0.3)"
            });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section ref={containerRef} className="bg-background pt-32 pb-40">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className="max-w-4xl mb-32"
        >
          <span className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-6 block">Case Studies</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.8] clash-display text-foreground tracking-wide">
            Selected <br />
            <span className="text-accent">Works.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl leading-relaxed">
            Where precision engineering meets bespoke brand design. 
            We build digital flagships that scale with your vision.
          </p>
        </div>

        <div ref={projectsRef} className="space-y-60">
          {projects.length === 0 ? (
            <div className="py-20 text-center">
               <p className="text-foreground/40 font-clash font-black text-2xl animate-pulse">New Case Studies Fetching...</p>
            </div>
          ) : (
            projects.map((project: SanityProject, idx: number) => (
              <div
                key={project._id}
                className="project-item grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
              >

                <div className="relative group">
                  <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-white/5 aspect-4/3 border border-white/10">
                    <div className="absolute inset-0 bg-forest-dark/20 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  <div className="floating-asset absolute inset-0 -top-10 -right-10 md:-top-20 md:-right-20 z-20 pointer-events-none drop-shadow-2xl">
                    <div className="relative w-[95%] h-[90%] rounded-3xl overflow-hidden border-4 border-champagne shadow-2xl skew-x-1 skew-y-1">
                      <Image 
                        src={urlFor(project.mainImage).url()} 
                        alt={project.title} 
                        width={12000}
                        height={900}
                        className="w-full h-full object-cover" 
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                  </div>
                </div>

                <div className="relative z-30">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="h-px w-8 bg-accent" />
                    <p className="text-accent font-black tracking-widest uppercase text-sm">{project.category}</p>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground leading-[0.9] clash-display">{project.title}</h2>
                  
                  <div className="grid gap-6 mb-12">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2 font-bold">The Problem</p>
                      <p className="text-foreground/80 font-medium leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-accent text-white shadow-xl shadow-accent/20">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">The Solution</p>
                      <p className="font-medium leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.technologies?.map(s => (
                      <span key={s} className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-wider text-foreground/60">{s}</span>
                    ))}
                  </div>
                  
                  {project.caseStudyLink && (
                    <a 
                      href={project.caseStudyLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 group text-xl font-black text-foreground hover:text-accent transition-colors w-fit"
                    >
                      View Full Case Study 
                      <div className="p-3 rounded-full bg-foreground group-hover:bg-accent text-background transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight size={20} />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-60 pt-40 border-t border-white/10">
          <div className="max-w-4xl mb-24">
            <span className="text-accent font-black uppercase tracking-[0.4em] text-xs mb-6 block italic underline underline-offset-8">Research & Development</span>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.8] clash-display tracking-wide">
              Defining the <br />
              <span className="">Future of Pet-Tech.</span>
            </h3>
            <p className="text-xl text-foreground/60">Exploring the intersection of computer vision, bio-data, and luxury pet experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-4 aspect-video bg-white/5 rounded-[2.5rem] p-12 flex flex-col justify-end group overflow-hidden relative border border-white/10">
              <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                 <Image 
                   src={PetsTracker} 
                   alt="Smart Collar" 
                   fill
                   className="object-cover"
                 />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <span className="px-3 py-1 bg-accent rounded-full text-[10px] font-black uppercase tracking-widest text-champagne mb-4 inline-block">Prototyping</span>
                <h4 className="text-3xl font-black text-champagne mb-4 clash-display">Smart Collar Dashboard</h4>
                <p className="text-champagne/60 max-w-md">Real-time biomechanic visualization for high-performance service animals and elite pets.</p>
              </div>
            </div>
            
            <div className="md:col-span-2 aspect-square md:aspect-auto bg-accent rounded-[2.5rem] p-10 flex flex-col justify-end text-champagne shadow-2xl shadow-accent/20">
              <h4 className="text-2xl font-black mb-4 clash-display leading-tight">Premium Kibble <br />Subscription Flow</h4>
              <p className="text-white/60 text-sm">Optimizing D2C conversion for personalized luxury pet nutrition brands.</p>
            </div>

            <div className="md:col-span-2 aspect-square bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center">
              <span className="text-4xl mb-4 italic text-white/10">03</span>
              <h4 className="text-xl font-bold text-white/40 clash-display">Pet-Biometric <br />Security Keys</h4>
            </div>

            <Link 
              href="/contact"
              className="md:col-span-4 aspect-21/9 bg-white/5 border border-white/10 rounded-[2.5rem] p-12 flex items-center justify-between group cursor-pointer hover:border-accent transition-colors"
            >
              <div>
                <h4 className="text-3xl font-black text-foreground clash-display">Join the Alpha</h4>
                <p className="text-foreground/60">Partner with our studio to build the next industry leader.</p>
              </div>
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-champagne group-hover:scale-110 transition-all">
                <ArrowUpRight size={32} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
