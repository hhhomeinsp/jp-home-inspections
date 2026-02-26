"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: "🏠",
    title: "Buyer's Home Inspection",
    description:
      "Our most comprehensive inspection, designed for home buyers. We examine the home from roof to foundation, covering structural components, electrical systems, plumbing, HVAC, insulation, ventilation, and more. You'll receive a detailed digital report with high-resolution photos documenting every finding — so you can negotiate with confidence.",
    price: "Starting at $450",
  },
  {
    icon: "📋",
    title: "Pre-Listing Inspection",
    description:
      "Selling your home? A pre-listing inspection helps you identify and address issues before buyers find them. This proactive approach can speed up your sale, reduce renegotiations, and help you price your home accurately. Sellers who invest in pre-listing inspections often see smoother transactions and better outcomes at the closing table.",
    price: "Starting at $400",
  },
  {
    icon: "🔨",
    title: "New Construction Inspection",
    description:
      "Don't assume new means perfect. New construction inspections catch builder oversights, code violations, and quality issues before your final walkthrough. We can perform phase inspections during construction (pre-pour, pre-drywall, final) or a comprehensive inspection once the home is complete. Protect your investment from day one.",
    price: "Starting at $500",
  },
  {
    icon: "🏢",
    title: "Condo Inspection",
    description:
      "Condo inspections focus on the interior of your unit and shared systems that affect your living space. While the condo association handles common areas, we examine your unit's electrical, plumbing, HVAC, windows, appliances, and interior condition. We'll also note any visible concerns in common areas that could affect your unit.",
    price: "Starting at $350",
  },
  {
    icon: "☢️",
    title: "Radon Testing",
    description:
      "Radon is the second leading cause of lung cancer in the U.S., and Massachusetts has several high-risk zones. We use continuous radon monitors (CRMs) for accurate 48-hour testing that meets EPA guidelines. If elevated levels are found, we'll recommend qualified mitigation professionals. Can be added to any home inspection or performed standalone.",
    price: "Starting at $150",
  },
  {
    icon: "🔧",
    title: "Sewer Scope Inspection",
    description:
      "Many Greater Boston homes, especially in older neighborhoods like Jamaica Plain, Dorchester, and Somerville, have aging clay or cast-iron sewer pipes. A sewer scope sends a camera through the main drain line to check for cracks, root intrusion, bellies, and blockages. Essential for any home with pipes over 30 years old.",
    price: "Starting at $200",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              Comprehensive inspection services for buyers, sellers, and
              homeowners across the Greater Boston area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy">
              What&apos;s Included in Every Inspection
            </h2>
          </motion.div>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Roof & Exterior",
                "Foundation & Structure",
                "Electrical Systems",
                "Plumbing & Fixtures",
                "HVAC Systems",
                "Insulation & Ventilation",
                "Windows & Doors",
                "Interior Rooms",
                "Attic & Crawlspace",
                "Garage & Driveway",
                "Appliances",
                "Safety Concerns",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-lg bg-warm-white p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs text-gold">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-navy">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-3 text-navy/70">
              Contact Jon for a free consultation. He&apos;ll recommend the
              right inspection for your situation.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
