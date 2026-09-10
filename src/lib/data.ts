export const site = {
  name: "Sabina KC",
  initials: "SK",
  role: "Ph.D. Researcher · Microbial Genomics & Bioinformatics",
  location: "Athens, GA, USA",
  email: "sabina.kc@uga.edu",
  linkedin: "https://www.linkedin.com/in/sabina-kc-89020b180/",
  github: "https://github.com/sabina-kc",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export const proofStats = [
  { number: "6", label: "Research Positions" },
  { number: "4", label: "Publications" },
  { number: "8", label: "Conference Presentations" },
  { number: "2", label: "Countries Worked In" },
];

export const focusAreas = [
  {
    title: "Microbial Genomics & Genome Assembly",
    description:
      "Assembling reference genomes and characterizing strain diversity of plant-associated microbes, from endophytes to sugarbeet-processing contaminants.",
    href: "/research#uga-endophyte",
  },
  {
    title: "Bioinformatics & NGS Analysis",
    description:
      "Processing Illumina, Oxford Nanopore, and PacBio sequencing data — quality control, taxonomic classification, and differential expression analysis in HPC environments.",
    href: "/research#sugarbeet-microbiome",
  },
  {
    title: "Molecular Biology & Field Research",
    description:
      "From DNA/RNA extraction, PCR, qPCR, and ddPCR to greenhouse and field trial design, data collection, and statistical analysis.",
    href: "/research#corteva",
  },
];

export const featuredResearch = [
  {
    id: "uga-endophyte",
    title: "Tall Fescue Endophyte Genomics",
    badge: "Genome Assembly",
    org: "University of Georgia",
    description:
      "Characterizing strain diversity and host interactions of the beneficial endophyte Epichloë coenophiala, and assembling a draft reference genome.",
    image: "/images/tall-fescue-endophyte.jpg",
  },
  {
    id: "sugarbeet-microbiome",
    title: "Sugarbeet Microbiome Profiling",
    badge: "Microbiome & NGS",
    org: "USDA-ARS / North Dakota State University",
    description:
      "Profiled fungal and bacterial microbiomes of raw diffusion sugarbeet juice via Oxford Nanopore sequencing to identify contaminants and develop management approaches.",
    image: "/images/sugarbeet-harvesting.jpg",
  },
  {
    id: "corteva",
    title: "Molecular Diagnostics for Trait Detection",
    badge: "Industry R&D",
    org: "Corteva AgriScience",
    description:
      "Optimized and validated high-throughput qPCR/ddPCR assays and molecular marker tools to support crop-health and trait-improvement projects.",
    image: "/images/corteva.jpg",
  },
];

export const experience = [
  {
    role: "Graduate Research Assistant",
    org: "Institute of Plant Breeding, Genetics & Genomics, University of Georgia",
    period: "06/2026 – present",
    id: "uga-endophyte",
    image: "/images/tall-fescue-endophyte.jpg",
    bullets: [
      "Characterizing tall fescue endophyte (Epichloë coenophiala) strain diversity and host interactions",
      "Assembling a draft reference genome for beneficial E. coenophiala strains",
      "Developing molecular markers to determine the earliest detectable stage of endophyte infection",
      "Evaluating endophyte transmission rates across strain/host combinations and their effects on abiotic and biotic stresses",
      "Preparing RNA libraries for Illumina sequencing and running HPC-based differential gene expression analysis",
      "Conducting greenhouse and field trials, including experimental setup, data collection, and statistical analysis",
    ],
  },
  {
    role: "Graduate Research Assistant",
    org: "USDA ARS Sugarbeet Research Unit & North Dakota State University",
    period: "01/2024 – 05/2026",
    id: "sugarbeet-microbiome",
    image: "/images/sugarbeet-harvesting.jpg",
    bullets: [
      "Investigated fungal and bacterial microbiomes in raw diffusion sugarbeet juice via Oxford Nanopore sequencing and developed detection and management approaches for sugar processing streams",
      "Proficient in wet-lab and molecular biology tools: DNA/RNA extraction, PCR, qPCR, gel electrophoresis, ELISA, HPLC sugar quantification, and NGS quality control",
      "Prepared DNA libraries for Oxford Nanopore sequencing and processed reads in HPC environments for QC, assembly, and taxonomic classification (fastp, Kraken2, Bracken)",
      "Analyzed microbial community abundance, diversity, and differential composition using R, QIIME, and Microbiome Analyst",
      "Supervised and trained two graduate students/research assistants on ONT sequencing",
      "Assisted on a transcriptomics (RNA-seq) project studying differential gene expression in sugarbeet treated with chlorine dioxide, plus greenhouse and field trials",
    ],
  },
  {
    role: "Biotech Intern",
    org: "Corteva AgriScience",
    period: "05/2025 – 08/2025",
    id: "corteva",
    image: "/images/corteva.jpg",
    bullets: [
      "Optimized protocols for nucleic acid extraction and assay detection to support crop-health projects",
      "Developed molecular detection assays (qPCR, ddPCR) to detect biological targets",
      "Gained exposure to NGS workflows (Illumina, ONT, PacBio, Bionano) and genome informatics pipelines across crop and insect species",
      "Shadowed crop transformation teams on Agrobacterium-mediated and RNA-protoplast transformation",
    ],
  },
  {
    role: "Research Assistant Intern",
    org: "Nepal Agriculture Research Council",
    period: "07/2023 – 11/2023",
    id: "narc",
    image: null,
    bullets: [
      "Performed phenotypic data collection and analysis for a Coordinated Varietal Trial evaluating 30 hybrid maize genotypes",
      "Supported a Coordinated Farmers Field Trial of 8 maize genotypes at Khumaltar, Lalitpur",
      "Worked in the maize seed maintenance program across greenhouse and open-field trials",
    ],
  },
  {
    role: "Agriculture Project Coordinator",
    org: "Quest for Development Initiatives",
    period: "01/2023 – 06/2023",
    id: "quest",
    image: null,
    bullets: [
      "Led sustainable farming training programs and coordinated stakeholders to implement agricultural innovations",
      "Contributed to a solar-powered cold storage feasibility study and a nutrition-sensitive food production project",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Tribhuvan University",
    period: "2021 – 2022",
    id: "tu",
    image: null,
    bullets: [
      "Designed randomized field trials evaluating split potassium application effects on chili (Capsicum annuum L.) yield",
      "Managed field operations and participated in an Integrated Pest Management program",
    ],
  },
];

export const education = [
  {
    degree: "Ph.D., Plant Breeding, Genetics & Genomics",
    org: "University of Georgia",
    period: "06/2026 – present",
    image: null as string | null,
  },
  {
    degree: "M.S., Plant Pathology, Microbiology & Biotechnology",
    org: "North Dakota State University — GPA 3.85/4.0",
    period: "01/2024 – 05/2026",
    image: "/images/defense-ms.jpg",
  },
  {
    degree: "B.S., Agriculture",
    org: "Tribhuvan University — GPA 4.0/4.0",
    period: "2018 – 2022",
    image: "/images/bachelor-defense.jpg",
  },
];

export const certifications = [
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

export const skills = [
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

export const awards = [
  { name: "APS Foundation Books for the World Award", period: "2025" },
  { name: "Travel Award, Corteva DELTA Symposium", period: "2024" },
  { name: "Entrance Topper Award, Tribhuvan University", period: "2018" },
  {
    name: "Undergraduate Scholarship Award, Government of Nepal",
    period: "2018 – 2022",
  },
];

export const publications = [
  {
    citation:
      "KC, S., Kumal, S., Katuwal, D. R., & Shrestha, R. K. (2023). Effects of Different Levels of Potassium and Their Split Applications on Growth and Yield of Chili (Capsicum annuum L.). Asian Journal of Agricultural and Horticultural Research, 10(4), 364–373.",
    href: "https://doi.org/10.9734/ajahr/2023/v10i4278",
  },
  {
    citation:
      "KC, S. From microbiome to mitigation: Characterization of fungal contaminants and assessment of their photocatalytic growth inhibition in sugarbeet raw diffusion juice. North Dakota State University; 2026.",
    href: null,
  },
  {
    citation:
      "KC, S., Bill, M., Branch, E., Liu, Z., Bolton, M.D., Bruni, G., Kandel, H.P., and Kandel, S.L. Profiling of fungal microbiomes of raw diffusion sugarbeet juice: implications for sucrose loss and processing challenges. Microbiological Research (in progress).",
    href: null,
  },
  {
    citation:
      "KC, S., Bill, M., Branch, E., Liu, Z., Bolton, M.D., Bruni, G., Kandel, H.P., and Kandel, S.L. Isolation of Microbial Contaminants from Sugarbeet Processing Streams and Assessment of their Photocatalytic Growth Inhibition. Applied Environmental and Microbiological Research (in progress).",
    href: null,
  },
];

export const oralPresentations = [
  "Fungal contaminants in the sugarbeet raw diffusion juice: A microbiome-driven analysis, NDSU Research Day, 10th April 2025.",
  "Microbial Contaminants in raw Sugarbeet juice: A microbiome-driven analysis, 55th Annual Sugarbeet Research Reporting Session, 14th January 2025.",
  "Profiling of fungal contaminants in Sugarbeet factory processing and their targeted management approaches, 56th Annual Sugarbeet Research Reporting Session, 13th January 2026.",
  "From microbiome to mitigation: Characterization of fungal contaminants and assessment of their photocatalytic growth inhibition in sugarbeet processing. Department of Plant Pathology, Microbiology and Biotechnology, NDSU, 8th April 2026.",
];

export const presentationPhotos = [
  {
    src: "/images/oral-presentation-sugarbeet-processing.jpg",
    caption: "Presenting on sugarbeet processing, NDSU Research Day",
  },
  {
    src: "/images/oral-presentation-reporting-session.jpg",
    caption: "Annual Sugarbeet Research Reporting Session",
  },
  {
    src: "/images/corteva-delta-symposium.jpg",
    caption: "Poster presentation, Corteva DELTA Symposium 2024",
  },
  {
    src: "/images/aps-north-central-poster.jpg",
    caption: "Poster presentation, APS North Central Division 2024",
  },
];

export const posterPresentations = [
  "Assessing microbial contaminants in the raw sugarbeet juice: A microbiome-driven analysis, Annual Meeting 2024 of the American Phytopathological Society-North Central Division.",
  "Assessing microbial contaminants in the raw sugarbeet juice: A microbiome-driven analysis, CORTEVA DELTA Symposium, 24th–26th September 2024.",
  "Assessment of microbial contaminants in the sugarbeet raw juice, 3 Minute Thesis Competition-Graduate School, 13th February 2025.",
  "Profiling of fungal microbiomes of raw diffusion sugarbeet juice: implications for sucrose loss and processing challenges, Annual Meeting 2026 of the American Phytopathological Society-Plant Health.",
];
