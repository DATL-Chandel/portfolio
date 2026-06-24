"use client";

import Image from "next/image";

const publications = [
  {
    code:     "BSE-362",
    category: "Drone Imaging",
    title:    "Drone Imaging to Evaluate Impact of Nematodes on Soybean Yield",
    image:    "/publications/bse-362.jpg",
    position: "center",
    color:    "#4a7c59", // ag-green
    border:   "rgba(74,124,89,0.35)",
    url:      "https://www.pubs.ext.vt.edu/content/pubs_ext_vt_edu/en/BSE/bse-362/bse-362.html",
  },
  {
    code:     "BSE-372",
    category: "Decision Tool",
    title:    "Agroclimate Viewer & Planner App",
    image:    "/publications/bse-372-v2.png",
    position: "center 68%",
    color:    "#6b7fa3", // data-blue
    border:   "rgba(107,127,163,0.38)",
    url:      "https://www.pubs.ext.vt.edu/content/pubs_ext_vt_edu/en/BSE/bse-372/bse-372.html",
  },
  {
    code:     "BSE-374",
    category: "Soil Health",
    title:    "Potential of Controlled Traffic Farming for Enhanced Soil Health and Productivity",
    image:    "/publications/bse-374.png",
    position: "center",
    color:    "#C84B14", // vt-orange
    border:   "rgba(200,75,20,0.32)",
    url:      "https://www.pubs.ext.vt.edu/content/pubs_ext_vt_edu/en/BSE/bse-374/bse-374.html",
  },
  {
    code:     "BSE-385",
    category: "Drone Imaging",
    title:    "Mapping Cotton Boll Opening at Field-Scale (%Open Bolls) Using UAV Imagery",
    image:    "/publications/bse-385-new.jpg",
    position: "center",
    color:    "#4a7c59", // ag-green
    border:   "rgba(74,124,89,0.35)",
    url:      "https://www.pubs.ext.vt.edu/content/pubs_ext_vt_edu/en/BSE/bse-385.html",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-28" style={{ background: "transparent" }}>
      <div className="max-w-[1440px] mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-14 max-w-2xl">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--vt-maroon)" }}
          >
            Virginia Cooperative Extension
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "var(--foreground)" }}
          >
            Extension{" "}
            <span style={{ color: "var(--vt-maroon)" }}>publications</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Peer-reviewed publications that translate precision agriculture
            research into practical tools and field guidelines for Virginia
            growers.
          </p>
        </div>

        {/* ── Publication cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {publications.map((p) => (
            <a
              key={p.code}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{ background: "white", borderColor: "rgba(0,0,0,0.07)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(134,31,65,0.30)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.07)")}
            >
              {/* Image banner */}
              <div className="relative overflow-hidden" style={{ height: 200, background: "#f0f0ee" }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: p.position }}
                />
                {/* Gradient scrim */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 32%)" }}
                />
                {/* Category pill — neutral frosted white */}
                <span
                  className="absolute top-3 left-3 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    background:     "rgba(255,255,255,0.90)",
                    color:          "#374151",
                    backdropFilter: "blur(6px)",
                    boxShadow:      "0 1px 4px rgba(0,0,0,0.14)",
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-gray-400" />
                  {p.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="font-semibold text-gray-900 leading-snug mb-5 flex-1"
                  style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)" }}
                >
                  {p.title}
                </h3>

                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
                  style={{ color: "var(--vt-maroon)" }}
                >
                  View Publication
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ── Footer CTA ── */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="https://www.pubs.ext.vt.edu/content/pubs_ext_vt_edu/en/author/c/chandler-abhilash.resource.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "var(--vt-maroon)" }}
          >
            View all on VCE Publications
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="text-sm text-gray-400 font-medium">
            Virginia Cooperative Extension · Virginia Tech
          </span>
        </div>

      </div>
    </section>
  );
}
