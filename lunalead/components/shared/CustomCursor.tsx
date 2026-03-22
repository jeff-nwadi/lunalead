"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      // Smooth interpolation (lerp)
      const lerp = 0.2;
      cursorX += (mouseX - cursorX) * lerp;
      cursorY += (mouseY - cursorY) * lerp;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    const onMouseEnterItem = () => setIsHovering(true);
    const onMouseLeaveItem = () => setIsHovering(false);

    window.addEventListener("mousemove", onMouseMove);
    const frame = requestAnimationFrame(animate);

    // Attach listeners to interactive elements
    const updateListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterItem);
        el.addEventListener("mouseleave", onMouseLeaveItem);
      });
    };

    updateListeners();
    
    // MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 w-4 h-4 rounded-full bg-foreground pointer-events-none z-9999 transition-all duration-300 ease-out",
        isHovering ? "scale-[4] opacity-20" : "scale-100 opacity-100",
        !isVisible && "opacity-0"
      )}
      style={{
        marginLeft: "-8px",
        marginTop: "-8px",
      }}
    />
  );
};

export default CustomCursor;
