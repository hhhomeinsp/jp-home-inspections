"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
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
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Schedule your inspection or ask any questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="mb-6 text-2xl font-bold text-navy">
                Send a Message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-warm-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-navy">
                  Contact Info
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-xl">📞</span>
                    <div>
                      <p className="text-sm font-medium text-navy">Phone</p>
                      <a
                        href="tel:+16175550100"
                        className="text-sm text-gray-600 hover:text-gold transition-colors"
                      >
                        (617) 555-0100
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-xl">✉️</span>
                    <div>
                      <p className="text-sm font-medium text-navy">Email</p>
                      <a
                        href="mailto:jon@jphomeinspections.com"
                        className="text-sm text-gray-600 hover:text-gold transition-colors"
                      >
                        jon@jphomeinspections.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-xl">📍</span>
                    <div>
                      <p className="text-sm font-medium text-navy">
                        Service Area
                      </p>
                      <p className="text-sm text-gray-600">
                        Greater Boston, MA
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-warm-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-navy">
                  Business Hours
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday – Friday</span>
                    <span className="font-medium text-navy">7am – 6pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-navy">8am – 4pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-navy">By appointment</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-gold/30 bg-gold/5 p-6">
                <p className="text-sm font-medium text-navy">
                  ⚡ Response within 2 hours during business hours
                </p>
                <p className="mt-2 text-xs text-gray-600">
                  Jon personally responds to every inquiry — no call centers or
                  automated systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
