"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { MoveHorizontal, Sparkles, History, ArrowDown, ArrowUp } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before Renovation",
  afterLabel = "After RCM Transformation",
  title = "Kitchen Transformation: Before & After",
  subtitle = "Scroll down to transform the space into modern luxury • Scroll up to inspect original"
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(15);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [scrollPercentDisplay, setScrollPercentDisplay] = useState<number>(15);

  // Link to viewport scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  // Smooth spring physics for natural fluid transformation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.8,
    restDelta: 0.001
  });

  // Map 0 -> 1 scroll progress to 5% -> 95% reveal
  const scrollTransformValue = useTransform(smoothProgress, [0, 1], [5, 95]);

  // Synchronize scroll value to slider position when user is not manually dragging
  useEffect(() => {
    const unsubscribe = scrollTransformValue.on("change", (latest) => {
      if (!isUserInteracting) {
        const clamped = Math.max(0, Math.min(100, latest));
        setSliderPosition(clamped);
        setScrollPercentDisplay(Math.round(clamped));
      }
    });
    return () => unsubscribe();
  }, [scrollTransformValue, isUserInteracting]);

  // Manual Drag Support
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
    setScrollPercentDisplay(Math.round(percentage));
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsUserInteracting(true);
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isUserInteracting) return;
    handleMove(e.clientX);
  };

  const handleEnd = () => {
    // Return to scroll-driven mode after a brief timeout
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Editorial Header */}
      {(title || subtitle) && (
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9F7F48] font-bold block">
              BEFORE & AFTER TRANSFORMATION
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif text-[#171717] font-normal">
              {title}
            </h4>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAE8E3] text-xs text-gray-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-ping" />
              <span>Scroll to transform: <strong>{scrollPercentDisplay}%</strong></span>
            </div>
            <p className="text-xs text-gray-500 font-sans max-w-xs text-left">
              {subtitle}
            </p>
          </div>
        </div>
      )}

      {/* Main Interactive & Scroll-Driven Canvas */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-[#C5A46D]/35 select-none cursor-ew-resize group bg-[#171717]"
        onMouseDown={() => setIsUserInteracting(true)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          setIsUserInteracting(true);
          handleMove(e.touches[0].clientX);
        }}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
      >
        {/* AFTER Image (Background Layer - Modern Transformation) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover"
            priority
          />
          {/* After Badge */}
          <div
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-[#171717]/90 backdrop-blur-md border border-[#C5A46D]/60 text-[#DFCA9F] text-[10px] sm:text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 shadow-xl transition-opacity duration-300"
            style={{ opacity: sliderPosition > 15 ? 1 : 0.4 }}
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A46D]" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* BEFORE Image (Foreground Layer - Clipped based on sliderPosition) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden transition-[clip-path] duration-75 ease-out"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover filter contrast-[0.95]"
          />
          {/* Before Badge */}
          <div
            className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-gray-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 shadow-xl transition-opacity duration-300"
            style={{ opacity: sliderPosition < 85 ? 1 : 0.4 }}
          >
            <History className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-300" />
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Vertical Divider Line with Gold Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.9)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#171717] border-2 border-[#DFCA9F] shadow-2xl flex items-center justify-center text-[#DFCA9F] group-hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 stroke-[2]" />
          </div>
        </div>

        {/* Scroll Motion Direction Indicators on Bottom */}
        <div className="absolute bottom-4 left-6 right-6 z-10 flex items-center justify-between text-[11px] font-sans text-white/90 pointer-events-none">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
            <ArrowUp className="w-3 h-3 text-[#DFCA9F]" />
            Scroll Up: Revert to Original
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
            Scroll Down: Reveal New Transformation
            <ArrowDown className="w-3 h-3 text-[#DFCA9F]" />
          </span>
        </div>
      </div>

      {/* Mobile Indicator */}
      <div className="flex sm:hidden items-center justify-between text-xs text-gray-500 pt-3 px-1">
        <span>Scroll down to transform</span>
        <span>{scrollPercentDisplay}% New</span>
      </div>
    </div>
  );
}
