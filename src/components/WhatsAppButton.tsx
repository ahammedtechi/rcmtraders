"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Official UK mobile format without leading zero
  const whatsappUrl =
    "https://wa.me/447711960238?text=Hello%20RCM%20Traders%20Limited%2C%20I%20would%20like%20to%20enquire%20about%20a%20home%20renovation%20project%20in%20Worcester.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#171717] text-white border border-[#C5A46D]/40 text-xs py-2 px-3.5 rounded-full shadow-2xl mr-3 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-gray-200">
            Chat on WhatsApp with our Worcester team
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-white ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RCM Traders Limited on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#DFCA9F] rounded-full border-2 border-[#171717]" />
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}

