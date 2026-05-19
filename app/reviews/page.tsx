import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Star, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle,
  CalendarCheck
} from "lucide-react";
import { BUSINESS_INFO, REVIEWS } from "@/lib/constants";

export default function ReviewsPage() {
  const ratingStats = [
    { stars: 5, pct: 96 },
    { stars: 4, pct: 4 },
    { stars: 3, pct: 0 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 0 }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-accent/20 text-accent text-xs font-extrabold px-3 py-1.5 rounded-full border border-accent/30 tracking-wider uppercase inline-block mb-3">
            Customer Stories
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            Polar Bear Mechanical Reviews
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            See what your neighbors in Colorado Springs are saying about our prompt heating, air conditioning, and specialist boiler services.
          </p>
        </div>
      </section>

      {/* Aggregate Rating Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Block: Summary Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100 flex flex-col justify-center items-center text-center">
            <span className="text-6xl font-extrabold text-primary font-heading leading-none">
              {BUSINESS_INFO.rating}
            </span>
            <div className="flex items-center gap-0.5 text-amber-400 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-700 mt-2 uppercase tracking-wide">
              Average Rating
            </span>
            <span className="text-xs text-slate-400 mt-1">
              Based on {BUSINESS_INFO.reviewsCount}+ verified client surveys on Google
            </span>
            
            <a
              href={BUSINESS_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/95 text-white font-extrabold text-xs px-5 py-3 rounded-xl mt-6 transition-all hover:scale-105 active:scale-95 cursor-pointer block"
            >
              Write A Google Review
            </a>
          </div>

          {/* Right Block: Stats Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100 flex flex-col justify-center gap-4">
            <h3 className="text-lg font-extrabold text-primary font-heading">
              Review Distribution
            </h3>
            
            <div className="flex flex-col gap-3">
              {ratingStats.map((stat) => (
                <div key={stat.stars} className="flex items-center gap-4 text-xs font-semibold">
                  <span className="w-12 text-slate-600 font-bold shrink-0">{stat.stars} Stars</span>
                  <div className="flex-grow bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-amber-400 h-full rounded-full"
                      style={{ width: `${stat.pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-slate-400 shrink-0">{stat.pct}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Customer Review Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-accent tracking-widest uppercase">
            Local Testimonials
          </span>
          <h2 className="text-3xl font-extrabold text-primary font-heading mt-2">
            Real Customer, Real Results
          </h2>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            We let our work speak for itself. Here are verified reviews written by homeowners and property managers across El Paso County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow relative"
            >
              {/* Review card quote bubble styling */}
              <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
                <MessageSquare className="w-12 h-12 text-primary" />
              </div>

              <div className="flex flex-col gap-4">
                {/* Rating stars */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6 flex justify-between items-center text-xs">
                <div>
                  <span className="font-extrabold text-primary block">
                    {review.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block mt-0.5">
                    Verified Customer
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-700 flex items-center justify-end gap-1">
                    <MapPin className="w-3 h-3 text-accent shrink-0" />
                    {review.location}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-extrabold mt-0.5 block">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
            Ready to Experience Polar Bear Comfort?
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
            Join hundreds of satisfied families in Colorado Springs who rely on us for honest upfront pricing and robust HVAC solutions.
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
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule Service Online</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
