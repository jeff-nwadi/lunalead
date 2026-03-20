"use client";

import { ThemeProvider } from "next-themes";
import ReactLenis from "lenis/react";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { LoadingState } from "@/components/shared/LoadingState";
import { AnimatePresence } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMountedLocal] = useState(false);
  const { setMounted } = useStore();

  useEffect(() => {
    setMounted(true); // Global store sync
    setMountedLocal(true); // Local guard
  }, [setMounted]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!mounted && <LoadingState key="loader" />}
      </AnimatePresence>
      
      {mounted ? (
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="lunalead-theme"
        >
          <ReactLenis root>{children}</ReactLenis>
        </ThemeProvider>
      ) : (
        <div className="opacity-0">{children}</div>
      )}
    </>
  );
}
