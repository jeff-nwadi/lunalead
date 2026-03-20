"use client";

import { ThemeProvider } from "next-themes";
import ReactLenis from "lenis/react";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMountedLocal] = useState(false);
  const { setMounted } = useStore();

  useEffect(() => {
    setMounted(true); 
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
        {mounted ? children : null}
      </ReactLenis>
    </ThemeProvider>
  );
}
