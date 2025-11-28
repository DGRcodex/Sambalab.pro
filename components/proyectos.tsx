"use client";

import Image from "next/image";

type Project = {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    category: string;
};

const projects: Project[] = [
    {
        id: "agricola",
        title: "Plataforma de Gestión Agrícola con IA",
        description:
            "Sistema integral de trazabilidad y optimización de cultivos que integra visión computacional para monitoreo de parcelas, predicción de rendimiento y análisis de suelo en tiempo real. Permite a productores tomar decisiones basadas en datos satelitales y modelos de IA.",
        technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "AWS"],
        image: "/proyectos/agricola.png",
        category: "Agricultura & IA",
    },
    {
        id: "marketplace",
        title: "Marketplace B2B para Servicios Profesionales",
        description:
            "Plataforma de conexión entre empresas y consultores especializados con sistema de matching inteligente, gestión de proyectos, pagos seguros y evaluaciones. Facilita la contratación de talento técnico y estratégico con transparencia y eficiencia.",
        technologies: ["Django", "React", "Stripe", "Redis", "Docker"],
        image: "/proyectos/marketplace.png",
        category: "E-commerce & B2B",
    },
    {
        id: "analytics",
        title: "Dashboard de Análisis en Tiempo Real",
        description:
            "Sistema de visualización y análisis de métricas operacionales con actualización en tiempo real. Integra múltiples fuentes de datos, genera reportes automatizados y alertas predictivas para optimización de procesos industriales y logísticos.",
        technologies: ["Vue.js", "Node.js", "InfluxDB", "Grafana", "WebSockets"],
        image: "/proyectos/analytics.png",
        category: "Data Analytics",
    },
];

export default function Proyectos() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white" id="proyectos">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-200">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-up">
                        <h2 className="h1 mb-4 text-black font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">
                            Proyectos destacados
                        </h2>
                        <p className="text-xl text-gray-600">
                            Soluciones reales que transforman industrias. Desde agricultura hasta
                            análisis de datos, creamos plataformas que generan impacto medible.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <article
                                key={project.id}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden bg-gray-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400 rounded-2xl transition-colors pointer-events-none" />
                            </article>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
                        <p className="text-gray-600 mb-4">
                            ¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte.
                        </p>
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Iniciar proyecto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
