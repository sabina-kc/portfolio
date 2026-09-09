import Link from "next/link";
import { nav, site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark">
      <div className="container flex flex-col gap-10 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-semibold">
              <span
                className="flex size-8 items-center justify-center rounded-full text-sm font-semibold"
                style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
              >
                {site.initials}
              </span>
              <span>{site.name}</span>
            </div>
            <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
              {site.role} · University of Georgia
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="text-sm font-semibold tracking-wide uppercase">
              Quick Links
            </h5>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="text-sm font-semibold tracking-wide uppercase">
              Connect
            </h5>
            <a
              href={`mailto:${site.email}`}
              className="text-sm"
              style={{ color: "var(--fg-muted)" }}
            >
              Email
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
              style={{ color: "var(--fg-muted)" }}
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
              style={{ color: "var(--fg-muted)" }}
            >
              GitHub
            </a>
          </div>
        </div>

        <div
          className="border-t pt-6 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
        >
          © {year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
