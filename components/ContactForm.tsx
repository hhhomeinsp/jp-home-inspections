"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferredDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission (static site — no API route)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      preferredDate: "",
      message: "",
    });
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center"
      >
        <div className="mb-4 text-5xl">✅</div>
        <h3 className="mb-2 text-xl font-semibold text-green-800">
          Message Sent!
        </h3>
        <p className="text-green-700">
          Thanks! Jon will reach out within 2 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-900"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            placeholder="(617) 555-0100"
          />
        </div>
        <div>
          <label htmlFor="preferredDate" className="mb-1 block text-sm font-medium text-gray-700">
            Preferred Date
          </label>
          <input
            id="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
          Property Address
        </label>
        <input
          id="address"
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          placeholder="123 Main St, Boston, MA"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none"
          placeholder="Tell us about the property and any specific concerns..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
