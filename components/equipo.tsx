// components/Equipo.tsx
"use client";

import Image from "next/image";

type Member = {
  id: "daniel" | "pedro" | "jorge" | "mauro";
  name: string;
  role: string;
  src: string;
  tagline: string;
  bio: string;
};

// Cambia esta extensión según tus archivos reales (png | jpg | webp)
const EXT = "png";

const team: Member[] = [
  {
    id: "daniel",
    name: "Daniel García",
    role: "Fundador · Arquitectura técnica",
    src: `/equipo/daniel.${EXT}`,
    tagline:
      "Full Stack con foco en backend e IA. Integra lenguaje y visión en procesos reales.",
    bio:
      "Lidera Sambalab orientando decisiones técnicas hacia impacto medible. Diseña arquitecturas seguras y escalables, integra modelos de IA y entrega MVPs en días, con métricas claras y soporte cercano.",
  },
  {
    id: "pedro",
    name: "Pedro García Moretti",
    role: "Director de Negocios y Operaciones",
    src: `/equipo/pedro.${EXT}`,
    tagline:
      "Estrategia comercial y operación. +30 años impulsando crecimiento en servicios y B2B.",
    bio:
      "Orquesta la expansión comercial, pricing y eficiencia operativa. Alinea roadmap, KPIs y propuesta de valor para acelerar adopción y retorno sin costos fijos innecesarios.",
  },
  {
    id: "jorge",
    name: "Jorge Gordillo",
    role: "Consultor Senior",
    src: `/equipo/jorge.${EXT}`,
    tagline:
      "Ingeniería, negocios y producto. Experiencia en pagos digitales y desarrollo de ecosistemas.",
    bio:
      "Conecta estrategia, producto y go-to-market. Transforma procesos en flujos medibles y escalables, priorizando conversión, retención y tiempo a producción.",
  },
  {
    id: "mauro",
    name: "Mauricio Geldes Díaz",
    role: "Consultor Senior",
    src: `/equipo/mauro.${EXT}`,
    tagline:
      "Industrial y Agrónomo, MBA. Operaciones complejas en agro y supply.",
    bio:
      "Optimiza cadenas de valor, datos operacionales y tableros de control. Enfocado en confiabilidad, costos y trazabilidad para decisiones con datos en tiempo real.",
  },
];

export default function Equipo() {
  return (
    <section className="bg-purple-100" id="equipo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Encabezado */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1 mb-4 text-black font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">
              Nuestro equipo
            </h2>
            <p className="text-xl text-gray-700">
              Trabajamos desde la colaboración para crear plataformas útiles y medibles.
              Combinamos ingeniería, diseño y estrategia para llevar MVPs a producción
              rápido, con arquitectura que escala y soporte cercano.
            </p>
          </div>

          {/* Tarjetas */}
          <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, idx) => (
              <article
                key={m.id}
                className="flex flex-col h-full rounded-2xl bg-gray-900 text-gray-200 p-6 shadow-lg border border-white/10"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 shrink-0">
                    <Image
                      src={m.src}
                      alt={m.name}
                      fill
                      sizes="64px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{m.name}</h3>
                    <p className="text-sm text-gray-400">{m.role}</p>
                  </div>
                </div>

                <p className="mt-4 text-base text-gray-300">{m.tagline}</p>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
