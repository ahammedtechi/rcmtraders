import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  Clock,
  Phone,
  MessageSquare
} from "lucide-react";
import { servicesData, getServiceBySlug } from "@/data/servicesData";
import QuoteForm from "@/components/QuoteForm";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Worcester | RCM Traders Limited`,
    description: service.description,
    openGraph: {
      title: `${service.title} | RCM Traders Limited Worcester`,
      description: service.description,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Related services (exclude current)
  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="bg-[#FAF8F5] text-[#171717]">
      {/* 1. Large Premium Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/40 to-black/70" />
        </div>

        {/* Decorative Ambient Gold */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C5A46D]/15 blur-[150px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A46D]/40 text-[#DFCA9F] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>{service.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6">
            {service.headline}
          </h1>

          <p className="text-base sm:text-xl text-gray-200 font-sans font-light max-w-3xl mx-auto leading-relaxed mb-10">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#quote-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl"
            >
              <span>{service.ctaHeadline}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:07711960238"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs uppercase tracking-widest backdrop-blur-md transition-all"
            >
              <Phone className="w-4 h-4 text-[#DFCA9F]" />
              <span>07711 960238</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Overview & Features */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block">
                COMPREHENSIVE CRAFTSMANSHIP
              </span>

              <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] font-normal leading-tight">
                {service.title} in Worcester & Beyond.
              </h2>

              <p className="text-base text-gray-700 font-sans leading-relaxed">
                At RCM Traders Limited, we combine high aesthetic sensitivity with practical trade expertise. Every detail of your project is carefully considered, from the initial architectural layout to the final joint of timber and tile.
              </p>

              {/* Services Included Detailed Breakdown */}
              <div className="pt-6">
                <h3 className="text-xl font-serif text-[#171717] font-semibold mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#9F7F48]" />
                  <span>Services & Capabilities Included:</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.includedServices.map((inc, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 transition-all shadow-sm"
                    >
                      <h4 className="font-serif font-bold text-base text-[#171717] mb-2">
                        {inc.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans">
                        {inc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bullet Features List */}
              <div className="p-6 rounded-2xl bg-[#F4F1EA] border border-[#EAE8E3]">
                <h4 className="text-xs uppercase tracking-wider text-[#9F7F48] font-bold mb-4">
                  Key Scope Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-800">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#C5A46D]/20 text-[#9F7F48] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Quote Box */}
            <div className="lg:col-span-5 sticky top-28" id="quote-form">
              <QuoteForm defaultService={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Relevant Interior Image Gallery */}
      <section className="py-20 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#DFCA9F] block mb-3">
              VISUAL INSPIRATION & FINISHES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight font-normal">
              Excellence in Material & Form
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {service.galleryImages.map((img, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              >
                <Image
                  src={img}
                  alt={`${service.title} - Showcase ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose RCM For This Service */}
      <section className="py-24 sm:py-32 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block mb-3">
              WHY RCM TRADERS LIMITED
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#171717] tracking-tight font-normal mb-4">
              The Standard We Bring to Your Project
            </h2>
            <div className="w-16 h-[2px] bg-[#C5A46D] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.whyChoose.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-[#EAE8E3] hover:border-[#C5A46D]/60 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#C5A46D]/30 flex items-center justify-center text-[#9F7F48] mb-6 font-serif font-bold text-lg">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-serif text-[#171717] font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service-Specific FAQs */}
      <section className="py-20 bg-[#F4F1EA] border-t border-[#EAE8E3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#9F7F48] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#171717] font-normal">
              {service.title} Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EAE8E3] shadow-sm"
              >
                <h3 className="text-lg font-serif font-semibold text-[#171717] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related Services Section */}
      <section className="py-24 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#DFCA9F] font-semibold block mb-1">
                COMPLEMENTARY EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-white">
                Related Renovation Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs text-[#DFCA9F] hover:text-white uppercase tracking-wider font-semibold inline-flex items-center gap-1.5"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group rounded-2xl overflow-hidden bg-[#202020] border border-white/10 hover:border-[#C5A46D]/60 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={rel.heroImage}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-widest text-[#DFCA9F] font-semibold block mb-1">
                    {rel.eyebrow}
                  </span>
                  <h3 className="text-xl font-serif text-white group-hover:text-[#DFCA9F] transition-colors mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-4 font-sans">
                    {rel.description}
                  </p>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#DFCA9F] inline-flex items-center gap-1">
                    Explore Service <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

