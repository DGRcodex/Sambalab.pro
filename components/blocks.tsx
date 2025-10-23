// components/Blocks.tsx
import Image from "next/image";

export default function Blocks() {
  // Rutas ABSOLUTAS desde /public, respetando mayúsculas/minúsculas
  const ICONS = [
    "/iconos/Icono1.png",
    "/iconos/Icono2.png",
    "/iconos/Icono3.png",
    "/iconos/Icono4.png",
    "/iconos/Icono5.png",
    "/iconos/Icono6.png",
    "/iconos/Icono7.png", // por si luego agregas el séptimo
  ];

  const items = [
    {
      title: "Diseño web y UI/UX",
      icon: ICONS[0],
      desc:
        "Diseñamos interfaces visuales modernas, accesibles y funcionales, con foco en la experiencia del usuario y coherencia estética para cada proyecto.",
    },
    {
      title: "Desarrollo de plataformas",
      icon: ICONS[1],
      desc:
        "Creamos plataformas robustas y escalables usando Next.js, Django y Supabase. Integramos APIs, bases de datos y servicios en la nube.",
    },
    {
      title: "Automatización con IA",
      icon: ICONS[2],
      desc:
        "Integramos modelos de lenguaje y visión computacional para optimizar tareas, enriquecer experiencias y reducir tiempos en flujos digitales.",
    },
    {
      title: "Prototipado creativo",
      icon: ICONS[3],
      desc:
        "Construimos MVPs, pruebas de concepto e interfaces interactivas para validar ideas rápidamente y adaptarlas a nuevos escenarios tecnológicos.",
    },
    {
      title: "Consultoría estratégica",
      icon: ICONS[4],
      desc:
        "Acompañamos procesos de transformación digital con visión técnica y creativa. Desde arquitectura hasta marketing digital basado en datos.",
    },
    {
      title: "Lenguaje, arte y tecnología",
      icon: ICONS[5],
      desc:
        "Exploramos las fronteras entre IA, poesía, arte visual e interacción humana. Creamos herramientas que combinan sentido, expresión y código.",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Nuestros servicios</h2>
            <p className="text-xl text-gray-400">
              En Sambalab combinamos diseño, desarrollo e inteligencia artificial para crear soluciones digitales escalables, funcionales y creativas.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {items.map((s, i) => (
              <div
                key={s.title}
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <Image
                  src={s.icon}           // ← ruta absoluta desde /public
                  alt={s.title}
                  width={96}
                  height={96}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 object-contain"
                  sizes="(min-width:1024px) 96px, (min-width:768px) 80px, 64px"
                  priority={i < 3}
                />
                <h4 className="h4 mb-2">{s.title}</h4>
                <p className="text-lg text-gray-400 text-center">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
