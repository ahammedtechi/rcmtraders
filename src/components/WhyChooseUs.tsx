"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Sparkles,
  Layers,
  MessageCircle,
  Lightbulb,
  HeartHandshake
} from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Compass,
      title: "Personalised Approach",
      description:
        "Solutions designed around your home, lifestyle needs and individual aesthetic preferences—never a one-size-fits-all package."
    },
    {
      icon: Sparkles,
      title: "Attention to Detail",
      description:
        "Carefully considered finishes, mitred junctions, flush scribing and a relentless commitment to lasting quality."
    },
    {
      icon: Layers,
      title: "Complete Home Solutions",
      description:
        "Multiple renovation services under one reputable company: joinery, tiling, plumbing, and bespoke architectural elements."
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description:
        "A truly collaborative approach from initial enquiry through to final sign-off, with direct access to your lead craftsman."
    },
    {
      icon: Lightbulb,
      title: "Modern Design Thinking",
      description:
        "Practical ideas inspired by contemporary British and European interiors, balancing functional ergonomics with timeless elegance."
    },
    {
      icon: HeartHandshake,
      title: "Customer-Focused Service",
      description:
        "Your everyday comfort and requirements remain central to every project, with tidy working habits and considerate schedules."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Gold Dividers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block mb-3"
          >
            THE RCM TRADERS PROMISE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight font-normal"
          >
            Craftsmanship That Makes a Difference.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-20 h-[2px] bg-[#C5A46D] mx-auto mt-6"
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group p-8 rounded-2xl bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#C5A46D]/20 flex items-center justify-center text-[#9F7F48] group-hover:bg-[#C5A46D] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#171717] mb-3 group-hover:text-[#9F7F48] transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  {benefit.description}
                </p>

                <div className="absolute bottom-4 right-5 text-gray-200 group-hover:text-[#C5A46D]/20 font-serif text-3xl select-none font-bold transition-colors">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

