"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

interface StepItem {
  number: string;
  shortTitle: string;
  eyebrow: string;
  title: string;
  image: string;
  description: string;
  highlights: string[];
  side: "left" | "right";
}

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking: Starts when timeline enters 65% of viewport;
  // Completes when Step 5 reaches 60% of viewport (comfortable eye-level)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 60%"]
  });

  // Snappy, critically-damped spring for zero lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    mass: 0.2,
    restDelta: 0.0005
  });

  const [activeStep, setActiveStep] = useState(1);

  // Active step listener
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      if (clamped < 0.2) setActiveStep(1);
      else if (clamped < 0.4) setActiveStep(2);
      else if (clamped < 0.6) setActiveStep(3);
      else if (clamped < 0.8) setActiveStep(4);
      else setActiveStep(5);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Transform progress [0 -> 1] to van position [10% -> 90%] of container height
  const vanTop = useTransform(smoothProgress, [0, 1], ["10%", "90%"]);

  // Road gold fill height
  const roadGoldHeight = useTransform(smoothProgress, [0, 1], ["10%", "90%"]);

  // Subtle realistic vehicle steering angle as it moves between left & right cards
  const vanRotate = useTransform(
    smoothProgress,
    [0, 0.12, 0.25, 0.37, 0.5, 0.62, 0.75, 0.87, 1],
    [0, 10, 0, -10, 0, 10, 0, -10, 0]
  );

  // Smooth scroll to a step on click
  const scrollToStep = (stepNumber: number) => {
    const el = document.getElementById(`process-step-${stepNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const steps: StepItem[] = [
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
        {/* INTERACTIVE TIMELINE CONTAINER (Dynamic Natural Flow) */}
        {/* ============================================================ */}
        <div ref={containerRef} className="relative w-full">
          {/* ======================================================== */}
          {/* DESKTOP CENTER ROAD TRACK & TRAVELLING VAN (>= 1024px) */}
          {/* ======================================================== */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-20 pointer-events-none z-10">
            {/* Background Base Dashed Road */}
            <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-2 border-r-2 border-dashed border-[#D4CEBF] opacity-80" />

            {/* Active Gold Filled Track */}
            <motion.div
              style={{
                top: "10%",
                height: roadGoldHeight
              }}
              className="absolute left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] rounded-full shadow-[0_0_12px_rgba(197,164,109,0.5)]"
            />

            {/* Animated Travelling RCM Renovation Van */}
            <motion.div
              style={{
                top: vanTop,
                rotate: vanRotate
              }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-20 transition-transform duration-75 ease-out"
            >
              <svg viewBox="0 0 40 80" className="w-full h-full drop-shadow-xl overflow-visible">
                <defs>
                  <linearGradient id="headlight-beam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DFCA9F" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#DFCA9F" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Headlight beam casting downward */}
                <polygon
                  points="14,65 5,115 35,115 26,65"
                  fill="url(#headlight-beam)"
                />

                {/* Van Body Shadow */}
                <rect
                  x="5"
                  y="12"
                  width="30"
                  height="56"
                  rx="6"
                  fill="rgba(0,0,0,0.3)"
                  filter="blur(2px)"
                />

                {/* Van Body (Charcoal + Gold Trim) */}
                <rect
                  x="6"
                  y="10"
                  width="28"
                  height="54"
                  rx="6"
                  fill="#171717"
                  stroke="#C5A46D"
                  strokeWidth="1.5"
                />

                {/* Windshield */}
                <path
                  d="M 9,45 L 11,54 L 29,54 L 31,45 Z"
                  fill="#2E3338"
                  stroke="#474F56"
                  strokeWidth="0.5"
                />

                {/* Gold Roof Panel with RCM text */}
                <rect
                  x="10"
                  y="18"
                  width="20"
                  height="24"
                  rx="2.5"
                  fill="#C5A46D"
                />
                <text
                  x="20"
                  y="33"
                  fill="#171717"
                  fontSize="7"
                  fontWeight="900"
                  textAnchor="middle"
                  letterSpacing="0.05em"
                  fontFamily="sans-serif"
                >
                  RCM
                </text>

                {/* Side Mirrors */}
                <rect x="3" y="44" width="3" height="5" rx="1" fill="#C5A46D" />
                <rect x="34" y="44" width="3" height="5" rx="1" fill="#C5A46D" />

                {/* Front Headlights */}
                <circle cx="10" cy="62" r="2.2" fill="#FFF2B2" />
                <circle cx="30" cy="62" r="2.2" fill="#FFF2B2" />

                {/* Rear Tail Lights */}
                <rect x="9" y="11" width="4" height="2" rx="0.5" fill="#EF4444" />
                <rect x="27" y="11" width="4" height="2" rx="0.5" fill="#EF4444" />
              </svg>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* MOBILE LEFT ROAD TRACK & TRAVELLING VAN (< 1024px) */}
          {/* ======================================================== */}
          <div className="lg:hidden absolute left-5 top-0 bottom-0 w-8 pointer-events-none z-10">
            {/* Base Dashed Line */}
            <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-1.5 border-r-2 border-dashed border-[#D4CEBF] opacity-80" />

            {/* Active Gold Filled Track */}
            <motion.div
              style={{
                top: "10%",
                height: roadGoldHeight
              }}
              className="absolute left-1/2 -translate-x-1/2 w-1 bg-[#C5A46D] rounded-full"
            />

            {/* Mobile Travelling Van */}
            <motion.div
              style={{
                top: vanTop
              }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-14"
            >
              <svg viewBox="0 0 40 80" className="w-full h-full drop-shadow-md overflow-visible">
                <rect x="8" y="12" width="24" height="48" rx="5" fill="#171717" stroke="#C5A46D" strokeWidth="1.5" />
                <rect x="11" y="20" width="18" height="20" rx="2" fill="#C5A46D" />
                <text x="20" y="32" fill="#171717" fontSize="6.5" fontWeight="900" textAnchor="middle">
                  RCM
                </text>
                <circle cx="12" cy="58" r="2" fill="#FFF2B2" />
                <circle cx="28" cy="58" r="2" fill="#FFF2B2" />
              </svg>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* STEP ROWS (Generous Natural Height with Zero Overlap) */}
          {/* ======================================================== */}
          <div className="relative z-20 space-y-10 sm:space-y-14 lg:space-y-16">
            {steps.map((step, index) => {
              const isLeft = step.side === "left";
              const isActive = activeStep === index + 1;
              const isPast = activeStep >= index + 1;

              return (
                <div
                  key={step.number}
                  id={`process-step-${index + 1}`}
                  className="relative min-h-[460px] sm:min-h-[500px] flex items-center py-4"
                >
                  {/* DESKTOP 12-COLUMN ALIGNED ROW (>= 1024px) */}
                  <div className="hidden lg:grid grid-cols-12 items-center w-full gap-6">
                    {/* Left Column (Card if side is left) */}
                    <div className="col-span-5">
                      {isLeft && (
                        <StepCardContent step={step} isActive={isActive} />
                      )}
                    </div>

                    {/* Center Column: Milestone Node Button */}
                    <div className="col-span-2 flex flex-col items-center justify-center relative">
                      <button
                        onClick={() => scrollToStep(index + 1)}
                        className="relative group focus:outline-none cursor-pointer"
                        aria-label={`Jump to Phase ${step.number}: ${step.title}`}
                      >
                        {/* Outer Pulsing Ring when Active */}
                        {isActive && (
                          <span className="absolute -inset-2.5 rounded-full border-2 border-[#C5A46D] animate-ping opacity-75 pointer-events-none" />
                        )}

                        {/* Milestone Disc */}
                        <div
                          className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-mono font-bold transition-all duration-300 shadow-lg ${
                            isPast
                              ? "bg-[#171717] border-2 border-[#C5A46D] text-[#DFCA9F] shadow-[0_0_20px_rgba(197,164,109,0.35)] scale-110"
                              : "bg-white border-2 border-[#D4CEBF] text-gray-500 hover:border-[#C5A46D]"
                          }`}
                        >
                          {step.number}
                        </div>
                      </button>
                    </div>

                    {/* Right Column (Card if side is right) */}
                    <div className="col-span-5">
                      {!isLeft && (
                        <StepCardContent step={step} isActive={isActive} />
                      )}
                    </div>
                  </div>

                  {/* MOBILE & TABLET FLEX ROW (< 1024px) */}
                  <div className="lg:hidden flex items-start sm:items-center gap-4 sm:gap-6 w-full pl-12 sm:pl-16">
                    {/* Node on mobile left rail */}
                    <div className="flex-shrink-0 relative">
                      <button
                        onClick={() => scrollToStep(index + 1)}
                        className="relative group focus:outline-none cursor-pointer"
                        aria-label={`Jump to Phase ${step.number}`}
                      >
                        {isActive && (
                          <span className="absolute -inset-2 rounded-full border-2 border-[#C5A46D] animate-ping opacity-75 pointer-events-none" />
                        )}
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 shadow-md ${
                            isPast
                              ? "bg-[#171717] border-2 border-[#C5A46D] text-[#DFCA9F] scale-105"
                              : "bg-white border-2 border-[#D4CEBF] text-gray-500"
                          }`}
                        >
                          {step.number}
                        </div>
                      </button>
                    </div>

                    {/* Mobile Card */}
                    <div className="flex-1 min-w-0">
                      <StepCardContent step={step} isActive={isActive} isMobile />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM CONTACT / JOURNEY COMPLETION BANNER */}
        {/* Generous margin ensures it NEVER overlaps the cards */}
        {/* ============================================================ */}
        <div className="mt-20 sm:mt-28 p-6 sm:p-10 rounded-3xl bg-white border border-[#EAE8E3] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left relative z-20">
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

// Reusable Step Card Component
function StepCardContent({
  step,
  isActive,
  isMobile = false
}: {
  step: StepItem;
  isActive: boolean;
  isMobile?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      className={`group w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border transition-all duration-300 shadow-md hover:shadow-xl ${
        isActive
          ? "border-[#C5A46D] ring-2 ring-[#C5A46D]/25 shadow-[0_15px_35px_rgba(197,164,109,0.18)]"
          : "border-[#EAE8E3] hover:border-[#C5A46D]/50"
      }`}
    >
      {/* Photograph */}
      <div
        className={`relative w-full overflow-hidden bg-neutral-100 ${
          isMobile ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={step.image}
          alt={step.title}
          fill
          sizes="(max-width: 1024px) 100vw, 550px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#DFCA9F] text-[11px] font-mono font-bold">
          PHASE {step.number}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-7 lg:p-8 text-left space-y-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#9F7F48] block">
          • {step.eyebrow}
        </span>

        <h3 className="text-xl sm:text-2xl font-serif text-[#171717] font-semibold group-hover:text-[#9F7F48] transition-colors">
          {step.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
          {step.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="pt-3 border-t border-[#EAE8E3] space-y-2">
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">
            Key Deliverables:
          </span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-700">
            {step.highlights.map((h, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#EAE8E3]"
              >
                <CheckCircle2 className="w-3 h-3 text-[#9F7F48]" />
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
