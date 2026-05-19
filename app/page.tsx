"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Calendar, 
  Star, 
  Flame, 
  Wind, 
  Activity, 
  Sliders, 
  CheckCircle, 
  ChevronRight, 
  MapPin, 
  Percent, 
  ShieldCheck, 
  Clock, 
  PlusCircle, 
  ArrowRight,
  ChevronDown,
  Wrench,
  Sparkles,
  HelpCircle,
  MessageSquare
} from "lucide-react";
import { BUSINESS_INFO, SERVICES, REVIEWS, HOMEPAGE_FAQS, SERVICE_AREAS } from "@/lib/constants";

export default function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceNeeded: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const toggleFAQ = (index: number) => {
    if (activeFAQ === index) {
      setActiveFAQ(null);
    } else {
      setActiveFAQ(index);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.serviceNeeded) return;
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  // Select all 11 unique services to display in the grid
  const featuredServices = Object.values(SERVICES).slice(0, 11);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-primary text-white py-20 lg:py-28 px-4 relative overflow-hidden">
        {/* Arctic style glowing overlays */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[radial-gradient(circle,_var(--color-secondary)_0%,_transparent_70%)] opacity-10 pointer-events-none translate-x-20 translate-y-20 scale-150" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Trust badge */}
            <div className="flex items-center gap-2 self-start bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {BUSINESS_INFO.rating}★ Rated Colorado Springs HVAC Specialist
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight text-white">
              Colorado Springs’ Trusted HVAC & Boiler Specialists
            </h1>
            
            <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl text-balance">
              Expert furnace, air conditioning, boiler, and radiant heating solutions backed by trusted local technicians. Family-owned and proud of our 40+ years of combined local experience.
            </p>

            {/* Emergency Ribbon */}
            <div className="bg-accent/15 border-l-4 border-accent p-4 rounded-r-xl max-w-md my-2">
              <span className="block text-accent font-extrabold text-xs uppercase tracking-widest leading-none">
                24/7 Emergency Dispatch
              </span>
              <span className="block text-white text-xs md:text-sm font-semibold mt-1">
                No Heat, Frozen Pipes, or Water Leaks? Call us now!
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="bg-accent text-white font-extrabold px-8 py-4 rounded-xl hover:bg-accent/95 shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 text-base cursor-pointer"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>
              <Link
                href="/contact"
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 font-extrabold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Service Online</span>
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span>Fast 24/7 Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-secondary shrink-0" />
                <span>Financing Available</span>
              </div>
            </div>

          </div>

          {/* Hero Right Widget - Interactive Quick Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-2xl text-slate-800 relative">
            {formSubmitted ? (
              <div className="text-center py-12 px-2 flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-100 shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-primary font-heading">
                  Request Confirmed!
                </h3>
                <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                  Thank you! Our friendly dispatcher is already on it. We will call you shortly on <span className="font-semibold text-slate-900">{formData.phone}</span> to finalize your dispatch.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-slate-100 text-slate-700 font-extrabold px-6 py-2.5 rounded-xl mt-6 hover:bg-slate-200 transition-all text-xs"
                >
                  Request Another Callback
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div>
                  <span className="bg-accent/10 text-accent font-extrabold text-[10px] px-2 py-0.5 rounded border border-accent/20 tracking-wide uppercase inline-block mb-1.5">
                    Fast Approvals
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold text-primary font-heading">
                    Quick Booking Consultation
                  </h3>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Need an estimate or service visit? Secure your spot instantly.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-name" className="text-[10px] font-extrabold text-primary uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-phone" className="text-[10px] font-extrabold text-primary uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    id="hero-phone"
                    type="tel"
                    required
                    placeholder="e.g. (719) 329-4304"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-service" className="text-[10px] font-extrabold text-primary uppercase tracking-wider">
                    Select Service Needed
                  </label>
                  <select
                    id="hero-service"
                    required
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="border border-slate-200 rounded-xl px-3 py-2.5 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                  >
                    <option value="" disabled>Choose service...</option>
                    <option value="Furnace Repair">Furnace Repair</option>
                    <option value="Furnace Installation">Furnace Installation</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="AC Installation">AC Installation</option>
                    <option value="Boiler Services">Boiler Services</option>
                    <option value="Ductless Mini Splits">Ductless Mini Splits</option>
                    <option value="Water Heaters">Water Heater Services</option>
                    <option value="Swamp Cooler Services">Swamp Cooler Services</option>
                    <option value="Commercial HVAC">Commercial HVAC</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="bg-primary text-white font-extrabold py-3.5 rounded-xl hover:bg-primary/95 shadow-md transition-all flex items-center justify-center gap-2 text-xs mt-2 hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
                >
                  {formLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>Secure Dispatch Spot</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 2. TRUST INDICATORS STRIP */}
      <section className="bg-white border-b border-slate-100 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
            <span className="block font-extrabold text-primary font-heading mt-2">4.9★ Rated</span>
            <span className="block text-[10px] text-slate-400 font-bold uppercase mt-0.5">348+ Google Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 text-secondary" />
            <span className="block font-extrabold text-primary font-heading mt-2">Licensed & Insured</span>
            <span className="block text-[10px] text-slate-400 font-bold uppercase mt-0.5">100% Code Compliant</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-emerald-500" />
            <span className="block font-extrabold text-primary font-heading mt-2">24/7 Dispatch</span>
            <span className="block text-[10px] text-slate-400 font-bold uppercase mt-0.5">Rapid Night Service</span>
          </div>
          <div className="flex flex-col items-center">
            <Percent className="w-8 h-8 text-purple-500" />
            <span className="block font-extrabold text-primary font-heading mt-2">0% Financing</span>
            <span className="block text-[10px] text-slate-400 font-bold uppercase mt-0.5">Flexible Lender Options</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center">
            <Wrench className="w-8 h-8 text-accent animate-pulse" />
            <span className="block font-extrabold text-primary font-heading mt-2">Boiler Specialists</span>
            <span className="block text-[10px] text-slate-400 font-bold uppercase mt-0.5">Hydronic Loop Engineers</span>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-accent tracking-widest uppercase">
            Our Service Blueprint
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading tracking-tight mt-2">
            Professional Heating, Cooling & Boiler Solutions
          </h2>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            Click on any card to read our dedicated SEO page covering diagnostic processes, common problems solved, and expert financing options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((svc) => {
            // Map icon strings to actual icons
            let iconComponent = <Sliders className="w-6 h-6 text-primary" />;
            if (svc.slug.includes("furnace")) iconComponent = <Flame className="w-6 h-6 text-accent" />;
            else if (svc.slug.includes("ac-")) iconComponent = <Wind className="w-6 h-6 text-secondary" />;
            else if (svc.slug.includes("boiler")) iconComponent = <Activity className="w-6 h-6 text-emerald-500" />;
            else if (svc.slug.includes("ductless")) iconComponent = <Sliders className="w-6 h-6 text-purple-500" />;
            else if (svc.slug.includes("quality")) iconComponent = <Sparkles className="w-6 h-6 text-amber-500" />;
            else if (svc.slug.includes("water-heater")) iconComponent = <Wrench className="w-6 h-6 text-cyan-500" />;
            else if (svc.slug.includes("swamp-cooler")) iconComponent = <Sliders className="w-6 h-6 text-orange-400" />;
            else if (svc.slug.includes("commercial")) iconComponent = <Wrench className="w-6 h-6 text-slate-600" />;

            return (
              <Link 
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group hover:scale-[1.01]"
              >
                <div className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-3.5 rounded-xl self-start group-hover:bg-primary/5 transition-colors">
                    {iconComponent}
                  </div>
                  <h3 className="font-extrabold text-lg text-primary font-heading tracking-tight group-hover:text-accent transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 mt-6 flex justify-between items-center text-xs font-bold text-slate-700">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-extrabold">
                    Read Custom Blueprint
                  </span>
                  <span className="text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-white border-t border-b border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-extrabold text-accent tracking-widest uppercase">
              The Polar Bear Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading tracking-tight">
              Why Colorado Springs Neighbors Trust Polar Bear
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              We started our trade with a single core value: delivering clean, high-performance HVAC systems with zero diagnostic tricks. Over decades, we've developed into one of El Paso County's only specialist boiler houses.
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-primary font-heading">
                    Cast Iron & Condensing Boiler Specialists
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Radiant loops require dedicated pressure and hydraulic balancing. We have the training to service cast iron systems and modern combi boilers safely.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-primary font-heading">
                    Flat Honest Pricing
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    We lay out physical diagnostic reports and flat-rate estimates upfront. You will never pay surcharges after work completes.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-primary font-heading">
                    40+ Years of Combined Local Tradesmen
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    High-altitude air is thin and dry, affecting BTU furnace outputs. We calibrate your heating registers perfectly to handle mountain winter cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Stats Container */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-xl font-extrabold text-primary font-heading">
              Our Core Metrics
            </h3>
            
            <div className="grid grid-cols-2 gap-6 mt-2">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm text-center">
                <span className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-none block">
                  348+
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase mt-1.5 block">
                  Google 5-Star Reviews
                </span>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm text-center">
                <span className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-none block">
                  40+
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase mt-1.5 block">
                  Years HVAC Experience
                </span>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm text-center">
                <span className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-none block">
                  100%
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase mt-1.5 block">
                  Satisfaction Warrantied
                </span>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm text-center">
                <span className="text-3xl md:text-4xl font-extrabold text-primary font-heading leading-none block">
                  24/7
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase mt-1.5 block">
                  Emergency Dispatch
                </span>
              </div>
            </div>

            <div className="border-t border-slate-200/60 pt-6 mt-2">
              <p className="text-[11px] text-slate-400 text-center italic">
                "Specialist boiler services is what separates us from typical central-only HVAC crews."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SERVICE AREAS RADAR */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 flex flex-col lg:flex-row items-center gap-10">
          
          <div className="flex-1 flex flex-col gap-4 text-left">
            <span className="bg-accent/15 text-accent text-xs font-extrabold px-3 py-1.5 rounded-full tracking-wider uppercase self-start border border-accent/20">
              El Paso County Dispatch
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-heading tracking-tight">
              Rapid Response Service Radius
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              We dispatch our mobile service trucks across Colorado Springs and neighbouring foothills to resolve breakdowns fast.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-xs font-semibold text-slate-700">
              {SERVICE_AREAS.map((area) => (
                <div key={area.name} className="flex items-center gap-1.5 bg-slate-50 py-2 px-3 rounded-lg border border-slate-100 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{area.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Link
                href="/service-areas"
                className="text-xs font-bold text-accent hover:text-accent/90 inline-flex items-center gap-1 group"
              >
                <span>View Serviced ZIP Codes List</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:1.5rem_1.5rem] bg-slate-50 rounded-2xl h-[250px] border border-slate-100 flex flex-col justify-center items-center text-center p-4 relative overflow-hidden shrink-0">
            <div className="absolute w-24 h-24 bg-accent/10 rounded-full animate-ping" />
            <div className="absolute w-48 h-48 bg-secondary/5 rounded-full animate-pulse" />
            <MapPin className="w-10 h-10 text-accent relative z-10 drop-shadow-md" />
            <span className="font-extrabold text-xs text-primary font-heading mt-3 relative z-10 block tracking-wide">
              Polar Bear HVAC Service Coverage
            </span>
            <span className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5 relative z-10 block">
              30-Mile Service Radar Radius
            </span>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-accent tracking-widest uppercase">
              Customer Endorsements
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight mt-2 text-white">
              What Your Neighbors Say About Us
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              We appreciate all customer feedback. See why Colorado Springs trusts our boiler hydronic loops and quick summer AC repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map((review, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 flex flex-col justify-between hover:border-accent/30 transition-all relative group"
              >
                <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
                  <MessageSquare className="w-12 h-12 text-accent" />
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-extrabold text-white block">
                      {review.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5 block">
                      Verified Client
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-slate-300 block">
                      {review.location}
                    </span>
                    <span className="text-[10px] text-accent font-extrabold mt-0.5 block uppercase tracking-wider">
                      {review.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="bg-white/10 text-white hover:bg-white/20 border border-white/15 font-extrabold px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2 text-xs"
            >
              <span>Read All verified Testimonials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINANCING CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-primary to-slate-900 text-white rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex-1 flex flex-col gap-4 text-left">
            <span className="bg-accent/20 text-accent font-extrabold text-xs px-2.5 py-1 rounded border border-accent/30 tracking-wider uppercase self-start leading-none">
              Financing Offers
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading tracking-tight">
              Flexible Payments & Zero Down Upgrades
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-xl">
              Don’t let upfront replacement costs delay your winter warmth or summer cooling. We partner with local lenders to offer quick online approvals and low interest rates.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/financing"
              className="bg-accent text-white font-extrabold px-6 py-3 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all text-xs text-center hover:scale-105 active:scale-95"
            >
              Check Financing Plans
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-white/10 text-white hover:bg-white/20 border border-white/25 font-extrabold px-6 py-3 rounded-xl transition-all text-xs text-center flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call Billing Office</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION ACCORDION */}
      <section className="bg-white border-t border-b border-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold text-accent tracking-widest uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-primary font-heading mt-2">
              Expert Answers From Our Technicians
            </h2>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              Have a query about your furnace, AC, boiler, or swamp cooler? Read our technician checklist below or connect with us directly.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {HOMEPAGE_FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-200/70 rounded-2xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 px-6 text-left flex justify-between items-center text-primary font-extrabold font-heading text-sm md:text-base tracking-tight"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-accent shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      activeFAQ === idx ? "rotate-180 text-accent" : ""
                    }`} 
                  />
                </button>
                
                {activeFAQ === idx && (
                  <div className="py-4 px-6 border-t border-slate-200 bg-white text-slate-600 text-xs md:text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
            Need HVAC or Boiler Service Today?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Don't leave your family comfort to chance. Connect with Polar Bear Furnace and AC for fast emergency responses, honest pricing, and professional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-accent text-white font-extrabold px-8 py-4 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-base cursor-pointer"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call Dispatch: {BUSINESS_INFO.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/10 text-white hover:bg-white/20 border border-white/25 font-extrabold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-base"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Service Online</span>
            </Link>
          </div>
          
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-4">
            3130 Boychuk Ave Ste. 477A, Colorado Springs, CO 80910, USA
          </span>
        </div>
      </section>

    </div>
  );
}
