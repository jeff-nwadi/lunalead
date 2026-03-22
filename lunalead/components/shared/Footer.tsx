"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

export function Footer() {
  return (
    <footer className="w-full bg-forest dark:bg-forest text-champagne pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image 
                src="/images/Logo.svg" 
                alt="Lunalead Logo" 
                width={200} 
                height={50} 
                className="h-10 w-auto"
                priority
              />
            </div>
            <p className="text-champagne/60 max-w-sm mb-8">
              Digital Direction for Elite Pet Brands. Handcrafted Excellence for the Global Pet Industry.
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="p-3 bg-champagne/10 rounded-xl hover:bg-champagne/20 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://instagram.com" className="p-3 bg-champagne/10 rounded-xl hover:bg-champagne/20 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-champagne/40 mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/work" className="hover:text-accent transition-colors">Selected Works</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-champagne/40 mb-6">Let&apos;s Talk</h3>
            <Magnetic>
              <Link href="/contact" className="group flex items-center text-xl font-medium hover:text-accent transition-colors w-fit">
                Book a Call <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Magnetic>
            <p className="mt-4 text-champagne/60 text-sm">hello@lunalead.com</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-champagne/10 text-champagne/40 text-xs gap-4">
          <p>Copyright © 2026 Lunalead Studio. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-champagne transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-champagne transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
