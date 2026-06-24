"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Research",     href: "#research"     },
  { label: "Projects",     href: "#projects"     },
  { label: "Publications", href: "#publications" },
  { label: "Team Activities", href: "#team-activities" },
  { label: "Contact",      href: "#contact"      },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        /* Always-on frosted glass — never transparent */
        background:     "rgba(250,250,249,0.94)",
        backdropFilter: "blur(18px)",
        /* Bottom border — grounds the bar against the page */
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        /* Elevation grows on scroll */
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(134,31,65,0.06)"
          : "none",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Brand ── */}
        <a href="#" className="flex items-center gap-3 group flex-shrink-0">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
            style={{ background: "var(--vt-maroon)" }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21V11.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M11.8 14.2C8.4 15 5 12.8 4.2 8C9 8.2 11.6 10.4 11.8 14.2Z" fill="white" />
              <path d="M12.2 12.4C15.4 12.9 18.6 10.6 19.4 6C14.8 6.4 12.2 8.6 12.2 12.4Z" fill="white" />
            </svg>
          </span>
          <div className="hidden sm:flex flex-col leading-none gap-0.5">
            <span
              className="text-[13px] font-bold text-gray-900 group-hover:text-gray-700 transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Dr. Abhilash
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Virginia Tech
            </span>
          </div>
        </a>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative px-3.5 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-200"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--vt-maroon)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(134,31,65,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "";
                (e.currentTarget as HTMLAnchorElement).style.background = "";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* ── Desktop CTA + mobile hamburger ── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="mailto:abhilashchandel@vt.edu"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-sm"
            style={{ background: "var(--vt-maroon)" }}
          >
            Get in Touch
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{ color: "var(--foreground)" }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.05)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "")}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background:     "rgba(250,250,249,0.98)",
            borderColor:    "rgba(0,0,0,0.07)",
            backdropFilter: "blur(18px)",
          }}
        >
          <div className="max-w-[1440px] mx-auto px-6 py-3 flex flex-col gap-0.5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-200"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--vt-maroon)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(134,31,65,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "";
                  (e.currentTarget as HTMLAnchorElement).style.background = "";
                }}
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 pb-1 border-t mt-2" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              <a
                href="mailto:abhilashchandel@vt.edu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all hover:opacity-85"
                style={{ background: "var(--vt-maroon)" }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
