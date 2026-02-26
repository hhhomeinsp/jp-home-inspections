"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
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
      className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-gold/30"
    >
      <div className="mb-4 text-4xl">{icon}</div>
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
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
        </a>
      )}
    </motion.div>
  );
}
