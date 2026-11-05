"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-28 lg:py-36 bg-[#171717] text-white overflow-hidden">
      {/* Background Photograph with Charcoal Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/bedroom-cupboards.jpg"
          alt="Luxury Bedroom & Wardrobes Interior"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-[#121212]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]" />
      </div>

      {/* Decorative Gold Glow */}
      <div className="absolute top-1/2 left-10 w-[700px] h-[350px] bg-[#C5A46D]/15 blur-[160px] pointer-events-none rounded-full" />

      {/* Full-Fit Content Container */}
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A46D]/40 text-[#DFCA9F] text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>START YOUR HOME TRANSFORMATION</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight font-normal"
            >
              Let&apos;s Build Something <br />
              <span className="italic font-serif text-[#DFCA9F]">
                Beautiful Together.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xs sm:text-base text-gray-300 font-sans max-w-2xl leading-relaxed font-light"
            >
              From the first idea to the finishing touches, let RCM Traders Limited help create a home you&apos;ll love coming back to. Contact our Worcester team for a free, no-obligation consultation and quotation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(197,164,109,0.3)] text-center"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs uppercase tracking-widest backdrop-blur-md transition-all hover:border-[#C5A46D]/60 text-center"
              >
                <span>Contact Our Team</span>
              </Link>
            </motion.div>

            {/* Direct Contact Links */}
            <div className="pt-4 flex flex-wrap items-center justify-start gap-6 sm:gap-8 text-xs text-gray-300">
              <a
                href="tel:07711960238"
                className="inline-flex items-center gap-2 hover:text-[#DFCA9F] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#DFCA9F]" />
                <span className="font-semibold text-white">07711 960238</span>
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="https://wa.me/447711960238?text=Hello%20RCM%20Traders%20Limited%2C%20I%20would%20like%20to%20enquire%20about%20a%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Chat on WhatsApp</span>
              </a>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">Worcester & Worcestershire</span>
            </div>
          </div>

          {/* Right Column: Highlights Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="p-8 rounded-3xl bg-[#171717]/85 backdrop-blur-md border border-[#C5A46D]/30 text-white shadow-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#DFCA9F] font-bold block">
                WHAT TO EXPECT
              </span>
              <div className="space-y-3 text-xs text-gray-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFCA9F] shrink-0 mt-0.5" />
                  <span>Free in-person property survey & spatial assessment</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFCA9F] shrink-0 mt-0.5" />
                  <span>Transparent fixed-price quotations with itemized breakdown</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFCA9F] shrink-0 mt-0.5" />
                  <span>Full trade coordination: joinery, tiling, subfloor & plumbing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFCA9F] shrink-0 mt-0.5" />
                  <span>Courteous, tidy, and punctual craftsmen in your home</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
