"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  MessageSquare,
  Upload,
  Shield
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface QuoteFormProps {
  defaultService?: string;
}

export default function QuoteForm({ defaultService = "" }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: defaultService || "",
    postcode: "",
    description: "",
    preferredContact: "Phone"
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [fileName, setFileName] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit quote request.");
      }

      setReferenceNumber(result.referenceNumber);
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message ||
          "There was a problem submitting your request. Please call us directly on 07711 960238."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE8E3] shadow-2xl relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48]" />

      {status === "success" ? (
        <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
          <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-[#C5A46D] text-[#9F7F48] flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-9 h-9 stroke-[2]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#9F7F48] font-bold">
              REQUEST CONFIRMED
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#171717] font-semibold">
              Thank You for Contacting RCM Traders
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              We have received your quotation request. A senior project specialist will review your space requirements and reach out within 24 hours.
            </p>
          </div>

          <div className="inline-block p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE8E3] text-left text-xs text-gray-600 space-y-1">
            <div>
              Reference Number: <strong className="text-[#171717]">{referenceNumber}</strong>
            </div>
            <div>
              Project: <strong className="text-[#171717]">{formData.service}</strong>
            </div>
            <div>
              Location Postcode: <strong className="text-[#171717]">{formData.postcode}</strong>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:07711960238"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFCA9F]" />
              <span>Call 07711 960238</span>
            </a>

            <a
              href={`https://wa.me/447711960238?text=Hello%20RCM%20Traders%2C%20following%20up%20on%20my%20quote%20request%20ref%20${referenceNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send WhatsApp Note</span>
            </a>
          </div>

          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                phone: "",
                email: "",
                service: "",
                postcode: "",
                description: "",
                preferredContact: "Phone"
              });
            }}
            className="text-xs text-gray-500 underline hover:text-[#171717] pt-4 block mx-auto"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#9F7F48] block mb-2">
              REQUEST A COMPLIMENTARY CONSULTATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#171717] font-semibold">
              Get Your Free Project Quotation
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Please share a few details about your property in Worcester or Worcestershire.
            </p>
          </div>

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
              <div>
                <strong className="block font-medium">Unable to send enquiry:</strong>
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Full Name <span className="text-[#C5A46D]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Eleanor Vance"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] text-sm text-[#171717] placeholder-gray-400 outline-none transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Phone Number <span className="text-[#C5A46D]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 07711 960238"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] text-sm text-[#171717] placeholder-gray-400 outline-none transition-all"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Email Address <span className="text-[#C5A46D]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. eleanor@example.co.uk"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] text-sm text-[#171717] placeholder-gray-400 outline-none transition-all"
              />
            </div>

            {/* Service Required */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Service Required <span className="text-[#C5A46D]">*</span>
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] text-sm text-[#171717] bg-white outline-none transition-all"
              >
                <option value="">Select a service...</option>
                {servicesData.map((svc) => (
                  <option key={svc.slug} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
                <option value="Complete Multi-Room Renovation">
                  Complete Multi-Room Renovation
                </option>
                <option value="Other Bespoke Work">Other Bespoke Requirement</option>
              </select>
            </div>
          </div>

          {/* Project Postcode */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Project Postcode (Worcester / Worcestershire) <span className="text-[#C5A46D]">*</span>
            </label>
            <input
              type="text"
              name="postcode"
              required
              value={formData.postcode}
              onChange={handleChange}
              placeholder="e.g. WR1 2AB, WR3, WR5..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] text-sm text-[#171717] placeholder-gray-400 outline-none transition-all"
            />
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Project Description & Ideas
            </label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about the space, your preferred style, timeline aspirations, or specific requirements..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] text-sm text-[#171717] placeholder-gray-400 outline-none transition-all resize-y"
            />
          </div>

          {/* Optional File / Image Upload */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Optional: Attach Existing Photos or Floor Plans
            </label>
            <label className="flex items-center justify-center gap-3 w-full p-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#C5A46D] transition-colors bg-gray-50/50">
              <Upload className="w-4 h-4 text-[#9F7F48]" />
              <span className="text-xs text-gray-600">
                {fileName ? (
                  <strong className="text-[#171717]">{fileName}</strong>
                ) : (
                  "Click to attach files (PNG, JPG, PDF up to 10MB)"
                )}
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/*,.pdf"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Preferred Contact Method
            </span>
            <div className="flex gap-4">
              {["Phone", "WhatsApp", "Email"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 font-medium"
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method}
                    checked={formData.preferredContact === method}
                    onChange={handleChange}
                    className="accent-[#C5A46D]"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-gradient-to-r from-[#DFCA9F] via-[#C5A46D] to-[#9F7F48] text-[#171717] font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg hover:shadow-xl disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>REQUEST MY FREE QUOTE</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1">
            <Shield className="w-3.5 h-3.5 text-[#9F7F48]" />
            <span>Your information is held in strict privacy and never shared.</span>
          </div>
        </form>
      )}
    </div>
  );
}

