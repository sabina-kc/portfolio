const projects = [
  {
    title: "Project One",
    description: "A short description of this project goes here.",
    href: "#",
  },
  {
    title: "Project Two",
    description: "A short description of this project goes here.",
    href: "#",
  },
  {
    title: "Project Three",
    description: "A short description of this project goes here.",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-24 sm:px-10">
        {/* Hero */}
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Sabina KC
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Hi, I&apos;m Sabina — welcome to my portfolio. I&apos;m building
            things and writing about what I learn along the way. This site is
            a work in progress.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/sabinakc5/"
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
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-5 transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.05]"
              >
                <h3 className="font-medium text-black dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col gap-2 border-t border-black/[.08] pt-8 dark:border-white/[.145]">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Get in touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Feel free to reach out on{" "}
            <a
              href="https://www.linkedin.com/in/sabinakc5/"
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
