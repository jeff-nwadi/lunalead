"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "The Brand Launchpad",
    price: "$900",
    description: "Perfect for emerging pet-tech founders looking for a visual identity that scales.",
    features: [
      "Logo Design & Visual Identity",
      "Color Palette (Deep Forest & Champagne)",
      "Premium Typography Selection",
      "5 Custom Landing Page Components",
      "Social Media Kit"
    ],
    accent: false
  },
  {
    title: "High-Performance Dev",
    price: "$1,500",
    description: "Elite engineering for brands that demand sub-second performance and interaction.",
    features: [
      "Custom Next.js 15+ Build",
      "100/100 Lighthouse Optimization",
      "Framer Motion Micro-Animations",
      "Headless CMS Integration (Sanity)",
      "Technical SEO Architecture"
    ],
    accent: true
  },
  {
    title: "The Full Agency Experience",
    price: "$2,000+",
    description: "The end-to-end transformation. We build your entire digital ecosystem.",
    features: [
      "Full Brand Identity Suite",
      "Custom Web Application Build",
      "E-commerce / Subscription Integration",
      "3 Months Post-Launch Support",
      "Priority Strategic Consulting"
    ],
    accent: false
  }
];

export default function ServicesPage() {
  return (
    <section className="pt-20 pb-20 container mx-auto px-6">
      <div className="max-w-3xl mb-20">
        <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Productized Offers</span>
        <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] clash-display">
          Elite <span className="text-accent ">Packages</span> <br />
          for Growth.
        </h1>
        <p className="text-xl opacity-70 leading-relaxed max-w-2xl">
          We don&apos;t do hourly rates. We do fixed-price, world-class excellence. 
          Choose the level of intensity your brand needs to lead the market.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`p-10 rounded-3xl border ${
              service.accent 
              ? "bg-accent text-champagne border-accent scale-105 shadow-2xl z-10" 
              : "bg-forest/5 dark:bg-white/5 border-forest/10 dark:border-white/10"
            } flex flex-col`}
          >
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 opacity-60">Service {i + 1}</h3>
            <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
            <div className="text-4xl font-black mb-8">{service.price}</div>
            <p className={`mb-10 text-lg ${service.accent ? "text-champagne/80" : "opacity-70"}`}>
              {service.description}
            </p>
            
            <div className="space-y-4 mb-12 flex-grow">
              {service.features.map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className={service.accent ? "text-champagne" : "text-accent"} />
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
              service.accent 
              ? "bg-champagne text-forest hover:bg-white" 
              : "bg-foreground text-background hover:scale-[0.98]"
            }`}>
              Secure This Package <ArrowRight size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
