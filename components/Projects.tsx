import Image from "next/image";
import agroclimateStats from "@/data/agroclimate-stats.json";

const usageStats = [
  { value: agroclimateStats.totalUsers.toLocaleString(),  label: "Total Users" },
  { value: agroclimateStats.totalVisits.toLocaleString(), label: "Total Visits" },
  { value: "30+ days", label: "Active Engagement" },
];

const patents = [
  {
    status: "Patent Granted · IN 508805",
    statusColor: "var(--ag-green)",
    statusBg: "rgba(74,124,89,0.08)",
    statusBorder: "rgba(74,124,89,0.2)",
    title: "Sensor-Based Intra-Row Weeding System",
    description:
      "An autonomous crop-detection sensor paired with a PMDC-actuated rotary weeder on a 4-bar linkage, reducing herbicide use, manual labor, and crop injury during in-row weeding.",
    assignee: "Indian Patent · Assigned to IIT Kharagpur",
  },
  {
    status: "Provisional Patent · VTIP 26-081",
    statusColor: "var(--data-blue)",
    statusBg: "rgba(107,127,163,0.08)",
    statusBorder: "rgba(107,127,163,0.2)",
    title: "Modular 3D-Printed Microneedle Biosensor",
    description:
      "A wearable, lithography-free electrochemical platform for wireless, in-situ monitoring of biotic and abiotic plant stress, fabricated via SLA 3D printing with modular, multiplexed surface chemistry.",
    assignee: "Virginia Tech Intellectual Properties (VTIP)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28" style={{ background: "transparent" }}>
      <div className="max-w-[1440px] mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-14 max-w-2xl">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--vt-maroon)" }}
          >
            Innovation &amp; Impact
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "var(--foreground)" }}
          >
            Projects that{" "}
            <span style={{ color: "var(--vt-maroon)" }}>ship to the field</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Tools and inventions that move research out of the lab and into
            the hands of Virginia growers.
          </p>
        </div>

        {/* ── AgroVAP spotlight ── */}
        <div
          className="grid md:grid-cols-2 rounded-2xl overflow-hidden border mb-8"
          style={{
            background: "white",
            borderColor: "rgba(0,0,0,0.07)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 10px 30px -12px rgba(0,0,0,0.10)",
          }}
        >
          {/* Image side */}
          <div className="relative min-h-[280px]" style={{ background: "#0d2b4e" }}>
            <Image
              src="/publications/bse-372-v2.png"
              alt="Agroclimate Viewer & Planner App"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content side */}
          <div className="flex flex-col p-8 md:p-10">
            <span
              className="self-start px-2.5 py-1 rounded-full text-xs font-semibold border mb-5"
              style={{ color: "var(--data-blue)", background: "rgba(107,127,163,0.08)", borderColor: "rgba(107,127,163,0.2)" }}
            >
              Live · Decision Support Tool
            </span>

            <h3
              className="text-2xl font-bold mb-3 leading-snug"
              style={{ fontFamily: "var(--font-dm-sans)", color: "var(--foreground)" }}
            >
              Agroclimate Viewer &amp; Planner App
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mb-7">
              A web-based decision support platform delivering real-time
              agroclimate data and smart farming insights to growers across
              Virginia, built to bridge the gap between research and
              on-farm decision-making.
            </p>

            {/* Usage stats */}
            <div className="grid grid-cols-3 gap-4 mb-5">
              {usageStats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-xl font-bold leading-none mb-1"
                    style={{ color: "var(--vt-maroon)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-400 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Impact highlight */}
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3 mb-8"
              style={{ background: "rgba(134,31,65,0.05)", border: "1px solid rgba(134,31,65,0.12)" }}
            >
              <span
                className="text-3xl font-bold leading-none"
                style={{ color: "var(--vt-maroon)", fontFamily: "var(--font-dm-sans)" }}
              >
                ~$200M
              </span>
              <span className="text-xs text-gray-500 leading-tight whitespace-nowrap">
                Modeled annual Virginia impact
              </span>
            </div>

            <a
              href="https://datl-chandel.github.io/Agroclimate/"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 mt-auto"
              style={{ background: "var(--vt-maroon)" }}
            >
              Launch App
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Patent / IP cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "white", borderColor: "rgba(0,0,0,0.07)" }}
            >
              <span
                className="self-start px-2.5 py-1 rounded-full text-xs font-semibold border mb-4"
                style={{ color: p.statusColor, background: p.statusBg, borderColor: p.statusBorder }}
              >
                {p.status}
              </span>

              <h3
                className="text-lg font-bold mb-3 leading-snug"
                style={{ fontFamily: "var(--font-dm-sans)", color: "var(--foreground)" }}
              >
                {p.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              <p className="text-xs text-gray-400 font-medium">{p.assignee}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
