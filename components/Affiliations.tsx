import Image from "next/image";

const affiliations = [
  {
    abbr: "VT",
    name: "Virginia Tech",
    sub: "Asst. Professor",
    logo: "/logos/vt.png",
  },
  {
    abbr: "WSU",
    name: "Washington State Univ.",
    sub: "Ph.D. 2021",
    logo: "/logos/wsu.png",
  },
  {
    abbr: "IIT",
    name: "IIT Kharagpur",
    sub: "B.Tech · M.Tech",
    logo: "/logos/iit.png",
  },
];

export default function Affiliations() {
  return (
    <section
      className="py-6 md:py-5"
      style={{ background: "transparent" }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-2">

          {/* Label cell */}
          <div className="flex items-center pb-2 md:pb-0 md:pr-8 sm:col-span-2 md:col-span-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
              Affiliated With
            </span>
          </div>

          {/* One card per remaining column */}
          {affiliations.map((a) => (
            <div
              key={a.abbr}
              className="flex items-center gap-3 py-3 md:py-5 md:px-8"
            >
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src={a.logo}
                  alt={a.name}
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div>
                <div
                  className="text-sm font-semibold leading-tight text-gray-900"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {a.name}
                </div>
                <div className="text-[11px] text-gray-400 leading-tight mt-0.5">
                  {a.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
