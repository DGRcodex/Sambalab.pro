'use client';

import React, { useState } from "react";

type FaceId = "front" | "right" | "left" | "top" | "bottom" | "back";

const FACE_CONFIG: Record<
  FaceId,
  { label: string; title: string; description: string }
> = {
  front: {
    label: "Front",
    title: "Bio / Intro",
    description:
      "Daniel García Rojas (dgrcodex): desarrollador full stack, poeta y fundador de Sambalab, estudio creativo de software e identidad digital en Santiago de Chile.",
  },
  right: {
    label: "Right",
    title: "Projects",
    description:
      "Selección de proyectos web, culturales y de IA que mezclan tecnología, poesía y diseño para clientes y proyectos propios.",
  },
  left: {
    label: "Left",
    title: "Tech Stack / Skills",
    description:
      "Stack principal en JavaScript/TypeScript, Go, Python y ecosistema cloud (Vercel, Supabase, Azure, etc.), con foco en experiencias web y agentes de IA.",
  },
  top: {
    label: "Top",
    title: "Timeline / Experiencia",
    description:
      "Recorrido desde la escritura y la música hacia el desarrollo de software, la consultoría tecnológica y los proyectos culturales digitales.",
  },
  bottom: {
    label: "Bottom",
    title: "Lab / Experimentos",
    description:
      "Zona de laboratorio creativo: juegos, físicas en tiempo real, WebGL, poesía interactiva y prototipos de agentes de IA.",
  },
  back: {
    label: "Back",
    title: "Contact + Blog",
    description:
      "Espacio para conversar, colaborar o invitar a proyectos nuevos. Puerta al blog de Sambalab y a los ensayos de cultura, tecnología e identidad.",
  },
};

// Rotaciones del cubo según la cara activa
const ROTATION: Record<FaceId, { x: number; y: number }> = {
  front: { x: 0, y: 0 },
  right: { x: 0, y: -90 },
  back: { x: 0, y: 180 },
  left: { x: 0, y: 90 },
  top: { x: 90, y: 0 },
  bottom: { x: -90, y: 0 },
};

// Transiciones cíclicas según dirección: izquierda, derecha, arriba, abajo
type Direction = "left" | "right" | "up" | "down";

const NEXT_FACE: Record<Direction, Record<FaceId, FaceId>> = {
  left: {
    front: "left",
    left: "back",
    back: "right",
    right: "front",
    top: "top",
    bottom: "bottom",
  },
  right: {
    front: "right",
    right: "back",
    back: "left",
    left: "front",
    top: "top",
    bottom: "bottom",
  },
  up: {
    front: "top",
    top: "back",
    back: "bottom",
    bottom: "front",
    left: "left",
    right: "right",
  },
  down: {
    front: "bottom",
    bottom: "back",
    back: "top",
    top: "front",
    left: "left",
    right: "right",
  },
};

export default function CubePortfolioWireframe() {
  const [activeFace, setActiveFace] = useState<FaceId>("front");
  const rotation = ROTATION[activeFace];

  const rotate = (direction: Direction) => {
    setActiveFace((prev) => NEXT_FACE[direction][prev]);
  };

  // Cubo grande: intenta ocupar ~80% de la pantalla en desktop
  const cubeSize = 720; // px (más grande para desktop)
  const half = cubeSize / 2;

  return (
    <div className="w-screen h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-2 md:p-6">
      <div
        className="relative"
        style={{ width: cubeSize * 1.4, height: cubeSize * 1.4 }}
      >
        {/* Botón arriba = rotar hacia TOP (cíclico) */}
        <button
          type="button"
          onClick={() => rotate("up")}
          className={`absolute left-1/2 -translate-x-1/2 -top-10 px-3 py-1 rounded-full border text-[10px] md:text-xs transition ${
            activeFace === "top"
              ? "border-emerald-400/80 text-emerald-200 bg-emerald-400/10"
              : "border-slate-700/80 text-slate-300 bg-slate-900/80 hover:border-emerald-400/60"
          }`}
        >
          Up
        </button>

        {/* Botón abajo = rotar hacia BOTTOM (cíclico) */}
        <button
          type="button"
          onClick={() => rotate("down")}
          className={`absolute left-1/2 -translate-x-1/2 -bottom-10 px-3 py-1 rounded-full border text-[10px] md:text-xs transition ${
            activeFace === "bottom"
              ? "border-emerald-400/80 text-emerald-200 bg-emerald-400/10"
              : "border-slate-700/80 text-slate-300 bg-slate-900/80 hover:border-emerald-400/60"
          }`}
        >
          Down
        </button>

        {/* Botón izquierda = rotar hacia LEFT (cíclico) */}
        <button
          type="button"
          onClick={() => rotate("left")}
          className={`absolute top-1/2 -translate-y-1/2 -left-16 px-3 py-1 rounded-full border text-[10px] md:text-xs transition ${
            activeFace === "left"
              ? "border-emerald-400/80 text-emerald-200 bg-emerald-400/10"
              : "border-slate-700/80 text-slate-300 bg-slate-900/80 hover:border-emerald-400/60"
          }`}
        >
          Left
        </button>

        {/* Botón derecha = rotar hacia RIGHT (cíclico) */}
        <button
          type="button"
          onClick={() => rotate("right")}
          className={`absolute top-1/2 -translate-y-1/2 -right-16 px-3 py-1 rounded-full border text-[10px] md:text-xs transition ${
            activeFace === "right"
              ? "border-emerald-400/80 text-emerald-200 bg-emerald-400/10"
              : "border-slate-700/80 text-slate-300 bg-slate-900/80 hover:border-emerald-400/60"
          }`}
        >
          Right
        </button>

        {/* Botón front en el centro: volver a HOME */}
        <button
          type="button"
          onClick={() => setActiveFace("front")}
          className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full border text-[10px] md:text-xs z-20 transition ${
            activeFace === "front"
              ? "border-emerald-400/80 text-emerald-200 bg-emerald-400/10"
              : "border-slate-700/80 text-slate-200 bg-slate-900/80 hover:border-emerald-400/60"
          }`}
        >
          Front
        </button>

        {/* Botón back en la esquina: ir directo a Contact */}
        <button
          type="button"
          onClick={() => setActiveFace("back")}
          className={`absolute right-4 bottom-4 translate-x-6 translate-y-6 px-3 py-1 rounded-full border text-[10px] md:text-xs transition ${
            activeFace === "back"
              ? "border-emerald-400/80 text-emerald-200 bg-emerald-400/10"
              : "border-slate-700/80 text-slate-300 bg-slate-900/80 hover:border-emerald-400/60"
          }`}
        >
          Back
        </button>

        {/* Contenedor con perspectiva */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: 1400 }}
        >
          <div
            className="relative"
            style={{
              width: cubeSize,
              height: cubeSize,
              transformStyle: "preserve-3d",
              transform:
                "rotateX(" + rotation.x + "deg) rotateY(" + rotation.y + "deg)",
              transition: "transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1)",
            }}
          >
            {/* Caras del cubo con contenido real */}
            {(["front", "back", "right", "left", "top", "bottom"] as FaceId[]).map(
              (id) => {
                const isActive = id === activeFace;
                let faceTransform = "";

                if (id === "front") faceTransform = "translateZ(" + half + "px)";
                if (id === "back")
                  faceTransform = "rotateY(180deg) translateZ(" + half + "px)";
                if (id === "right")
                  faceTransform = "rotateY(90deg) translateZ(" + half + "px)";
                if (id === "left")
                  faceTransform = "rotateY(-90deg) translateZ(" + half + "px)";
                if (id === "top")
                  faceTransform = "rotateX(90deg) translateZ(" + half + "px)";
                if (id === "bottom")
                  faceTransform = "rotateX(-90deg) translateZ(" + half + "px)";

                const face = FACE_CONFIG[id];

                return (
                  <div
                    key={id}
                    className="absolute w-full h-full flex items-center justify-center rounded-2xl border text-xs md:text-sm text-center px-4"
                    style={{
                      transform: faceTransform,
                      backfaceVisibility: "hidden",
                      backgroundColor: isActive
                        ? "rgba(15, 23, 42, 0.98)"
                        : "rgba(15, 23, 42, 0.92)",
                      borderColor: isActive
                        ? "rgba(52, 211, 153, 0.9)"
                        : "rgba(51, 65, 85, 0.9)",
                      boxShadow: isActive
                        ? "0 0 40px rgba(16, 185, 129, 0.5)"
                        : "0 18px 30px rgba(15, 23, 42, 0.9)",
                    }}
                  >
                    <div className="space-y-3 max-w-[88%] text-left overflow-y-auto max-h-[82%] pr-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-emerald-300/80 font-mono">
                        {face.label} face
                      </div>
                      <div className="text-sm md:text-base font-semibold">
                        {face.title}
                      </div>

                      {/* Contenido específico por cara */}
                      {id === "front" && (
                        <div className="space-y-2 text-[11px] md:text-xs text-slate-300 leading-relaxed">
                          <p>{face.description}</p>
                          <p>
                            Me muevo entre la ingeniería de software, la poesía y los proyectos
                            culturales. Diseño y desarrollo experiencias digitales a medida para
                            personas, marcas y colectivos que quieren habitar internet de forma más
                            humana y pensada.
                          </p>
                          <p>
                            Trabajo tanto en proyectos propios como en encargos para organizaciones
                            culturales, marcas agrícolas, medios digitales y empresas que necesitan
                            productos web, automatización y experiencias con IA.
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Fundador de Sambalab · estudio de software, IA y creatividad.</li>
                            <li>
                              Experiencia en diseño y desarrollo de sitios, aplicaciones y herramientas
                              internas.
                            </li>
                            <li>
                              Mirada interdisciplinaria: mezclo escritura, estética y arquitectura de
                              software.
                            </li>
                          </ul>
                        </div>
                      )}

                      {id === "right" && (
                        <div className="space-y-2 text-[11px] md:text-xs text-slate-300 leading-relaxed">
                          <p>{face.description}</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <strong>Agrícola BE · Desde la Tierra</strong>: identidad, sitio Next.js,
                              marketing y contacto comercial para una empresa agrícola orientada a productos
                              gourmet.
                            </li>
                            <li>
                              <strong>La Taberna de Clates</strong>: revista digital literaria con
                              arquitectura en Next.js + Sanity, diseño editorial responsive y énfasis en
                              lectura cómoda.
                            </li>
                            <li>
                              <strong>Suda la Lengua</strong>: proyecto cultural web para explorar poesía y
                              periodismo desde Latinoamérica, con foco en maquetaciones experimentales.
                            </li>
                            <li>
                              <strong>Nombrar la palabra</strong>: dispositivo poético y talleres presenciales
                              en Recoleta para fortalecer identidades locales a través de la escritura.
                            </li>
                            <li>
                              <strong>Herramientas internas</strong>: scripts y paneles para automatizar tareas
                              creativas, gestionar contenidos y experimentar con agentes conversacionales.
                            </li>
                          </ul>
                        </div>
                      )}

                      {id === "left" && (
                        <div className="space-y-3 text-[11px] md:text-xs text-slate-300 leading-relaxed">
                          <p>{face.description}</p>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            <div>
                              <h4 className="font-semibold text-emerald-300/90 mb-1">Frontend</h4>
                              <ul className="list-disc list-inside space-y-1">
                                <li>Next.js · React (App Router)</li>
                                <li>TypeScript · JavaScript moderno</li>
                                <li>Tailwind CSS · diseño responsive</li>
                                <li>Astro para landings ligeras</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-emerald-300/90 mb-1">Backend / Dev</h4>
                              <ul className="list-disc list-inside space-y-1">
                                <li>Python · FastAPI</li>
                                <li>Go para servicios de alto rendimiento</li>
                                <li>Supabase · PostgreSQL</li>
                                <li>Node.js · REST/RPC</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-emerald-300/90 mb-1">Infra / Cloud</h4>
                              <ul className="list-disc list-inside space-y-1">
                                <li>Vercel · CI/CD con GitHub</li>
                                <li>Azure (Search, OpenAI, Functions)</li>
                                <li>Sanity CMS · headless content</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-emerald-300/90 mb-1">Creatividad</h4>
                              <ul className="list-disc list-inside space-y-1">
                                <li>Poesía, narrativa y edición de revistas</li>
                                <li>Diseño de identidad y storytelling</li>
                                <li>
                                  Experimentos interactivos (juegos, arte generativo, visualizaciones
                                  literarias)
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {id === "top" && (
                        <div className="space-y-2 text-[11px] md:text-xs text-slate-300 leading-relaxed">
                          <p>{face.description}</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <strong>Etapa creativa inicial</strong>: música, escritura y poesía como
                              lenguaje principal, participación en proyectos culturales y fanzines.
                            </li>
                            <li>
                              <strong>Transición a tecnología</strong>: aprendizaje intensivo de Python, web y
                              arquitectura de software, combinando formación auto–dirigida y programas
                              formales.
                            </li>
                            <li>
                              <strong>Fundación de Sambalab</strong>: estudio que mezcla desarrollo de
                              software, diseño y proyectos culturales orientados a la web.
                            </li>
                            <li>
                              <strong>Actualidad</strong>: desarrollo de productos web, plataformas para
                              creadores, herramientas de IA y colaboración con colectivos culturales.
                            </li>
                          </ul>
                        </div>
                      )}

                      {id === "bottom" && (
                        <div className="space-y-2 text-[11px] md:text-xs text-slate-300 leading-relaxed">
                          <p>{face.description}</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>
                              <strong>Minecart Game</strong>: juego de física en Python/Tkinter para explicar
                              movimiento y energía a través de un carrito sobre rieles.
                            </li>
                            <li>
                              <strong>Escena de resortera en Pygame</strong>: simulación de colisiones y
                              confetti, explorando visualización de física simple.
                            </li>
                            <li>
                              <strong>WebGL morphing</strong>: transición entre círculo, cuadrado y triángulo
                              con shaders y efectos de brillo, buscando una estética geométrica poética.
                            </li>
                            <li>
                              <strong>Poesía interactiva</strong>: grids, revistas vivas y visualizaciones para
                              textos poéticos en la web (La Taberna de Clates, Suda la Lengua, etc.).
                            </li>
                          </ul>
                        </div>
                      )}

                      {id === "back" && (
                        <div className="space-y-2 text-[11px] md:text-xs text-slate-300 leading-relaxed">
                          <p>{face.description}</p>
                          <div className="space-y-1">
                            <p>
                              Puedes escribirme a
                              <span className="font-mono text-emerald-300/90"> dgr@sambalab.pro </span>
                              para colaboraciones, desarrollo de proyectos o ideas que mezclen código,
                              cultura y lenguaje.
                            </p>
                            <p>
                              Blog y ensayos (próximamente):
                              <br />
                              <span className="font-mono text-emerald-300/90">
                                blog.sambalab.pro
                              </span>
                            </p>
                            <p>
                              También trabajo con talleres, asesorías y acompañamiento para proyectos
                              culturales y editoriales que quieran habitar internet de otra manera, con
                              cuidado estético y técnico.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
