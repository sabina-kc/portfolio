import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import {
  awards,
  featuredResearch,
  focusAreas,
  proofStats,
  site,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-5">
            <span className="badge">{site.role}</span>
            <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              Decoding Microbes That{" "}
              <span style={{ color: "var(--accent)" }}>Protect Crops</span>
            </h1>
            <p
              className="max-w-xl text-lg leading-8"
              style={{ color: "var(--fg-muted)" }}
            >
              Ph.D. researcher in Plant Breeding, Genetics &amp; Genomics at
              the University of Georgia — using genomics, bioinformatics, and
              high-throughput sequencing to understand plant-microbe
              interactions and improve crop health.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/research" className="btn btn-gold">
                View My Research
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
            <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
              Ph.D. Student, Plant Breeding, Genetics &amp; Genomics, UGA · M.S.
              Plant Pathology, Microbiology &amp; Biotechnology, NDSU
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--accent) 35%, transparent), transparent 70%)",
                }}
              />
              <div
                className="size-56 overflow-hidden rounded-full border-4 sm:size-72"
                style={{
                  borderColor: "color-mix(in srgb, var(--accent) 40%, var(--border))",
                }}
              >
                <Image
                  src={withBasePath("/images/sabina-headshot.jpg")}
                  alt={`${site.name} — ${site.role}`}
                  width={288}
                  height={288}
                  priority
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section
        className="border-y py-10"
        style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}
      >
        <div className="container grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {proofStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What I Do</h2>
            <p>
              Core areas of focus at the intersection of microbiology,
              genomics, and agriculture.
            </p>
          </div>
          <div className="grid-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="card">
                <h4 className="font-medium">{area.title}</h4>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  {area.description}
                </p>
                <Link href={area.href} className="card-link">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Featured Research</h2>
            <p>Selected projects across academia, government, and industry.</p>
          </div>
          <div className="grid-3">
            {featuredResearch.map((project) => (
              <div key={project.id} className="card">
                {project.image && (
                  <div className="-mx-6 -mt-6 mb-1 overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={240}
                      className="h-40 w-full object-cover"
                    />
                  </div>
                )}
                <span className="badge w-fit">{project.badge}</span>
                <h4 className="font-medium">{project.title}</h4>
                <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                  {project.org}
                </p>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  {project.description}
                </p>
                <Link href={`/research#${project.id}`} className="card-link">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "#f2f3ee" }}>Recognition</h2>
            <p style={{ color: "#a7ada0" }}>
              Awards recognizing research and academic contributions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {awards.map((award) => (
              <div
                key={award.name}
                className="flex items-center justify-between gap-4 rounded-xl border px-5 py-4"
                style={{ borderColor: "rgba(242,243,238,0.14)" }}
              >
                <span className="text-sm">{award.name}</span>
                <span
                  className="stat-number-gold shrink-0 text-sm font-mono"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {award.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Interested in Collaborating on Plant-Microbe Research?
          </h2>
          <p className="max-w-xl" style={{ color: "var(--fg-muted)" }}>
            I&apos;m open to research collaborations, and discussions on
            microbial genomics and bioinformatics in agriculture.
          </p>
          <Link href="/contact" className="btn btn-gold">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
