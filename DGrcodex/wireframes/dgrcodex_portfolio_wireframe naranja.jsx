import React, { useState } from "react";

// Brand color tokens (Sambalab-style)
// Cambia estos valores para ajustar toda la paleta.
const brand = {
  pageBg: "bg-[#FFF7F2]", // fondo general crema
  headerBg: "bg-[#FFE3DA]", // barra superior suave
  cardBg: "bg-white", // tarjetas blancas
  cardAltBg: "bg-[#FFF0E5]", // fondo alterno muy suave
  borderSoft: "border-[#E6D7CF]",
  textMain: "text-[#1F2933]",
  textMuted: "text-[#7A6A63]",
  textSoft: "text-[#A0897D]",
  accent: "text-[#E86F52]", // salmón / coral
  accentBg: "bg-[#E86F52]",
};

// Tipografía sugerida para Tailwind (comentario de referencia):
// font-heading -> "Playfair Display", serif
// font-body    -> "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

export default function PortfolioPage() {
  return (
    <main className={`min-h-screen ${brand.pageBg} ${brand.textMain} font-body`}>
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
  const [active, setActive] = useState("projects"); // "projects" | "stack" | "about" | "blog" | "contact"

  const navItems = [
    { id: "projects", label: "Proyectos" },
    { id: "stack", label: "Stack" },
    { id: "about", label: "Sobre mí" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 mb-8 border-b ${brand.borderSoft} ${brand.headerBg} bg-opacity-90 backdrop-blur`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder (luego metes tu foto real) */}
          <div className="h-9 w-9 rounded-full bg-[#1F2933]/5 p-[2px]">
            <div className="h-full w-full rounded-full bg-[#DCC7BB]" />
          </div>
          <div className="leading-tight">
            <div className="text-xs font-semibold uppercase tracking-wide">
              dgrcodex
            </div>
            <div className="text-[10px] text-[#8B7568]">
              Sambalab · Desarrollo & IA
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
                  ? `${brand.accentBg} text-white font-semibold`
                  : "bg-white/60 text-[#555] hover:bg-white hover:text-[#E86F52]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/dgrcodex"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-7 items-center justify-center rounded-full bg-white/70 px-3 text-[11px] text-[#444] hover:bg-white hover:text-[#E86F52]"
          >
            GitHub
          </a>
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
      summary:
        "Sitio corporativo + herramientas internas para una firma de ingeniería.",
      tags: ["B2B", "Cloud", "Consultoría"],
    },
    {
      name: "Agrícola BE",
      role: "Full Stack · Next.js + Supabase",
      summary:
        "Plataforma de marca y contenidos para productos agrícolas gourmet.",
      tags: ["Ecommerce-ready", "Brand", "Contenido"],
    },
    {
      name: "Suda La Lengua",
      role: "Plataforma · Next.js + Sanity",
      summary:
        "Revista cultural digital con ediciones modulares y mensuales.",
      tags: ["Cultura", "Publishing", "CMS"],
    },
  ];

  return (
    <section
      id="hero"
      className={`mb-12 rounded-2xl border ${brand.borderSoft} ${brand.cardBg} px-6 py-8`}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFEDE3] px-3 py-1 text-xs text-[#9A5C4A]">
        <span className="h-2 w-2 rounded-full bg-[#E86F52]" />
        Portafolio · Desarrollo web, Python y IA
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* LEFT: intro copy + CTAs */}
        <div className="flex-1 space-y-4">
          <h1 className="font-heading text-2xl font-semibold text-[#231F20] md:text-3xl">
            Construyo plataformas digitales y flujos con IA para proyectos
            culturales, marcas pequeñas y equipos que necesitan algo más que
            una landing.
          </h1>
          <p className={`max-w-xl text-sm ${brand.textMuted}`}>
            Trabajo con Python, Next.js y servicios en la nube para conectar
            interfaces, datos y asistentes de IA, cuidando tanto la
            arquitectura como la experiencia de uso y el contenido.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="#projects"
              className={`inline-flex items-center rounded-full px-4 py-2 font-medium text-white ${brand.accentBg} hover:brightness-110`}
            >
              Ver proyectos
            </a>
            <a
              href="#stack"
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[#444] hover:bg-[#FFF0E5]"
            >
              Ver stack técnico
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-[#6B5B55]">
            {[
              "Python",
              "Django",
              "Next.js",
              "TypeScript",
              "Supabase",
              "Azure",
              "PostgreSQL",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-2 py-1 text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: Selected projects */}
        <div
          className={`flex-1 rounded-xl border ${brand.borderSoft} ${brand.cardAltBg} p-4`}
        >
          <div
            className={`mb-3 flex items-center justify-between text-[11px] ${brand.textSoft}`}
          >
            <span className="font-medium text-[#231F20]">
              Proyectos destacados
            </span>
            <span>dgrcodex · 2023–2025</span>
          </div>

          <div className="space-y-3">
            {selectedProjects.map((project) => (
              <div
                key={project.name}
                className={`flex items-start justify-between gap-3 rounded-lg border ${brand.borderSoft} ${brand.cardBg} p-3`}
              >
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#231F20]">
                    {project.name}
                  </div>
                  <div className={`text-[11px] ${brand.textSoft}`}>
                    {project.role}
                  </div>
                  <div className={`text-[11px] ${brand.textMuted}`}>
                    {project.summary}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium text-white ${brand.accentBg}`}
                  >
                    Ver caso
                  </span>
                  <div className="flex flex-wrap justify-end gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#FFF4EB] px-2 py-0.5 text-[10px] text-[#7A6A63]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-3 flex items-center justify-between text-[11px] ${brand.textSoft}`}
          >
            <span>Ver todos los proyectos</span>
            <span className="h-5 w-20 rounded bg-[#FFEDE3]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueWireframe() {
  return (
    <section className="mb-12">
      <div className="mb-4 text-center">
        <h2 className="font-heading text-xl font-semibold text-[#231F20]">
          Lo que hago
        </h2>
        <p className={`mt-1 text-sm ${brand.textSoft}`}>
          Diseño y desarrollo soluciones donde se cruzan contenido, código y
          automatización con IA.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div
          className={`rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4`}
        >
          <h3 className="mb-2 text-xs font-semibold text-[#231F20]">
            IA & Python
          </h3>
          <p className={`mb-2 text-[11px] ${brand.textMuted}`}>
            Prototipos y flujos de evaluación con modelos de lenguaje y visión,
            integrados a productos existentes.
          </p>
          <p className={`text-[11px] ${brand.textSoft}`}>
            Me enfoco en prompts robustos, test suites y conexiones seguras con
            datos reales.
          </p>
        </div>
        <div
          className={`rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4`}
        >
          <h3 className="mb-2 text-xs font-semibold text-[#231F20]">
            Plataformas & backend
          </h3>
          <p className={`mb-2 text-[11px] ${brand.textMuted}`}>
            Diseño backends y servicios que corren en Vercel, Azure o VPS,
            conectando APIs, contenido y datos.
          </p>
          <p className={`text-[11px] ${brand.textSoft}`}>
            Desde proyectos pequeños hasta arquitecturas que puedan crecer con
            el equipo.
          </p>
        </div>
        <div
          className={`rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4`}
        >
          <h3 className="mb-2 text-xs font-semibold text-[#231F20]">
            Interfaces & contenido
          </h3>
          <p className={`mb-2 text-[11px] ${brand.textMuted}`}>
            Construyo interfaces con Next.js y Tailwind, cuidando la lectura, el
            ritmo visual y la edición de contenido.
          </p>
          <p className={`text-[11px] ${brand.textSoft}`}>
            Me interesa tanto la experiencia del usuario como la del equipo que
            mantiene el sitio.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectsWireframe() {
  const [lang, setLang] = useState("es"); // "es" | "en"

  const t = (es, en) => (lang === "es" ? es : en);

  const projects = [
    {
      id: "ingemtrust",
      year: "2024",
      titleEs: "Ingemtrust Ingeniería",
      titleEn: "Ingemtrust Engineering",
      roleEs: "Full Stack · Referente técnico",
      roleEn: "Full Stack Developer · Technical Lead",
      typeEs: "B2B · Consultora de ingeniería",
      typeEn: "B2B · Engineering consulting",
      summaryEs:
        "Sitio corporativo y base para herramientas internas con Next.js + Django.",
      summaryEn:
        "Corporate site and base for internal tools with Next.js + Django.",
      stack: ["Next.js", "Django", "PostgreSQL", "Vercel"],
      focus: "Cloud",
      github: "",
      videoUrl: "",
    },
    {
      id: "agricola-be",
      year: "2024",
      titleEs: "Agrícola BE · Desde la Tierra",
      titleEn: "Agrícola BE · Desde la Tierra",
      roleEs: "Full Stack · Socio tecnológico de marca",
      roleEn: "Full Stack · Brand tech partner",
      typeEs: "Marca y contenidos para productos gourmet",
      typeEn: "Brand + content platform for gourmet products",
      summaryEs:
        "Stack Next.js + Supabase para productos, historias y campañas de temporada.",
      summaryEn:
        "Next.js + Supabase stack for products, stories and seasonal campaigns.",
      stack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
      focus: "Web Apps",
      github: "",
      videoUrl: "",
    },
    {
      id: "suda-la-lengua",
      year: "2023–2025",
      titleEs: "Suda La Lengua",
      titleEn: "Suda La Lengua",
      roleEs: "Arquitecto de plataforma · Full stack",
      roleEn: "Platform Architect · Full stack",
      typeEs: "Revista cultural digital · Ediciones mensuales",
      typeEn: "Digital cultural magazine · Monthly issues",
      summaryEs:
        "Arquitectura modular con Next.js + Sanity para ensayos, poesía y experimentos visuales.",
      summaryEn:
        "Modular Next.js + Sanity architecture for essays, poetry and visual experiments.",
      stack: ["Next.js", "Sanity", "Tailwind", "Vercel"],
      focus: "Publishing",
      github: "",
      videoUrl: "",
    },
    {
      id: "ai-eval",
      year: "2024–2025",
      titleEs: "Evaluación de IA y agentes",
      titleEn: "AI Evaluation & Agents",
      roleEs: "Quality Manager · Diseño de prompts y flujos",
      roleEn: "Quality Manager · Prompt & workflow design",
      typeEs: "Flujos de evaluación para asistentes de IA",
      typeEn: "Evaluation workflows for AI assistants",
      summaryEs:
        "Diseño de prompts, baterías de prueba y flujos de evaluación para modelos y agentes.",
      summaryEn:
        "Design of prompts, test suites and workflows for models and agents.",
      stack: ["Python", "LLMs", "Eval tools"],
      focus: "AI / LLM",
      github: "",
      videoUrl: "",
    },
  ];

  return (
    <section id="projects" className="mb-12">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-[#FFEDE3]" />
          <div className="font-heading text-lg font-semibold text-[#231F20]">
            {t("Proyectos seleccionados", "Selected projects")}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden gap-2 text-[10px] text-[#8C7A72] md:flex">
            <span className="rounded-full bg-white px-2 py-1">Todos</span>
            <span className="rounded-full bg-white px-2 py-1">AI / LLM</span>
            <span className="rounded-full bg-white px-2 py-1">Cloud</span>
            <span className="rounded-full bg-white px-2 py-1">Web Apps</span>
          </div>
          <div className="inline-flex items-center rounded-full bg-white p-1 text-[10px]">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`rounded-full px-2 py-0.5 ${
                lang === "es"
                  ? `${brand.accentBg} text-white font-semibold`
                  : "text-[#8C7A72]"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-0.5 ${
                lang === "en"
                  ? `${brand.accentBg} text-white font-semibold`
                  : "text-[#8C7A72]"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col justify-between rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4`}
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-[#231F20]">
                    {t(project.titleEs, project.titleEn)}
                  </div>
                  <div className={`text-[11px] ${brand.textSoft}`}>
                    {t(project.roleEs, project.roleEn)}
                  </div>
                </div>
                <span className="rounded-full bg-[#FFF4EB] px-2 py-0.5 text-[10px] text-[#7A6A63]">
                  {project.year}
                </span>
              </div>
              <div className={`text-[11px] ${brand.textMuted}`}>
                {t(project.typeEs, project.typeEn)}
              </div>
              <div className={`text-[11px] ${brand.textSoft}`}>
                {t(project.summaryEs, project.summaryEn)}
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#FFF4EB] px-2 py-0.5 text-[10px] text-[#7A6A63]"
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
                    className="inline-flex items-center rounded-full bg-white px-2 py-1 text-[#444] hover:bg-[#FFF0E5]"
                  >
                    GitHub
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-white px-2 py-1 text-[#444] hover:bg-[#FFF0E5]"
                  >
                    {t("Video demo", "Video walkthrough")}
                  </a>
                )}
              </div>
            </div>
            <div className="mt-3 flex justify-between text-[10px]">
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 font-medium text-white ${brand.accentBg}`}
              >
                {t("Ver caso", "Case study")}
              </span>
              <span className="inline-flex items-center rounded-full bg-white px-2 py-1 text-[#7A6A63]">
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
      title: "Lenguajes & backend",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "Django"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Astro", "Tailwind", "Sanity"],
    },
    {
      title: "Cloud & DevOps",
      items: ["Vercel", "Azure", "Docker", "CI/CD", "GitHub"],
    },
  ];

  return (
    <section
      id="stack"
      className={`mb-12 rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-5`}
    >
      <div className="mb-3 font-heading text-lg font-semibold text-[#231F20]">
        Stack técnico
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <div className="text-xs font-semibold text-[#231F20]">
              {section.title}
            </div>
            <div className="flex flex-wrap gap-1">
              {section.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#FFF4EB] px-2 py-1 text-[10px] text-[#7A6A63]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogWireframe() {
  const posts = [
    {
      title: "Diseñando flujos de evaluación para IA",
      date: "2025 · Borrador",
      tag: "AI / Evaluation",
    },
    {
      title: "Notas sobre backends Python para equipos pequeños",
      date: "2024",
      tag: "Backend",
    },
    {
      title: "Plataformas culturales con Next.js",
      date: "2023",
      tag: "Cultura & Web",
    },
  ];

  return (
    <section id="blog" className="mb-12">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-heading text-lg font-semibold text-[#231F20]">
          Blog
        </div>
        <div className="text-[11px] text-[#8C7A72]">blog.sambalab.pro</div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className={`rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4`}
          >
            <div className="mb-1 text-[11px] text-[#8C7A72]">{post.date}</div>
            <h3 className="mb-1 text-xs font-semibold text-[#231F20]">
              {post.title}
            </h3>
            <div className="mb-2 inline-flex rounded-full bg-[#FFF4EB] px-2 py-0.5 text-[10px] text-[#7A6A63]">
              {post.tag}
            </div>
            <p className={`text-[11px] ${brand.textSoft}`}>
              Entradas técnicas y reflexivas sobre IA, código y cultura que
              enlazarás desde tu portafolio.
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
      className={`mb-12 flex flex-col gap-6 rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-5 md:flex-row`}
    >
      <div className="h-32 w-32 rounded-full bg-[#FFEDE3]" />
      <div className="flex-1 space-y-3">
        <div className="font-heading text-lg font-semibold text-[#231F20]">
          Sobre Daniel García Rojas (dgrcodex)
        </div>
        <p className={`text-[11px] ${brand.textMuted}`}>
          Desarrollador full stack y practicante de IA con formación híbrida en
          derecho, arte y proyectos culturales. Me interesa diseñar sistemas, no
          solo páginas, y acompañar a equipos pequeños en decisiones técnicas.
        </p>
        <p className={`text-[11px] ${brand.textMuted}`}>
          He trabajado en revistas digitales, pequeñas empresas y proyectos de
          evaluación de IA, normalmente como desarrollador y socio estratégico
          al mismo tiempo.
        </p>
        <div className={`mt-2 text-[11px] ${brand.textSoft}`}>
          Timeline: Suda La Lengua · Sambalab · Agrícola BE · Evaluación de IA
          & agentes.
        </div>
      </div>
    </section>
  );
}

function ContactCtaWireframe() {
  return (
    <section
      id="contact"
      className={`mb-12 rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-5`}
    >
      <div className="mb-2 font-heading text-lg font-semibold text-[#231F20]">
        Hablemos de tu proyecto
      </div>
      <p className={`mb-4 text-[11px] ${brand.textMuted}`}>
        Cuéntame brevemente el contexto (IA, backend, revista digital, marca,
        etc.) y te respondo con preguntas y posibles siguientes pasos.
      </p>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex-1 space-y-2 text-[11px] text-[#8C7A72]">
          <div className="h-8 w-full rounded bg-[#FFF4EB] px-3 py-2">
            Nombre / Organización
          </div>
          <div className="h-8 w-full rounded bg-[#FFF4EB] px-3 py-2">
            Email
          </div>
          <div className="h-16 w-full rounded bg-[#FFF4EB] px-3 py-2">
            Breve descripción de lo que necesitas
          </div>
          <div
            className={`flex h-8 w-28 items-center justify-center rounded text-xs font-medium text-white ${brand.accentBg}`}
          >
            Enviar
          </div>
        </div>
        <div className="w-full max-w-xs space-y-2 text-[11px] text-[#7A6A63]">
          <div>
            Email: <span className="font-medium">dgr@sambalab.pro</span>
          </div>
          <div>Ubicación: Santiago · Trabajo remoto bienvenido</div>
          <div className={brand.textSoft}>
            Interés especial en: evaluación de IA, backends en Python, proyectos
            editoriales y culturales.
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterWireframe() {
  return (
    <footer className="border-t border-[#E6D7CF] pt-4 text-[11px] text-[#8C7A72]">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
        <div className="space-y-1">
          <div>© {new Date().getFullYear()} Daniel García Rojas · dgrcodex</div>
          <div>sambalab.pro</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["CV", "Proyectos", "Blog", "Contacto"].map((link) => (
            <span
              key={link}
              className="rounded bg-[#FFF4EB] px-2 py-1 text-[#7A6A63]"
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
