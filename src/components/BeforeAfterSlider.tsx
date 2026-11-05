"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles } from "lucide-react";

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
  title = "Renovation Transformation",
  subtitle = "Drag the slider to inspect before and after craftsmanship"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="mb-4 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#9F7F48] font-bold block">
              BEFORE & AFTER COMPARISON
            </span>
            <h4 className="text-xl sm:text-2xl font-serif text-[#171717]">{title}</h4>
          </div>
          <p className="text-xs text-gray-500 font-sans">{subtitle}</p>
        </div>
      )}

      {/* Comparison Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A46D]/40 select-none cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background Base) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#171717]/85 backdrop-blur-md border border-[#C5A46D]/50 text-[#DFCA9F] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* BEFORE Image (Clipped Foreground) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover filter grayscale-[20%]"
          />
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-gray-200 text-xs font-semibold uppercase tracking-wider shadow-lg">
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Vertical Divider Line with Grab Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#171717] border-2 border-[#DFCA9F] shadow-2xl flex items-center justify-center text-[#DFCA9F]">
            <MoveHorizontal className="w-5 h-5 stroke-[2]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 px-1">
        <span>← Drag left to reveal transformation</span>
        <span>Drag right to view original space →</span>
      </div>
    </div>
  );
}

