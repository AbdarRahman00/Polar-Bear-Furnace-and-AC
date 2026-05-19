import React from "react";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Award, 
  Users, 
  ShieldCheck, 
  Wrench, 
  Activity, 
  CheckCircle,
  CalendarCheck
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function AboutPage() {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "40+ Years Combined Experience",
      desc: "Our technicians have designed, repaired, and replaced heating and cooling systems across El Paso county through decades of changing regulations and technology."
    },
    {
      icon: <Activity className="w-6 h-6 text-emerald-500" />,
      title: "Radiant Boiler Specialists",
      desc: "Unlike standard forced-air-only operations, we specialize in complex hydronic piping, zone control loops, and high-efficiency condensing boilers."
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Locally Sourced Technicians",
      desc: "Our installers live right here in Colorado Springs and neighboring towns. We understand high-altitude climate challenges and home designs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Fully Licensed & Insured",
      desc: "Your investment is completely safe. We strictly follow municipal code regulations and pull all appropriate local building permits."
    }
  ];

  const values = [
    { title: "Honest Upfront Pricing", desc: "No diagnostic gimmicks or surprise post-job surcharges. We explain the failure and quote flat rates before starting." },
    { title: "24/7 Emergency Dispatch", desc: "Colorado winter nights can freeze water pipes in hours. We remain available around the clock for emergency dispatch." },
    { title: "OEM Grade Materials", desc: "We utilize official manufacturer-certified parts to protect your equipment's factory warranties." },
    { title: "Aesthetics & Cleanliness", desc: "We protect your flooring with protective shoe booties, clean our workspaces, and complete installations in a highly clean format." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-accent/20 text-accent text-xs font-extrabold px-3 py-1.5 rounded-full border border-accent/30 tracking-wider uppercase inline-block mb-3">
            Who We Are
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            About Polar Bear Furnace & AC
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Proudly serving Colorado Springs and neighboring mountain communities with top-tier heating, air conditioning, and radiant boiler services.
          </p>
        </div>
      </section>

      {/* Intro Story Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block - Story Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-extrabold text-accent tracking-widest uppercase">
              Our Legacy & Commitment
            </span>
            <h2 className="text-3xl font-extrabold text-primary font-heading tracking-tight">
              Colorado Springs’ Trusted HVAC & Boiler Specialists
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              At **Polar Bear Furnace and AC**, we believe that home comfort is a necessity, not a luxury. Founded on honest craftsmanship and upfront local values, we provide the greater Colorado Springs metropolitan region with high-performance residential and commercial HVAC services.
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              We stand apart from standard heating and air companies by offering **unmatched expertise in cast iron boilers, radiant hydronic heating loops, and modern high-efficiency condensing boilers**. Our technical teams are highly educated in sizing, maintaining, and repairing complex hydronic manifolds, ensuring cozy, dust-free radiant heating even in older and custom properties.
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Whether you need rapid 24/7 furnace diagnostics on a snowy winter night, a whisper-quiet air conditioner installation to handle July heat waves, or a whole-house air filtration check, our certified experts possess the skills to complete the job right the first time.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 text-xs font-bold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 text-xs font-bold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                EPA Certified Techs
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 text-xs font-bold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Boiler Specialists
              </div>
            </div>
          </div>

          {/* Right Block - Visual Showcase Container */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl relative overflow-hidden flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="bg-primary/5 p-4 rounded-2xl text-primary shrink-0">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-primary font-heading leading-none">
                  {BUSINESS_INFO.experience}
                </span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mt-1">
                  HVAC & Boiler Expertise
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 text-sm text-slate-600">
              <h4 className="font-extrabold text-primary uppercase text-xs tracking-wider">
                Serving Colorado Locations:
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-slate-700 font-semibold">
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Colorado Springs</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Monument</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Fountain</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Woodland Park</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Our service trucks are fully dispatched across El Paso county and adjoining mountain towns.
              </p>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-accent text-white font-extrabold text-center py-4 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 text-sm hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call For Support: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Pillars Grid */}
      <section className="bg-white border-t border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-accent tracking-widest uppercase">
              Our Core Pillars
            </span>
            <h2 className="text-3xl font-extrabold text-primary font-heading mt-2">
              Why Colorado Springs Relies On Us
            </h2>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              We operate under a rigid customer-first charter, ensuring every single service call matches the highest industry criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title} 
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm self-start">
                  {pillar.icon}
                </div>
                <h3 className="font-extrabold text-base text-primary font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left - Small values block */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-extrabold text-accent tracking-widest uppercase">
              Our Code of Conduct
            </span>
            <h2 className="text-3xl font-extrabold text-primary font-heading">
              Our Pledge To Every Customer
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We believe a service trade is founded on integrity. From the first phone consultation to the final physical system test, we treat your home or commercial building with respect.
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/5 mt-4">
              <span className="text-2xl font-extrabold text-primary block leading-none">
                4.9★ Rated Reputation
              </span>
              <span className="text-xs text-slate-500 font-bold block mt-1.5 uppercase tracking-wider">
                Google Customer Satisfaction Score
              </span>
            </div>
          </div>

          {/* Right - Values list */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-2">
                <span className="w-1.5 h-6 bg-accent rounded-full block" />
                <h4 className="font-extrabold text-sm text-primary font-heading mt-2">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
            Need High-Quality Heating or Cooling Support?
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
            Get fast dispatch, clean technicians, and honest upfront flat pricing. Reach our dispatch center immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-accent text-white font-extrabold px-8 py-3.5 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer text-sm"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/10 text-white font-extrabold px-8 py-3.5 rounded-xl hover:bg-white/20 border border-white/25 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer text-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Request Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
