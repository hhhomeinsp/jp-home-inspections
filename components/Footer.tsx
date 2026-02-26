import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
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
          </div>

          {/* Quick Links */}
          <div>
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
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+16175550100" className="hover:text-gold transition-colors">
                  (617) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:jon@jphomeinspections.com" className="hover:text-gold transition-colors">
                  jon@jphomeinspections.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Greater Boston, MA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} JP Home Inspections. Licensed in
          Massachusetts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
