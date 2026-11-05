import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  Users,
  Award,
  HeartHandshake
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us | RCM Traders Limited Worcester",
  description:
    "Building beautiful spaces and creating lasting impressions. Learn about RCM Traders Limited, Worcester's premier home renovation and bespoke joinery specialists.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Uncompromising Craftsmanship",
      description:
        "Every cut, join, and surface finish is executed with meticulous pride and adherence to the highest standards of British trade practice."
    },
    {
      title: "Transparent & Respectful",
      description:
        "We communicate honestly from initial quotation through to completion, treating your home with utmost care, cleanliness and respect."
    },
    {
      title: "Thoughtful Modern Design",
      description:
        "We combine architectural proportion with functional daily ergonomics, creating timeless spaces tailored to how you live."
    },
    {
      title: "Single-Point Accountability",
      description:
        "By integrating joinery, tiling, subfloor preparation, and plumbing within our team, we eliminate friction and keep projects smoothly on track."
    }
  ];

  return (
    <div className="pt-24 bg-[#FAF8F5] text-[#171717]">
      {/* Hero Header */}
      <section className="py-20 sm:py-28 bg-[#171717] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A46D]/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#DFCA9F] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>OUR HERITAGE & VISION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6">
            Building Beautiful Spaces. <br />
            <span className="italic text-[#DFCA9F] font-serif">
              Creating Lasting Impressions.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl leading-relaxed font-light">
            RCM Traders Limited is a dedicated Worcester home improvement company creating bespoke kitchens, bathrooms, bedrooms, and custom architectural features.
          </p>
        </div>
      </section>

      {/* Main Narrative & Company Story */}
      <section className="py-24 sm:py-32">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl border border-[#C5A46D]/30 group">
                <Image
                  src="/images/about/craftsmanship.jpg"
                  alt="RCM Traders Limited Artisan Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#171717]/90 backdrop-blur-md border border-[#C5A46D]/40 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D] flex items-center justify-center text-[#DFCA9F]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-white">
                        Worcestershire Built
                      </h4>
                      <p className="text-xs text-gray-300">
                        Proudly serving homeowners across Worcester and surrounding districts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block">
                WHO WE ARE
              </span>

              <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] font-normal leading-tight">
                Rooted in Craftsmanship. Driven by Detail.
              </h2>

              <div className="w-16 h-[2px] bg-[#C5A46D]" />

              <div className="space-y-4 text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
                <p>
                  <strong>RCM Traders Limited</strong> is a Worcester-based home improvement business focused on helping homeowners transform their living spaces.
                </p>
                <p>
                  Our services cover kitchen renovations, bathroom improvements, bespoke bedroom cupboards, media walls, flooring and associated plumbing work.
                </p>
                <p>
                  We understand that every property is different and every customer has their own expectations. That&apos;s why we believe in listening carefully, understanding your ideas and recommending practical solutions that work for your home.
                </p>
                <p>
                  Rather than treating a renovation as a disruptive ordeal, we approach every project as a collaborative journey, maintaining tidy worksites, clear schedules, and open communication throughout.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-md"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-[#171717] text-white">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#202020] border border-white/10 hover:border-[#C5A46D]/50 transition-all shadow-xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A46D]/15 border border-[#C5A46D]/40 flex items-center justify-center text-[#DFCA9F] mb-6">
                <Target className="w-6 h-6 stroke-[1.75]" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#DFCA9F] block mb-2">
                OUR PURPOSE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-4">
                Our Mission
              </h3>
              <p className="text-base text-gray-300 font-sans leading-relaxed font-light">
                To enhance homes through thoughtful design, quality workmanship and customer-focused renovation services.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#202020] border border-white/10 hover:border-[#C5A46D]/50 transition-all shadow-xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A46D]/15 border border-[#C5A46D]/40 flex items-center justify-center text-[#DFCA9F] mb-6">
                <Compass className="w-6 h-6 stroke-[1.75]" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#DFCA9F] block mb-2">
                OUR AMBITION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-4">
                Our Vision
              </h3>
              <p className="text-base text-gray-300 font-sans leading-relaxed font-light">
                To become a trusted name in home improvements, recognised for beautiful interiors, practical solutions and consistent attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 sm:py-32">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto text-left">
          <div className="max-w-3xl mb-16 sm:mb-20 text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block mb-3">
              WHAT GUIDES US
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight font-normal mb-4">
              Our Core Company Values
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-sans">
              The foundational principles that guide every cut, joint, and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[#C5A46D] font-serif font-bold text-3xl mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#171717] mb-3">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}

