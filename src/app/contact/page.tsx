import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sabina KC.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Get In Touch
        </h1>
        <p
          className="max-w-xl text-lg leading-8"
          style={{ color: "var(--fg-muted)" }}
        >
          Open to research collaborations, and conversations on microbial
          genomics, bioinformatics, and agricultural research. Feel free to
          reach out.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a href={`mailto:${site.email}`} className="btn btn-gold">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
          {site.location}
        </p>
      </div>
    </section>
  );
}
