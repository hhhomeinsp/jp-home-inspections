"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "(617) 555-0100",
    href: "tel:+16175550100",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jon@jphomeinspections.com",
    href: "mailto:jon@jphomeinspections.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Greater Boston, MA",
  },
];

export default function ContactPage() {
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
                  {contactCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                      <motion.li
                        key={card.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/5 transition-colors duration-200 group-hover:bg-navy group-hover:text-white">
                          <Icon
                            size={16}
                            className="text-navy transition-colors duration-200 group-hover:text-white"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy">
                            {card.label}
                          </p>
                          {card.href ? (
                            <a
                              href={card.href}
                              className="text-sm text-gray-600 hover:text-gold transition-colors"
                            >
                              {card.value}
                            </a>
                          ) : (
                            <p className="text-sm text-gray-600">
                              {card.value}
                            </p>
                          )}
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-2xl bg-warm-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} className="text-navy" />
                  <h3 className="text-lg font-semibold text-navy">
                    Business Hours
                  </h3>
                </div>
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
                    <span className="font-medium text-navy">
                      By appointment
                    </span>
                  </li>
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border-2 border-gold/30 bg-gold/5 p-6 transition-colors duration-200 hover:border-gold/60"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={16} className="text-gold" />
                  <p className="text-sm font-medium text-navy">
                    Response within 2 hours
                  </p>
                </div>
                <p className="text-xs text-gray-600">
                  Jon personally responds to every inquiry — no call centers or
                  automated systems.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
