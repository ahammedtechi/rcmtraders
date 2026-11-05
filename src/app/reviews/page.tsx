"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Filter
} from "lucide-react";
import { reviewsData, googleReviewsInfo } from "@/data/reviewsData";
import CTASection from "@/components/CTASection";

export default function ReviewsPage() {
  const [filterProject, setFilterProject] = useState<string>("all");

  const projectTypes = [
    { id: "all", label: "All Reviews" },
    { id: "kitchen-renovation", label: "Kitchens" },
    { id: "bathroom-renovation", label: "Bathrooms" },
    { id: "bedroom-cupboards", label: "Bedroom Cupboards" },
    { id: "media-walls", label: "Media Walls" }
  ];

  const filtered =
    filterProject === "all"
      ? reviewsData
      : reviewsData.filter((r) => r.projectSlug === filterProject);

  return (
    <div className="pt-24 bg-[#FAF8F5] text-[#171717]">
      {/* Hero Header */}
      <section className="py-20 sm:py-28 bg-[#171717] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A46D]/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#DFCA9F] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>VERIFIED CLIENT REVIEWS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6">
            Customer <span className="italic text-[#DFCA9F]">Feedback</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed font-light">
            Read honest appraisals from homeowners in Worcester and Worcestershire whose living spaces have been transformed by RCM Traders Limited.
          </p>
        </div>
      </section>

      {/* Main Reviews Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Banner & Google Reviews Integration Placeholder */}
          <div className="mb-14 p-8 rounded-3xl bg-white border border-[#EAE8E3] shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Average Rating Box */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#171717] text-[#DFCA9F] flex flex-col items-center justify-center font-serif">
                <span className="text-2xl font-bold leading-none">5.0</span>
                <span className="text-[10px] tracking-widest uppercase font-sans text-gray-400">OUT OF 5</span>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A46D] text-[#C5A46D]" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 font-sans">
                  Based on verified homeowner project sign-offs
                </p>
              </div>
            </div>

            {/* Authenticity Policy */}
            <div className="text-xs text-gray-600 font-sans border-t md:border-t-0 md:border-l border-[#EAE8E3] pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-[#171717] font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-[#9F7F48]" />
                <span>Zero Fake Reviews Policy</span>
              </div>
              <p>
                In strict compliance with our business standards, every review is verified against genuine client work completed in the Worcester region.
              </p>
            </div>

            {/* Google Reviews Link / Placeholder */}
            <div className="flex justify-start md:justify-end border-t md:border-t-0 md:border-l border-[#EAE8E3] pt-4 md:pt-0 md:pl-6">
              <a
                href={googleReviewsInfo.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF8F5] border border-[#C5A46D]/40 text-xs font-semibold uppercase tracking-wider text-[#171717] hover:bg-[#171717] hover:text-[#DFCA9F] transition-all"
              >
                <span>Leave a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {projectTypes.map((type) => {
              const isActive = filterProject === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setFilterProject(type.id)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-[#171717] text-[#DFCA9F] shadow-md border border-[#171717]"
                      : "bg-white text-gray-700 hover:text-black hover:bg-gray-100 border border-[#EAE8E3]"
                  }`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((rev) => (
              <div
                key={rev.id}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#C5A46D] text-[#C5A46D]"
                        />
                      ))}
                    </div>

                    {rev.isVerified && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A46D]/30 text-[11px] font-medium text-[#9F7F48]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
                        Verified Client
                      </span>
                    )}
                  </div>

                  <blockquote className="text-gray-700 font-sans leading-relaxed text-sm sm:text-base italic mb-6">
                    &ldquo;{rev.content}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#EAE8E3] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#171717]">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-gray-500 font-sans">
                      {rev.location} •{" "}
                      <span className="text-[#9F7F48] font-medium">
                        {rev.projectType}
                      </span>
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 font-sans">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

