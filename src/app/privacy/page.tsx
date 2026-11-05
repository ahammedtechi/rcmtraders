import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | RCM Traders Limited Worcester",
  description:
    "Privacy Policy for RCM Traders Limited. Explains how we collect, store, and protect your enquiry information.",
};

export default function PrivacyPage() {
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
              LEGAL & DATA PROTECTION
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#171717]">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Last updated: October 2025 | RCM Traders Limited
            </p>
          </div>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-[#171717]">
                1. Introduction
              </h2>
              <p>
                RCM Traders Limited (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-[#171717]">
                2. Information We Collect
              </h2>
              <p>
                When you request a quotation or contact us via our website, telephone, or WhatsApp, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Your full name and contact information (telephone number, email address).</li>
                <li>Your property location / postal code for surveying purposes.</li>
                <li>Project notes, room measurements, floor plans, or uploaded photographs.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-[#171717]">
                3. How We Use Your Information
              </h2>
              <p>
                We use this information strictly to provide you with consultation, project scoping, schedule site visits, issue quotations, and carry out agreed renovation works. We do not sell, rent, or lease your personal information to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-[#171717]">
                4. Data Security
              </h2>
              <p>
                We implement appropriate security measures to prevent your personal data from being accidentally lost, used, accessed in an unauthorised way, or altered.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-[#171717]">
                5. Contacting Us
              </h2>
              <p>
                If you have questions regarding our privacy practices or wish to request data deletion, please contact us at 07711 960238 or visit us in Worcester, United Kingdom.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

