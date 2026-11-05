"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, CheckCircle, ShieldCheck, ExternalLink, ArrowRight } from "lucide-react";
import { reviewsData, googleReviewsInfo } from "@/data/reviewsData";

export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-28 lg:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="w-full px-5 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-20 text-left">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block mb-2 sm:mb-3"
            >
              HONEST CLIENT EXPERIENCES
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#171717] tracking-tight font-normal"
            >
              What Our Customers Say.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-left"
          >
            <p className="text-xs sm:text-base text-gray-600 font-sans leading-relaxed">
              Discover real feedback from homeowners across Worcester who trusted RCM Traders Limited with their kitchens, bathrooms, bespoke joinery, and home renovations.
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {reviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-5 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Top Row: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#C5A46D] text-[#C5A46D]"
                      />
                    ))}
                  </div>

                  {review.isVerified && (
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#FAF8F5] border border-[#C5A46D]/30 text-[10px] sm:text-[11px] font-medium text-[#9F7F48]">
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A46D]" />
                      Verified Renovation
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 font-sans leading-relaxed text-xs sm:text-base italic mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                  &ldquo;{review.content}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-3 sm:pt-4 border-t border-[#EAE8E3] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#171717]">
                    {review.author}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-sans">
                    {review.location} • <span className="text-[#9F7F48] font-medium">{review.projectType}</span>
                  </p>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-400 font-sans">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Guarantee & Google CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-[#F4F1EA] border border-[#EAE8E3] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-left">
            <ShieldCheck className="w-6 h-6 text-[#9F7F48] shrink-0" />
            <p className="text-xs text-gray-600">
              <strong className="text-gray-800">Authenticity Guarantee:</strong> We never fabricate reviews. Every testimonial reflects genuine completed projects in Worcester.
            </p>
          </div>

          <Link
            href="/reviews"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171717] hover:text-[#9F7F48] transition-colors"
          >
            <span>View All Feedback</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

