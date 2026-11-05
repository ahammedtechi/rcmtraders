import React from "react";
import Image from "next/image";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Contact & Free Quote | RCM Traders Limited Worcester",
  description:
    "Request your complimentary home renovation quotation with RCM Traders Limited in Worcester. Call 07711 960238 or submit your project details online.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 bg-[#FAF8F5] text-[#171717]">
      {/* Hero Header */}
      <section className="py-20 sm:py-28 bg-[#171717] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A46D]/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#DFCA9F] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>LET&apos;S DISCUSS YOUR HOME</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6">
            Your Dream Space Starts with a <span className="italic text-[#DFCA9F]">Conversation.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl leading-relaxed font-light">
            Planning a new kitchen? Thinking about renovating your bathroom? Looking for bespoke storage or a stunning media wall? Tell us what you have in mind.
          </p>
        </div>
      </section>

      {/* Main Contact & Form Section */}
      <section className="py-24 sm:py-32">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Cards & Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block">
                  DIRECT CONTACT
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#171717] font-normal leading-tight">
                  We&apos;d Love to Hear About Your Project.
                </h2>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  We would love to hear about your project and discuss how RCM Traders Limited can help bring your vision to reality with exceptional craftsmanship and personal care.
                </p>
              </div>

              {/* Direct Telephone Card */}
              <a
                href="tel:07711960238"
                className="group p-6 rounded-2xl bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 hover:shadow-xl transition-all duration-300 flex items-center gap-5 block"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#C5A46D]/30 flex items-center justify-center text-[#9F7F48] group-hover:bg-[#C5A46D] group-hover:text-[#171717] transition-all shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-0.5">
                    Direct Telephone
                  </span>
                  <span className="text-xl font-serif font-bold text-[#171717] group-hover:text-[#9F7F48] transition-colors">
                    07711 960238
                  </span>
                  <span className="text-xs text-gray-500 block mt-0.5">
                    Mon - Sat: 8:00 AM - 6:00 PM
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/447711960238?text=Hello%20RCM%20Traders%20Limited%2C%20I%20would%20like%20to%20enquire%20about%20a%20renovation%20project%20in%20Worcester."
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-emerald-950/5 border border-emerald-500/20 hover:border-emerald-500/60 hover:shadow-xl transition-all duration-300 flex items-center gap-5 block"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-105 transition-all shrink-0 shadow-md">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-emerald-800 uppercase tracking-wider font-semibold block mb-0.5">
                    WhatsApp Online Enquiry
                  </span>
                  <span className="text-xl font-serif font-bold text-[#171717] group-hover:text-emerald-700 transition-colors">
                    Chat Directly on WhatsApp
                  </span>
                  <span className="text-xs text-emerald-700 block mt-0.5">
                    Fast response during working hours
                  </span>
                </div>
              </a>

              {/* Location & Coverage */}
              <div className="p-6 rounded-2xl bg-white border border-[#EAE8E3]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#C5A46D]/20 flex items-center justify-center text-[#9F7F48] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-base text-[#171717]">
                      Based in Worcester
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">
                      Serving all Worcester city districts (Claines, Barbourne, St John&apos;s, Battenhall, Northwick) and the broader Worcestershire region.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Happens Next Checklist */}
              <div className="p-6 rounded-2xl bg-[#F4F1EA] border border-[#EAE8E3] space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#9F7F48] font-bold">
                  What Happens After You Enquire:
                </h4>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>Prompt review by our senior project lead</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>Initial phone conversation to understand your ideas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>Convenient in-person survey & measurement visit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>Clear, written, transparent quotation without hidden costs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Working Quotation Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

