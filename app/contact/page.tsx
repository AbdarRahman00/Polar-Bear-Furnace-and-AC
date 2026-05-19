"use client";

import React, { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Calendar, 
  CheckCircle, 
  ShieldAlert, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceNeeded: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const servicesList = [
    "Furnace Repair",
    "Furnace Installation",
    "Furnace Maintenance",
    "AC Repair",
    "AC Installation",
    "AC Maintenance",
    "Boiler Services",
    "Ductless Mini Splits",
    "Water Heater Services",
    "Swamp Cooler Services",
    "Indoor Air Quality",
    "Commercial HVAC",
    "Other Heating / Cooling"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!formData.name || !formData.phone || !formData.email || !formData.serviceNeeded) {
      setError("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    // Simulate API Submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      serviceNeeded: "",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 px-4 relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-accent/20 text-accent text-xs font-extrabold px-3 py-1.5 rounded-full border border-accent/30 tracking-wider uppercase inline-block mb-3">
            Get In Touch Today
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            Schedule HVAC Service & Bookings
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Need emergency heating repair, a seasonal AC tune-up, or a free boiler installation quote? Reach our local experts now.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100">
            {submitted ? (
              <div className="text-center py-12 px-4 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-100 shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-primary font-heading">
                  Booking Request Received!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto mt-3 leading-relaxed">
                  Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Our friendly dispatcher will contact you shortly on <span className="font-bold text-slate-800">{formData.phone}</span> to confirm your scheduling time.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="bg-primary text-white font-extrabold px-6 py-3 rounded-xl hover:bg-primary/95 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    <span>Call to Speed Up</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="bg-slate-100 text-slate-700 font-extrabold px-6 py-3 rounded-xl hover:bg-slate-200 transition-all text-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-primary font-heading flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-accent" />
                    Schedule Appointment / Request Estimate
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Fill out our simple secure form. We will call back shortly during normal hours to finalize.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm font-semibold flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-extrabold text-primary tracking-wider uppercase">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-extrabold text-primary tracking-wider uppercase">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. (719) 329-4304"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-extrabold text-primary tracking-wider uppercase">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Service Needed field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-extrabold text-primary tracking-wider uppercase">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    >
                      <option value="" disabled>Select a service...</option>
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-extrabold text-primary tracking-wider uppercase">
                    How Can We Help You?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Provide details about your furnace, AC, or boiler (brand, issue, or quote request)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-accent text-white font-extrabold py-4 px-6 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Booking Request...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      <span>Request Booking & Callback</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Emergency Hotline Card */}
            <div className="bg-primary text-white rounded-2xl shadow-xl p-6 md:p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-4 translate-y-4 scale-150">
                <ShieldAlert className="w-32 h-32 text-accent" />
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="bg-accent/20 text-accent font-extrabold text-xs px-2.5 py-1 rounded border border-accent/30 tracking-wider uppercase animate-pulse">
                    24/7 Hotline
                  </span>
                  <span className="text-xs text-slate-300 font-semibold uppercase">No-Heat Emergencies</span>
                </div>
                <h3 className="text-2xl font-extrabold font-heading">
                  Have an HVAC Emergency?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Is your furnace freezing at 2 AM or is your boiler leaking water? Don't wait. Call our dispatcher immediately.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-accent text-white font-extrabold text-center py-4 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/10 transition-all flex items-center justify-center gap-2 text-base hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-5 h-5 animate-bounce" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* General Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100 flex flex-col gap-6">
              <h3 className="text-lg font-extrabold text-primary font-heading border-b border-slate-100 pb-3">
                Business Information
              </h3>
              
              <ul className="flex flex-col gap-5 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase">Main Address:</span>
                    <a
                      href={BUSINESS_INFO.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:text-accent transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.address}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase">General Email:</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-primary font-semibold hover:text-accent transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase">Working Hours:</span>
                    <span className="text-slate-800 font-semibold block mt-0.5">
                      {BUSINESS_INFO.hours}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Satisfaction Guarantee card */}
            <div className="bg-gradient-to-r from-primary to-slate-900 text-white rounded-2xl shadow-lg p-6 border border-white/5 flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm font-heading">
                  100% Satisfaction Guarantee
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Our HVAC work is fully warrantied. If there is any issue, we will make it right.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Styled Embed Map Link Section */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-4 border border-slate-100 overflow-hidden relative group">
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex flex-col justify-center items-center text-center p-6 z-10 transition-all group-hover:bg-primary/10">
            <span className="bg-accent text-white font-extrabold text-xs px-3 py-1.5 rounded-full tracking-wider uppercase shadow-md mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Colorado Springs Service Radius
            </span>
            <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-tight font-heading">
              Serving El Paso County & Neighbors
            </h3>
            <p className="text-slate-200 text-xs md:text-sm max-w-md mx-auto mt-2 leading-relaxed">
              We serve Colorado Springs, Monument, Fountain, Falcon, Peyton, Black Forest, Woodland Park, and Security-Widefield.
            </p>
            <a
              href={BUSINESS_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-slate-50 font-extrabold text-xs px-5 py-3 rounded-xl shadow-lg mt-6 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Get Directions On Google Maps
            </a>
          </div>
          {/* Stylized background representing maps layout */}
          <div className="h-[300px] w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] bg-slate-50 opacity-40 shrink-0" />
        </div>
      </section>
    </div>
  );
}
