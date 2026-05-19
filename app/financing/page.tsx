import React from "react";
import Link from "next/link";
import { 
  Phone, 
  CreditCard, 
  TrendingDown, 
  Calendar, 
  CheckCircle, 
  Percent, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function FinancingPage() {
  const plans = [
    {
      icon: <Percent className="w-6 h-6 text-accent" />,
      title: "0% APR Financing Options",
      desc: "For qualifying systems and credits, enjoy zero interest during promotional periods, allowing you to pay over time without extra costs."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-secondary" />,
      title: "Zero Down Payments",
      desc: "Get your new furnace, boiler, or central air conditioner installed immediately with no money down upfront. Keep your emergency cash intact."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-emerald-500" />,
      title: "Low Monthly Payments",
      desc: "With extended terms up to 60 or 120 months, we can structure payments to fit your family’s standard operating budget."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Quick Consult",
      desc: "Speak with our technicians during your service call. We calculate the replacement cost and explain matching financing tiers."
    },
    {
      step: "02",
      title: "Apply Online",
      desc: "Use our secure, fast lender link. The application takes under 5 minutes and uses secure encryption to protect your privacy."
    },
    {
      step: "03",
      title: "Instant Approval",
      desc: " Lenders return credit decisions almost instantly. Once approved, we schedule your high-efficiency system swap."
    }
  ];

  const benefits = [
    "Protects your liquid savings and emergency funds.",
    "Enables upgrading to higher-efficiency equipment that saves up to 40% on monthly utility bills.",
    "Includes manufacturer warranties up to 10 years, meaning no repair overhead.",
    "Combines easily with active utility rebates and federal high-efficiency energy tax credits (Section 25C)."
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-accent/20 text-accent text-xs font-extrabold px-3 py-1.5 rounded-full border border-accent/30 tracking-wider uppercase inline-block mb-3">
            Affordable Comfort
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            Flexible HVAC Financing Solutions
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Don’t stress over a sudden heater or AC breakdown. We offer low interest, zero down, and monthly payment options to fit your household budget.
          </p>
        </div>
      </section>

      {/* Main Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Financing Plans */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Promo Banner Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div className="bg-accent/10 text-accent p-5 rounded-2xl shrink-0">
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="bg-emerald-50 text-emerald-600 font-extrabold text-xs px-2.5 py-1 rounded border border-emerald-100 tracking-wider uppercase self-start">
                  Summer Promotion
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-primary font-heading tracking-tight">
                  Zero Down, Low APR HVAC Upgrades
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Upgrade your outdated, noisy heating or cooling core today. Get flexible approvals and start saving on monthly gas and power bills instantly.
                </p>
              </div>
            </div>

            {/* Plans List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div 
                  key={plan.title} 
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md flex flex-col gap-4 hover:shadow-lg transition-all"
                >
                  <div className="bg-slate-50 p-3 rounded-xl self-start">
                    {plan.icon}
                  </div>
                  <h4 className="font-extrabold text-base text-primary font-heading leading-snug">
                    {plan.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {plan.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Finance Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100 flex flex-col gap-6">
              <h3 className="text-xl font-extrabold text-primary font-heading">
                Key Advantages of Heating & Cooling Financing
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3 Step Process Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100 flex flex-col gap-6">
              <h3 className="text-xl font-extrabold text-primary font-heading">
                How Our Financing Request Works
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {steps.map((st, idx) => (
                  <div key={st.title} className="flex flex-col gap-3 relative z-10">
                    <span className="text-4xl font-extrabold text-slate-100 font-heading leading-none">
                      {st.step}
                    </span>
                    <h4 className="font-extrabold text-base text-primary font-heading">
                      {st.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct CTAs */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Utility Rebates Alert Panel */}
            <div className="bg-slate-900 text-white rounded-2xl shadow-xl p-6 border border-white/5 flex flex-col gap-4">
              <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-xl self-start border border-emerald-500/20">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold font-heading">
                Combine with Active Utility Rebates
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Colorado Springs Utilities and Federal programs offer significant direct cash rebates and tax credits up to **$2,000+** for qualifying high-efficiency furnace, heat pump, or boiler installations.
              </p>
              <div className="border-t border-white/10 pt-4 flex flex-col gap-2 text-xs text-slate-300 font-semibold">
                <div className="flex justify-between">
                  <span>CSU Heat Pump Rebate:</span>
                  <span className="text-emerald-400">Up to $1,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Federal Tax Credits:</span>
                  <span className="text-emerald-400">30% (Up to $2,000)</span>
                </div>
                <div className="flex justify-between">
                  <span>Boiler Upgrades:</span>
                  <span className="text-emerald-400">CSU Rebates Match</span>
                </div>
              </div>
            </div>

            {/* Direct Booking CTA Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 flex flex-col gap-6">
              <h3 className="text-base font-extrabold text-primary font-heading border-b border-slate-100 pb-3">
                Pre-Qualify Now
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Want to check your eligibility without damaging your credit rating? Reach out to our billing office directly to get the pre-approval application link.
              </p>
              
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-primary text-white font-extrabold text-center py-3.5 rounded-xl hover:bg-primary/95 transition-all flex items-center justify-center gap-2 text-sm hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-accent animate-bounce" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-accent text-white font-extrabold text-center py-3.5 rounded-xl hover:bg-accent/90 shadow-md shadow-accent/20 transition-all flex items-center justify-center gap-2 text-sm hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Financing Consultation</span>
                </Link>
              </div>
            </div>

            {/* Safe Seal Panel */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-extrabold text-xs text-primary uppercase font-heading">
                  100% Secure Processing
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Lending partners utilize bank-grade secure encryption. No sensitive details are stored.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
