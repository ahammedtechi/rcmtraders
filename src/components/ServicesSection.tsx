"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#171717] text-white relative overflow-hidden">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C5A46D]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C5A46D]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A46D]/30 text-[#DFCA9F] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>OUR RENOVATION EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white mb-6 font-normal"
          >
            Designed Around Your Lifestyle.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 font-sans font-light max-w-2xl mx-auto"
          >
            Thoughtfully planned home improvements. Beautifully finished spaces.
          </motion.p>
        </div>

        {/* Sophisticated Editorial Grid (6 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
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
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-sans font-medium text-[#DFCA9F] tracking-widest">
                  0{index + 1}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFCA9F] block mb-2">
                    {service.eyebrow}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#DFCA9F] transition-colors mb-3">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-300 font-sans font-light leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DFCA9F] group-hover:text-white transition-colors"
                  >
                    <span>Discover More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-xs text-gray-500 font-sans">Worcester & Beyond</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">
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

