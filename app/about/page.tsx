"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const certifications = [
  { icon: "🏅", name: "InterNACHI Certified Professional Inspector (CPI)" },
  { icon: "📜", name: "Massachusetts Licensed Home Inspector" },
  { icon: "🛡️", name: "Fully Insured — E&O and General Liability" },
  { icon: "☢️", name: "Massachusetts Radon Measurement License" },
  { icon: "📚", name: "Continuing Education — 24+ hours annually" },
];

const timeline = [
  {
    step: "1",
    title: "Schedule",
    description:
      "Call, email, or use the contact form to request your inspection. Jon will confirm availability — often within the same week.",
  },
  {
    step: "2",
    title: "Confirmation",
    description:
      "You'll receive a confirmation email with your appointment details, what to expect, and how to prepare.",
  },
  {
    step: "3",
    title: "Day of Inspection",
    description:
      "Jon performs a thorough 3-4 hour inspection. You're encouraged to attend — ask questions and learn about your home in real time.",
  },
  {
    step: "4",
    title: "Report Delivery",
    description:
      "Receive a detailed digital report with high-resolution photos within 48 hours. Jon is available to walk you through any findings.",
  },
];

export default function AboutPage() {
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
            {/* Avatar */}
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

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-3xl font-bold text-navy">
                Meet Jon
              </h2>
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
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="text-2xl">{cert.icon}</span>
                <span className="text-sm font-medium text-navy">
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
              {timeline.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                      {item.step}
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
              Ready to Work With Jon?
            </h2>
            <p className="mt-3 text-navy/70">
              Schedule your inspection today and see the JP difference.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Schedule Your Inspection
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
