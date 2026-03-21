"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useStore } from "@/store/useStore";
import Magnetic from "./Magnetic";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const { isMounted, isMenuOpen, toggleMenu, setMenuOpen } = useStore();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      gsap.set(menuRef.current, { opacity: 0, y: -20 });
      gsap.to(menuRef.current,
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [isMenuOpen]);

  const [localMounted, setLocalMounted] = useState(false);
  useEffect(() => {
    setLocalMounted(true);
  }, []);

  // Removed the rigid mount check to ensure visibility even if JS initialization is delayed
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-background/80 backdrop-blur-md border-b border-forest/10 dark:border-champagne/10">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/Logo.svg" 
            alt="Lunalead Logo" 
            width={160} 
            height={40} 
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Magnetic>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Strategy Call
            </Link>
          </Magnetic>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full hover:bg-foreground/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-forest/10 dark:border-champagne/10 p-6 flex flex-col space-y-4 shadow-xl z-[110]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-accent transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-full py-4 bg-foreground text-background font-bold text-center rounded-xl mt-4"
          >
            Book a Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
}
