import React, { useState } from "react";

export default function PortfolioWireframe() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <HeaderWireframe />
        <HeroWireframe />
        <ValueWireframe />
        <ProjectsWireframe />
        <StackWireframe />
        <BlogWireframe />
        <AboutWireframe />
        <ContactCtaWireframe />
        <FooterWireframe />
      </div>
    </main>
  );
}

function HeaderWireframe() {
  const [active, setActive] = useState<
    "projects" | "stack" | "about" | "blog" | "contact"
  >("projects");

  const navItems: { id: typeof active; label: string }[] = [
    { id: "projects", label: "Projects" },
    { id: "stack", label: "Stack" },
    { id: "about", label: "About" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 mb-6 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Profile avatar placeholder */}
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-400 via-sky-400 to-fuchsia-500 p-[2px]">
            <div className="h-full w-full rounded-full bg-slate-950" />
          </div>
          <div className="leading-tight">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-100">
              dgrcodex
            </div>
            <div className="text-[10px] text-slate-500">
              Sambalab · Software & Culture
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-3 text-xs">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`hidden h-7 items-center justify-center rounded-full px-3 text-[11px] md:inline-flex transition-colors ${
                active === item.id
                  ? "bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-500 text-slate-900 font-semibold"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-emerald-300"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/dgrcodex"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-7 items-center justify-center rounded-full bg-slate-900/90 px-3 text-[11px] text-slate-100 hover:bg-slate-800 hover:text-emerald-300"
          >
            GitHub
          </a>
          <button className="hidden h-8 items-center rounded-full bg-slate-100/90 px-3 text-xs font-medium text-slate-950 hover:bg-white md:inline-flex">
            Download CV
          </button>
        </nav>
      </div>
    </header>
  );
}

function HeroWireframe() {
  const selectedProjects = [
    {
      name: "Ingemtrust",
      role: "Full Stack · Next.js + Django",
      summary: "Consulting website + internal tools for engineering firm.",
      tags: ["B2B", "Cloud", "Consulting"],
    },
    {
      name: "Agrícola BE",
      role: "Full Stack · Next.js + Supabase",
      summary:
        "Brand + ecommerce-ready site for gourmet agricultural products.",
      tags: ["Ecommerce", "Brand", "Content"],
    },
    {
      name: "Suda La Lengua",
      role: "Platform · Next.js + Sanity",
      summary: "Digital cultural magazine with modular monthly issues.",
      tags: ["Culture", "Publishing", "CMS"],
    },
  ];

  return (
    <section
      id="hero"
      className="mb-10 rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-6"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400">
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        Software Developer · Python · Cloud · AI
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* LEFT: intro copy + CTAs */}
        <div className="flex-1 space-y-4">
          <h1 className="text-xl font-semibold text-slate-50 md:text-2xl">
            Building AI-aware, cloud-ready products for teams that need more
            than a landing page.
          </h1>
          <p className="max-w-xl text-sm text-slate-400">
            I work with Python, Next.js and cloud platforms to design systems
            that connect internal tools, data and AI assistants, with a strong
            focus on code quality and long-term maintainability.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <button className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-950 hover:bg-white">
              View projects
            </button>
            <button className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-slate-200 hover:bg-slate-800">
              View tech stack
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-slate-400">
            {["Python", "Django", "Next.js", "Azure", "Docker", "PostgreSQL"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-900 px-2 py-1 text-[10px]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* RIGHT: Selected projects with real data */}
        <div className="flex-1 rounded-xl bg-slate-900/60 p-4">
          <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
            <span className="font-medium text-slate-200">Selected projects</span>
            <span className="text-slate-500">dgrcodex · 2023–2025</span>
          </div>

          <div className="space-y-3">
            {selectedProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-start justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950/40 p-3"
              >
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-100">
                    {project.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {project.role}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {project.summary}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/80 px-2 py-0.5 text-[10px] font-medium text-slate-950">
                    Case study
                  </span>
                  <div className="flex flex-wrap justify-end gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
            <span>View all projects</span>
            <span className="h-5 w-20 rounded bg-slate-950/60" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueWireframe() {
  return (
    <section className="mb-10">
      <div className="mb-4 text-sm font-semibold text-slate-100">
        What I do
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-4">
          <h3 className="mb-2 text-xs font-semibold text-slate-100">
            AI & Python
          </h3>
          <p className="mb-2 text-[11px] text-slate-400">
            Prototyping and integrating LLMs, internal assistants and
            evaluation workflows into existing products.
          </p>
          <p className="text-[11px] text-slate-500">
            Focus on robust prompts, test suites and safe integration with real
            data.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-4">
          <h3 className="mb-2 text-xs font-semibold text-slate-100">
            Cloud & Integration
          </h3>
          <p className="mb-2 text-[11px] text-slate-400">
            Designing backends and services that run on Azure, Vercel or VPS,
            with APIs that talk to each other.
          </p>
          <p className="text-[11px] text-slate-500">
            From small services to architectures that can grow with the
            product.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-4">
          <h3 className="mb-2 text-xs font-semibold text-slate-100">
            Full Stack & Product
          </h3>
          <p className="mb-2 text-[11px] text-slate-400">
            Building interfaces with Next.js and Tailwind that are simple to
            use and easy to iterate on.
          </p>
          <p className="text-[11px] text-slate-500">
            I care about content, brand and how the product feels in real
            usage.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectsWireframe() {
  const [lang, setLang] = useState<"en" | "es">("en");

  const t = (en: string, es: string) => (lang === "en" ? en : es);

  const projects = [
    {
      id: "ingemtrust",
      year: "2024",
      titleEn: "Ingemtrust Engineering",
      titleEs: "Ingemtrust Ingeniería",
      roleEn: "Full Stack Developer · Technical Lead",
      roleEs: "Desarrollador full stack · Referente técnico",
      typeEn: "B2B · Engineering consulting",
      typeEs: "B2B · Consultora de ingeniería",
      summaryEn:
        "Corporate site and internal tools with Next.js + Django, ready to integrate AI assistants.",
      summaryEs:
        "Sitio corporativo y herramientas internas con Next.js + Django, listo para integrar asistentes de IA.",
      stack: ["Next.js", "Django", "PostgreSQL", "Vercel"],
      focus: "Cloud",
      github: "",
      videoUrl: "",
    },
    {
      id: "agricola-be",
      year: "2024",
      titleEn: "Agrícola BE · Desde la Tierra",
      titleEs: "Agrícola BE · Desde la Tierra",
      roleEn: "Full Stack Developer · Brand tech partner",
      roleEs: "Desarrollador full stack · Socio tecnológico de marca",
      typeEn: "Brand + content platform for gourmet agricultural products",
      typeEs:
        "Plataforma de marca y contenidos para productos agrícolas gourmet",
      summaryEn:
        "Next.js + Supabase stack to publish products, stories and seasonal campaigns with room for ecommerce.",
      summaryEs:
        "Stack Next.js + Supabase para publicar productos, relatos y campañas de temporada con espacio para ecommerce.",
      stack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
      focus: "Web Apps",
      github: "",
      videoUrl: "",
    },
    {
      id: "suda-la-lengua",
      year: "2023–2025",
      titleEn: "Suda La Lengua",
      titleEs: "Suda La Lengua",
      roleEn: "Platform Architect · Full Stack",
      roleEs: "Arquitecto de plataforma · Full stack",
      typeEn: "Digital cultural magazine · Monthly issues",
      typeEs: "Revista cultural digital · Ediciones mensuales",
      summaryEn:
        "Modular Next.js + Sanity CMS architecture to publish essays, poetry and visual experiments.",
      summaryEs:
        "Arquitectura modular con Next.js + Sanity CMS para publicar ensayos, poesía y experimentos visuales.",
      stack: ["Next.js", "Sanity", "Tailwind", "Vercel"],
      focus: "Publishing",
      github: "",
      videoUrl: "",
    },
    {
      id: "taberna-de-clates",
      year: "2023",
      titleEn: "La Taberna de Clates",
      titleEs: "La Taberna de Clates",
      roleEn: "Designer & Frontend Developer",
      roleEs: "Diseñador y desarrollador frontend",
      typeEn: "Personal literary lab · Essays and digital experiments",
      typeEs:
        "Laboratorio literario personal · Ensayos y experimentos digitales",
      summaryEn:
        "Grid-based layout for long-form essays and interactive reading experiences.",
      summaryEs:
        "Maquetación basada en grillas para ensayos largos y experiencias de lectura interactivas.",
      stack: ["Next.js", "React", "Tailwind"],
      focus: "Content",
      github: "",
      videoUrl: "",
    },
    {
      id: "spazio-color",
      year: "2022",
      titleEn: "Spazio Color y Estilo",
      titleEs: "Spazio Color y Estilo",
      roleEn: "Full Stack Developer",
      roleEs: "Desarrollador full stack",
      typeEn: "Salon & beauty studio website",
      typeEs: "Sitio web de salón de belleza",
      summaryEn:
        "Simple, fast website focused on services, bookings and brand identity.",
      summaryEs:
        "Sitio sencillo y rápido, centrado en servicios, reservas e identidad de marca.",
      stack: ["Next.js", "Tailwind"],
      focus: "Web Apps",
      github: "",
      videoUrl: "",
    },
    {
      id: "ai-eval",
      year: "2024–2025",
      titleEn: "AI Evaluation & Agents",
      titleEs: "Evaluación de IA y agentes",
      roleEn: "Quality Manager · Prompt & workflow design",
      roleEs: "Quality Manager · Diseño de prompts y flujos",
      typeEn: "LLM evaluation workflows and internal tools",
      typeEs: "Flujos de evaluación de LLM y herramientas internas",
      summaryEn:
        "Design of evaluation prompts, test suites and workflows for AI assistants and coding agents.",
      summaryEs:
        "Diseño de prompts de evaluación, baterías de prueba y flujos para asistentes de IA y agentes de código.",
      stack: ["Python", "LLMs", "Eval tools"],
      focus: "AI / LLM",
      github: "",
      videoUrl: "",
    },
  ];

  return (
    <section id="projects" className="mb-10">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-slate-900" />
          <div className="text-sm font-semibold text-slate-100">
            {t("Projects", "Proyectos")}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden gap-2 text-[10px] text-slate-500 md:flex">
            <span className="rounded-full bg-slate-900 px-2 py-1">All</span>
            <span className="rounded-full bg-slate-900 px-2 py-1">
              AI / LLM
            </span>
            <span className="rounded-full bg-slate-900 px-2 py-1">Cloud</span>
            <span className="rounded-full bg-slate-900 px-2 py-1">
              Web Apps
            </span>
          </div>
          <div className="inline-flex items-center rounded-full bg-slate-900/80 p-1 text-[10px]">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-0.5 ${
                lang === "en"
                  ? "bg-slate-100 text-slate-950 font-semibold"
                  : "text-slate-400"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`rounded-full px-2 py-0.5 ${
                lang === "es"
                  ? "bg-slate-100 text-slate-950 font-semibold"
                  : "text-slate-400"
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-slate-100">
                    {t(project.titleEn, project.titleEs)}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t(project.roleEn, project.roleEs)}
                  </div>
                </div>
                <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-400">
                  {project.year}
                </span>
              </div>
              <div className="text-[11px] text-slate-500">
                {t(project.typeEn, project.typeEs)}
              </div>
              <div className="text-[11px] text-slate-400">
                {t(project.summaryEn, project.summaryEs)}
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-[10px]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-900 px-2 py-1 text-slate-200 hover:bg-slate-800"
                  >
                    GitHub
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-900 px-2 py-1 text-slate-200 hover:bg-slate-800"
                  >
                    {t("Video walkthrough", "Video demo")}
                  </a>
                )}
              </div>
            </div>
            <div className="mt-3 flex justify-between text-[10px]">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 font-medium text-slate-950">
                {t("Case study", "Ver caso")}
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-900 px-2 py-1 text-slate-400">
                {project.focus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StackWireframe() {
  const sections = [
    {
      title: "Languages & Backend",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "Ruby", "Go"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Astro", "Tailwind", "Component libs"],
    },
    {
      title: "Cloud & DevOps",
      items: ["Azure", "Vercel", "Docker", "CI/CD", "GitHub"],
    },
  ];

  return (
    <section
      id="stack"
      className="mb-10 rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-5"
    >
      <div className="mb-3 text-sm font-semibold text-slate-100">
        Tech stack
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <div className="text-xs font-semibold text-slate-100">
              {section.title}
            </div>
            <div className="flex flex-wrap gap-1">
              {section.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-900 px-2 py-1 text-[10px] text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-8 w-32 items-center justify-center rounded bg-slate-100/90 text-xs font-medium text-slate-900">
        View full stack
      </div>
    </section>
  );
}

function BlogWireframe() {
  const posts = [
    {
      title: "Designing AI evaluation workflows",
      date: "2025 · Work in progress",
      tag: "AI / Evaluation",
    },
    {
      title: "Notes on Python backends for small teams",
      date: "2024",
      tag: "Backend",
    },
    {
      title: "Building cultural platforms with Next.js",
      date: "2023",
      tag: "Culture & Web",
    },
  ];

  return (
    <section id="blog" className="mb-10">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-100">From the blog</div>
        <div className="text-[11px] text-slate-500">blog.sambalab.pro</div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="mb-1 text-[11px] text-slate-500">{post.date}</div>
            <h3 className="mb-1 text-xs font-semibold text-slate-100">
              {post.title}
            </h3>
            <div className="mb-2 inline-flex rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-400">
              {post.tag}
            </div>
            <p className="text-[11px] text-slate-500">
              Short technical and reflective notes around AI, code and culture.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutWireframe() {
  return (
    <section
      id="about"
      className="mb-10 flex flex-col gap-6 rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-5 md:flex-row"
    >
      <div className="h-32 w-32 rounded-full bg-slate-900" />
      <div className="flex-1 space-y-3">
        <div className="text-sm font-semibold text-slate-100">
          About Daniel García Rojas (dgrcodex)
        </div>
        <p className="text-[11px] text-slate-400">
          Full stack developer and AI practitioner with a mixed background in
          law, arts and cultural projects. I enjoy designing systems, not only
          pages, and connecting technology with real organizations.
        </p>
        <p className="text-[11px] text-slate-400">
          I have worked on cultural magazines, small businesses and AI
          evaluation projects, usually as both builder and strategic partner.
        </p>
        <div className="mt-2 text-[11px] text-slate-500">
          Timeline: Suda La Lengua · Sambalab · Agrícola BE · AI evaluation &
          agents.
        </div>
        <div className="mt-3 flex h-8 w-28 items-center justify-center rounded bg-slate-100/90 text-xs font-medium text-slate-900">
          Read full bio
        </div>
      </div>
    </section>
  );
}

function ContactCtaWireframe() {
  return (
    <section
      id="contact"
      className="mb-10 rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-5"
    >
      <div className="mb-2 text-sm font-semibold text-slate-100">
        Let&apos;s build something
      </div>
      <p className="mb-4 text-[11px] text-slate-400">
        Send a short message with the context of your project (AI, backend,
        cultural platform, etc.) and I&apos;ll get back with questions and
        possible next steps.
      </p>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex-1 space-y-2">
          <div className="h-8 w-full rounded bg-slate-900 px-3 py-2 text-[11px] text-slate-600">
            Name / Company
          </div>
          <div className="h-8 w-full rounded bg-slate-900 px-3 py-2 text-[11px] text-slate-600">
            Email
          </div>
          <div className="h-16 w-full rounded bg-slate-900 px-3 py-2 text-[11px] text-slate-600">
            Short description of what you need
          </div>
          <div className="flex h-8 w-28 items-center justify-center rounded bg-slate-100/90 text-xs font-medium text-slate-900">
            Send
          </div>
        </div>
        <div className="w-full max-w-xs space-y-2 text-[11px] text-slate-400">
          <div>
            Email: <span className="text-slate-200">dgr@sambalab.pro</span>
          </div>
          <div>Location: Santiago · Remote-friendly</div>
          <div className="text-slate-500">
            Preferred topics: AI & evaluation, Python backends, cultural and
            editorial platforms.
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterWireframe() {
  return (
    <footer className="border-t border-slate-800 pt-4 text-[11px] text-slate-500">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
        <div className="space-y-1">
          <div className="text-slate-400">
            © {new Date().getFullYear()} Daniel García Rojas · dgrcodex
          </div>
          <div className="text-slate-600">sambalab.pro</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["CV", "Projects", "Blog", "Contact"].map((link) => (
            <span
              key={link}
              className="rounded bg-slate-900 px-2 py-1 text-slate-400"
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
