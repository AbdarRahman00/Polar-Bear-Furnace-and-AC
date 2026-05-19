"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar only after scrolling 150px down
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-3 px-4 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 lg:hidden">
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex-1 bg-primary text-white font-extrabold text-center py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/95 active:scale-95 transition-all text-sm border border-primary/20"
      >
        <Phone className="w-4 h-4 text-accent animate-bounce" />
        <span>Call Now</span>
      </a>
      <Link
        href="/contact"
        className="flex-1 bg-accent text-white font-extrabold text-center py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 active:scale-95 transition-all text-sm shadow-md shadow-accent/15"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Online</span>
      </Link>
    </div>
  );
}
