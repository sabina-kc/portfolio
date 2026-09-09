const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    role: "Graduate Research Assistant",
    org: "Institute of Plant Breeding, Genetics & Genomics, University of Georgia",
    period: "06/2026 – present",
    bullets: [
      "Characterizing tall fescue endophyte (Epichloë coenophiala) strain diversity and host interactions",
      "Assembling a draft reference genome for beneficial E. coenophiala strains",
      "Preparing RNA libraries for Illumina sequencing and running HPC-based differential gene expression analysis",
    ],
  },
  {
    role: "Graduate Research Assistant",
    org: "USDA ARS Sugarbeet Research Unit & North Dakota State University",
    period: "01/2024 – 05/2026",
    bullets: [
      "Investigated fungal and bacterial microbiomes in raw diffusion sugarbeet juice via Oxford Nanopore sequencing",
      "Built DNA libraries and processed reads in HPC environments (fastp, Kraken2, Bracken) for QC, assembly, and taxonomic classification",
      "Analyzed microbial diversity and composition in R, QIIME, and Microbiome Analyst; supervised and trained two graduate students on ONT sequencing",
    ],
  },
  {
    role: "Biotech Intern",
    org: "Corteva AgriScience",
    period: "05/2025 – 08/2025",
    bullets: [
      "Optimized and validated high-throughput qPCR/ddPCR assays and molecular marker tools for trait detection",
      "Gained exposure to NGS workflows (Illumina, ONT, PacBio, Bionano) and genome informatics pipelines",
      "Shadowed crop transformation teams on Agrobacterium-mediated and RNA-protoplast transformation",
    ],
  },
  {
    role: "Research Assistant Intern",
    org: "Nepal Agriculture Research Council",
    period: "07/2023 – 11/2023",
    bullets: [
      "Collected and analyzed phenotypic data for a 30-genotype hybrid maize evaluation trial",
      "Supported coordinated farmer field trials and the maize seed maintenance program",
    ],
  },
  {
    role: "Agriculture Project Coordinator",
    org: "Quest for Development Initiatives",
    period: "01/2023 – 06/2023",
    bullets: [
      "Led sustainable farming training programs and coordinated stakeholder adoption of agricultural innovations",
      "Contributed to project surveys, report writing, and data analysis",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Tribhuvan University",
    period: "2021 – 2022",
    bullets: [
      "Designed randomized field trials evaluating potassium application effects on chili yield",
      "Managed field operations and participated in an Integrated Pest Management program",
    ],
  },
];

const education = [
  {
    degree: "Ph.D., Plant Breeding, Genetics & Genomics",
    org: "University of Georgia",
    period: "06/2026 – present",
  },
  {
    degree: "M.S., Plant Pathology, Microbiology & Biotechnology",
    org: "North Dakota State University — GPA 3.85/4.0",
    period: "01/2024 – 05/2026",
  },
  {
    degree: "B.S., Agriculture",
    org: "Tribhuvan University — GPA 4.0/4.0",
    period: "2018 – 2022",
  },
];

const certifications = [
  {
    name: "Genomics Data Science Specialization",
    org: "Johns Hopkins University (in progress)",
    period: "2025",
  },
  {
    name: "Professional Development Certification",
    org: "North Dakota State University",
    period: "2024",
  },
];

const skills = [
  {
    category: "Bioinformatics",
    items: [
      "16S rRNA / ITS amplicon analysis",
      "Genome assembly",
      "Comparative & functional genomics",
      "Read mapping (Bowtie)",
      "QC & taxonomic classification (fastp, Kraken2, Bracken)",
      "QIIME, Microbiome Analyst",
    ],
  },
  {
    category: "Molecular Biology",
    items: [
      "DNA/RNA extraction & purification",
      "PCR, qPCR, ddPCR",
      "Gel electrophoresis",
      "Illumina, Oxford Nanopore & PacBio library prep",
      "HPLC sugar analysis",
      "Genotyping",
    ],
  },
  {
    category: "Computational",
    items: ["R", "SPSS, SAS, JMP", "ArcGIS", "Galaxy", "HPC environments"],
  },
  {
    category: "Field Research",
    items: [
      "Greenhouse & field trial design",
      "Data collection & survey methods",
      "Experimental design & statistical analysis",
    ],
  },
];

const publications = [
  {
    citation:
      "KC, S., Kumal, S., Katuwal, D. R., & Shrestha, R. K. (2023). Effects of Different Levels of Potassium and Their Split Applications on Growth and Yield of Chili (Capsicum annuum L.). Asian Journal of Agricultural and Horticultural Research, 10(4), 364–373.",
    href: "https://doi.org/10.9734/ajahr/2023/v10i4278",
  },
  {
    citation:
      "KC, S. From microbiome to mitigation: Characterization of fungal contaminants and assessment of their photocatalytic growth inhibition in sugarbeet raw diffusion juice. North Dakota State University; 2026.",
    href: "#",
  },
  {
    citation:
      "KC, S., Bill, M., Branch, E., Liu, Z., Bolton, M.D., Bruni, G., Kandel, H.P., and Kandel, S.L. Profiling of fungal microbiomes of raw diffusion sugarbeet juice: implications for sucrose loss and processing challenges. Microbiological Research (in progress).",
    href: "#",
  },
  {
    citation:
      "KC, S., Bill, M., Branch, E., Liu, Z., Bolton, M.D., Bruni, G., Kandel, H.P., and Kandel, S.L. Isolation of Microbial Contaminants from Sugarbeet Processing Streams and Assessment of their Photocatalytic Growth Inhibition. Applied Environmental and Microbiological Research (in progress).",
    href: "#",
  },
];

const awards = [
  { name: "APS Foundation Books for the World Award", period: "2025" },
  { name: "Travel Award, Corteva DELTA Symposium", period: "2024" },
  { name: "Entrance Topper Award, Tribhuvan University", period: "2018" },
  {
    name: "Undergraduate Scholarship Award, Government of Nepal",
    period: "2018 – 2022",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      {/* Nav */}
      <header className="sticky top-0 z-10 w-full border-b border-black/[.08] bg-zinc-50/80 backdrop-blur dark:border-white/[.145] dark:bg-black/80">
        <nav className="mx-auto flex w-full max-w-3xl flex-wrap gap-x-5 gap-y-2 px-6 py-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:px-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-black dark:hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-16 sm:px-10">
        {/* Hero */}
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Sabina KC
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Ph.D. researcher in Plant Breeding, Genetics &amp; Genomics at the
            University of Georgia, working on microbial genomics,
            bioinformatics, and high-throughput sequencing.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Athens, GA, USA
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/sabina-kc-89020b180/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/[.08] px-4 py-2 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sabina-kc"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/[.08] px-4 py-2 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
            >
              GitHub
            </a>
            <a
              href="mailto:sabina.kc@uga.edu"
              className="rounded-full border border-black/[.08] px-4 py-2 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
            >
              Email
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="flex scroll-mt-20 flex-col gap-4">
          <SectionHeading>About</SectionHeading>
          <p className="text-zinc-600 dark:text-zinc-400">
            Experienced researcher who has led projects on microbiology,
            microbial genomics, bioinformatics, and high-throughput
            sequencing, collaborating with partners in government and
            industry. Demonstrated ability to adapt projects to changing
            needs — from wet-lab molecular biology through sequencing to
            downstream bioinformatics analysis.
          </p>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="flex scroll-mt-20 flex-col gap-6"
        >
          <SectionHeading>Experience</SectionHeading>
          <div className="flex flex-col gap-6">
            {experience.map((job) => (
              <div
                key={`${job.role}-${job.org}`}
                className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-5 dark:border-white/[.145]"
              >
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-medium text-black dark:text-zinc-50">
                    {job.role} · {job.org}
                  </h3>
                  <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-500">
                    {job.period}
                  </span>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="flex scroll-mt-20 flex-col gap-6">
          <SectionHeading>Education</SectionHeading>
          <div className="flex flex-col gap-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="flex flex-col justify-between gap-1 border-b border-black/[.08] pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline dark:border-white/[.145]"
              >
                <div>
                  <p className="font-medium text-black dark:text-zinc-50">
                    {item.degree}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.org}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-500">
                  {item.period}
                </span>
              </div>
            ))}
          </div>

          <h3 className="pt-2 font-medium text-black dark:text-zinc-50">
            Certifications
          </h3>
          <div className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"
              >
                <div>
                  <p className="text-sm font-medium text-black dark:text-zinc-50">
                    {cert.name}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {cert.org}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-500">
                  {cert.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="flex scroll-mt-20 flex-col gap-6">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-5 dark:border-white/[.145]"
              >
                <h3 className="font-medium text-black dark:text-zinc-50">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-black/[.04] px-3 py-1 text-xs text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section
          id="publications"
          className="flex scroll-mt-20 flex-col gap-6"
        >
          <SectionHeading>Publications</SectionHeading>
          <ol className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            {publications.map((pub, i) => (
              <li key={pub.citation} className="flex gap-2">
                <span className="shrink-0 text-zinc-400 dark:text-zinc-600">
                  {i + 1}.
                </span>
                {pub.href !== "#" ? (
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-300 underline-offset-2 hover:text-black dark:decoration-zinc-700 dark:hover:text-zinc-50"
                  >
                    {pub.citation}
                  </a>
                ) : (
                  <span>{pub.citation}</span>
                )}
              </li>
            ))}
          </ol>

          <h3 className="pt-2 font-medium text-black dark:text-zinc-50">
            Awards
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            {awards.map((award) => (
              <li key={award.name} className="flex justify-between gap-2">
                <span>{award.name}</span>
                <span className="shrink-0 text-zinc-500 dark:text-zinc-500">
                  {award.period}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="flex scroll-mt-20 flex-col gap-2 border-t border-black/[.08] pt-8 dark:border-white/[.145]"
        >
          <SectionHeading>Get in touch</SectionHeading>
          <p className="text-zinc-600 dark:text-zinc-400">
            Feel free to reach out via{" "}
            <a
              href="mailto:sabina.kc@uga.edu"
              className="font-medium text-black underline dark:text-zinc-50"
            >
              email
            </a>{" "}
            or on{" "}
            <a
              href="https://www.linkedin.com/in/sabina-kc-89020b180/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black underline dark:text-zinc-50"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
