"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, PawPrint } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
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
    <section className="pt-20 pb-20 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="text-center mb-16">
                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Let&apos;s Connect</span>
                <h1 className="text-6xl md:text-8xl font-black mb-6">Start a <span className="text-accent italic">Conversation.</span></h1>
                <p className="text-xl opacity-60">Ready to lead the pack? Tell us about your project.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-forest/5 dark:bg-white/5 p-8 md:p-12 rounded-[40px] border border-forest/10 dark:border-white/10">
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
                  <label className="text-sm font-bold uppercase tracking-wider opacity-60">Scale of Project</label>
                  <select className="w-full bg-background border border-forest/10 rounded-2xl p-4 focus:border-accent outline-none transition-colors appearance-none">
                    <option>Brand Launchpad ($900+)</option>
                    <option>High-Performance Dev ($1,500+)</option>
                    <option>Full Agency Experience ($2,000+)</option>
                  </select>
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
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-accent text-champagne rounded-[60px] shadow-2xl"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
