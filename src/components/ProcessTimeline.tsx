"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  Compass,
  FileCheck2,
  Wrench,
  Award,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);

  // Scroll tracking: Starts when timeline enters 65% of viewport;
  // Completes when Step 5 reaches 60% of viewport (eye-level center)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 60%"]
  });

  // Snappy, silky smooth spring without sluggish lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 26,
    mass: 0.2,
    restDelta: 0.0005
  });

  const [truckPos, setTruckPos] = useState({ x: 480, y: 80, angle: 90 });
  const [mobileTruckPos, setMobileTruckPos] = useState({ x: 30, y: 60, angle: 90 });
  const [activeStep, setActiveStep] = useState(1);

  // Desktop Path: ViewBox 0 0 1000 2500 (5 rows of 500px, centers at 250, 750, 1250, 1750, 2250)
  const desktopPathData =
    "M 480,80 L 480,250 C 480,480 520,520 520,750 C 520,980 480,1020 480,1250 C 480,1480 520,1520 520,1750 C 520,1980 500,2020 500,2250";

  // Mobile Path: ViewBox 0 0 60 2500
  const mobilePathData =
    "M 30,60 L 30,250 C 30,480 36,520 36,750 C 36,980 24,1020 24,1250 C 24,1480 36,1520 36,1750 C 36,1980 30,2020 30,2250";

  // Desktop milestone node positions
  const desktopNodes = [
    { number: "01", x: 480, y: 250 },
    { number: "02", x: 520, y: 750 },
    { number: "03", x: 480, y: 1250 },
    { number: "04", x: 520, y: 1750 },
    { number: "05", x: 500, y: 2250 }
  ];

  // Mobile milestone node positions
  const mobileNodes = [
    { number: "01", x: 30, y: 250 },
    { number: "02", x: 36, y: 750 },
    { number: "03", x: 24, y: 1250 },
    { number: "04", x: 36, y: 1750 },
    { number: "05", x: 30, y: 2250 }
  ];

  // Position update handler for both paths
  const updateVehiclePositions = useCallback((progressValue: number) => {
    const clamped = Math.max(0, Math.min(1, progressValue));

    // Update Desktop Van
    if (desktopPathRef.current) {
      const path = desktopPathRef.current;
      const total = path.getTotalLength();
      const cur = clamped * total;
      const pt = path.getPointAtLength(cur);

      const lookAhead = Math.min(total, cur + 6);
      const lookBehind = Math.max(0, cur - 2);
      const p1 = path.getPointAtLength(lookBehind);
      const p2 = path.getPointAtLength(lookAhead);

      const angleRad = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      const angleDeg = (angleRad * 180) / Math.PI + 90;

      setTruckPos({
        x: pt.x,
        y: pt.y,
        angle: angleDeg
      });
    }

    // Update Mobile Van
    if (mobilePathRef.current) {
      const pathM = mobilePathRef.current;
      const totalM = pathM.getTotalLength();
      const curM = clamped * totalM;
      const ptM = pathM.getPointAtLength(curM);

      const lookAheadM = Math.min(totalM, curM + 6);
      const lookBehindM = Math.max(0, curM - 2);
      const p1M = pathM.getPointAtLength(lookBehindM);
      const p2M = pathM.getPointAtLength(lookAheadM);

      const angleRadM = Math.atan2(p2M.y - p1M.y, p2M.x - p1M.x);
      const angleDegM = (angleRadM * 180) / Math.PI + 90;

      setMobileTruckPos({
        x: ptM.x,
        y: ptM.y,
        angle: angleDegM
      });
    }

    // Active Step Determination
    if (clamped < 0.18) setActiveStep(1);
    else if (clamped < 0.38) setActiveStep(2);
    else if (clamped < 0.58) setActiveStep(3);
    else if (clamped < 0.78) setActiveStep(4);
    else setActiveStep(5);
  }, []);

  // Subscribe to spring motion updates and run once on mount
  useEffect(() => {
    updateVehiclePositions(smoothProgress.get());
    const unsubscribe = smoothProgress.on("change", (latest) => {
      updateVehiclePositions(latest);
    });
    return () => unsubscribe();
  }, [smoothProgress, updateVehiclePositions]);

  // Smooth scroll to a step on click
  const scrollToStep = (stepNumber: number) => {
    const el = document.getElementById(`process-step-${stepNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const steps = [
    {
      number: "01",
      shortTitle: "Enquiry",
      eyebrow: "PROJECT ENQUIRY & VISION",
      title: "Tell Us About Your Project",
      image: "/images/about/team-architectural.jpg",
      description:
        "Share your ideas, requirements, and the space you'd like to improve. Whether it's a complete kitchen redesign, bespoke fitted wardrobes or media wall, we listen closely to your wish list.",
      highlights: ["Initial design consultation", "Style & material preferences", "Room dimensions & scope"],
      side: "left"
    },
    {
      number: "02",
      shortTitle: "Survey",
      eyebrow: "ON-SITE SURVEY & FEASIBILITY",
      title: "Consultation & Assessment",
      image: "/images/about/craftsmanship.jpg",
      description:
        "We discuss your requirements in detail and arrange a dedicated in-person home survey in Worcester. We assess architectural layout, structural elements, plumbing lines, and subfloors.",
      highlights: ["Laser-level precision survey", "Plumbing & electric feasibility", "Practical layout advice"],
      side: "right"
    },
    {
      number: "03",
      shortTitle: "Quotation",
      eyebrow: "SPECIFICATION & FIXED ESTIMATE",
      title: "Planning & Quotation",
      image: "/images/projects/project-wardrobe-1.jpg",
      description:
        "We agree on the proposed scope of work, suitable materials, and issue a clear, itemised, transparent project quotation with realistic timelines and no hidden costs.",
      highlights: ["Transparent fixed price estimate", "Material & finish samples", "Agreed project schedule"],
      side: "left"
    },
    {
      number: "04",
      shortTitle: "Transformation",
      eyebrow: "CRAFTSMANSHIP & TRANSFORMATION",
      title: "Installation & Transformation",
      image: "/images/projects/craftsmanship-installation.jpg",
      description:
        "The agreed work is carried out by skilled craftsmen with meticulous attention to joinery, subfloor preparation, tiling, and plumbing. We keep your home clean and protected every day.",
      highlights: ["Daily site clean & floor protection", "Single team accountability", "Exacting joins & finishes"],
      side: "right"
    },
    {
      number: "05",
      shortTitle: "Handover",
      eyebrow: "PERFECTION & HANDOVER",
      title: "Final Review & Sign-Off",
      image: "/images/hero/luxury-kitchen-hero.jpg",
      description:
        "We conduct a thorough joint walkthrough with you to review every detail, address any finishing touches, provide care instructions, and ensure complete satisfaction.",
      highlights: ["Complete detail review", "Care & maintenance guide", "Workmanship guarantee"],
      side: "left"
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] text-[#171717] relative overflow-hidden">
      {/* Background Subtle Architectural Watermark */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#C5A46D]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-[#C5A46D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-14 xl:px-20 max-w-[1700px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14 pb-8 border-b border-[#EAE8E3] text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A46D]/40 text-[#9F7F48] text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>OUR SEAMLESS PROCESS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#171717] font-normal"
            >
              From Your First Idea to the Final Finish.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-left space-y-3"
          >
            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
              A structured, stress-free methodology ensuring clarity, precision and complete peace of mind at every stage.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F7F48]">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-ping" />
              <span>Scroll or click below to travel through our 5-phase journey</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Quick-Jump Step Tabs */}
        <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {steps.map((s, idx) => {
              const isActive = activeStep === idx + 1;
              const isPast = activeStep >= idx + 1;
              return (
                <button
                  key={s.number}
                  onClick={() => scrollToStep(idx + 1)}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#171717] text-[#DFCA9F] shadow-md ring-2 ring-[#C5A46D]/50 scale-105"
                      : isPast
                      ? "bg-white text-gray-800 border border-[#C5A46D]/40 hover:bg-[#FAF8F5]"
                      : "bg-white text-gray-500 border border-[#EAE8E3] hover:text-gray-900"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                      isActive
                        ? "bg-[#C5A46D] text-[#171717]"
                        : isPast
                        ? "bg-black/10 text-gray-800"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {s.number}
                  </span>
                  <span>{s.shortTitle}</span>
                  {idx < steps.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-gray-300 ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE TIMELINE CONTAINER (Dual Desktop & Mobile Views) */}
        {/* ============================================================ */}
        <div ref={containerRef} className="relative w-full">
          {/* ======================================================== */}
          {/* 1. DESKTOP ROADMAP TRACK (Screen width >= 1024px) */}
          {/* ======================================================== */}
          <div className="hidden lg:block relative w-full h-[2500px]">
            {/* SVG Serpentine Road & Travelling Van */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 1000 2500"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="headlight-beam" x1="0" y1="0" x2="0" y2="-1">
                  <stop offset="0%" stopColor="#DFCA9F" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#DFCA9F" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="gold-road" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DFCA9F" />
                  <stop offset="50%" stopColor="#C5A46D" />
                  <stop offset="100%" stopColor="#9F7F48" />
                </linearGradient>
              </defs>

              {/* Background Base Road */}
              <path
                d={desktopPathData}
                stroke="#E2DDD5"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="8 8"
                opacity="0.85"
              />

              {/* Active Filled Gold Road */}
              <motion.path
                ref={desktopPathRef}
                d={desktopPathData}
                stroke="url(#gold-road)"
                strokeWidth="8"
                strokeLinecap="round"
                style={{
                  pathLength: smoothProgress
                }}
              />

              {/* Milestone Circular Pin Nodes */}
              {desktopNodes.map((node, i) => {
                const isPast = activeStep >= i + 1;
                const isCurrent = activeStep === i + 1;
                return (
                  <g
                    key={node.number}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer pointer-events-auto"
                    onClick={() => scrollToStep(i + 1)}
                  >
                    {/* Outer pulse circle when active */}
                    {isCurrent && (
                      <circle r="28" fill="none" stroke="#C5A46D" strokeWidth="1.5" opacity="0.7">
                        <animate attributeName="r" values="22;34;22" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}

                    {/* Main Node Disc */}
                    <circle
                      r="20"
                      fill={isPast ? "#171717" : "#FFFFFF"}
                      stroke={isPast ? "#C5A46D" : "#D4CEBF"}
                      strokeWidth="3.5"
                      className="transition-colors duration-300 shadow-lg"
                    />

                    {/* Step Number Text */}
                    <text
                      y="4"
                      fill={isPast ? "#DFCA9F" : "#7A7568"}
                      fontSize="12"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {node.number}
                    </text>
                  </g>
                );
              })}

              {/* ==================================================== */}
              {/* ANIMATED RCM RENOVATION VAN TRAVELLER (Desktop) */}
              {/* ==================================================== */}
              <g
                transform={`translate(${truckPos.x}, ${truckPos.y}) rotate(${truckPos.angle})`}
                className="transition-transform duration-75 ease-out"
              >
                {/* Headlight beam */}
                <polygon
                  points="-10,-32 -30,-85 30,-85 10,-32"
                  fill="url(#headlight-beam)"
                />

                {/* Van Body Shadow */}
                <rect
                  x="-18"
                  y="-33"
                  width="36"
                  height="66"
                  rx="8"
                  fill="rgba(0,0,0,0.35)"
                  filter="blur(3px)"
                />

                {/* Van Body */}
                <rect
                  x="-16"
                  y="-32"
                  width="32"
                  height="64"
                  rx="6"
                  fill="#171717"
                  stroke="#C5A46D"
                  strokeWidth="2"
                />

                {/* Front Windshield */}
                <path
                  d="M -12,-15 L -10,-26 L 10,-26 L 12,-15 Z"
                  fill="#2E3338"
                  stroke="#474F56"
                  strokeWidth="0.5"
                />

                {/* Side Mirrors */}
                <rect x="-19" y="-24" width="3" height="6" rx="1" fill="#C5A46D" />
                <rect x="16" y="-24" width="3" height="6" rx="1" fill="#C5A46D" />

                {/* Gold Top Roof Panel with RCM Lettering */}
                <rect
                  x="-11"
                  y="-9"
                  width="22"
                  height="32"
                  rx="3"
                  fill="#C5A46D"
                />
                <text
                  x="0"
                  y="10"
                  fill="#171717"
                  fontSize="8"
                  fontWeight="900"
                  textAnchor="middle"
                  letterSpacing="0.05em"
                  fontFamily="sans-serif"
                >
                  RCM
                </text>

                {/* Front Headlights */}
                <circle cx="-10" cy="-31" r="2.5" fill="#FFF2B2" />
                <circle cx="10" cy="-31" r="2.5" fill="#FFF2B2" />

                {/* Rear Tail Lights */}
                <rect x="-13" y="30" width="5" height="2" rx="0.5" fill="#EF4444" />
                <rect x="8" y="30" width="5" height="2" rx="0.5" fill="#EF4444" />
              </g>
            </svg>

            {/* Desktop Step Cards: 5 exact rows of 500px matching SVG node centers */}
            <div className="relative z-20">
              {steps.map((step, index) => {
                const isLeft = step.side === "left";
                const isActive = activeStep === index + 1;

                return (
                  <div
                    key={step.number}
                    id={`process-step-${index + 1}`}
                    className="h-[500px] grid grid-cols-12 items-center"
                  >
                    <div
                      className={`${
                        isLeft
                          ? "col-span-5 col-start-1"
                          : "col-span-5 col-start-8"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className={`group rounded-3xl overflow-hidden bg-white border transition-all duration-500 shadow-lg hover:shadow-2xl ${
                          isActive
                            ? "border-[#C5A46D] ring-2 ring-[#C5A46D]/30 shadow-[0_15px_35px_rgba(197,164,109,0.2)]"
                            : "border-[#EAE8E3] hover:border-[#C5A46D]/60"
                        }`}
                      >
                        {/* Top Architectural Photograph */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            sizes="(max-width: 1200px) 50vw, 450px"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                          {/* Step Pill */}
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#DFCA9F] text-xs font-mono font-bold">
                            PHASE {step.number}
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-8 text-left space-y-3.5">
                          <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#9F7F48] block">
                            • {step.eyebrow}
                          </span>

                          <h3 className="text-2xl font-serif text-[#171717] font-semibold group-hover:text-[#9F7F48] transition-colors">
                            {step.title}
                          </h3>

                          <p className="text-sm text-gray-600 font-sans leading-relaxed">
                            {step.description}
                          </p>

                          {/* Deliverables Checklist */}
                          <div className="pt-3 border-t border-[#EAE8E3] space-y-2">
                            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">
                              Key Deliverables:
                            </span>
                            <div className="flex flex-wrap gap-2 text-xs text-gray-700">
                              {step.highlights.map((h, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#EAE8E3] text-[11px]"
                                >
                                  <CheckCircle2 className="w-3 h-3 text-[#9F7F48]" />
                                  {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. MOBILE & TABLET ROADMAP (Screen width < 1024px) */}
          {/* ======================================================== */}
          <div className="lg:hidden relative w-full h-[2500px]">
            {/* Mobile Left-Rail SVG Track & Animated Van */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 pointer-events-none z-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 60 2500"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="mobile-headlight-beam" x1="0" y1="0" x2="0" y2="-1">
                    <stop offset="0%" stopColor="#DFCA9F" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#DFCA9F" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="mobile-gold-road" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DFCA9F" />
                    <stop offset="50%" stopColor="#C5A46D" />
                    <stop offset="100%" stopColor="#9F7F48" />
                  </linearGradient>
                </defs>

                {/* Base Road */}
                <path
                  d={mobilePathData}
                  stroke="#E2DDD5"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                  opacity="0.85"
                />

                {/* Active Filled Gold Road */}
                <motion.path
                  ref={mobilePathRef}
                  d={mobilePathData}
                  stroke="url(#mobile-gold-road)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{
                    pathLength: smoothProgress
                  }}
                />

                {/* Mobile Milestone Nodes */}
                {mobileNodes.map((node, i) => {
                  const isPast = activeStep >= i + 1;
                  const isCurrent = activeStep === i + 1;
                  return (
                    <g
                      key={node.number}
                      transform={`translate(${node.x}, ${node.y})`}
                      className="cursor-pointer pointer-events-auto"
                      onClick={() => scrollToStep(i + 1)}
                    >
                      {isCurrent && (
                        <circle r="22" fill="none" stroke="#C5A46D" strokeWidth="1.5" opacity="0.8">
                          <animate attributeName="r" values="18;26;18" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle
                        r="16"
                        fill={isPast ? "#171717" : "#FFFFFF"}
                        stroke={isPast ? "#C5A46D" : "#D4CEBF"}
                        strokeWidth="2.5"
                        className="transition-colors duration-300 shadow-md"
                      />
                      <text
                        y="4"
                        fill={isPast ? "#DFCA9F" : "#7A7568"}
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                        fontFamily="monospace"
                      >
                        {node.number}
                      </text>
                    </g>
                  );
                })}

                {/* Mobile Animated RCM Van */}
                <g
                  transform={`translate(${mobileTruckPos.x}, ${mobileTruckPos.y}) rotate(${mobileTruckPos.angle}) scale(0.75)`}
                  className="transition-transform duration-75 ease-out"
                >
                  <polygon
                    points="-10,-32 -26,-75 26,-75 10,-32"
                    fill="url(#mobile-headlight-beam)"
                  />
                  <rect
                    x="-16"
                    y="-32"
                    width="32"
                    height="64"
                    rx="6"
                    fill="#171717"
                    stroke="#C5A46D"
                    strokeWidth="2"
                  />
                  <path
                    d="M -12,-15 L -10,-26 L 10,-26 L 12,-15 Z"
                    fill="#2E3338"
                    stroke="#474F56"
                    strokeWidth="0.5"
                  />
                  <rect x="-11" y="-9" width="22" height="32" rx="3" fill="#C5A46D" />
                  <text
                    x="0"
                    y="10"
                    fill="#171717"
                    fontSize="8"
                    fontWeight="900"
                    textAnchor="middle"
                    letterSpacing="0.05em"
                  >
                    RCM
                  </text>
                  <circle cx="-10" cy="-31" r="2.5" fill="#FFF2B2" />
                  <circle cx="10" cy="-31" r="2.5" fill="#FFF2B2" />
                  <rect x="-13" y="30" width="5" height="2" rx="0.5" fill="#EF4444" />
                  <rect x="8" y="30" width="5" height="2" rx="0.5" fill="#EF4444" />
                </g>
              </svg>
            </div>

            {/* Mobile Step Cards */}
            <div className="relative z-20 pl-12 sm:pl-18">
              {steps.map((step, index) => {
                const isActive = activeStep === index + 1;
                return (
                  <div
                    key={step.number}
                    id={`process-step-${index + 1}`}
                    className="h-[500px] flex items-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5 }}
                      className={`w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border transition-all duration-300 shadow-md ${
                        isActive
                          ? "border-[#C5A46D] ring-2 ring-[#C5A46D]/25 shadow-xl"
                          : "border-[#EAE8E3]"
                      }`}
                    >
                      <div className="relative aspect-[16/9] w-full bg-neutral-100">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 500px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#DFCA9F] text-[10px] font-mono font-bold">
                          PHASE {step.number}
                        </div>
                      </div>

                      <div className="p-5 sm:p-7 text-left space-y-2.5">
                        <span className="text-[10px] uppercase tracking-widest text-[#9F7F48] font-bold block">
                          {step.eyebrow}
                        </span>
                        <h3 className="text-lg sm:text-xl font-serif text-[#171717] font-semibold">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                          {step.description}
                        </p>
                        <div className="pt-2.5 border-t border-[#EAE8E3]">
                          <div className="flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] text-gray-700">
                            {step.highlights.map((h, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#EAE8E3]"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 text-[#9F7F48]" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Contact / Journey Completion Banner */}
        <div className="mt-16 sm:mt-24 p-6 sm:p-10 rounded-3xl bg-white border border-[#EAE8E3] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-widest text-[#9F7F48] font-bold block">
              READY FOR STEP 01?
            </span>
            <h4 className="text-xl sm:text-2xl font-serif text-[#171717] font-medium">
              Let&apos;s start your renovation journey today.
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 font-sans">
              Schedule your complimentary on-site assessment in Worcester.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md w-full sm:w-auto text-center"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="tel:07711960238"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#171717] text-white hover:bg-black text-xs font-semibold uppercase tracking-wider transition-colors w-full sm:w-auto text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFCA9F]" />
              <span>07711 960238</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
