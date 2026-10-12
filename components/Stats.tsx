const stats = [
  { label: "Google Scholar Citations", display: "1000+" },
  { label: "Publications",             display: "80+"   },
  { label: "Years of Experience",       display: "10+"   },
  { label: "Stakeholders Outreached", display: "6000+" },
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3 py-5 lg:py-6 lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <span
                className="text-2xl font-bold tracking-tight leading-none"
                style={{ color: "var(--vt-maroon)", fontFamily: "var(--font-dm-sans)" }}
              >
                {s.display}
              </span>
              <span
                className="text-[13px] lg:text-sm text-gray-500 font-medium leading-tight"
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
