"use client";

import { ThemeProvider } from "next-themes";
import ReactLenis from "lenis/react";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { LoadingState } from "@/components/shared/LoadingState";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMountedLocal] = useState(false);
  const { setMounted } = useStore();

  useEffect(() => {
    setMounted(true); // Global store sync
    // We delay the local mounted state slightly to allow LoadingState to be visible
    // but the actual fade out should be handled by the LoadingState itself if possible
    // or we just remove AnimatePresence for now.
    setMountedLocal(true); 
  }, [setMounted]);

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="lunalead-theme"
    >
      <ReactLenis root>
        {!mounted && <LoadingState />}
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
