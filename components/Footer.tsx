"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-navy via-gold to-navy" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold font-bold text-navy text-lg">
                JP
              </div>
              <span className="text-lg font-semibold">Home Inspections</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Professional home inspections serving the Greater Boston area.
              Licensed in Massachusetts.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+16175550100"
                  className="hover:text-gold transition-colors"
                >
                  (617) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                <a
                  href="mailto:jon@jphomeinspections.com"
                  className="hover:text-gold transition-colors"
                >
                  jon@jphomeinspections.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-gold shrink-0" />
                <span>Greater Boston, MA</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social proof row */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-8">
          {["InterNACHI Member", "MA Licensed", "Fully Insured"].map(
            (badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-xs text-white/50"
              >
                <ShieldCheck size={12} className="text-gold" />
                {badge}
              </span>
            )
          )}
        </div>

        <div className="mt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} JP Home Inspections. Licensed in
          Massachusetts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
