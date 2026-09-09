import type { Metadata } from "next";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research and work experience of Sabina KC across academia, government, and industry — plant genomics, microbiome sequencing, and molecular diagnostics.",
};

export default function ResearchPage() {
  return (
    <section className="section">
      <div className="container flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Research &amp; Experience
        </h1>
        <p
          className="max-w-2xl text-lg leading-8"
          style={{ color: "var(--fg-muted)" }}
        >
          A timeline of research roles spanning plant genomics, microbiome
          sequencing, molecular diagnostics, and field trials — across
          university, government, and industry labs.
        </p>

        <div className="mt-8 flex flex-col gap-6">
          {experience.map((job) => (
            <div
              key={job.id}
              id={job.id}
              className="card scroll-mt-24"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-medium">
                  {job.role} · {job.org}
                </h3>
                <span
                  className="shrink-0 text-sm"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {job.period}
                </span>
              </div>
              <ul
                className="list-disc space-y-1 pl-5 text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
