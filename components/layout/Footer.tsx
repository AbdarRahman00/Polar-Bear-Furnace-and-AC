import React from "react";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Star, 
  Heart, 
  ShieldCheck 
} from "lucide-react";
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Financing Plans", href: "/financing" },
    { name: "Customer Reviews", href: "/reviews" },
    { name: "Contact Us", href: "/contact" }
  ];

  // Organize footer services links
  const featuredServices = Object.values(SERVICES).slice(0, 8);
  const featuredAreas = SERVICE_AREAS.slice(0, 6);

  return (
    <footer className="bg-primary text-white border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Arctic Mountain Subtle Background Line */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand & Trust Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-accent p-2 rounded-lg text-white shadow-md">
              <span className="font-extrabold text-xl tracking-tighter">PB</span>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-wide block leading-none">POLAR BEAR</span>
              <span className="text-xs text-secondary font-semibold uppercase tracking-widest block mt-0.5">FURNACE & AC</span>
            </div>
          </Link>
          <p className="text-sm text-slate-300 leading-relaxed text-balance">
            Colorado Springs' trusted heating, cooling, and boiler specialists. Family-first HVAC craftsmanship backed by over 40 years of combined local experience.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Our Trust Rating:</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
            </div>
            <span className="text-sm font-semibold">
              {BUSINESS_INFO.rating}★ Rated ({BUSINESS_INFO.reviewsCount}+ Local Reviews)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={BUSINESS_INFO.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 hover:bg-accent text-white p-2.5 rounded-xl transition-all hover:scale-105"
              aria-label="Facebook Page"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-extrabold text-base tracking-wider uppercase border-l-4 border-accent pl-3">
            Quick Navigation
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-accent transition-colors block py-1">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <h3 className="font-extrabold text-base tracking-wider uppercase border-l-4 border-accent pl-3 mt-4">
            Service Areas
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {featuredAreas.map((area) => (
              <li key={area.name}>
                <Link href="/service-areas" className="hover:text-accent transition-colors block py-0.5">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-extrabold text-base tracking-wider uppercase border-l-4 border-accent pl-3">
            Popular HVAC Services
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
            {featuredServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-accent transition-colors block leading-tight">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct Contact Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-extrabold text-base tracking-wider uppercase border-l-4 border-accent pl-3">
            Contact Details
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-slate-400 font-bold uppercase">Call Day or Night:</span>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-base font-extrabold text-white hover:text-accent transition-colors block mt-0.5">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-slate-400 font-bold uppercase">Our Office Address:</span>
                <a 
                  href={BUSINESS_INFO.googleMaps} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-colors block leading-relaxed mt-0.5"
                >
                  {BUSINESS_INFO.address}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-slate-400 font-bold uppercase">Email Enquiries:</span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-accent transition-colors block mt-0.5">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-slate-400 font-bold uppercase">Operational Hours:</span>
                <span className="block mt-0.5 font-semibold text-white">{BUSINESS_INFO.hours}</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Trust badges strip */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-6">
        <div className="flex flex-wrap gap-6 items-center">
          <span className="flex items-center gap-2 text-xs text-slate-300 font-semibold bg-white/5 py-1.5 px-3 rounded-lg border border-white/5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Licensed & Fully Insured
          </span>
          <span className="flex items-center gap-2 text-xs text-slate-300 font-semibold bg-white/5 py-1.5 px-3 rounded-lg border border-white/5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            EPA Certified Technicians
          </span>
          <span className="flex items-center gap-2 text-xs text-slate-300 font-semibold bg-white/5 py-1.5 px-3 rounded-lg border border-white/5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            RADIANT BOILER SPECIALISTS
          </span>
        </div>
        <div className="text-xs text-slate-400 flex items-center gap-1.5">
          <span>Colorado Springs HVAC Authority</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Sitemap</Link>
        </div>
        <p className="flex items-center gap-1 text-[11px]">
          Crafted for high-performance with <Heart className="w-3 h-3 text-accent fill-accent animate-pulse" /> in Colorado
        </p>
      </div>
    </footer>
  );
}
