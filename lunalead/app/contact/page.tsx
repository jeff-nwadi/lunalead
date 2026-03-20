"use client";

import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Send, CheckCircle2, PawPrint } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!submitted && formRef.current) {
        gsap.fromTo(formRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      } else if (submitted && successRef.current) {
        gsap.fromTo(successRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#12372A", "#F7E7CE", "#1F6F5B"]
      });
    }, 2000);
  };

  return (
    <section ref={containerRef} className="pt-20 pb-20 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        {!submitted ? (
          <div
            ref={formRef}
            key="form"
            className="opacity-0"
          >
            <div className="text-center mb-16">
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Let&apos;s Connect</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 clash-display">Start a <br /><span className="text-accent">Conversation.</span></h1>
              <p className="text-xl opacity-60">Ready to lead the pack? Tell us about your project.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-forest/5 dark:bg-white/5 p-8 md:p-12 rounded-4xl border border-forest/10 dark:border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-60">Your Name</label>
                  <input required type="text" className="w-full bg-background border border-forest/10 rounded-2xl p-4 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-60">Email Address</label>
                  <input required type="email" className="w-full bg-background border border-forest/10 rounded-2xl p-4 focus:border-accent outline-none transition-colors" placeholder="john@petbrand.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider opacity-60">Message</label>
                <textarea required rows={5} className="w-full bg-background border border-forest/10 rounded-2xl p-4 focus:border-accent outline-none transition-colors resize-none" placeholder="Tell us about your digital direction..."></textarea>
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-6 bg-foreground text-background font-black text-xl rounded-2xl hover:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <PawPrint className="animate-bounce" /> Fetching your data...
                  </>
                ) : (
                  <>
                    Send Transmission <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div
            ref={successRef}
            key="success"
            className="text-center py-20 bg-accent text-champagne rounded-4xl shadow-2xl opacity-0"
          >
            <div className="w-24 h-24 bg-champagne/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase italic">Success!</h2>
            <p className="text-2xl mb-12 opacity-80 max-w-lg mx-auto leading-relaxed">
              Your transmission has been received. Our team will be fetching some answers and getting back to you within 24 hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-10 py-5 bg-champagne text-forest font-bold rounded-full hover:scale-105 transition-transform"
            >
              Return to Studio
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
