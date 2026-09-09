import type { Metadata } from "next";
import { certifications, education, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Education, certifications, and skills of Sabina KC, Ph.D. researcher in plant genomics and bioinformatics.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About Me
          </h1>
          <p
            className="max-w-2xl text-lg leading-8"
            style={{ color: "var(--fg-muted)" }}
          >
            Experienced researcher who has led projects on microbiology,
            microbial genomics, bioinformatics, and high-throughput
            sequencing, collaborating with partners in government and
            industry. Demonstrated ability to adapt projects to changing
            needs — from wet-lab molecular biology through sequencing to
            downstream bioinformatics analysis.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header" style={{ margin: 0, textAlign: "left", alignItems: "flex-start" }}>
            <h2>Education</h2>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="flex flex-col justify-between gap-1 border-b pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline"
                style={{ borderColor: "var(--border)" }}
              >
                <div>
                  <p className="font-medium">{item.degree}</p>
                  <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                    {item.org}
                  </p>
                </div>
                <span
                  className="shrink-0 text-sm"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {item.period}
                </span>
              </div>
            ))}
          </div>

          <h3 className="mt-10 mb-4 font-medium">Certifications</h3>
          <div className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"
              >
                <div>
                  <p className="text-sm font-medium">{cert.name}</p>
                  <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                    {cert.org}
                  </p>
                </div>
                <span
                  className="shrink-0 text-sm"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {cert.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header" style={{ margin: 0, textAlign: "left", alignItems: "flex-start" }}>
            <h2>Skills</h2>
          </div>
          <div className="grid-3 mt-8">
            {skills.map((group) => (
              <div key={group.category} className="card">
                <h4 className="font-medium">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full px-3 py-1 text-xs"
                      style={{
                        background: "var(--bg-alt)",
                        color: "var(--fg-muted)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
