"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  X,
  MapPin,
  Clock,
  ArrowRight,
  Info,
  CheckCircle2
} from "lucide-react";
import { projectsData, beforeAfterComparison, Project } from "@/data/projectsData";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CTASection from "@/components/CTASection";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "kitchens", label: "Kitchens" },
    { id: "bathrooms", label: "Bathrooms" },
    { id: "bedrooms", label: "Bedroom Cupboards" },
    { id: "media-walls", label: "Media Walls" },
    { id: "flooring", label: "Flooring" },
    { id: "plumbing", label: "Plumbing" }
  ];

  const filtered =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 bg-[#FAF8F5] text-[#171717]">
      {/* Hero Header */}
      <section className="py-20 sm:py-28 bg-[#171717] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A46D]/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A46D]/40 text-[#DFCA9F] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>PORTFOLIO OF COMPLETED WORKS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6">
            Our Completed <span className="italic text-[#DFCA9F]">Projects</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl leading-relaxed font-light">
            Browse our gallery of kitchen transformations, bathroom renovations, bespoke fitted storage, media walls and flooring installations across Worcester.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20 sm:py-28">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 max-w-[1700px] mx-auto">
          {/* Transparency Disclaimer Notice */}
          <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-[#F4F1EA] border border-[#EAE8E3] flex items-start sm:items-center gap-3.5 text-xs text-gray-700">
            <Info className="w-5 h-5 text-[#9F7F48] shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <strong className="text-gray-900 font-medium">Curated Gallery Notice:</strong>{" "}
              During development, representative photography and verified project captures are displayed. Our database is continuously updated as new Worcestershire projects reach final sign-off.
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mb-16">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-[#171717] text-[#DFCA9F] shadow-lg border border-[#171717]"
                      : "bg-white text-gray-700 hover:text-black hover:bg-gray-100 border border-[#EAE8E3]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Masonry / Grid Gallery */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-3xl overflow-hidden bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer bg-neutral-100"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-white/90 text-[#171717] flex items-center justify-center shadow-xl">
                        <Maximize2 className="w-5 h-5" />
                      </span>
                    </div>

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-medium text-white border border-white/20">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="p-7">
                    <div className="flex items-center gap-1.5 text-xs text-[#9F7F48] font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl font-serif text-[#171717] font-semibold mb-2 group-hover:text-[#9F7F48] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 font-sans line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.materials.map((mat, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#EAE8E3] text-[10px] text-gray-600"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#EAE8E3] flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#9F7F48]" />
                        {project.duration}
                      </span>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="font-semibold text-[#171717] hover:text-[#9F7F48] inline-flex items-center gap-1"
                      >
                        Inspect Spec <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Interactive Before & After Spotlight */}
          <div className="mt-28 pt-20 border-t border-[#EAE8E3]">
            <div className="w-full">
              <BeforeAfterSlider
                beforeImage={beforeAfterComparison.beforeImage}
                afterImage={beforeAfterComparison.afterImage}
                title={beforeAfterComparison.title}
                subtitle={beforeAfterComparison.subtitle}
                beforeLabel={beforeAfterComparison.beforeLabel}
                afterLabel={beforeAfterComparison.afterLabel}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Project Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#171717] rounded-3xl overflow-hidden border border-[#C5A46D]/40 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white hover:text-[#DFCA9F] flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#DFCA9F] uppercase tracking-widest font-semibold">
                  <span>{selectedProject.categoryLabel}</span>
                  <span>•</span>
                  <span>{selectedProject.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-gray-400 block mb-1">Materials Specified:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.materials.map((mat, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white/10 text-gray-200">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Scope Executed:</span>
                    <ul className="list-disc list-inside text-gray-300 space-y-0.5">
                      {selectedProject.scope.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs text-gray-400">
                    Project Duration: <strong className="text-white">{selectedProject.duration}</strong>
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#DFCA9F] hover:text-white"
                  >
                    <span>Request Quotation For Similar Space</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </div>
  );
}

