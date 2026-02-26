"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Award,
  ShieldCheck,
  AlertTriangle,
  BookOpen,
  Calendar,
  Mail,
  ClipboardList,
  FileText,
  Clock,
  Star,
  PhoneCall,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

const certifications = [
  {
    icon: <Award size={22} className="text-gold" />,
    name: "InterNACHI Certified Professional Inspector (CPI)",
  },
  {
    icon: <BadgeCheck size={22} className="text-gold" />,
    name: "Massachusetts Licensed Home Inspector",
  },
  {
    icon: <ShieldCheck size={22} className="text-gold" />,
    name: "Fully Insured — E&O and General Liability",
  },
  {
    icon: <AlertTriangle size={22} className="text-gold" />,
    name: "Massachusetts Radon Measurement License",
  },
  {
    icon: <BookOpen size={22} className="text-gold" />,
    name: "Continuing Education — 24+ hours annually",
  },
];

const timeline = [
  {
    step: "1",
    title: "Schedule",
    description:
      "Call, email, or use the contact form to request your inspection. Jon will confirm availability — often within the same week.",
    icon: Calendar,
  },
  {
    step: "2",
    title: "Confirmation",
    description:
      "You'll receive a confirmation email with your appointment details, what to expect, and how to prepare.",
    icon: Mail,
  },
  {
    step: "3",
    title: "Day of Inspection",
    description:
      "Jon performs a thorough 3-4 hour inspection. You're encouraged to attend — ask questions and learn about your home in real time.",
    icon: ClipboardList,
  },
  {
    step: "4",
    title: "Report Delivery",
    description:
      "Receive a detailed digital report with high-resolution photos within 48 hours. Jon is available to walk you through any findings.",
    icon: FileText,
  },
];

const byTheNumbers = [
  { target: 500, suffix: "+", label: "Inspections Completed", icon: ClipboardList },
  { target: 100, suffix: "%", label: "Digital Reports", icon: FileText },
  { target: 48, suffix: "hr", label: "Report Delivery", icon: Clock },
  { target: 5, suffix: "", label: "Star Rating", icon: Star },
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

export default function AboutPage() {
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
              About <span className="text-gold">Jon</span>
            </h1>
            <p className="mt-4 text-lg text-white/60">
              The inspector behind JP Home Inspections
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-navy text-6xl font-bold text-gold shadow-xl">
                JP
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-3xl font-bold text-navy">Meet Jon</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Jon has been serving the Greater Boston area as a trusted home
                  inspector since 2018. A Massachusetts-licensed home inspector
                  and InterNACHI Certified Professional Inspector, Jon brings a
                  meticulous eye and a commitment to honest, thorough
                  evaluations.
                </p>
                <p>
                  Before entering the home inspection industry, Jon developed a
                  deep understanding of residential construction and building
                  systems. This hands-on experience allows him to spot issues
                  that less experienced inspectors might miss.
                </p>
                <p>
                  Jon believes every homebuyer deserves to understand exactly
                  what they&apos;re purchasing. That&apos;s why he takes the time
                  during every inspection to explain his findings in plain
                  English — not just noting defects, but helping you understand
                  what they mean and how to prioritize repairs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold text-white"
          >
            By the Numbers
          </motion.h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {byTheNumbers.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <Icon
                    size={24}
                    className="mx-auto mb-2 text-gold"
                  />
                  <div className="text-2xl font-bold text-gold sm:text-3xl">
                    <CountUp target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-white/50">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-bold text-navy"
          >
            Certifications &amp; Credentials
          </motion.h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer pointer-events-none" />
                <div className="relative z-10">{cert.icon}</div>
                <span className="relative z-10 text-sm font-medium text-navy">
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-navy"
          >
            What to Expect
          </motion.h2>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                        <Icon size={18} />
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="mt-2 h-full w-px bg-gold/30" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-lg font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
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
              Ready to Work With Jon?
            </h2>
            <p className="mt-3 text-navy/70">
              Schedule your inspection today and see the JP difference.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
              >
                <PhoneCall size={16} />
                Schedule Your Inspection
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
