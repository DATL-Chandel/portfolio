"use client";

import { useState } from "react";

const areas = [
  {
    index: "01",
    title: "Ag-Sensing Systems",
    description:
      "Ground (fixed and mobile), smartphone, aerial, and satellite-based sensing for real-time crop monitoring across field and specialty crops.",
    recent:
      "UAV multispectral mapping of nematode stress in soybean; cotton boll-opening mapping at field scale.",
  },
  {
    index: "02",
    title: "IoT, Cloud & Edge Computing",
    description:
      "Sensor networks and edge-computing/actuation pipelines that process and act on crop data directly in the field.",
    recent:
      "UGV-based sensing and AI-edge computing for end-to-end autonomous crop disease diagnosis.",
  },
  {
    index: "03",
    title: "Computer Vision, AI & Big-Data Analytics",
    description:
      "Image-based phenotyping, deep learning, and predictive modeling for crop health, disease, and yield estimation.",
    recent:
      "Multimodal UAS-based high-throughput phenotyping for early-season soybean yield prediction.",
  },
  {
    index: "04",
    title: "Precision Input Application",
    description:
      "Spatiotemporal, targeted management of agricultural inputs, water, nutrients, and chemicals, to reduce waste and crop injury.",
    recent:
      "Controlled traffic farming for soil health; sensor-based intra-row weeding system (patented).",
  },
  {
    index: "05",
    title: "Autonomous Machinery",
    description:
      "Robotic and actuated field systems, self-operating equipment for precision crop input application and management.",
    recent: "PMDC-actuated rotary weeder on a 4-bar linkage; UGV field platforms.",
  },
  {
    index: "06",
    title: "Crop Biophysical Sensing & Modeling",
    description:
      "Physiological stress detection and biophysical modeling for early, targeted intervention in biotic and abiotic stress.",
    recent:
      "Modular 3D-printed microneedle biosensor for in-situ plant stress monitoring (provisional patent).",
  },
];

export default function ResearchAreas() {
  const [active, setActive] = useState(0);
  const current = areas[active];

  return (
    <section id="research" className="py-28" style={{ background: "transparent" }}>
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--vt-maroon)" }}
          >
            Research Program
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "var(--foreground)" }}
          >
            Sensing, automation, and{" "}
            <span style={{ color: "var(--vt-maroon)" }}>data-driven agriculture</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Designing and deploying sensing, automation, and data-driven
            solutions for spatiotemporal, targeted management of agricultural
            inputs, from a single sensor to an entire field.
          </p>
        </div>

        {/* Interactive index */}
        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-16 items-start">
          {/* Left: title list */}
          <ul className="md:border-r" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            {areas.map((area, i) => {
              const isActive = i === active;
              return (
                <li key={area.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="group w-full text-left flex items-baseline gap-4 py-5 transition-colors duration-200"
                  >
                    <span
                      className="text-xs font-semibold tabular-nums transition-colors duration-200"
                      style={{
                        color: isActive ? "var(--vt-maroon)" : "rgba(0,0,0,0.25)",
                      }}
                    >
                      {area.index}
                    </span>
                    <span
                      className="text-lg md:text-xl font-semibold tracking-tight transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        color: isActive ? "var(--vt-maroon)" : "rgba(0,0,0,0.45)",
                      }}
                    >
                      {area.title}
                    </span>
                  </button>
                  {i < areas.length - 1 && (
                    <div className="border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }} />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right: detail panel */}
          <div key={active} className="relative md:pl-4 animate-panel-swap min-h-[280px]">
            <span
              className="block text-7xl md:text-8xl font-bold leading-none mb-6"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "rgba(134,31,65,0.30)",
              }}
            >
              {current.index}
            </span>

            <h3
              className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-gray-900"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {current.title}
            </h3>

            <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-6">
              {current.description}
            </p>

            <div className="pt-5 border-t max-w-xl" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <p className="text-sm leading-relaxed text-gray-500">
                <span
                  className="font-semibold uppercase tracking-wider text-xs"
                  style={{ color: "var(--vt-maroon)" }}
                >
                  Recent work
                </span>
                <br />
                {current.recent}
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 flex flex-wrap items-center gap-4">
          <a
            href="https://scholar.google.com/citations?user=xCaMSKYAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "var(--vt-maroon)" }}
          >
            View Full Publication Record on Google Scholar
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
