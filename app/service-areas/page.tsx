import React from "react";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Map, 
  ShieldCheck, 
  ChevronRight, 
  Calendar,
  Sparkles 
} from "lucide-react";
import { BUSINESS_INFO, SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreasPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-accent/20 text-accent text-xs font-extrabold px-3 py-1.5 rounded-full border border-accent/30 tracking-wider uppercase inline-block mb-3">
            El Paso County Coverage
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            Our HVAC Service Areas
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            We provide fast, reliable heating, cooling, and boiler services across Colorado Springs and surrounding mountain communities.
          </p>
        </div>
      </section>

      {/* Main Grid Map Info */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Block: Dispatch radar */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <span className="bg-accent/15 text-accent text-xs font-extrabold px-2.5 py-1 rounded border border-accent/25 uppercase tracking-wider self-start">
                24/7 Dispatch Radar
              </span>
              <h3 className="text-2xl font-extrabold text-primary font-heading tracking-tight">
                Prompt Response Times Guaranteed
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                We organize our dispatch routing efficiently, ensuring that when an emergency "no heat" or boiler failure occurs, we have an active technician near you.
              </p>
              
              <div className="flex flex-col gap-3 mt-4 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  <span>CSU Boundary Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  <span>Mountain Foothills Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  <span>North/South Highway 85 Access</span>
                </div>
              </div>
            </div>
            
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-accent text-white font-extrabold text-center py-3.5 rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 text-sm hover:scale-[1.02] mt-8 cursor-pointer"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call Dispatch: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Right Block: Areas Grid */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h3 className="text-xl font-extrabold text-primary font-heading flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
              <Map className="w-6 h-6 text-accent" />
              Where We Install, Service & Repair
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICE_AREAS.map((area) => (
                <div 
                  key={area.name} 
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col gap-2">
                    <h4 className="font-extrabold text-base text-primary font-heading flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-accent shrink-0" />
                      {area.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  
                  {/* Zip codes list */}
                  <div className="border-t border-slate-200/50 pt-3 mt-4">
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase block tracking-wider mb-1">
                      Serviced ZIP codes:
                    </span>
                    <p className="text-[10px] text-slate-600 font-semibold tracking-wide flex flex-wrap gap-1 leading-relaxed">
                      {area.zipCodes.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Styled Interactive Call Map Mockup */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100 overflow-hidden relative flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <span className="bg-accent/15 text-accent text-xs font-extrabold px-3 py-1.5 rounded-full tracking-wider uppercase self-start border border-accent/20 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              100% Mobile Dispatched
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-heading tracking-tight">
              Looking For HVAC Services in El Paso County?
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              If your property resides in any of our coverage zones, you qualify for our flat diagnostic pricing and emergency dispatch benefits. Connect with us online to book a visit.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="bg-primary text-white font-extrabold px-6 py-3 rounded-xl hover:bg-primary/95 transition-all text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call Dispatch Now</span>
              </a>
              <Link
                href="/contact"
                className="bg-accent text-white font-extrabold px-6 py-3 rounded-xl hover:bg-accent/90 transition-all text-xs text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Service Online</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:1.5rem_1.5rem] bg-slate-50 rounded-2xl h-[250px] border border-slate-100 flex flex-col justify-center items-center text-center p-4 relative overflow-hidden shrink-0">
            <div className="absolute w-24 h-24 bg-accent/10 rounded-full animate-ping" />
            <div className="absolute w-48 h-48 bg-secondary/5 rounded-full animate-pulse" />
            <MapPin className="w-10 h-10 text-accent relative z-10 drop-shadow-md" />
            <span className="font-extrabold text-xs text-primary font-heading mt-3 relative z-10 block tracking-wide">
              Colorado Springs Radar Dispatch Center
            </span>
            <span className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5 relative z-10 block">
              30-Mile Service Coverage Radius
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
