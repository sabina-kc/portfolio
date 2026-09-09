import type { Metadata } from "next";
import {
  oralPresentations,
  posterPresentations,
  publications,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed publications and conference presentations by Sabina KC in plant genomics, microbiome sequencing, and agricultural microbiology.",
};

export default function PublicationsPage() {
  return (
    <section className="section">
      <div className="container flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Publications &amp; Presentations
        </h1>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">
          Publications
        </h2>
        <ol
          className="flex flex-col gap-3 text-sm"
          style={{ color: "var(--fg-muted)" }}
        >
          {publications.map((pub, i) => (
            <li key={pub.citation} className="flex gap-2">
              <span className="shrink-0" style={{ color: "var(--fg-muted)" }}>
                {i + 1}.
              </span>
              {pub.href ? (
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-current/30 underline-offset-2 hover:opacity-80"
                  style={{ color: "var(--accent)" }}
                >
                  {pub.citation}
                </a>
              ) : (
                <span>{pub.citation}</span>
              )}
            </li>
          ))}
        </ol>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">
          Oral Presentations
        </h2>
        <ol
          className="flex flex-col gap-3 text-sm"
          style={{ color: "var(--fg-muted)" }}
        >
          {oralPresentations.map((item, i) => (
            <li key={item} className="flex gap-2">
              <span className="shrink-0">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>

        <h2 className="mt-10 text-xl font-semibold tracking-tight">
          Poster Presentations
        </h2>
        <ol
          className="flex flex-col gap-3 text-sm"
          style={{ color: "var(--fg-muted)" }}
        >
          {posterPresentations.map((item, i) => (
            <li key={item} className="flex gap-2">
              <span className="shrink-0">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
