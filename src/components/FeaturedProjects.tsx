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
  Info
} from "lucide-react";
import { projectsData, beforeAfterComparison, Project } from "@/data/projectsData";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "kitchens", label: "Kitchens" },
    { id: "bathrooms", label: "Bathrooms" },
    { id: "bedrooms", label: "Bedroom Storage" },
    { id: "media-walls", label: "Media Walls" },
    { id: "flooring", label: "Flooring" }
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData.slice(0, 6)
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 bg-[#F4F1EA] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block mb-3"
          >
            PORTFOLIO OF EXCELLENCE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight font-normal mb-5"
          >
            Spaces Reimagined. Homes Transformed.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base text-gray-600 font-sans max-w-2xl mx-auto"
          >
            Explore our portfolio of home improvement projects and discover how thoughtful design and skilled workmanship can transform everyday spaces across Worcester.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#171717] text-[#DFCA9F] shadow-md border border-[#171717]"
                    : "bg-white text-gray-700 hover:text-black hover:bg-gray-100 border border-[#EAE8E3]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group rounded-2xl overflow-hidden bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Box */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer bg-neutral-100"
                  onClick={() => setSelectedImage(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/90 text-[#171717] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white border border-white/20">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#9F7F48] font-medium mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-serif text-[#171717] font-semibold mb-2.5 group-hover:text-[#9F7F48] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-sans line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-[#EAE8E3] flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9F7F48]" />
                      {project.duration}
                    </span>
                    <button
                      onClick={() => setSelectedImage(project)}
                      className="font-semibold text-[#171717] hover:text-[#9F7F48] inline-flex items-center gap-1"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Before & After Section Spotlight */}
        <div className="mt-20 pt-16 border-t border-[#EAE8E3]">
          <div className="max-w-4xl mx-auto">
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

        {/* View All Projects CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#171717] text-[#DFCA9F] hover:bg-black font-semibold text-xs uppercase tracking-widest hover:shadow-xl transition-all"
          >
            <span>Explore Full Project Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Full-Screen Project Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#171717] rounded-2xl overflow-hidden border border-[#C5A46D]/40 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white hover:text-[#DFCA9F] flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#DFCA9F] uppercase tracking-widest font-semibold">
                  <span>{selectedImage.categoryLabel}</span>
                  <span>•</span>
                  <span>{selectedImage.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  {selectedImage.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedImage.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-gray-400 block mb-1">Key Materials & Finishes:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedImage.materials.map((mat, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white/10 text-gray-200">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Work Scope Included:</span>
                    <ul className="list-disc list-inside text-gray-300 space-y-0.5">
                      {selectedImage.scope.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    Typical timeline: <strong className="text-white">{selectedImage.duration}</strong>
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#DFCA9F] hover:text-white"
                  >
                    <span>Enquire About Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

