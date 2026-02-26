"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ClipboardList,
  Wrench,
  Building2,
  AlertTriangle,
  ScanLine,
  Check,
  ChevronDown,
  PhoneCall,
  CheckCircle2,
  X,
} from "lucide-react";
import { type ReactNode } from "react";

const services = [
  {
    icon: <Home size={24} />,
    title: "Buyer's Home Inspection",
    description:
      "Our most comprehensive inspection, designed for home buyers. We examine the home from roof to foundation, covering structural components, electrical systems, plumbing, HVAC, insulation, ventilation, and more. You'll receive a detailed digital report with high-resolution photos documenting every finding — so you can negotiate with confidence.",
    price: "Starting at $450",
    included: [
      "Full structural assessment",
      "Electrical system evaluation",
      "Plumbing inspection",
      "HVAC system check",
      "Roof & attic inspection",
      "Foundation & basement review",
      "Digital report with photos",
    ],
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Pre-Listing Inspection",
    description:
      "Selling your home? A pre-listing inspection helps you identify and address issues before buyers find them. This proactive approach can speed up your sale, reduce renegotiations, and help you price your home accurately. Sellers who invest in pre-listing inspections often see smoother transactions and better outcomes at the closing table.",
    price: "Starting at $400",
    included: [
      "Complete property assessment",
      "Priority repair recommendations",
      "Market-ready condition report",
      "Seller disclosure support",
      "Digital report with photos",
    ],
  },
  {
    icon: <Wrench size={24} />,
    title: "New Construction Inspection",
    description:
      "Don't assume new means perfect. New construction inspections catch builder oversights, code violations, and quality issues before your final walkthrough. We can perform phase inspections during construction (pre-pour, pre-drywall, final) or a comprehensive inspection once the home is complete. Protect your investment from day one.",
    price: "Starting at $500",
    included: [
      "Pre-drywall inspection option",
      "Final walkthrough inspection",
      "Code compliance verification",
      "Builder punch list creation",
      "Warranty documentation support",
      "Digital report with photos",
    ],
  },
  {
    icon: <Building2 size={24} />,
    title: "Condo Inspection",
    description:
      "Condo inspections focus on the interior of your unit and shared systems that affect your living space. While the condo association handles common areas, we examine your unit's electrical, plumbing, HVAC, windows, appliances, and interior condition. We'll also note any visible concerns in common areas that could affect your unit.",
    price: "Starting at $350",
    included: [
      "Unit interior assessment",
      "In-unit electrical & plumbing",
      "HVAC & ventilation check",
      "Window & door inspection",
      "Appliance evaluation",
      "Common area observations",
    ],
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "Radon Testing",
    description:
      "Radon is the second leading cause of lung cancer in the U.S., and Massachusetts has several high-risk zones. We use continuous radon monitors (CRMs) for accurate 48-hour testing that meets EPA guidelines. If elevated levels are found, we'll recommend qualified mitigation professionals. Can be added to any home inspection or performed standalone.",
    price: "Starting at $150",
    included: [
      "48-hour continuous monitoring",
      "EPA-compliant testing protocol",
      "Certified radon monitor (CRM)",
      "Detailed results report",
      "Mitigation referrals if needed",
    ],
  },
  {
    icon: <ScanLine size={24} />,
    title: "Sewer Scope Inspection",
    description:
      "Many Greater Boston homes, especially in older neighborhoods like Jamaica Plain, Dorchester, and Somerville, have aging clay or cast-iron sewer pipes. A sewer scope sends a camera through the main drain line to check for cracks, root intrusion, bellies, and blockages. Essential for any home with pipes over 30 years old.",
    price: "Starting at $200",
    included: [
      "HD camera pipe inspection",
      "Full drain line assessment",
      "Root intrusion detection",
      "Crack & blockage identification",
      "Video recording provided",
    ],
  },
];

const comparison = [
  { feature: "Inspection Duration", jp: "3-4 hours", typical: "1-2 hours" },
  { feature: "Report Delivery", jp: "Same day", typical: "3-5 days" },
  { feature: "Photos in Report", jp: "100+ high-res", typical: "20-30" },
  {
    feature: "On-Site Walkthrough",
    jp: "Full walkthrough",
    typical: "Brief summary",
  },
  {
    feature: "Post-Inspection Support",
    jp: "Unlimited follow-up",
    typical: "Limited",
  },
  {
    feature: "Digital Report Format",
    jp: "Interactive with photos",
    typical: "Basic PDF",
  },
];

function AccordionItem({
  items,
  isOpen,
  onToggle,
}: {
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-gray-100">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-navy hover:text-gold transition-colors"
      >
        What&apos;s Included
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="pb-3 space-y-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Check size={14} className="text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiceCardFull({
  icon,
  title,
  description,
  price,
  included,
  index,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
  included: string[];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gold/30"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-navy">{title}</h3>
      <p className="mb-3 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <p className="mb-3 text-sm font-semibold text-gold">{price}</p>
      <AccordionItem
        items={included}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-dark py-20 pt-36">
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
            {services.map((service, i) => (
              <ServiceCardFull
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                included={service.included}
                index={i}
              />
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
                  <CheckCircle2 size={18} className="shrink-0 text-gold" />
                  <span className="text-sm font-medium text-navy">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy">The JP Difference</h2>
            <p className="mt-3 text-gray-600">
              See how we compare to a typical inspection
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            <div className="grid grid-cols-3 bg-navy text-white text-sm font-semibold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center text-gold">JP Inspections</div>
              <div className="p-4 text-center text-white/60">
                Typical Inspector
              </div>
            </div>
            {comparison.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`grid grid-cols-3 text-sm ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="p-4 font-medium text-navy">{row.feature}</div>
                <div className="p-4 text-center flex items-center justify-center gap-1 text-green-600">
                  <CheckCircle2 size={14} />
                  {row.jp}
                </div>
                <div className="p-4 text-center text-gray-400 flex items-center justify-center gap-1">
                  <X size={14} />
                  {row.typical}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark animate-gradient py-16">
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
              >
                <PhoneCall size={16} />
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
