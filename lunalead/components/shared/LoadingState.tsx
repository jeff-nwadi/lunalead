"use client";

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export function LoadingState() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: 1,
          rotate: [0, 5, -5, 0]
        }}
        exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.3 } }}
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut"
        }}
        className="mb-8 p-6 bg-accent rounded-full text-champagne shadow-2xl"
      >
        <PawPrint size={48} />
      </motion.div>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        className="text-2xl font-black italic tracking-tighter uppercase"
      >
        Fetching your content<span className="text-accent">...</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        className="mt-4 text-xs font-bold uppercase tracking-[0.3em]"
      >
        Lunalead Intelligence
      </motion.p>
    </motion.div>
  );
}
