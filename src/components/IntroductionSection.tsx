"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A46D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Architectural Photograph Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#C5A46D]/20">
              <Image
                src="/images/services/bathroom-renovation.jpg"
                alt="RCM Traders Limited Bespoke Bathroom & Interior Craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#171717]/90 backdrop-blur-md border border-[#C5A46D]/30 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D] flex items-center justify-center text-[#DFCA9F] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-semibold text-white">
                      Bespoke Interiors in Worcester
                    </h4>
                    <p className="text-xs text-gray-300 font-sans">
                      Engineered for timeless beauty, ergonomic ease & durability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Offset Gold Frame */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#C5A46D]/30 -z-10" />
          </motion.div>

          {/* Right Column: Text & Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block">
                ABOUT RCM TRADERS LIMITED
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight leading-tight">
                Your Home. <br />
                <span className="italic font-serif text-[#9F7F48]">Our Craft.</span> <br />
                Your Vision.
              </h2>
            </div>

            <div className="w-16 h-[2px] bg-gradient-to-r from-[#C5A46D] to-transparent" />

            <div className="space-y-5 text-gray-700 font-sans text-base leading-relaxed">
              <p>
                At RCM Traders Limited, we believe that every home deserves spaces that reflect the personality, lifestyle and aspirations of the people who live there.
              </p>
              <p>
                Whether you&apos;re planning a complete kitchen transformation, refreshing your bathroom, installing bespoke bedroom storage or creating an impressive entertainment wall, we aim to deliver outstanding results with a personal, transparent approach.
              </p>
              <p>
                Based in Worcester, our experienced craftsmen coordinate every stage—from initial spatial planning and material sourcing to precision joinery, plumbing, and fine detailing—ensuring peace of mind throughout your renovation journey.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "Worcestershire Craftsmanship",
                "Single Point of Responsibility",
                "Bespoke Made-to-Measure Joinery",
                "Transparent Fixed Quotations"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#C5A46D]/15 flex items-center justify-center text-[#9F7F48] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-medium text-[#171717]">{item}</span>
                </div>
              ))}
            </div>

            {/* Link to About Page */}
            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#171717] group hover:text-[#9F7F48] transition-colors"
              >
                <span>Read Our Story & Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

