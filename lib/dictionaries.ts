export type Dictionary = {
    navbar: {
        services: string;
        projects: string;
        blog: string;
        contact: string;
    };
    hero: {
        title1: string;
        title2: string;
        subtitle: string;
        ctaService: string;
        ctaContact: string;
    };
    techMarquee: {
        title: string;
    };
    features: {
        title: string;
        subtitle: string;
        item1Title: string;
        item1Desc: string;
        item2Title: string;
        item2Desc: string;
        item3Title: string;
        item3Desc: string;
    };
    finalFeatures: {
        title: string;
        item1Title: string;
        item1Desc: string;
        item2Title: string;
        item2Desc: string;
        item3Title: string;
        item3Desc: string;
    };
    contact: {
        title: string;
        subtitle: string;
        whyChooseUs: string;
        reason1: string;
        reason2: string;
        reason3: string;
        reason4: string;
        chatWithUs: string;
        responseOneMinute: string;
        formName: string;
        formCompany: string;
        formEmail: string;
        formPhone: string;
        formService: string;
        formServicePlaceholder: string;
        formServiceOptions: {
            web: string;
            mobile: string;
            ai: string;
            consulting: string;
            mvp: string;
            other: string;
        };
        formMessage: string;
        formMessagePlaceholder: string;
        submitButton: string;
        sending: string;
        success: string;
        successMessage: string;
        error: string;
        validation: {
            name: string;
            company: string;
            email: string;
            emailInvalid: string;
            phone: string;
            service: string;
            message: string;
        }
    };
    footer: {
        description: string;
        services: string;
        resources: string;
        about: string;
        team: string;
        contact: string;
        newsletter: string;
        rights: string;
        links: {
            webDev: string;
            aiAuto: string;
            proto: string;
            blog: string;
            cases: string;
            tools: string;
        }
    };
    zigzag: {
        title: string;
        subtitle: string;
        item1Title: string;
        item1Desc: string;
        item2Title: string;
        item2Desc: string;
        item3Title: string;
        item3Desc: string;
        item4Title: string;
        item4Desc: string;
        item5Title: string;
        item5Desc: string;
    };
    blocks: {
        title: string;
        subtitle: string;
        items: {
            title: string;
            description: string;
        }[];
    };
    projects: {
        title: string;
        subtitle: string;
        ctaTitle: string;
        ctaButton: string;
        items: {
            title: string;
            description: string;
            category: string;
        }[];
    };
    team: {
        title: string;
        subtitle: string;
        members: {
            role: string;
            tagline: string;
            bio: string;
        }[];
    };
    newsletter: {
        title: string;
        subtitle: string;
        emailPlaceholder: string;
        subscribeButton: string;
        subscribing: string;
        success: string;
        successMessage: string;
        error: string;
        errorMessage: string;
        validation: {
            email: string;
            emailInvalid: string;
        };
    };
};

export const translations: Record<'es' | 'en', Dictionary> = {
    es: {
        navbar: {
            services: "Servicios",
            projects: "Proyectos",
            blog: "Lab Notes",
            contact: "Contacto",
        },
        hero: {
            title1: "Diseño, desarrollo e",
            title2: "inteligencia con propósito",
            subtitle: "En Sambalab creamos plataformas, experiencias y herramientas digitales que combinan creatividad, tecnología y visión estratégica.",
            ctaService: "Conoce nuestros servicios",
            ctaContact: "Escríbenos",
        },
        techMarquee: {
            title: "Tecnologías que impulsan nuestras soluciones",
        },
        features: {
            title: "Lo que hacemos",
            subtitle: "En Sambalab diseñamos productos digitales, desarrollamos plataformas a medida e integramos inteligencia artificial desde un enfoque creativo y técnico.",
            item1Title: "Diseño y desarrollo web",
            item1Desc: "Creamos experiencias digitales modernas: desde sitios institucionales hasta landings con diseño responsivo, optimización SEO y despliegue en la nube.",
            item2Title: "Software a medida con IA",
            item2Desc: "Desarrollamos soluciones completas, desde el frontend al backend, integrando inteligencia artificial, APIs y automatización para potenciar tus procesos.",
            item3Title: "Proyectos creativos",
            item3Desc: "Exploramos nuevas formas de interacción entre tecnología, lenguaje y cultura. Aplicamos IA, diseño generativo y herramientas interactivas.",
        },
        finalFeatures: {
            title: "Imaginamos, prototipamos, creamos",
            item1Title: "Prototipado rápido",
            item1Desc: "Damos forma a ideas complejas a través de prototipos funcionales. Creamos MVPs, simuladores y flujos interactivos para validar conceptos desde el inicio.",
            item2Title: "IA generativa aplicada",
            item2Desc: "Utilizamos modelos de lenguaje, visión por computador y herramientas generativas para crear nuevas formas de diseño, contenido y automatización creativa.",
            item3Title: "Laboratorio digital",
            item3Desc: "Experimentamos con interfaces, datos, interacción y arte. Sambalab es también un espacio de prueba, juego y exploración de tecnologías emergentes con propósito.",
        },
        contact: {
            title: "Conversemos",
            subtitle: "¿Tienes un proyecto en mente? Cuéntanos cómo podemos ayudarte a llevarlo a producción.",
            whyChooseUs: "¿Por qué elegirnos?",
            reason1: "MVPs en producción en días, no meses",
            reason2: "Arquitectura escalable desde el inicio",
            reason3: "Integración de IA en procesos reales",
            reason4: "Soporte técnico cercano y continuo",
            chatWithUs: "Chatea con nosotros",
            responseOneMinute: "Respondemos en minutos",
            formName: "Nombre completo *",
            formCompany: "Empresa *",
            formEmail: "Email corporativo *",
            formPhone: "Teléfono *",
            formService: "Tipo de servicio *",
            formServicePlaceholder: "Selecciona un servicio",
            formServiceOptions: {
                web: "Desarrollo Web",
                mobile: "Desarrollo Móvil",
                ai: "Integración de IA",
                consulting: "Consultoría Técnica",
                mvp: "MVP / Prototipo",
                other: "Otro",
            },
            formMessage: "Cuéntanos sobre tu proyecto *",
            formMessagePlaceholder: "Describe tu proyecto, objetivos y timeline...",
            submitButton: "Enviar mensaje",
            sending: "Enviando...",
            success: "¡Mensaje enviado!",
            successMessage: "Gracias por contactarnos. Te responderemos pronto.",
            error: "Error al enviar. Intenta de nuevo.",
            validation: {
                name: "Nombre requerido",
                company: "Empresa requerida",
                email: "Email requerido",
                emailInvalid: "Email inválido",
                phone: "Teléfono requerido",
                service: "Selecciona un servicio",
                message: "Mensaje requerido",
            }
        },
        footer: {
            description: "Laboratorio creativo y tecnológico. Diseñamos plataformas, creamos herramientas digitales e integramos inteligencia artificial con visión crítica y estética.",
            services: "Servicios",
            resources: "Recursos",
            about: "Nosotros",
            team: "Equipo",
            contact: "Contacto",
            newsletter: "Newsletter",
            rights: "Sambalab. Todos los derechos reservados.",
            links: {
                webDev: "Desarrollo Web",
                aiAuto: "Automatización con IA",
                proto: "Prototipado creativo",
                blog: "Lab Notes",
                cases: "Casos de estudio",
                tools: "Herramientas"
            }
        },
        zigzag: {
            title: "¿Qué nos impulsa?",
            subtitle: "En Sambalab unimos diseño, código e inteligencia artificial para construir soluciones funcionales, escalables e inspiradoras.",
            item1Title: "IA y Machine Learning",
            item1Desc: "Creamos sistemas inteligentes capaces de aprender de los datos, automatizar decisiones y evolucionar con cada interacción. Desde clasificadores hasta modelos predictivos, aplicamos IA a problemas reales.",
            item2Title: "Experiencias web frontend",
            item2Desc: "Diseñamos interfaces web ágiles, responsivas e intuitivas. Usamos Next.js, Astro y Tailwind para crear espacios digitales bellos y funcionales.",
            item3Title: "Visión por Computador",
            item3Desc: "Desarrollamos sistemas de visión artificial capaces de analizar imágenes y videos, detectar patrones y generar interacción visual automatizada. Hacemos que las máquinas vean.",
            item4Title: "Backend y Automatización",
            item4Desc: "Construimos arquitecturas robustas usando Django, FastAPI y Node.js. APIs, autenticación, bases de datos y flujos automatizados para escalar de forma eficiente y segura.",
            item5Title: "Prototipado Creativo",
            item5Desc: "Experimentamos con interfaces, música, arte y texto mediante IA generativa. Creamos herramientas y experiencias que expanden las fronteras de lo digital.",
        },
        blocks: {
            title: "Nuestros servicios",
            subtitle: "Ofrecemos un abanico completo de soluciones tecnológicas para impulsar tu negocio al siguiente nivel.",
            items: [
                {
                    title: "Desarrollo Web y Móvil",
                    description: "Creamos aplicaciones web y móviles de alto rendimiento, escalables y con una experiencia de usuario excepcional.",
                },
                {
                    title: "Inteligencia Artificial",
                    description: "Implementamos soluciones de IA, machine learning y procesamiento de lenguaje natural para automatizar y optimizar procesos.",
                },
                {
                    title: "Análisis de Datos",
                    description: "Transformamos datos en insights accionables mediante dashboards interactivos y análisis predictivo.",
                },
                {
                    title: "Transformación Digital",
                    description: "Acompañamos a empresas en su proceso de digitalización, modernizando sistemas y flujos de trabajo.",
                },
                {
                    title: "E-commerce",
                    description: "Desarrollamos tiendas online robustas y seguras, integradas con pasarelas de pago y sistemas de gestión.",
                },
                {
                    title: "Diseño UX/UI",
                    description: "Diseñamos interfaces intuitivas y atractivas centradas en la experiencia del usuario y la conversión.",
                },
            ]
        },
        projects: {
            title: "Proyectos destacados",
            subtitle: "Soluciones reales que transforman industrias. Desde agricultura hasta análisis de datos, creamos plataformas que generan impacto medible.",
            ctaTitle: "¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte.",
            ctaButton: "Iniciar proyecto",
            items: [
                {
                    title: "Plataforma de Gestión Agrícola con IA",
                    description: "Sistema integral de trazabilidad y optimización de cultivos que integra visión computacional para monitoreo de parcelas, predicción de rendimiento y análisis de suelo en tiempo real. Permite a productores tomar decisiones basadas en datos satelitales y modelos de IA.",
                    category: "Agricultura & IA",
                },
                {
                    title: "Marketplace B2B para Servicios Profesionales",
                    description: "Plataforma de conexión entre empresas y consultores especializados con sistema de matching inteligente, gestión de proyectos, pagos seguros y evaluaciones. Facilita la contratación de talento técnico y estratégico con transparencia y eficiencia.",
                    category: "E-commerce & B2B",
                },
                {
                    title: "Dashboard de Análisis en Tiempo Real",
                    description: "Sistema de visualización y análisis de métricas operacionales con actualización en tiempo real. Integra múltiples fuentes de datos, genera reportes automatizados y alertas predictivas para optimización de procesos industriales y logísticos.",
                    category: "Data Analytics",
                },
            ]
        },
        team: {
            title: "Nuestro equipo",
            subtitle: "Trabajamos desde la colaboración para crear plataformas útiles y medibles. Combinamos ingeniería, diseño y estrategia para llevar MVPs a producción rápido, con arquitectura que escala y soporte cercano.",
            members: [
                {
                    role: "Fundador · Arquitectura técnica",
                    tagline: "Full Stack con foco en backend e IA. Integra lenguaje y visión en procesos reales.",
                    bio: "Lidera Sambalab orientando decisiones técnicas hacia impacto medible. Diseña arquitecturas seguras y escalables, integra modelos de IA y entrega MVPs en días, con métricas claras y soporte cercano.",
                },
                {
                    role: "Director de Negocios y Operaciones",
                    tagline: "Estrategia comercial y operación. +30 años impulsando crecimiento en servicios y B2B.",
                    bio: "Orquesta la expansión comercial, pricing y eficiencia operativa. Alinea roadmap, KPIs y propuesta de valor para acelerar adopción y retorno sin costos fijos innecesarios.",
                },
                {
                    role: "Consultor Senior",
                    tagline: "Ingeniería, negocios y producto. Experiencia en pagos digitales y desarrollo de ecosistemas.",
                    bio: "Conecta estrategia, producto y go-to-market. Transforma procesos en flujos medibles y escalables, priorizando conversión, retención y tiempo a producción.",
                },
                {
                    role: "Consultor Senior",
                    tagline: "Industrial y Agrónomo, MBA. Operaciones complejas en agro y supply.",
                    bio: "Optimiza cadenas de valor, datos operacionales y tableros de control. Enfocado en confiabilidad, costos y trazabilidad para decisiones con datos en tiempo real.",
                },
            ]
        },
        newsletter: {
            title: "Mantente Actualizado",
            subtitle: "Suscríbete a nuestro newsletter para estar informado de nuestras últimas ofertas y actualizaciones tecnológicas.",
            emailPlaceholder: "Tu correo electrónico...",
            subscribeButton: "Suscribirse",
            subscribing: "Suscribiendo...",
            success: "¡Suscrito!",
            successMessage: "¡Gracias por suscribirte! Estaremos en contacto.",
            error: "Error",
            errorMessage: "Algo salió mal. Por favor intenta de nuevo.",
            validation: {
                email: "El correo es requerido",
                emailInvalid: "Dirección de correo inválida"
            }
        }
    },
    en: {
        navbar: {
            services: "Services",
            projects: "Projects",
            blog: "Lab Notes",
            contact: "Contact",
        },
        hero: {
            title1: "Design, development &",
            title2: "intelligence with purpose",
            subtitle: "At Sambalab we create platforms, experiences, and digital tools combining creativity, technology, and strategic vision.",
            ctaService: "Our Services",
            ctaContact: "Get in touch",
        },
        techMarquee: {
            title: "Technologies powering our solutions",
        },
        features: {
            title: "What we do",
            subtitle: "At Sambalab we design digital products, develop custom platforms, and integrate artificial intelligence with a creative and technical approach.",
            item1Title: "Web Design & Development",
            item1Desc: "We create modern digital experiences: from institutional sites to responsive landings with SEO optimization and cloud deployment.",
            item2Title: "Custom Software with AI",
            item2Desc: "We develop complete solutions, from frontend to backend, integrating artificial intelligence, APIs, and automation to empower your processes.",
            item3Title: "Creative Projects",
            item3Desc: "We explore new forms of interaction between technology, language, and culture. We apply AI, generative design, and interactive tools.",
        },
        finalFeatures: {
            title: "We Imagine, Prototype, Create",
            item1Title: "Rapid Prototyping",
            item1Desc: "We shape complex ideas through functional prototypes. We create MVPs, simulators, and interactive flows to validate concepts from the start.",
            item2Title: "Applied Generative AI",
            item2Desc: "We use language models, computer vision, and generative tools to create new forms of design, content, and creative automation.",
            item3Title: "Digital Lab",
            item3Desc: "We experiment with interfaces, data, interaction, and art. Sambalab is also a space for testing, playing, and exploring emerging technologies with purpose.",
        },
        contact: {
            title: "Let's Talk",
            subtitle: "Have a project in mind? Tell us how we can help you bring it to production.",
            whyChooseUs: "Why choose us?",
            reason1: "MVPs in production in days, not months",
            reason2: "Scalable architecture from the start",
            reason3: "AI integration in real processes",
            reason4: "Close and continuous technical support",
            chatWithUs: "Chat with us",
            responseOneMinute: "We respond in minutes",
            formName: "Full Name *",
            formCompany: "Company *",
            formEmail: "Work Email *",
            formPhone: "Phone *",
            formService: "Service Type *",
            formServicePlaceholder: "Select a service",
            formServiceOptions: {
                web: "Web Development",
                mobile: "Mobile Development",
                ai: "AI Integration",
                consulting: "Technical Consulting",
                mvp: "MVP / Prototype",
                other: "Other",
            },
            formMessage: "Tell us about your project *",
            formMessagePlaceholder: "Describe your project, goals, and timeline...",
            submitButton: "Send Message",
            sending: "Sending...",
            success: "Message sent!",
            successMessage: "Thanks for contacting us. We will reply soon.",
            error: "Error sending. Please try again.",
            validation: {
                name: "Name required",
                company: "Company required",
                email: "Email required",
                emailInvalid: "Invalid email",
                phone: "Phone required",
                service: "Select a service",
                message: "Message required",
            }
        },
        footer: {
            description: "Creative and technological laboratory. We design platforms, create digital tools, and integrate artificial intelligence with critical vision and aesthetics.",
            services: "Services",
            resources: "Resources",
            about: "About Us",
            team: "Team",
            contact: "Contact",
            newsletter: "Newsletter",
            rights: "Sambalab. All rights reserved.",
            links: {
                webDev: "Web Development",
                aiAuto: "AI Automation",
                proto: "Creative Prototyping",
                blog: "Lab Notes",
                cases: "Case Studies",
                tools: "Tools"
            }
        },
        zigzag: {
            title: "What drives us?",
            subtitle: "At Sambalab we combine design, code, and artificial intelligence to build functional, scalable, and inspiring solutions.",
            item1Title: "AI & Machine Learning",
            item1Desc: "We create intelligent systems capable of learning from data, automating decisions, and evolving with every interaction. From classifiers to predictive models, we apply AI to real problems.",
            item2Title: "Frontend Web Experiences",
            item2Desc: "We design agile, responsive, and intuitive web interfaces. We use Next.js, Astro, and Tailwind to create beautiful and functional digital spaces.",
            item3Title: "Computer Vision",
            item3Desc: "We develop computer vision systems capable of analyzing images and videos, detecting patterns, and generating automated visual interaction. We make machines see.",
            item4Title: "Backend & Automation",
            item4Desc: "We build robust architectures using Django, FastAPI, and Node.js. APIs, authentication, databases, and automated flows to scale efficiently and securely.",
            item5Title: "Creative Prototyping",
            item5Desc: "We experiment with interfaces, music, art, and text using generative AI. We create tools and experiences that expand the frontiers of the digital.",
        },
        blocks: {
            title: "Our Services",
            subtitle: "We offer a complete range of technological solutions to boost your business to the next level.",
            items: [
                {
                    title: "Web & Mobile Development",
                    description: "We create high-performance, scalable web and mobile applications with exceptional user experiences.",
                },
                {
                    title: "Artificial Intelligence",
                    description: "We implement AI, machine learning, and natural language processing solutions to automate and optimize processes.",
                },
                {
                    title: "Data Analytics",
                    description: "We transform data into actionable insights through interactive dashboards and predictive analytics.",
                },
                {
                    title: "Digital Transformation",
                    description: "We accompany companies in their digitalization process, modernizing systems and workflows.",
                },
                {
                    title: "E-commerce",
                    description: "We develop robust and secure online stores, integrated with payment gateways and management systems.",
                },
                {
                    title: "UX/UI Design",
                    description: "We design intuitive and attractive interfaces focused on user experience and conversion.",
                },
            ]
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Real solutions that transform industries. From agriculture to data analytics, we create platforms that generate measurable impact.",
            ctaTitle: "Have a project in mind? Let's talk about how we can help you.",
            ctaButton: "Start Project",
            items: [
                {
                    title: "AI Agricultural Management Platform",
                    description: "Comprehensive crop traceability and optimization system integrating computer vision for plot monitoring, yield prediction, and real-time soil analysis. Allows producers to make decisions based on satellite data and AI models.",
                    category: "Agriculture & AI",
                },
                {
                    title: "B2B Marketplace for Professional Services",
                    description: "Connection platform between companies and specialized consultants with intelligent matching system, project management, secure payments, and evaluations. Facilitates hiring technical and strategic talent with transparency and efficiency.",
                    category: "E-commerce & B2B",
                },
                {
                    title: "Real-Time Analytics Dashboard",
                    description: "Operational metrics visualization and analysis system with real-time updates. Integrates multiple data sources, generates automated reports, and predictive alerts for industrial and logistic process optimization.",
                    category: "Data Analytics",
                },
            ]
        },
        team: {
            title: "Our Team",
            subtitle: "We work from collaboration to create useful and measurable platforms. We combine engineering, design, and strategy to bring MVPs to production quickly, with scalable architecture and close support.",
            members: [
                {
                    role: "Founder · Technical Architecture",
                    tagline: "Full Stack focused on backend and AI. Integrates language and vision into real processes.",
                    bio: "Leads Sambalab guiding technical decisions toward measurable impact. Designs secure and scalable architectures, integrates AI models, and delivers MVPs in days, with clear metrics and close support.",
                },
                {
                    role: "Director of Business and Operations",
                    tagline: "Commercial strategy and operations. +30 years driving growth in services and B2B.",
                    bio: "Orchestrates commercial expansion, pricing, and operational efficiency. Aligns roadmap, KPIs, and value proposition to accelerate adoption and return without unnecessary fixed costs.",
                },
                {
                    role: "Senior Consultant",
                    tagline: "Engineering, business, and product. Experience in digital payments and ecosystem development.",
                    bio: "Connects strategy, product, and go-to-market. Transforms processes into measurable and scalable flows, prioritizing conversion, retention, and time-to-production.",
                },
                {
                    role: "Senior Consultant",
                    tagline: "Industrial and Agronomist, MBA. Complex operations in agro and supply.",
                    bio: "Optimizes value chains, operational data, and control dashbaords. Focused on reliability, costs, and traceability for real-time data decisions.",
                },
            ]
        },
        newsletter: {
            title: "Stay Updated",
            subtitle: "Subscribe to our newsletter to stay informed about our latest offers and technical updates.",
            emailPlaceholder: "Your email address...",
            subscribeButton: "Subscribe",
            subscribing: "Subscribing...",
            success: "Subscribed!",
            successMessage: "Thanks for subscribing! We'll be in touch.",
            error: "Error",
            errorMessage: "Something went wrong. Please try again.",
            validation: {
                email: "Email is required",
                emailInvalid: "Invalid email address"
            }
        }
    },
};
