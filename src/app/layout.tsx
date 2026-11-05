import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RCM Traders Limited | Kitchens, Bathrooms & Home Renovations Worcester",
    template: "%s | RCM Traders Limited",
  },
  description:
    "Transform your home with RCM Traders Limited in Worcester. Kitchen and bathroom renovations, bespoke bedroom cupboards, media walls and flooring. Request a quote.",
  keywords: [
    "kitchen renovation Worcester",
    "bathroom renovation Worcester",
    "bespoke bedroom cupboards Worcester",
    "custom media walls Worcester",
    "flooring installation Worcester",
    "plumbing services Worcester",
    "home improvement Worcester",
    "luxury interior renovation Worcestershire",
    "RCM Traders Limited"
  ],
  authors: [{ name: "RCM Traders Limited" }],
  creator: "RCM Traders Limited",
  publisher: "RCM Traders Limited",
  metadataBase: new URL("https://rcmtraders.co.uk"),
  openGraph: {
    title: "RCM Traders Limited | Kitchens, Bathrooms & Home Renovations Worcester",
    description:
      "Transform your home with RCM Traders Limited in Worcester. Kitchen and bathroom renovations, bespoke bedroom cupboards, media walls and flooring.",
    url: "https://rcmtraders.co.uk",
    siteName: "RCM Traders Limited",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero/luxury-kitchen-hero.jpg",
        width: 1600,
        height: 900,
        alt: "RCM Traders Limited - Luxury Kitchen and Home Renovation in Worcester",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "RCM Traders Limited",
    "image": "https://rcmtraders.co.uk/images/logo/rcm-logo-round.jpg",
    "telephone": "07711 960238",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Worcester",
      "addressRegion": "Worcestershire",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.1936,
      "longitude": -2.2216
    },
    "description": "Premium home renovation and interior improvement company based in Worcester, United Kingdom. Specialising in kitchens, bathrooms, bespoke bedroom cupboards, media walls, flooring, and plumbing.",
    "priceRange": "££ - £££",
    "areaServed": [
      { "@type": "City", "name": "Worcester" },
      { "@type": "AdministrativeArea", "name": "Worcestershire" },
      { "@type": "AdministrativeArea", "name": "West Midlands" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en-GB" className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#171717] antialiased selection:bg-[#C5A46D] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
