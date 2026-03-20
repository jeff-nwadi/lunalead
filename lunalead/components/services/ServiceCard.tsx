"use client";

import React from "react";
import { Service } from "@/config/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  const { title, description, icon: Icon, span, size } = service;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2.5rem] border border-champagne/5 bg-forest-dark/40 p-10 transition-all hover:bg-forest-dark/60 hover:shadow-2xl hover:border-champagne/20 backdrop-blur-sm",
        span,
        className
      )}
    >
      <div className={cn(
        "flex h-full flex-col",
        size === 'small' || size === 'medium' ? "items-center text-center" : "items-start text-left"
      )}>
        <div className="mb-8 rounded-2xl bg-champagne/5 p-4 text-champagne transition-transform group-hover:scale-110 group-hover:bg-champagne/10">
          <Icon size={36} strokeWidth={1} />
        </div>
        
        <h3 className={cn(
          "mb-6 font-clash font-black tracking-tight text-champagne leading-tight",
          size === 'small' ? "text-2xl" : "text-3xl md:text-5xl"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "leading-relaxed text-champagne/70",
          size === 'small' ? "text-sm" : "text-base md:text-lg"
        )}>
          {description}
        </p>

        {size === 'large' && (
          <div className="mt-auto pt-8">
            <div className="h-px w-12 bg-champagne/30 mb-2 transition-all group-hover:w-24" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
