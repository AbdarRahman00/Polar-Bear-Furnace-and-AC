"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Flame, 
  Wind, 
  Activity, 
  Sliders, 
  Calendar, 
  MapPin, 
  Star 
} from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#", isDropdown: true },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Financing", href: "/financing" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  // Group services for the mega dropdown
  const categories = [
    {
      title: "Heating",
      icon: <Flame className="w-5 h-5 text-accent" />,
      items: Object.values(SERVICES).filter(s => s.category === "heating"),
    },
    {
      title: "Air Conditioning",
      icon: <Wind className="w-5 h-5 text-secondary" />,
      items: Object.values(SERVICES).filter(s => s.category === "cooling"),
    },
    {
      title: "Boiler Systems",
      icon: <Activity className="w-5 h-5 text-emerald-500" />,
      items: Object.values(SERVICES).filter(s => s.category === "boiler"),
    },
    {
      title: "Additional HVAC",
      icon: <Sliders className="w-5 h-5 text-purple-500" />,
      items: Object.values(SERVICES).filter(s => s.category === "additional"),
    },
  ];

  return (
    <>
      {/* Top Bar info */}
      <div className="bg-primary text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              Colorado Springs & Surrounding Areas
            </span>
            <span className="flex items-center gap-1.5 opacity-90">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              {BUSINESS_INFO.rating}★ Rated HVAC Specialist ({BUSINESS_INFO.reviewsCount} Google Reviews)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded border border-accent/30 animate-pulse">
              24/7 Emergency Support
            </span>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-secondary transition-colors font-semibold flex items-center gap-1">
              <Phone className="w-3 h-3" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary shadow-xl py-3 border-b border-white/5"
            : "bg-primary/95 md:bg-primary/90 md:backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-accent p-2 rounded-lg text-white shadow-md relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-xl tracking-tighter">PB</span>
            </div>
            <div>
              <span className="font-extrabold text-lg md:text-xl text-white tracking-wide block leading-none">
                POLAR BEAR
              </span>
              <span className="text-xs text-secondary font-semibold uppercase tracking-widest block mt-0.5">
                FURNACE & AC
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.isDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.isDropdown && setDropdownOpen(false)}
              >
                {link.isDropdown ? (
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer hover:bg-white/10 ${
                      pathname.startsWith("/services") ? "text-accent" : "text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors block hover:bg-white/10 ${
                      pathname === link.href ? "text-accent" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu (Desktop) */}
                {link.isDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[850px]"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100 grid grid-cols-4 gap-6 text-slate-800 relative overflow-hidden">
                          {/* Arctic styling background accent */}
                          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-10 translate-y-10 scale-150">
                            <Flame className="w-96 h-96 text-primary" />
                          </div>

                          {categories.map((cat) => (
                            <div key={cat.title} className="flex flex-col gap-4 relative z-10">
                              <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-1">
                                {cat.icon}
                                <span className="font-extrabold text-sm text-primary tracking-wider uppercase">
                                  {cat.title}
                                </span>
                              </div>
                              <ul className="flex flex-col gap-1.5">
                                {cat.items.map((item) => (
                                  <li key={item.slug}>
                                    <Link
                                      href={`/services/${item.slug}`}
                                      className="text-xs font-medium text-slate-600 hover:text-accent transition-colors block py-1.5 px-2 hover:bg-slate-50 rounded-md"
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-accent animate-bounce" />
              <span>Call Now</span>
            </a>
            <Link
              href="/contact"
              className="bg-accent text-white font-bold px-5 py-2.5 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online</span>
            </Link>
          </div>

          {/* Mobile Hamburguer Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Framer Motion Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            {/* Sidebar content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent p-1.5 rounded-lg text-white">
                      <span className="font-extrabold text-sm">PB</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-base text-primary leading-none block">POLAR BEAR</span>
                      <span className="text-[10px] text-slate-500 font-semibold tracking-wider block">FURNACE & AC</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.isDropdown ? (
                        <>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="flex justify-between items-center w-full px-4 py-3 text-slate-800 font-bold hover:bg-slate-50 rounded-xl transition-all"
                          >
                            <span>{link.name}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                          </button>
                          
                          {/* Mobile Services Accordion */}
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-slate-50 rounded-xl border border-slate-100 mx-2 mt-1"
                              >
                                <div className="p-4 flex flex-col gap-4">
                                  {categories.map((cat) => (
                                    <div key={cat.title} className="flex flex-col gap-2">
                                      <span className="text-[11px] font-extrabold text-primary tracking-widest uppercase flex items-center gap-1.5">
                                        {cat.icon}
                                        {cat.title}
                                      </span>
                                      <ul className="pl-6 border-l border-slate-200 flex flex-col gap-2">
                                        {cat.items.map((item) => (
                                          <li key={item.slug}>
                                            <Link
                                              href={`/services/${item.slug}`}
                                              onClick={() => setIsOpen(false)}
                                              className="text-xs font-semibold text-slate-600 hover:text-accent block py-1"
                                            >
                                              {item.title}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`px-4 py-3 font-bold rounded-xl block transition-all ${
                            pathname === link.href ? "bg-accent/10 text-accent" : "text-slate-800 hover:bg-slate-50"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Bottom CTAs */}
              <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                <div className="text-center bg-accent/10 text-accent font-extrabold py-2 px-3 rounded-lg border border-accent/20 text-xs tracking-wider uppercase">
                  24/7 Emergency Dispatch
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-primary text-white font-bold text-center py-3.5 rounded-xl hover:bg-primary/95 transition-all flex justify-center items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-accent animate-bounce" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-accent text-white font-bold text-center py-3.5 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all flex justify-center items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Online Booking</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
