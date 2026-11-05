"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, MapPin, Award, CheckCircle2, Phone } from "lucide-react";

export default function HeroSection() {
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
        {/* Editorial Gradients - darker on the left to highlight left-aligned typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/60" />
      </div>

      {/* Decorative Gold Glow Accent */}
      <div className="absolute top-1/3 left-10 w-[700px] h-[350px] bg-[#C5A46D]/15 blur-[160px] pointer-events-none rounded-full" />

      {/* Hero Full-Fit Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-20 pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main Left-Aligned Content Column */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A46D]/40 text-[#DFCA9F] text-xs sm:text-sm font-medium tracking-[0.25em] uppercase shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>RCM TRADERS LIMITED | WORCESTER</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-serif text-white tracking-tight leading-[1.05] font-normal"
            >
              Beautiful Spaces. <br />
              <span className="font-light italic text-[#DFCA9F] font-serif">
                Exceptional Craftsmanship.
              </span>
            </motion.h1>

            {/* Supporting Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-serif italic tracking-wide font-light"
            >
              Transforming Houses into Homes You&apos;ll Love.
            </motion.p>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg text-gray-300 font-sans max-w-3xl leading-relaxed font-light"
            >
              From contemporary kitchens and luxurious bathrooms to bespoke bedroom cupboards, statement media walls and beautiful flooring, RCM Traders Limited brings your home improvement ideas to life.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_35px_rgba(197,164,109,0.35)]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/40 hover:bg-white/10 text-white border border-white/20 font-medium text-xs uppercase tracking-widest backdrop-blur-md transition-all hover:border-[#C5A46D]/60"
              >
                <span>Explore Our Services</span>
              </Link>
            </motion.div>

            {/* Left-Aligned Badges & Location Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-start gap-6 sm:gap-8 text-xs text-gray-300 font-light"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DFCA9F]" />
                <span>Serving Worcester & Worcestershire</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#C5A46D]" />
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#DFCA9F]" />
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
          </div>

          {/* Right Floating Architectural Feature Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-4 flex-col gap-4 text-left"
          >
            <div className="p-8 rounded-3xl bg-[#171717]/80 backdrop-blur-xl border border-[#C5A46D]/30 text-white shadow-2xl space-y-5">
              <span className="text-[11px] uppercase tracking-[0.25em] font-sans font-semibold text-[#DFCA9F] block">
                WORCESTER RENOVATION ATELIER
              </span>
              <h3 className="text-2xl font-serif text-white font-normal leading-snug">
                Architectural Quality. <br />
                <span className="italic text-[#DFCA9F]">Crafted to Perfection.</span>
              </h3>
              <div className="w-12 h-[2px] bg-[#C5A46D]" />
              <p className="text-xs text-gray-300 font-sans leading-relaxed font-light">
                Tailored solutions for discerning homeowners across Worcester. Complete management of bespoke joinery, porcelain tiling, plumbing, and luxury finishes.
              </p>

              <div className="pt-2 space-y-2.5 text-xs text-gray-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFCA9F] shrink-0" />
                  <span>Free in-person site assessment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFCA9F] shrink-0" />
                  <span>Itemised, transparent quotations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFCA9F] shrink-0" />
                  <span>Single team from start to completion</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:07711960238"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A46D]/60 transition-colors text-xs text-gray-200 hover:text-white"
                >
                  <span className="font-medium">Call Lead Craftsman</span>
                  <span className="text-[#DFCA9F] font-bold">07711 960238</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
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
