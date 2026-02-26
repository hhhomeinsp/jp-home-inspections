"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

const towns = [
  "Boston",
  "Cambridge",
  "Somerville",
  "Brookline",
  "Newton",
  "Waltham",
  "Lexington",
  "Concord",
  "Arlington",
  "Medford",
  "Malden",
  "Quincy",
  "Braintree",
  "Needham",
  "Wellesley",
  "Framingham",
  "Natick",
  "Worcester",
];

const stats = [
  { value: "500+", label: "Inspections" },
  { value: "5★", label: "Average Rating" },
  { value: "48-Hour", label: "Reports" },
  { value: "Greater Boston", label: "Service Area" },
];

const whyChoose = [
  {
    icon: "🔍",
    title: "Thorough Inspections",
    desc: "3-4 hour inspections that leave no stone unturned",
  },
  {
    icon: "📱",
    title: "Same-Day Reports",
    desc: "Digital reports with photos delivered the same day",
  },
  {
    icon: "💬",
    title: "Clear Explanations",
    desc: "Plain-English explanations, not just checkboxes",
  },
  {
    icon: "👤",
    title: "Personal Service",
    desc: "Jon personally performs every single inspection",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Greater Boston&apos;s Trusted{" "}
              <span className="text-gold">Home Inspector</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl max-w-2xl">
              Professional, thorough, and honest inspections that protect your
              biggest investment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
              >
                Schedule Inspection
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <span className="text-gold">✓</span> InterNACHI Certified
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-gold">✓</span> Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-gold">✓</span> Same-Week Availability
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-dark py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-gray-600">
              Comprehensive inspections tailored to your needs
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon="🏠"
              title="Buyer's Inspection"
              description="The most important decision before closing. A comprehensive look at the home's structure, systems, and overall condition so you can buy with confidence."
              href="/services"
            />
            <ServiceCard
              icon="📋"
              title="Pre-Listing Inspection"
              description="Know what buyers will find before they do. Address issues proactively and set the right price with a pre-listing inspection."
              href="/services"
            />
            <ServiceCard
              icon="🔨"
              title="New Construction"
              description="New doesn't always mean perfect. Catch builder oversights before your final walkthrough and warranty period begins."
              href="/services"
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              View All Services
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose JP */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                What Sets JP Apart
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                When you hire JP Home Inspections, you&apos;re not getting a
                rushed checklist — you&apos;re getting a thorough, educational
                experience. Jon takes the time to walk you through every finding
                so you understand exactly what you&apos;re buying.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
              >
                Learn More About Jon
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-warm-white p-5"
                >
                  <div className="mb-2 text-2xl">{item.icon}</div>
                  <h3 className="mb-1 text-sm font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Serving the Greater Boston Area
            </h2>
            <p className="mt-3 text-gray-600">
              Middlesex, Suffolk, Norfolk &amp; Essex Counties
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {towns.map((town, i) => (
              <motion.span
                key={town}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm border border-gray-100"
              >
                {town}
              </motion.span>
            ))}
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 flex h-48 max-w-md items-center justify-center rounded-2xl bg-navy/5 border-2 border-dashed border-navy/20"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">📍</div>
              <p className="text-sm text-navy/60 font-medium">Greater Boston, MA</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="mt-3 text-navy/70">
              Same-week availability. Reports delivered within 48 hours.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Contact Jon Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
