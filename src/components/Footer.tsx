"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, MessageSquare, ArrowUpRight, ShieldCheck, Mail, Clock } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#121212] text-gray-300 border-t border-[#C5A46D]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#9F7F48] via-[#DFCA9F] to-[#C5A46D] shadow-lg">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/logo/rcm-logo-round.jpg"
                    alt="RCM Traders Limited Logo"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="text-white font-serif text-2xl font-bold tracking-wider block">
                  RCM TRADERS LIMITED
                </span>
                <span className="text-[#C5A46D] text-xs font-sans tracking-[0.2em] uppercase font-medium">
                  Worcester, United Kingdom
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Premium home renovation and interior improvement company based in Worcester. We design and deliver exceptional kitchens, luxury bathrooms, bespoke bedroom cupboards, custom media walls, premium flooring, and integrated plumbing solutions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-gray-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-[#C5A46D]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DFCA9F]" />
                Worcestershire Registered Company
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-[#C5A46D]/20">
                <Clock className="w-3.5 h-3.5 text-[#DFCA9F]" />
                Mon - Sat: 8:00 AM - 6:00 PM
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFCA9F]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#DFCA9F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#DFCA9F] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#DFCA9F] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#DFCA9F] transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#DFCA9F] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#DFCA9F] transition-colors">
                  Contact & Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFCA9F]">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-[#DFCA9F] transition-colors"
                  >
                    {svc.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFCA9F]">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:07711960238"
                className="flex items-start gap-3 group hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-[#C5A46D]/30 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5 group-hover:bg-[#C5A46D] group-hover:text-[#171717] transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400">Direct Telephone</span>
                  <span className="font-semibold text-white">07711 960238</span>
                </div>
              </a>

              <a
                href="https://wa.me/447711960238?text=Hello%20RCM%20Traders%2C%20I%20would%20like%20to%20enquire%20about%20a%20renovation%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400">WhatsApp Chat</span>
                  <span className="font-semibold text-emerald-300">Chat with us online</span>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-1 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#DFCA9F] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400">Location Base</span>
                  <span className="text-gray-300">Worcester, United Kingdom</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-[#DFCA9F] hover:text-white font-medium group"
              >
                <span>Request an on-site consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {currentYear} RCM Traders Limited. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-600">•</span>
            <span className="text-[#C5A46D]">Serving Worcester & Surrounding Areas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

