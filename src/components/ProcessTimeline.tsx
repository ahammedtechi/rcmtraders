"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquareText,
  CalendarCheck2,
  FileCheck2,
  Wrench,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      icon: MessageSquareText,
      title: "Tell Us About Your Project",
      description:
        "Share your ideas, aspirations, and the space you'd like to improve. Whether it's a complete kitchen rebuild or bespoke fitted storage, we listen attentively."
    },
    {
      number: "02",
      icon: CalendarCheck2,
      title: "Consultation & Assessment",
      description:
        "We discuss your functional requirements and arrange an in-person home assessment in Worcester to evaluate dimensions, structural elements, and feasibility."
    },
    {
      number: "03",
      icon: FileCheck2,
      title: "Planning & Quotation",
      description:
        "We present an agreed proposed scope of work, specify suitable materials and finishes, and provide a transparent, competitive project quotation."
    },
    {
      number: "04",
      icon: Wrench,
      title: "Installation & Transformation",
      description:
        "The agreed work is carried out by skilled craftsmen with meticulous attention to joinery, waterproofing, and finishing, respecting your home every day."
    },
    {
      number: "05",
      icon: CheckCircle2,
      title: "Final Review & Sign-Off",
      description:
        "We conduct a thorough joint walkthrough with you to review every detail, address any fine finishing items, and ensure you are delighted with the result."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#171717] text-white relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-[#C5A46D]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto relative z-10">
        {/* Section Header - Left Aligned Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-white/10 text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A46D]/30 text-[#DFCA9F] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>OUR SEAMLESS PROCESS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white font-normal"
            >
              From Your First Idea to the Final Finish.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-left"
          >
            <p className="text-base text-gray-300 font-sans font-light leading-relaxed">
              A structured, stress-free methodology ensuring clarity, precision and complete peace of mind at every stage.
            </p>
          </motion.div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="group relative flex flex-col items-start text-left p-6 sm:p-7 rounded-2xl bg-[#202020] border border-white/10 hover:border-[#C5A46D]/60 transition-all duration-300"
                >
                  {/* Step Number Circle */}
                  <div className="relative w-14 h-14 rounded-full bg-[#171717] border-2 border-[#C5A46D] flex items-center justify-center text-[#DFCA9F] mb-6 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(197,164,109,0.4)] transition-all">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                    <span className="absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-[#C5A46D] text-[#171717] text-[10px] font-bold font-sans">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-semibold text-white mb-2.5 group-hover:text-[#DFCA9F] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

