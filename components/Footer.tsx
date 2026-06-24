interface SocialLink {
  label: string;
  href: string;
  color: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    label: "X (Twitter)",
    href: "https://x.com/absikumar",
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.452-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhilash-kumar-chandel-ph-d-2bba5227",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Abhilash-Chandel",
    color: "#00CCBB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
        <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@datl.chandel",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/DATL-Chandel",
    color: "#181717",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:abhilashchandel@vt.edu",
    color: "#861f41",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

const academicLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=xCaMSKYAAAAJ&hl=en&oi=ao",
  },
  {
    label: "VT Faculty Profile",
    href: "https://www.arec.vaes.vt.edu/arec/tidewater/people/faculty/abhilash-chandel.html",
  },
  {
    label: "Agroclimate App",
    href: "https://datl-chandel.github.io/Agroclimate/",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t py-16"
      style={{ borderColor: "rgba(0,0,0,0.06)", background: "white" }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-8 h-8 rounded-md flex items-center justify-center text-white text-xs font-bold"
                style={{ background: "var(--vt-maroon)" }}
              >
                AC
              </span>
              <span className="font-semibold text-gray-900">Abhilash Chandel</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Assistant Professor of Precision Agriculture &amp; Data
              Management, Virginia Tech Tidewater AREC.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Contact
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div>
                <a
                  href="mailto:abhilashchandel@vt.edu"
                  className="hover:text-gray-900 transition-colors"
                  style={{ color: "var(--vt-maroon)" }}
                >
                  abhilashchandel@vt.edu
                </a>
              </div>
              <div className="leading-relaxed text-gray-400 text-xs">
                6321 Holland Rd.
                <br />
                Suffolk, VA 23437
              </div>
            </div>
          </div>

          {/* Connect — social icons */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Connect
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={link.label}
                  className="group flex items-center gap-2 min-w-0"
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110 group-hover:shadow-md"
                    style={{ background: link.color }}
                  >
                    {link.icon}
                  </span>
                  <span className="text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors truncate">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Academic links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Academic
            </p>
            <div className="flex flex-col gap-2.5">
              {academicLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5"
                >
                  {l.label}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M2 10L10 2M10 2H4.5M10 2V7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(0,0,0,0.06)" }}
        >
          <span className="text-xs text-gray-400">
            © {new Date().getFullYear()} Abhilash Chandel · Virginia Tech
            Tidewater AREC
          </span>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--ag-green)" }}
            />
            <span className="text-xs text-gray-400">
              Available for collaborations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
