"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  Compass,
  FileCheck2,
  Wrench,
  Award
} from "lucide-react";
import Link from "next/link";

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Scroll tracking across the journey section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"]
  });

  // Smooth momentum spring for the travelling vehicle
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
    mass: 0.9,
    restDelta: 0.001
  });

  const [truckPos, setTruckPos] = useState({ x: 480, y: 40, angle: 90 });
  const [activeStep, setActiveStep] = useState(0);

  // SVG Serpentine Path connecting step nodes (viewBox: 0 0 1000 2200)
  const pathData =
    "M 480,50 L 480,180 C 480,410 520,450 520,640 C 520,870 480,910 480,1100 C 480,1330 520,1370 520,1560 C 520,1790 500,1830 500,2020";

  // Node milestone positions on the path
  const stepNodes = [
    { number: "01", progress: 0.08, x: 480, y: 180 },
    { number: "02", progress: 0.29, x: 520, y: 640 },
    { number: "03", progress: 0.50, x: 480, y: 1100 },
    { number: "04", progress: 0.71, x: 520, y: 1560 },
    { number: "05", progress: 0.92, x: 500, y: 2020 }
  ];

  // Update van coordinates and tangent angle on scroll
  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    const unsubscribe = smoothProgress.on("change", (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      const currentLength = clamped * totalLength;
      const point = path.getPointAtLength(currentLength);

      // Determine tangent angle by sampling slightly forward
      const lookAheadLength = Math.min(totalLength, currentLength + 8);
      const lookBehindLength = Math.max(0, currentLength - 2);
      const p1 = path.getPointAtLength(lookBehindLength);
      const p2 = path.getPointAtLength(lookAheadLength);

      const angleRad = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      const angleDeg = (angleRad * 180) / Math.PI;

      setTruckPos({
        x: point.x,
        y: point.y,
        angle: angleDeg + 90 // align vehicle orientation with path direction
      });

      // Active step indicator
      if (clamped < 0.2) setActiveStep(1);
      else if (clamped < 0.42) setActiveStep(2);
      else if (clamped < 0.63) setActiveStep(3);
      else if (clamped < 0.84) setActiveStep(4);
      else setActiveStep(5);
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  const steps = [
    {
      number: "01",
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
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#171717] relative overflow-hidden">
      {/* Background Subtle Architectural Watermark */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#C5A46D]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-[#C5A46D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-[#EAE8E3] text-left">
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
            <p className="text-base text-gray-600 font-sans leading-relaxed">
              A structured, stress-free methodology ensuring clarity, precision and complete peace of mind at every stage.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9F7F48]">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-ping" />
              <span>Scroll down or up to drive through the renovation journey</span>
            </div>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE SCROLL ROADMAP (Desktop / Tablet view) */}
        {/* ============================================================ */}
        <div ref={containerRef} className="relative hidden lg:block w-full min-h-[2250px]">
          {/* SVG Road Track & Animated Van */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 2200"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Headlight beam gradient */}
              <linearGradient id="headlight-beam" x1="0" y1="0" x2="0" y2="-1">
                <stop offset="0%" stopColor="#DFCA9F" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#DFCA9F" stopOpacity="0" />
              </linearGradient>

              {/* Road gradient */}
              <linearGradient id="gold-road" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFCA9F" />
                <stop offset="50%" stopColor="#C5A46D" />
                <stop offset="100%" stopColor="#9F7F48" />
              </linearGradient>
            </defs>

            {/* Background Base Road (Terracotta / Warm Grey Dashed) */}
            <path
              d={pathData}
              stroke="#E2DDD5"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="8 8"
              opacity="0.8"
            />

            {/* Active Filled Gold Road (Fills as user scrolls down) */}
            <motion.path
              ref={pathRef}
              d={pathData}
              stroke="url(#gold-road)"
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                pathLength: smoothProgress
              }}
            />

            {/* Milestone Circular Pin Nodes on the Path */}
            {stepNodes.map((node, i) => {
              const isPast = activeStep >= i + 1;
              return (
                <g key={node.number} transform={`translate(${node.x}, ${node.y})`}>
                  {/* Outer pulse circle when active */}
                  {activeStep === i + 1 && (
                    <circle r="26" fill="none" stroke="#C5A46D" strokeWidth="1.5" opacity="0.6">
                      <animate attributeName="r" values="22;32;22" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}

                  {/* Main Node Disc */}
                  <circle
                    r="18"
                    fill={isPast ? "#171717" : "#FFFFFF"}
                    stroke={isPast ? "#C5A46D" : "#D4CEBF"}
                    strokeWidth="3"
                    className="transition-colors duration-300 shadow-md"
                  />

                  {/* Step Number Text */}
                  <text
                    y="4"
                    fill={isPast ? "#DFCA9F" : "#7A7568"}
                    fontSize="11"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {node.number}
                  </text>
                </g>
              );
            })}

            {/* ======================================================== */}
            {/* ANIMATED RCM RENOVATION VAN TRAVELLER */}
            {/* ======================================================== */}
            <g
              transform={`translate(${truckPos.x}, ${truckPos.y}) rotate(${truckPos.angle})`}
              className="transition-transform duration-75 ease-out"
            >
              {/* Headlight beam casting forward */}
              <polygon
                points="-10,-32 -28,-75 28,-75 10,-32"
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

              {/* Van Body (Luxury Charcoal with Gold Trim) */}
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

          {/* ======================================================== */}
          {/* STEP CARDS (Positioned on Left and Right of the Road) */}
          {/* ======================================================== */}
          <div className="relative z-20 space-y-16 pt-8">
            {steps.map((step, index) => {
              const isLeft = step.side === "left";
              const isActive = activeStep === index + 1;

              return (
                <div
                  key={step.number}
                  className={`grid grid-cols-12 items-center ${
                    index === 0
                      ? "pt-0"
                      : index === 1
                      ? "pt-8"
                      : index === 2
                      ? "pt-8"
                      : index === 3
                      ? "pt-8"
                      : "pt-8"
                  }`}
                >
                  {/* Left Column Card Container */}
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
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={`group rounded-3xl overflow-hidden bg-white border transition-all duration-500 shadow-lg hover:shadow-2xl ${
                        isActive
                          ? "border-[#C5A46D] ring-2 ring-[#C5A46D]/20 shadow-[0_15px_35px_rgba(197,164,109,0.15)]"
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
                      <div className="p-8 text-left space-y-4">
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

        {/* ============================================================ */}
        {/* MOBILE STACKED JOURNEY VIEW (< 1024px) */}
        {/* ============================================================ */}
        <div className="lg:hidden relative space-y-8 pl-6 border-l-2 border-dashed border-[#C5A46D]/40 ml-4 text-left">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Node Badge on the left border */}
              <div className="absolute -left-[35px] top-4 w-9 h-9 rounded-full bg-[#171717] border-2 border-[#C5A46D] flex items-center justify-center text-[#DFCA9F] text-xs font-mono font-bold shadow-md">
                {step.number}
              </div>

              {/* Card Container */}
              <div className="rounded-3xl overflow-hidden bg-white border border-[#EAE8E3] shadow-lg">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#9F7F48] font-bold block">
                    {step.eyebrow}
                  </span>
                  <h3 className="text-xl font-serif text-[#171717] font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact / Journey Completion Banner */}
        <div className="mt-20 p-8 rounded-3xl bg-white border border-[#EAE8E3] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#9F7F48] font-bold block">
              READY FOR STEP 01?
            </span>
            <h4 className="text-xl sm:text-2xl font-serif text-[#171717]">
              Let&apos;s start your renovation journey today.
            </h4>
            <p className="text-xs text-gray-500 font-sans">
              Schedule your complimentary on-site assessment in Worcester.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="tel:07711960238"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#171717] text-white hover:bg-black text-xs font-semibold uppercase tracking-wider transition-colors"
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
