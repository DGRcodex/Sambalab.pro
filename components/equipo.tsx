// components/Equipo.tsx
"use client";

import Image from "next/image";
import { useLanguage } from '@/context/language-context'

type Member = {
  id: "daniel" | "pedro" | "jorge" | "mauro";
  name: string;
  role: string;
  src: string;
  tagline: string;
  bio: string;
};

const staticTeamData = [
  {
    id: "daniel",
    name: "Daniel García",
    src: "/equipo/danisambalab.png",
  },
  {
    id: "pedro",
    name: "Pedro García Moretti",
    src: "/equipo/pedro.jpeg",
  },
  {
    id: "jorge",
    name: "Jorge Gordillo",
    src: "/equipo/jorge.png",
  },
  {
    id: "mauro",
    name: "Mauricio Geldes Díaz",
    src: "/equipo/mauro.png",
  },
];

export default function Equipo() {
  const { t } = useLanguage()

  const team: Member[] = staticTeamData.map((member, idx) => ({
    ...member,
    role: t.team.members[idx].role,
    tagline: t.team.members[idx].tagline,
    bio: t.team.members[idx].bio,
  }) as Member);

  return (
    <section className="bg-purple-100" id="equipo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Encabezado */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1 mb-4 text-black font-playfair text-3xl sm:text-4xl lg:text-5xl font-normal">
              {t.team.title}
            </h2>
            <p className="text-lg text-gray-700">
              {t.team.subtitle}
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
