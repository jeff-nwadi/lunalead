"use client";

import { ThemeProvider } from "next-themes";
import ReactLenis from "lenis/react";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMountedLocal] = useState(false);
  const { setMounted } = useStore();
  const queryClient = getQueryClient();

  useEffect(() => {
    setMounted(true); 
    setMountedLocal(true);
  }, [setMounted]);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
