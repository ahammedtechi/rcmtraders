import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Specialist Home Renovation Services | Worcester",
  description:
    "Explore our complete range of bespoke home improvement services in Worcester: kitchens, bathrooms, fitted bedroom wardrobes, custom media walls, flooring, and plumbing.",
};

export default function ServicesIndexPage() {
  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Services Hero Header */}
      <section className="py-20 sm:py-28 bg-[#171717] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A46D]/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#DFCA9F] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>EXCELLENCE IN EVERY DETAIL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6">
            Our Renovation <span className="italic text-[#DFCA9F]">Services</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl leading-relaxed font-light">
            Thoughtfully planned and immaculately executed home transformations across Worcester and Worcestershire.
          </p>
        </div>
      </section>

      {/* Services List in Alternating Editorial Layout */}
      <section className="py-24 sm:py-32">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto space-y-24 sm:space-y-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Col */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A46D]/20 group">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#DFCA9F] text-xs font-medium">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block">
                    {service.eyebrow}
                  </span>

                  <h2 className="text-3xl sm:text-4xl font-serif text-[#171717] font-normal leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                      Key Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#C5A46D]/20 text-[#9F7F48] flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-[#DFCA9F] hover:bg-black font-semibold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/contact"
                      className="text-xs text-gray-600 hover:text-black font-semibold uppercase tracking-wider underline underline-offset-4"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

