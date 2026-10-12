import data from "@/data/research-publications.json";

const AUTHOR_NAME = "AK Chandel";

/** Renders an author string with Dr. Chandel's name emphasised. */
function Authors({ value }: { value: string }) {
  const parts = value.split(AUTHOR_NAME);

  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <strong style={{ color: "var(--vt-maroon)", fontWeight: 600 }}>
              {AUTHOR_NAME}
            </strong>
          )}
        </span>
      ))}
    </>
  );
}

function scholarSearchUrl(title: string) {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
}

export default function ResearchPublications() {
  const { profileUrl, publications } = data;

  return (
    <section id="publications" className="pt-28 pb-16" style={{ background: "transparent" }}>
      <div className="max-w-[1440px] mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--vt-maroon)" }}
            >
              Peer-Reviewed Research
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4"
              style={{ fontFamily: "var(--font-dm-sans)", color: "var(--foreground)" }}
            >
              Research{" "}
              <span style={{ color: "var(--vt-maroon)" }}>publications</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Ten most recent journal articles on precision agriculture, remote
              sensing, crop phenotyping and agricultural sensing systems.
            </p>
          </div>

          {/* Google Scholar CTA */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 flex-shrink-0 self-start"
            style={{ background: "var(--vt-maroon)" }}
          >
            View all publications on Google Scholar
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* ── Citation list ── */}
        <ol className="flex flex-col">
          {publications.map((p, i) => (
            <li key={p.title}>
              <a
                href={scholarSearchUrl(p.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 sm:gap-7 py-6 px-3 -mx-3 rounded-lg border-t transition-colors hover:bg-[rgba(134,31,65,0.035)]"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                {/* Index */}
                <span
                  className="font-bold tabular-nums flex-shrink-0 pt-0.5"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.95rem",
                    color: "var(--vt-maroon)",
                    opacity: 0.45,
                    width: "2ch",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Citation body */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold text-gray-900 leading-snug mb-2 transition-colors group-hover:text-[var(--vt-maroon)]"
                    style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1rem, 1.25vw, 1.1rem)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-1.5">
                    <Authors value={p.authors} />
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="italic">{p.venue}</span>
                    <span className="mx-1.5">·</span>
                    <span>{p.year}</span>
                  </p>
                </div>

                {/* Citation count */}
                <div className="flex-shrink-0 self-start pt-0.5 text-right" style={{ minWidth: "5.5rem" }}>
                  {p.citations > 0 ? (
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{
                        background: "rgba(134,31,65,0.07)",
                        color: "var(--vt-maroon)",
                      }}
                    >
                      {p.citations} {p.citations === 1 ? "citation" : "citations"}
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-gray-300">New</span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ol>

        <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }} />

      </div>
    </section>
  );
}
