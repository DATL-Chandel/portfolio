"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Activity = {
  img:            string;
  category:       string;
  categoryColor:  string;
  objectPosition: string;
  description:    string;
  fullDescription: string;
};

// Sorted: Field Work → Training → Conference → Expo → Outreach (perfect 3×3 grid)
const activities: Activity[] = [
  // ── Field Work ──
  {
    img:            "/team/work-1.jpg",
    category:       "Field Work",
    categoryColor:  "#4a7c59",
    objectPosition: "center",
    description:    "Dr. Abhilash inspecting an agricultural sprayer drone with an exhibitor at the 2026 Precision Ag Expo, hosted by Virginia Tech Tidewater AREC.",
    fullDescription: "Dr. Abhilash Chandel examines an agricultural sprayer drone alongside an exhibitor at the 2026 Precision Ag Expo — an event organized by Virginia Tech Tidewater AREC (vttarec) and Virginia Tech CALS (vtcals). The expo brought together growers, exhibitors, faculty, staff, students, and partners to drive innovation in Virginia agriculture, and was celebrated by vttarec as a standout success that showcased cutting-edge precision agriculture technology in action.",
  },
  {
    img:            "/team/work-7.jpg",
    category:       "Field Work",
    categoryColor:  "#4a7c59",
    objectPosition: "center",
    description:    "Dr. Abhilash and PhD student Aminata Sarr with an evapotranspiration sensor measuring crop water use in a cotton field.",
    fullDescription: "Dr. Abhilash and PhD student Aminata Sarr examine an evapotranspiration sensor designed to quantify crop water use in a cotton field at Tidewater AREC. This field-based research feeds directly into data-driven irrigation management strategies, helping Virginia row crop producers make smarter water-use decisions throughout the growing season. Photo by Suzanne M. Pruitt.",
  },
  // ── Training ──
  {
    img:            "/team/work-8.jpg",
    category:       "Training",
    categoryColor:  "#2d7d9a",
    objectPosition: "center",
    description:    "PhD student Aminata Sarr and fellow students prepare for drone flight under Dr. Abhilash's instruction at Tidewater AREC Drone School.",
    fullDescription: "PhD student Aminata Sarr (second from left) looks on with fellow students as they prepare for drone flight under the instruction of Dr. Abhilash Chandel (far right) during the Tidewater AREC Drone School — a hands-on training program built to equip the next generation of agricultural researchers with UAV skills. Students learn flight planning, sensor integration, and data collection protocols that they apply directly to ongoing precision agriculture field trials.",
  },
  // ── Conference ──
  {
    img:            "/team/work-2.jpg",
    category:       "Conference",
    categoryColor:  "#6b7fa3",
    objectPosition: "center",
    description:    "Keynote on user-inspired digital agriculture at the International Conclave on Futuristic Farming, MPKV Rahuri, India.",
    fullDescription: "Dr. Abhilash delivered a theme talk on 'User-inspired digital agriculture through multimodal data and artificial intelligence' at the 2023 International Conclave on Futuristic Farming, organized under the NAHEP-CAAST project at MPKV Rahuri, India. The talk emphasized building solutions in direct partnership with farmers — the true end-users — and highlighted AI and hyperspectral imaging as transformative tools for modern agriculture.",
  },
  {
    img:            "/team/work-4.jpg",
    category:       "Conference",
    categoryColor:  "#6b7fa3",
    objectPosition: "center",
    description:    "S1098 Multistate Meeting on Autonomy in Agriculture, Raleigh, NC — gathered around a humanoid robot demonstration.",
    fullDescription: "The S1098 Multistate Meeting on Autonomy in Agriculture at Raleigh, NC brought together leading researchers to push the boundaries of autonomous farming systems. Dr. Abhilash served as Chair, facilitating talks and demonstrations centered around a bipedal humanoid robot — a striking symbol of where agricultural autonomy is headed. The meeting produced new cross-institutional synergies in the domain.",
  },
  {
    img:            "/team/work-10.jpg",
    category:       "Conference",
    categoryColor:  "#6b7fa3",
    objectPosition: "center",
    description:    "Dr. Abhilash and PhD students at SPIE Defense + Security 2026, presenting research in robotics, autonomy, and precision agriculture.",
    fullDescription: "Dr. Abhilash alongside PhD students Chijioke Leonard Nkwocha and Pius Jjagwe at the SPIE Defense + Security 2026 conference in Maryland. The team presented research spanning robotics, autonomous systems, and precision agriculture — engaging with engineers, defense innovators, and researchers working at the intersection of sensing technology and intelligent field systems.",
  },
  // ── Expo ──
  {
    img:            "/team/work-5.jpg",
    category:       "Expo",
    categoryColor:  "#861F41",
    objectPosition: "center",
    description:    "Live drone demo at the inaugural Precision Ag Technology Expo, connecting growers, exhibitors, and researchers.",
    fullDescription: "Dr. Abhilash organized the inaugural Precision Ag Technology Expo — a first-of-its-kind event bringing together Virginia farmers, industry exhibitors, and university researchers for live demonstrations of cutting-edge precision agriculture tools. The expo featured drone technology showcases, equipment trials, and direct dialogue between innovators and growers, establishing a new annual platform for agricultural technology exchange.",
  },
  // ── Outreach ──
  {
    img:            "/team/work-3.jpg",
    category:       "Outreach",
    categoryColor:  "#C84B14",
    objectPosition: "top",
    description:    "Presenting precision ag research at the Berry Field Day, Hampton Roads AREC, with VAES Director Mary Burrows.",
    fullDescription: "Dr. Abhilash presented precision agriculture and data management research at the Berry Field Day hosted by Hampton Roads AREC. Pictured with Mary Burrows, Director of the Virginia Agricultural Experiment Station (VAES) — a partnership that strengthens the bridge between university research and actionable tools for Virginia's farming community. Events like these are how lab findings reach the growers who need them most.",
  },
  {
    img:            "/team/work-6.jpg",
    category:       "Outreach",
    categoryColor:  "#C84B14",
    objectPosition: "top",
    description:    "Growers explore the Agroclimate App during a presentation by Dr. Abhilash on using satellite and weather data for smarter farm decisions.",
    fullDescription: "During a grower information session led by Dr. Abhilash, participants explore the Agroclimate Viewer and Planner App — a free, web-based tool developed by the DATL lab that integrates satellite imagery and real-time weather data. The app empowers Virginia farmers to make informed decisions on irrigation, fertilization, and harvest timing, putting precision agriculture intelligence directly in the hands of producers.",
  },
];

export default function TeamActivities() {
  const [active, setActive] = useState<Activity | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section id="team-activities" className="py-28" style={{ background: "transparent" }}>
      <div className="max-w-[1440px] mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--vt-maroon)" }}>
            Team Activities
          </p>
          <h2
            className="font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "var(--foreground)" }}
          >
            Research, Outreach &amp; Training
          </h2>
          <p className="leading-relaxed text-gray-500" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}>
            From field trials and drone operations to international conferences and community expos — a look at how the lab brings precision agriculture to life.
          </p>
        </div>

        {/* ── 3-column card grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((a) => (
            <div
              key={a.img}
              className="group flex flex-col rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: "rgba(0,0,0,0.07)", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              onClick={() => setActive(a)}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(134,31,65,0.06)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)")}
            >
              {/* Fixed-height image */}
              <div className="relative w-full overflow-hidden" style={{ height: "240px" }}>
                <Image
                  src={a.img}
                  alt={a.category}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: a.objectPosition }}
                />
                {/* Category pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white" style={{ background: a.categoryColor }}>
                    {a.category}
                  </span>
                </div>
                {/* Click hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                    Click to expand
                  </span>
                </div>
              </div>

              {/* Card description */}
              <div className="p-5">
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                >
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.82)" }}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ maxWidth: "min(90vw, 960px)", width: "100%", background: "white", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all"
              style={{ background: "rgba(0,0,0,0.45)", color: "white" }}
              onClick={() => setActive(null)}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.7)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.45)")}
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Large image */}
            <div className="relative w-full" style={{ height: "520px" }}>
              <Image
                src={active.img}
                alt={active.category}
                fill
                sizes="960px"
                className="object-cover"
                style={{ objectPosition: active.objectPosition }}
              />
            </div>

            {/* Content */}
            <div className="p-7">
              <span
                className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold text-white mb-4"
                style={{ background: active.categoryColor }}
              >
                {active.category}
              </span>
              <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                {active.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
