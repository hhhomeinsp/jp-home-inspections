"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price?: string;
  href?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  price,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gold/30"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-navy">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      {price && (
        <p className="mb-4 text-sm font-semibold text-gold">{price}</p>
      )}
      {href && (
        <a
          href={href}
          className="inline-flex items-center text-sm font-medium text-navy transition-colors hover:text-gold"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </motion.div>
  );
}
