"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you provide free quotations?",
      answer:
        "Yes, absolutely. We provide completely free, detailed and no-obligation quotations for all home renovation projects. We are happy to visit your home in Worcester or surrounding areas to evaluate the space, listen to your requirements, and provide a transparent, itemised estimate."
    },
    {
      question: "Can you renovate an entire kitchen or bathroom?",
      answer:
        "Yes. RCM Traders Limited manages end-to-end renovations from initial strip-out to final styling. We coordinate all necessary joinery, tiling, subfloor preparation, plumbing, and finishing trades so you deal with one dedicated, responsible team from start to finish."
    },
    {
      question: "Can you create a custom media wall?",
      answer:
        "Yes. We specialize in bespoke media walls designed to elevate your living room. We build custom stud frameworks that integrate flush recessed televisions, concealed cable management, ambient LED illumination, acoustic slatted wood panelling, and integrated electric fireplaces."
    },
    {
      question: "Do you offer made-to-measure bedroom cupboards?",
      answer:
        "Yes. All of our bedroom cupboards and wardrobe solutions are 100% made to measure. We scribe cabinetry directly to your ceiling, floor, and walls, seamlessly accommodating awkward angles, chimney breasts, and sloping loft eaves to maximise every cubic inch of storage."
    },
    {
      question: "How long will my renovation take?",
      answer:
        "Timelines vary depending on project scope. A bespoke media wall or bedroom wardrobe typically takes 3 to 6 working days. A full bathroom renovation usually takes 1 to 2 weeks, while a comprehensive kitchen rebuild typically ranges from 2 to 4 weeks. We outline a clear schedule before any work begins."
    },
    {
      question: "Which areas do you cover?",
      answer:
        "We are based in Worcester and cover the entire city (including Claines, Barbourne, Northwick, St John's, Henwick, Battenhall, Warndon) as well as the wider Worcestershire region including Droitwich Spa, Malvern, Pershore, Evesham, and Bromsgrove."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight font-normal mb-5">
            Everything You Need to Know.
          </h2>
          <p className="text-base text-gray-600 font-sans max-w-xl mx-auto">
            Clear, honest answers regarding our process, pricing, timelines, and service standards across Worcester.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#EAE8E3] overflow-hidden transition-all duration-300 hover:border-[#C5A46D]/50 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-[#171717] pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#EAE8E3] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#171717] text-[#DFCA9F] border-[#171717]" : "text-gray-500 bg-[#FAF8F5]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm text-gray-600 font-sans leading-relaxed border-t border-[#FAF8F5] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Further Assistance Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F4F1EA] border border-[#EAE8E3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700 font-sans text-center sm:text-left">
            Have a question that isn&apos;t covered here? We&apos;re always ready to help.
          </p>
          <a
            href="tel:07711960238"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-[#DFCA9F] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#DFCA9F]" />
            <span>Call 07711 960238</span>
          </a>
        </div>
      </div>
    </section>
  );
}

