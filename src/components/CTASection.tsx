"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageSquare, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#171717] text-white overflow-hidden">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C5A46D]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A46D]/40 text-[#DFCA9F] text-xs font-semibold tracking-[0.25em] uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
          <span>START YOUR HOME TRANSFORMATION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight mb-6 font-normal"
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
          className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          From the first idea to the finishing touches, let RCM Traders Limited help create a home you&apos;ll love coming back to. Contact our friendly Worcester team for a free, no-obligation consultation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_35px_rgba(197,164,109,0.35)]"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs uppercase tracking-widest backdrop-blur-md transition-all hover:border-[#C5A46D]/60"
          >
            <span>Contact Our Team</span>
          </Link>
        </motion.div>

        {/* Direct Contact Links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-300">
          <a
            href="tel:07711960238"
            className="inline-flex items-center gap-2 hover:text-[#DFCA9F] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#DFCA9F]" />
            <span>07711 960238</span>
          </a>
          <span className="text-gray-600">•</span>
          <a
            href="https://wa.me/447711960238?text=Hello%20RCM%20Traders%20Limited%2C%20I%20would%20like%20to%20enquire%20about%20a%20renovation%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

