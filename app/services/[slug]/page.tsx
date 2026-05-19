import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  Phone, 
  Calendar, 
  Star, 
  Flame, 
  Wind, 
  Activity, 
  Sliders, 
  CheckCircle, 
  XCircle,
  HelpCircle,
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  Clock,
  Wrench,
  Sparkles
} from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/lib/constants";
import { getMetadata, getHVACServiceSchema, getFAQSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 16 services to compile them as fully static pages
export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({
    slug: slug,
  }));
}

// Dynamic SEO Metadata Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return getMetadata(service.title, service.metaDesc, `/services/${slug}`);
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    notFound();
  }

  // Group icons matching categories
  let categoryIcon = <Sliders className="w-5 h-5 text-slate-500" />;
  if (service.category === "heating") categoryIcon = <Flame className="w-5 h-5 text-accent" />;
  else if (service.category === "cooling") categoryIcon = <Wind className="w-5 h-5 text-secondary" />;
  else if (service.category === "boiler") categoryIcon = <Activity className="w-5 h-5 text-emerald-500" />;

  // Fetch structured schemas
  const hvacSchema = getHVACServiceSchema(service.title, service.metaDesc);
  const faqSchema = getFAQSchema(service.faqs);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Dynamic JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Service Page Hero */}
      <section className="bg-primary text-white py-16 px-4 relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="flex items-center gap-2 mb-4">
            <Link 
              href="/" 
              className="text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1 bg-white/5 py-1 px-3 rounded-lg border border-white/5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back Home</span>
            </Link>
            <span className="w-1.5 h-4 bg-accent rounded-full block" />
            <span className="text-xs font-extrabold text-secondary uppercase tracking-widest flex items-center gap-1">
              {categoryIcon}
              {service.category} Specialist
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading mt-2 leading-tight max-w-3xl">
            {service.title} in Colorado Springs
          </h1>
          
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed">
            Prompt, certified heating and cooling diagnostics, installations, and repairs. Specialist skills backed by over 40 years of combined local experience.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1 bg-white/5 py-1 px-2.5 rounded-md border border-white/5">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              {BUSINESS_INFO.rating}★ Rated HVAC Specialists
            </span>
            <span className="flex items-center gap-1 bg-white/5 py-1 px-2.5 rounded-md border border-white/5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1 bg-white/5 py-1 px-2.5 rounded-md border border-white/5">
              <Clock className="w-3.5 h-3.5 text-secondary" />
              24/7 Emergency Dispatch
            </span>
          </div>

        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Descriptions, Benefits & Problems */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Long intro block */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-slate-100 flex flex-col gap-4">
              <h2 className="text-2xl font-extrabold text-primary font-heading tracking-tight">
                About Our {service.title} Services
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {service.longDesc}
              </p>
            </div>

            {/* Benefits & Problems Double Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits Column */}
              <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 flex flex-col gap-4">
                <h3 className="text-base font-extrabold text-primary font-heading tracking-wide border-b border-slate-100 pb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  Key Advantages
                </h3>
                <ul className="flex flex-col gap-3 text-xs md:text-sm text-slate-600">
                  {service.benefits.map((bf, idx) => {
                    const [title, desc] = bf.split(":");
                    return (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-4 bg-emerald-500 rounded-full shrink-0 mt-1 block" />
                        <div>
                          {desc ? (
                            <>
                              <span className="font-extrabold text-slate-800">{title}:</span>
                              <span>{desc}</span>
                            </>
                          ) : (
                            <span>{bf}</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Problems Column */}
              <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 flex flex-col gap-4">
                <h3 className="text-base font-extrabold text-primary font-heading tracking-wide border-b border-slate-100 pb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-accent shrink-0" />
                  Common Problems Solved
                </h3>
                <ul className="flex flex-col gap-3 text-xs md:text-sm text-slate-600">
                  {service.problems.map((pb, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-4 bg-accent rounded-full shrink-0 mt-1 block" />
                      <span>{pb}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4 Step Process Grid */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-slate-100 flex flex-col gap-6">
              <h3 className="text-lg font-extrabold text-primary font-heading">
                Our {service.title} Diagnostic & Work Flow
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {service.process.map((pr) => (
                  <div key={pr.step} className="flex flex-col gap-2 relative">
                    <span className="text-4xl font-extrabold text-slate-100 font-heading leading-none">
                      {pr.step}
                    </span>
                    <h4 className="font-extrabold text-sm text-primary font-heading">
                      {pr.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {pr.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQ Accordion */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-slate-100 flex flex-col gap-6">
              <h3 className="text-lg font-extrabold text-primary font-heading flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-accent" />
                Frequently Asked {service.title} Questions
              </h3>
              
              <div className="flex flex-col gap-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
                    <h4 className="font-extrabold text-xs md:text-sm text-primary font-heading">
                      {faq.q}
                    </h4>
                    <p className="text-[11px] md:text-xs text-slate-600 mt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Sidebars & Related Services */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Quick Booking Callback Widget */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 flex flex-col gap-6">
              <div>
                <span className="bg-accent/10 text-accent font-extrabold text-[10px] px-2 py-0.5 rounded border border-accent/20 tracking-wider uppercase inline-block mb-1.5">
                  Secure Scheduling
                </span>
                <h3 className="text-base font-extrabold text-primary font-heading leading-none">
                  Book {service.title} Today
                </h3>
                <p className="text-[10px] text-slate-400 mt-1">
                  Fill out our callback form or dial direct for fast dispatch.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-primary text-white font-extrabold text-center py-3.5 rounded-xl hover:bg-primary/95 transition-all flex items-center justify-center gap-2 text-xs hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-accent animate-bounce" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-accent text-white font-extrabold text-center py-3.5 rounded-xl hover:bg-accent/90 shadow-md shadow-accent/20 transition-all flex items-center justify-center gap-2 text-xs hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Online Appointment</span>
                </Link>
              </div>
            </div>

            {/* Internal Links: Related Services Sidebar */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 flex flex-col gap-4">
              <h3 className="text-base font-extrabold text-primary font-heading border-b border-slate-100 pb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-accent" />
                Related HVAC blueprints
              </h3>
              
              <ul className="flex flex-col gap-2">
                {service.related.map((relSlug) => {
                  const relService = SERVICES[relSlug];
                  if (!relService) return null;
                  return (
                    <li key={relSlug}>
                      <Link 
                        href={`/services/${relSlug}`}
                        className="text-xs font-semibold text-slate-600 hover:text-accent flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                      >
                        <span>{relService.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Satisfaction Guarantee card */}
            <div className="bg-gradient-to-r from-primary to-slate-900 text-white rounded-2xl shadow-md p-6 border border-white/5 flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs font-heading">
                  100% Warrantied Craft
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">
                  We guarantee our work. If there's any problem, our certified local technicians will make it right.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Conversion Banner */}
      <section className="bg-primary text-white py-16 px-4 text-center mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
            Need Expert {service.title} Now?
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
            Get high-efficiency products, prompt dispatches, and flat honest pricing from our local experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-accent text-white font-extrabold px-8 py-3.5 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer text-sm"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call Dispatch: {BUSINESS_INFO.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/10 text-white font-extrabold px-8 py-3.5 rounded-xl hover:bg-white/20 border border-white/25 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Service Online</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
