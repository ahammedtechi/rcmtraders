"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, MapPin, Award } from "lucide-react";

export default function HeroSection() {
  const [animationKey, setAnimationKey] = useState(0);

  // Re-trigger animation when clicking the logo or Home link
  useEffect(() => {
    const handleReplay = () => {
      setAnimationKey((prev) => prev + 1);
    };

    window.addEventListener("rcm-replay-hero", handleReplay);
    return () => window.removeEventListener("rcm-replay-hero", handleReplay);
  }, []);

  // Motion easing curve for high-end editorial feel
  const transitionEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#171717]">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/luxury-kitchen-hero.jpg"
          alt="RCM Traders Limited Luxury Kitchen Renovation Worcester"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-fade-in transition-transform duration-1000"
        />
        {/* Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/60" />
      </div>

      {/* Decorative Gold Glow Accent */}
      <div className="absolute top-1/3 left-10 w-[700px] h-[350px] bg-[#C5A46D]/15 blur-[160px] pointer-events-none rounded-full" />

      {/* Hero Full-Fit Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 pt-36 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={animationKey}
            initial="hidden"
            animate="visible"
            className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5 text-left"
          >
            {/* 1. Eyebrow Badge */}
            <div className="overflow-hidden pb-0.5">
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: transitionEase }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A46D]/50 text-[#DFCA9F] text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase shadow-lg hover:border-[#C5A46D] transition-colors"
              >
                <Sparkles className="w-3 h-3 text-[#C5A46D] animate-pulse" />
                <span>RCM TRADERS LIMITED | WORCESTER</span>
              </motion.div>
            </div>

            {/* 2. Main Heading: Word-by-Word Masked Reveal Animation */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1] font-normal">
              {/* Line 1: Beautiful Spaces. */}
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: transitionEase }}
                  className="inline-block mr-3 sm:mr-4"
                >
                  Beautiful
                </motion.span>
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.28, ease: transitionEase }}
                  className="inline-block"
                >
                  Spaces.
                </motion.span>
              </span>

              {/* Line 2: Exceptional Craftsmanship. */}
              <span className="block overflow-hidden py-0.5">
                <span className="font-light italic text-[#DFCA9F] font-serif inline-block">
                  <motion.span
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.42, ease: transitionEase }}
                    className="inline-block mr-3 sm:mr-4"
                  >
                    Exceptional
                  </motion.span>
                  <motion.span
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.54, ease: transitionEase }}
                    className="inline-block"
                  >
                    Craftsmanship.
                  </motion.span>
                </span>
              </span>
            </h1>

            {/* 3. Supporting Heading */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.68, ease: transitionEase }}
                className="text-base sm:text-lg md:text-xl text-gray-200 font-serif italic tracking-wide font-light"
              >
                Transforming Houses into Homes You&apos;ll Love.
              </motion.p>
            </div>

            {/* 4. Description Paragraph */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.8, ease: transitionEase }}
                className="text-xs sm:text-sm md:text-base text-gray-300/90 font-sans max-w-2xl leading-relaxed font-light"
              >
                From contemporary kitchens and luxurious bathrooms to bespoke bedroom cupboards, statement media walls and beautiful flooring, RCM Traders Limited brings your home improvement ideas to life.
              </motion.p>
            </div>

            {/* 5. Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.94, ease: transitionEase }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 pt-1"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(197,164,109,0.3)]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-black/40 hover:bg-white/10 text-white border border-white/20 font-medium text-xs uppercase tracking-widest backdrop-blur-md transition-all hover:border-[#C5A46D]/60"
              >
                <span>Explore Our Services</span>
              </Link>
            </motion.div>

            {/* 6. Left-Aligned Badges & Location Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.08 }}
              className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-start gap-5 sm:gap-7 text-[11px] sm:text-xs text-gray-300 font-light"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DFCA9F]" />
                <span>Serving Worcester & Worcestershire</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#C5A46D]" />
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#DFCA9F]" />
                <span>Complete Turnkey Renovations</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#C5A46D]" />
              <div className="flex items-center gap-2">
                <span className="text-[#DFCA9F] font-semibold">Direct:</span>
                <a href="tel:07711960238" className="hover:text-white underline decoration-[#C5A46D]">
                  07711 960238
                </a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Elegant Scrolling Indicator at Bottom Right */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 right-10 sm:right-16 z-10 hidden sm:flex items-center gap-3 text-gray-400 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight - 80,
            behavior: "smooth"
          });
        }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-[#DFCA9F]">
          Explore Down
        </span>
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#C5A46D]">
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}
