import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | RCM Traders Limited Worcester",
  description:
    "Terms and Conditions of service for RCM Traders Limited home renovation, bespoke joinery, and interior improvement contracts.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5] text-[#171717]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#9F7F48] font-bold mb-8 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE8E3] shadow-sm space-y-8">
          <div className="border-b border-gray-100 pb-6">
            <span className="text-xs uppercase tracking-widest text-[#9F7F48] font-bold block mb-2">
              TERMS OF BUSINESS
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#171717]">
              Terms & Conditions
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              RCM Traders Limited | Worcester, United Kingdom
            </p>
          </div>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-[#171717]">
                1. Quotations and Contracts
              </h2>
              <p>
                All quotations issued by RCM Traders Limited are valid for 30 days unless otherwise agreed in writing. Quotations outline the agreed scope of works, estimated timeline, and specified materials. Work commences upon mutual written acceptance and receipt of the agreed deposit.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-[#171717]">
                2. Variations and Additions
              </h2>
              <p>
                Any changes, modifications, or additional works requested by the client during the renovation process will be agreed upon with a written variation notice and adjusted cost schedule prior to execution.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-[#171717]">
                3. Workmanship Guarantee
              </h2>
              <p>
                RCM Traders Limited warrants that all installation and renovation work is performed with reasonable skill, care, and in compliance with prevailing UK building standards. Manufacturer warranties apply directly to appliances, hardware, and specialized materials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-[#171717]">
                4. Site Access and Conduct
              </h2>
              <p>
                The client agrees to provide adequate access to water, electricity, and the project areas during normal working hours. Our team commits to maintaining clean, respectful, and protected worksites at all times.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

