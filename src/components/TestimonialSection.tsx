"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, CheckCircle, ShieldCheck, ExternalLink, ArrowRight } from "lucide-react";
import { reviewsData, googleReviewsInfo } from "@/data/reviewsData";

export default function TestimonialSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block mb-3"
          >
            HONEST CLIENT EXPERIENCES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight font-normal mb-5"
          >
            What Our Customers Say.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base text-gray-600 font-sans max-w-2xl mx-auto"
          >
            Discover real feedback from homeowners across Worcester who trusted RCM Traders Limited with their kitchens, bathrooms, bespoke joinery, and home renovations.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#C5A46D] text-[#C5A46D]"
                      />
                    ))}
                  </div>

                  {review.isVerified && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A46D]/30 text-[11px] font-medium text-[#9F7F48]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
                      Verified Renovation
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 font-sans leading-relaxed text-sm sm:text-base italic mb-6">
                  &ldquo;{review.content}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#EAE8E3] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#171717]">
                    {review.author}
                  </h4>
                  <p className="text-xs text-gray-500 font-sans">
                    {review.location} • <span className="text-[#9F7F48] font-medium">{review.projectType}</span>
                  </p>
                </div>
                <span className="text-xs text-gray-400 font-sans">
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

