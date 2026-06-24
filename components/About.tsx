const timeline = [
  {
    year: "2021–Present",
    role: "Assistant Professor",
    org: "Virginia Tech, Tidewater AREC",
    detail: "50% Research · 50% Extension",
    color: "var(--vt-maroon)",
  },
  {
    year: "May–Dec 2021",
    role: "Postdoctoral Research Associate",
    org: "Washington State University",
    detail: "Precision Agriculture Systems",
    color: "var(--vt-orange)",
  },
  {
    year: "2017–2021",
    role: "Graduate Research Assistant",
    org: "Washington State University",
    detail: "Ph.D. in Biological & Agricultural Engineering",
    color: "var(--data-blue)",
  },
  {
    year: "2015–2017",
    role: "Junior Project Officer",
    org: "IIT Kharagpur",
    detail: "Farm Machinery & Power Engineering",
    color: "var(--ag-green)",
  },
];

const awards = [
  { year: "2021", label: "WSU Plant Science Symposium Finalist" },
  { year: "2021", label: "Graduate Student Leadership Award, CAHNRS" },
  { year: "2020", label: "Digital Ag-Athon Winner — Microsoft & WSU" },
  { year: "2020", label: "Walter & Vinnie Hinz Outstanding Graduate Student Award" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 border-t"
      style={{ borderColor: "rgba(0,0,0,0.06)", background: "transparent" }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Bio */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--vt-maroon)" }}
            >
              About
            </p>
            <h2
              className="text-4xl font-bold tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm-sans)", color: "var(--foreground)" }}
            >
              Bridging labs and{" "}
              <span style={{ color: "var(--ag-green)" }}>land</span>
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed text-base">
              <p>
                Dr. Abhilash Chandel is an Assistant Professor of Precision
                Agriculture and Data Management at Virginia Tech's Tidewater
                Agricultural Research and Extension Center in Suffolk, VA.
              </p>
              <p>
                His research program develops engineering solutions for the
                "farms of the future" — systems that use remote sensing, IoT,
                and machine learning to address climate-driven challenges in
                crop production.
              </p>
              <p>
                With equal emphasis on research and extension, he works directly
                with Virginia growers to translate data-driven tools into
                practical decisions, from cultivar selection to targeted spray
                applications.
              </p>
            </div>

            {/* Education */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Education
              </p>
              <div className="space-y-3">
                {[
                  ["Ph.D.", "Biological & Agricultural Engineering", "Washington State University, 2021"],
                  ["M.Tech", "Farm Machinery & Power Engineering", "IIT Kharagpur, 2015"],
                  ["B.Tech", "Agricultural & Food Engineering", "IIT Kharagpur, 2014"],
                ].map(([deg, field, inst]) => (
                  <div key={deg} className="flex gap-3">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-md self-start mt-0.5"
                      style={{
                        background: "rgba(134,31,65,0.08)",
                        color: "var(--vt-maroon)",
                      }}
                    >
                      {deg}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">{field}</div>
                      <div className="text-xs text-gray-400">{inst}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Timeline + Awards */}
          <div>
            {/* Timeline */}
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Career Timeline
            </p>
            <div className="relative space-y-6 mb-14">
              <div
                className="absolute left-[7px] top-2 bottom-2 w-px"
                style={{ background: "rgba(0,0,0,0.07)" }}
              />
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-4 relative">
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 border-white flex-shrink-0 mt-1 z-10"
                    style={{ background: t.color }}
                  />
                  <div>
                    <span className="text-xs font-semibold text-gray-400">{t.year}</span>
                    <div
                      className="text-sm font-bold mt-0.5"
                      style={{ color: "var(--foreground)" }}
                    >
                      {t.role}
                    </div>
                    <div className="text-sm text-gray-500">{t.org}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Selected Awards
            </p>
            <div className="space-y-3">
              {awards.map((a) => (
                <div
                  key={a.label}
                  className="flex items-start gap-3 p-3 rounded-xl border"
                  style={{
                    borderColor: "rgba(0,0,0,0.06)",
                    background: "white",
                  }}
                >
                  <span
                    className="text-xs font-bold px-1.5 py-0.5 rounded-md flex-shrink-0"
                    style={{
                      background: "rgba(200,75,20,0.08)",
                      color: "var(--vt-orange)",
                    }}
                  >
                    {a.year}
                  </span>
                  <span className="text-sm text-gray-600">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
