import React from "react";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialSection from "@/components/TestimonialSection";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "RCM Traders Limited | Kitchens, Bathrooms & Home Renovations Worcester",
  description:
    "Transform your home with RCM Traders Limited in Worcester. Kitchen and bathroom renovations, bespoke bedroom cupboards, media walls and flooring. Request a quote.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Full Screen Hero Section */}
      <HeroSection />

      {/* 2. Editorial Introduction */}
      <IntroductionSection />

      {/* 3. Six Core Renovation Services */}
      <ServicesSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Featured Projects & Before/After Slider */}
      <FeaturedProjects />

      {/* 6. How We Work Process Timeline */}
      <ProcessTimeline />

      {/* 7. Verified Customer Reviews */}
      <TestimonialSection />

      {/* 10. Frequently Asked Questions */}
      <FAQAccordion />

      {/* 8. Final Call to Action */}
      <CTASection />
    </>
  );
}
