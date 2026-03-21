"use client";

import { ThemeProvider } from "next-themes";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

function LenisProvider({ children }: { children: React.ReactNode }) {
  const [LenisComp, setLenisComp] = useState<React.ComponentType<{ root: boolean; children: React.ReactNode }> | null>(null);

  useEffect(() => {
    import("lenis/react")
      .then((mod) => setLenisComp(() => mod.default))
      .catch(() => {});
  }, []);

  if (!LenisComp) return <>{children}</>;
  return <LenisComp root>{children}</LenisComp>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const { setMounted } = useStore();
  const queryClient = getQueryClient();

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="dark"
        enableSystem={false}
        storageKey="lunalead-theme"
      >
        <ErrorBoundary>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
