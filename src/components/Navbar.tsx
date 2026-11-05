"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Home,
  CheckCircle2
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true
    },
    { name: "Our Projects", href: "/projects" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" }
  ];

  const isHome = pathname === "/";
  const navBgClass =
    scrolled || !isHome
      ? "bg-[#171717]/95 backdrop-blur-md shadow-2xl border-b border-[#C5A46D]/20 py-3"
      : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="RCM Traders Limited Homepage"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#9F7F48] via-[#DFCA9F] to-[#C5A46D] shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/logo/rcm-logo-round.jpg"
                  alt="RCM Traders Limited Logo"
                  fill
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-lg sm:text-xl font-bold tracking-wider leading-none group-hover:text-[#DFCA9F] transition-colors">
                RCM TRADERS
              </span>
              <span className="text-[#C5A46D] text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase font-medium mt-1">
                Worcester Renovations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium tracking-wide transition-colors ${
                        isActive || servicesDropdownOpen
                          ? "text-[#DFCA9F]"
                          : "text-gray-200 hover:text-white"
                      }`}
                      onClick={() =>
                        setServicesDropdownOpen(!servicesDropdownOpen)
                      }
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#C5A46D]" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-[#171717] border border-[#C5A46D]/30 rounded-xl shadow-2xl p-3 backdrop-blur-xl divide-y divide-white/5">
                          <div className="pb-2 mb-2 px-3 pt-1">
                            <span className="text-[11px] uppercase tracking-widest text-[#C5A46D] font-semibold">
                              Specialist Renovation Services
                            </span>
                          </div>
                          <div className="space-y-1 pt-1">
                            {servicesData.map((svc) => (
                              <Link
                                key={svc.slug}
                                href={`/services/${svc.slug}`}
                                className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all"
                              >
                                <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#C5A46D] group-hover:scale-150 transition-transform" />
                                <div>
                                  <p className="text-sm font-medium text-gray-200 group-hover:text-[#DFCA9F] transition-colors">
                                    {svc.title}
                                  </p>
                                  <p className="text-xs text-gray-400 line-clamp-1">
                                    {svc.headline}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="pt-2 mt-2 px-2">
                            <Link
                              href="/services"
                              className="text-xs text-[#DFCA9F] hover:text-white flex items-center justify-between font-medium py-1"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                    isActive
                      ? "text-[#DFCA9F]"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C5A46D] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Phone Call */}
            <a
              href="tel:07711960238"
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-200 hover:text-white transition-colors"
              title="Call RCM Traders Limited Worcester"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#DFCA9F]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="hidden xl:inline tracking-wider">07711 960238</span>
            </a>

            {/* Quote Button */}
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#171717] bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] rounded-full shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-bold">
                GET A FREE QUOTE
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:07711960238"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#DFCA9F]"
              aria-label="Call RCM Traders"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#DFCA9F]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#171717] border-b border-[#C5A46D]/30 px-5 pt-3 pb-8 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="space-y-2 pt-2">
            <Link
              href="/"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                pathname === "/" ? "bg-white/10 text-[#DFCA9F]" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                pathname === "/about" ? "bg-white/10 text-[#DFCA9F]" : "text-white"
              }`}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="rounded-lg bg-white/5 p-3">
              <div className="flex items-center justify-between mb-2">
                <Link
                  href="/services"
                  className="text-xs uppercase tracking-widest text-[#DFCA9F] font-bold"
                >
                  Our Renovation Services
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2 border-l border-[#C5A46D]/30 mt-2">
                {servicesData.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="py-1.5 text-sm text-gray-300 hover:text-white"
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/projects"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                pathname === "/projects" ? "bg-white/10 text-[#DFCA9F]" : "text-white"
              }`}
            >
              Our Projects
            </Link>
            <Link
              href="/reviews"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                pathname === "/reviews" ? "bg-white/10 text-[#DFCA9F]" : "text-white"
              }`}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                pathname === "/contact" ? "bg-white/10 text-[#DFCA9F]" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
            <a
              href="tel:07711960238"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#DFCA9F]" />
              Call 07711 960238
            </a>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-sm uppercase tracking-wider shadow-lg"
            >
              GET A FREE QUOTE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

