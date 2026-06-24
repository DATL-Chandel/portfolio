"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".opacity-0-init");
    els?.forEach((el) => el.classList.remove("opacity-0-init"));
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col justify-start overflow-hidden"
      style={{ background: "transparent", paddingTop: "180px", paddingBottom: "72px" }}
    >
      {/* Gradient orb */}
      <div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(134,31,65,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 w-full">
        <div className="flex items-center gap-12 lg:gap-20">

          {/* ── Left: text content ── */}
          <div className="flex-1 min-w-0">

            {/* Location badge */}
            <div
              className="opacity-0-init animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold mb-6 border"
              style={{
                background:   "rgba(134,31,65,0.06)",
                borderColor:  "rgba(134,31,65,0.15)",
                color:        "var(--vt-maroon)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--vt-maroon)" }}
              />
              Virginia Tech · Biological Systems Engineering · Tidewater Agricultural Research and Extension Center
            </div>

            {/* Name */}
            <h1
              className="opacity-0-init animate-fade-up delay-100 font-bold tracking-tight leading-none mb-3"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize:   "clamp(2.6rem, 5vw, 4rem)",
                color:      "var(--foreground)",
              }}
            >
              Dr. Abhilash Chandel
            </h1>

            {/* Title — credential, now visually prominent */}
            <p
              className="opacity-0-init animate-fade-up delay-200 font-semibold mb-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize:   "clamp(1.05rem, 1.8vw, 1.25rem)",
                color:      "var(--vt-maroon)",
                letterSpacing: "0.01em",
              }}
            >
              Assistant Professor, Precision Agriculture &amp; Data Management
            </p>

            {/* Divider */}
            <div
              className="opacity-0-init animate-fade-up delay-200 mb-5 w-12 h-0.5 rounded-full"
              style={{ background: "var(--vt-orange)" }}
            />

            {/* Tagline — supporting text, intentionally smaller than title */}
            <p
              className="opacity-0-init animate-fade-up delay-300 font-medium tracking-tight leading-[1.35] mb-8"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize:   "clamp(1rem, 1.5vw, 1.15rem)",
                color:      "var(--foreground)",
                opacity:    0.8,
              }}
            >
              Advancing Precision Agriculture Through AI, Remote Sensing &amp; Crop Phenotyping
            </p>

            {/* CTAs — clear three-tier hierarchy */}
            <div className="opacity-0-init animate-fade-up delay-400 flex flex-wrap items-center gap-3 mb-10">

              {/* Primary */}
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "var(--vt-maroon)" }}
              >
                Explore Research
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Elevated secondary — border + maroon text */}
              <a
                href="https://scholar.google.com/citations?user=xCaMSKYAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--vt-maroon)",
                  color:       "var(--vt-maroon)",
                  background:  "transparent",
                }}
              >
                Google Scholar
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Tertiary — plain text link */}
              <a
                href="https://datl-chandel.github.io/Agroclimate/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{ color: "var(--foreground)", opacity: 0.6 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")}
              >
                Agroclimate App
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

            </div>

          </div>

          {/* ── Right: profile photo (no duplicate badge) ── */}
          <div className="opacity-0-init animate-fade-up delay-300 hidden lg:flex flex-shrink-0 items-center justify-center" style={{ marginRight: "48px" }}>
            <div className="relative" style={{ width: 360, height: 360 }}>

              {/* Circular photo frame */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: "50%",
                  background:   "#7a7f88",
                  boxShadow:    "0 24px 60px rgba(0,0,0,0.13), 0 4px 16px rgba(134,31,65,0.07)",
                }}
              >
                <Image
                  src="/profile-picture.jpg"
                  alt="Dr. Abhilash Chandel"
                  fill
                  priority
                  sizes="360px"
                  className="object-cover object-center scale-[1.02]"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
