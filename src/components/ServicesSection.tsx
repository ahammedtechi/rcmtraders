"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-28 lg:py-32 bg-[#171717] text-white relative overflow-hidden">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C5A46D]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C5A46D]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full px-5 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto relative z-10">
        {/* Section Header - Left Aligned Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-20 pb-6 sm:pb-8 border-b border-white/10 text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A46D]/30 text-[#DFCA9F] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>OUR RENOVATION EXPERTISE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif tracking-tight text-white font-normal"
            >
              Designed Around Your Lifestyle.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-left"
          >
            <p className="text-xs sm:text-base text-gray-300 font-sans font-light leading-relaxed mb-2 sm:mb-3">
              Thoughtfully planned home improvements. Beautifully finished spaces across Worcester.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DFCA9F] hover:text-white transition-colors"
            >
              <span>Explore All 6 Renovation Divisions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Sophisticated Editorial Grid (6 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#202020] border border-white/10 hover:border-[#C5A46D]/60 transition-all duration-500 shadow-xl hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={`${service.title} - RCM Traders Limited`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-black/30 to-transparent" />

                {/* Top Number Indicator */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-sans font-medium text-[#DFCA9F] tracking-widest">
                  0{index + 1}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-5 sm:p-7 lg:p-8 flex flex-col flex-grow justify-between text-left">
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFCA9F] block mb-1.5 sm:mb-2">
                    {service.eyebrow}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-serif text-white group-hover:text-[#DFCA9F] transition-colors mb-2 sm:mb-3">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-sans font-light leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#DFCA9F] group-hover:text-white transition-colors"
                  >
                    <span>Discover More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-gray-500 font-sans">Worcester & Beyond</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            Have a custom requirement or multi-room project in mind?{" "}
            <Link
              href="/contact"
              className="text-[#DFCA9F] underline underline-offset-4 hover:text-white transition-colors font-medium ml-1"
            >
              Speak with our senior project coordinator
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
