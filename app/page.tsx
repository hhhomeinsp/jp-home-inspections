"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  Home,
  ClipboardList,
  Wrench,
  CheckCircle2,
  Search,
  FileText,
  User,
  Star,
  MapPin,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Clock,
  BadgeCheck,
} from "lucide-react";

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

const statsData = [
  { target: 500, suffix: "+", label: "Inspections", icon: ClipboardList },
  { target: 5, suffix: "", label: "Star Rating", icon: Star },
  { target: 48, suffix: "hr", label: "Report Delivery", icon: Clock },
];

const whyChoose = [
  {
    icon: Search,
    title: "Thorough Inspections",
    desc: "3-4 hour inspections that leave no stone unturned",
  },
  {
    icon: FileText,
    title: "Same-Day Reports",
    desc: "Digital reports with photos delivered the same day",
  },
  {
    icon: ShieldCheck,
    title: "Clear Explanations",
    desc: "Plain-English explanations, not just checkboxes",
  },
  {
    icon: User,
    title: "Personal Service",
    desc: "Jon personally performs every single inspection",
  },
];

const testimonials = [
  {
    quote:
      "Jon found 12 issues the sellers didn't disclose. His report saved us $15,000 in negotiations.",
    name: "Sarah M.",
    city: "Newton",
  },
  {
    quote:
      "Most thorough inspector I've ever hired. Had the full report in my inbox before I left the driveway.",
    name: "Mike T.",
    city: "Cambridge",
  },
  {
    quote:
      "Highly recommend for anyone buying in the Boston area. Incredibly professional and knowledgeable.",
    name: "Jennifer L.",
    city: "Brookline",
  },
];

function CountUp({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden pt-16">
        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 animate-grid-pulse"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-12">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                Greater Boston&apos;s Trusted{" "}
                <span className="text-gold">Home Inspector</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl max-w-2xl"
              >
                Professional, thorough, and honest inspections that protect your
                biggest investment.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                >
                  <PhoneCall size={16} />
                  Schedule Inspection
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  View Services
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60"
              >
                <span className="flex items-center gap-1.5">
                  <BadgeCheck size={14} className="text-gold" /> InterNACHI
                  Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-gold" /> Licensed &amp;
                  Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gold" /> Same-Week
                  Availability
                </span>
              </motion.div>
            </div>

            {/* Floating checklist card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center gap-2 mb-4">
                  <ClipboardList className="text-navy" size={20} />
                  <span className="font-semibold text-sm text-navy">
                    Inspection Checklist
                  </span>
                </div>
                {[
                  "Structural Systems",
                  "Electrical Panel",
                  "HVAC Systems",
                  "Plumbing",
                  "Roof & Attic",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.15 }}
                  >
                    <div className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-dark py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {statsData.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon size={24} className="mx-auto mb-2 text-gold" />
                  <div className="text-2xl font-bold text-gold sm:text-3xl">
                    <CountUp target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-white/50">{stat.label}</div>
                </div>
              );
            })}
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
              icon={<Home size={24} />}
              title="Buyer's Inspection"
              description="The most important decision before closing. A comprehensive look at the home's structure, systems, and overall condition so you can buy with confidence."
              href="/services"
            />
            <ServiceCard
              icon={<ClipboardList size={24} />}
              title="Pre-Listing Inspection"
              description="Know what buyers will find before they do. Address issues proactively and set the right price with a pre-listing inspection."
              href="/services"
            />
            <ServiceCard
              icon={<Wrench size={24} />}
              title="New Construction"
              description="New doesn't always mean perfect. Catch builder oversights before your final walkthrough and warranty period begins."
              href="/services"
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose JP */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
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
                  experience. Jon takes the time to walk you through every
                  finding so you understand exactly what you&apos;re buying.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  Learn More About Jon
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {whyChoose.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-xl bg-warm-white p-5"
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.1 + 0.2,
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="mb-2"
                      >
                        <Icon size={24} className="text-navy" />
                      </motion.div>
                      <h3 className="mb-1 text-sm font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-500">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Report preview mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl bg-white shadow-xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <FileText size={18} className="text-navy" />
                  <span className="font-semibold text-sm text-navy">
                    Inspection Report Preview
                  </span>
                  <span className="ml-auto text-xs text-gray-400">Sample</span>
                </div>
                {[
                  { label: "Structural", pct: 95 },
                  { label: "Electrical", pct: 88 },
                  { label: "Plumbing", pct: 92 },
                  { label: "HVAC", pct: 78 },
                  { label: "Roof & Exterior", pct: 85 },
                ].map((section, i) => (
                  <motion.div
                    key={section.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="mb-3 last:mb-0"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-gray-600">
                        {section.label}
                      </span>
                      <span className="text-xs text-gray-400">
                        {section.pct}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${section.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                        className={`h-full rounded-full ${
                          section.pct >= 90
                            ? "bg-green-500"
                            : section.pct >= 80
                            ? "bg-gold"
                            : "bg-orange-400"
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span className="text-xs text-gray-500">
                    Full report with photos included
                  </span>
                </div>
              </div>
            </motion.div>
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
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm border border-gray-100 cursor-default transition-colors duration-200 hover:bg-navy hover:text-white hover:border-navy"
              >
                {town}
              </motion.span>
            ))}
          </div>

          {/* Coverage radius visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 flex h-56 max-w-md items-center justify-center rounded-2xl bg-navy/5 border-2 border-dashed border-navy/20 relative overflow-hidden"
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 224"
            >
              {[70, 90, 110].map((r, i) => (
                <motion.circle
                  key={r}
                  cx="200"
                  cy="112"
                  r={r}
                  fill="none"
                  stroke="var(--navy)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.15 - i * 0.03, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                />
              ))}
            </svg>
            <div className="text-center relative z-10">
              <MapPin size={32} className="mx-auto mb-2 text-navy/60" />
              <p className="text-sm text-navy/60 font-medium">
                Greater Boston, MA
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              What Clients Say
            </h2>
            <p className="mt-3 text-gray-600">
              Real reviews from real homebuyers
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-gray-600 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark animate-gradient py-16">
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
              >
                <PhoneCall size={16} className="animate-phone-pulse" />
                Contact Jon Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
