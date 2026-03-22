"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BentoImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  alt: string;
  priority?: boolean;
}

const BentoImageCarousel: React.FC<BentoImageCarouselProps> = ({ 
  images, 
  interval = 4000, 
  className,
  alt,
  priority = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {images.map((src, index) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={src}
            alt={`${alt} ${index + 1}`}
            fill
            priority={priority && index === 0}
            className="object-cover transition-transform duration-4000 ease-linear"
            style={{
              transform: index === currentIndex ? "scale(1.1)" : "scale(1.0)"
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BentoImageCarousel;
