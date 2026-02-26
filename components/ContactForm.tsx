"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Sparkles } from "lucide-react";

function FloatingInput({
  id,
  label,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full rounded-lg border px-4 pb-3 pt-5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 ${
          focused
            ? "border-gold"
            : "border-gray-300"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isActive
            ? "top-1.5 text-[10px] font-medium text-gold"
            : "top-4 text-sm text-gray-400"
        }`}
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full rounded-lg border px-4 pb-3 pt-5 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none ${
          focused
            ? "border-gold"
            : "border-gray-300"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isActive
            ? "top-1.5 text-[10px] font-medium text-gold"
            : "top-4 text-sm text-gray-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferredDate: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
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

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center"
        >
          {/* Celebration particles */}
          <div className="relative mb-4 flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            >
              <CheckCircle2 size={56} className="text-green-500" />
            </motion.div>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5],
                  x: Math.cos((i * Math.PI * 2) / 6) * 40,
                  y: Math.sin((i * Math.PI * 2) / 6) * 40,
                }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                className="absolute"
              >
                <Sparkles size={14} className="text-gold" />
              </motion.div>
            ))}
          </div>
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
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FloatingInput
              id="name"
              label="Your full name"
              required
              value={formData.name}
              onChange={(val) => setFormData({ ...formData, name: val })}
            />
            <FloatingInput
              id="email"
              label="Email address"
              type="email"
              required
              value={formData.email}
              onChange={(val) => setFormData({ ...formData, email: val })}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <FloatingInput
              id="phone"
              label="Phone number"
              type="tel"
              value={formData.phone}
              onChange={(val) => setFormData({ ...formData, phone: val })}
            />
            <div className="relative">
              <input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) =>
                  setFormData({ ...formData, preferredDate: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-4 pb-3 pt-5 text-sm transition-all duration-200 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
              <label
                htmlFor="preferredDate"
                className="absolute left-4 top-1.5 text-[10px] font-medium text-gold pointer-events-none"
              >
                Preferred Date
              </label>
            </div>
          </div>
          <FloatingInput
            id="address"
            label="Property address"
            value={formData.address}
            onChange={(val) => setFormData({ ...formData, address: val })}
          />
          <FloatingTextarea
            id="message"
            label="Tell us about the property..."
            value={formData.message}
            onChange={(val) => setFormData({ ...formData, message: val })}
          />
          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={16} />
            {status === "submitting" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
