const stats = [
  { label: "Google Scholar Citations", display: "1000+" },
  { label: "Publications",             display: "80+"   },
  { label: "Years of Experience",       display: "10+"   },
  { label: "Extension Attendees",      display: "5,971+" },
];

export default function Stats() {
  return (
    <section
      className="mb-2"
      style={{ background: "transparent" }}
    >
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Stats row — top divider separates it from hero cleanly */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 py-6 px-6 first:pl-0 last:pr-0"
            >
              <span
                className="text-2xl font-bold tracking-tight leading-none"
                style={{ color: "var(--vt-maroon)", fontFamily: "var(--font-dm-sans)" }}
              >
                {s.display}
              </span>
              <span
                className="text-sm text-gray-500 font-medium leading-tight"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
