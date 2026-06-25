export type Dictionary = {
    navbar: {
        services: string;
        projects: string;
        blog: string;
        contact: string;
    };
    blog: {
        title: string;
        subtitle: string;
        latestNotes: string;
        readMore: string;
        radarTitle: string;
        radarSubtitle: string;
        source: string;
        all: string;
        footerTitle: string;
        footerDesc: string;
        social: string;
        empty: string;
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
        blog: {
            title: "Lab Notes",
            subtitle: "El cuaderno de laboratorio de Sambalab. Artículos técnicos, reflexiones de ingeniería y el detrás de escena de nuestro código.",
            latestNotes: "Últimas Notas",
            readMore: "Leer Artículo →",
            radarTitle: "Tech Radar",
            radarSubtitle: "Señales del ecosistema",
            source: "Fuente",
            all: "Todos",
            footerTitle: "¿Qué es Lab Notes?",
            footerDesc: "Un espacio donde los ingenieros y fundadores de Sambalab documentan su proceso, comparten decisiones de arquitectura y exploran nuevas tecnologías.",
            social: "Ecosistema Sambalab",
            empty: "Pronto publicaremos nuestras primeras notas de laboratorio."
        },
        hero: {
            title1: "Ingeniería de producto,",
            title2: "del concepto a producción",
            subtitle: "Dominamos cada herramienta moderna — incluida la IA — para construir productos digitales completos. Solos cuando el proyecto lo requiere, o en co-creación directa contigo cuando tu visión es parte del código.",
            ctaService: "Conoce nuestros servicios",
            ctaContact: "Escríbenos",
        },
        techMarquee: {
            title: "Herramientas que dominamos para construir tus productos",
        },
        features: {
            title: "Cómo construimos",
            subtitle: "Dos modos de trabajo: producto end-to-end cuando necesitas que resolvamos todo, o co-creación estratégica cuando tu equipo quiere estar en la mesa de arquitectura. En ambos casos, ingeniería profesional de verdad.",
            item1Title: "Producto Digital End-to-End",
            item1Desc: "Desde la primera línea de código hasta el deploy en producción. Diseñamos, desarrollamos y desplegamos plataformas web y móviles completas usando las tecnologías que cada proyecto necesita.",
            item2Title: "Co-creación con el Cliente",
            item2Desc: "Nos sentamos en tu mesa. Tu conocimiento del negocio + nuestra ingeniería = un producto que realmente resuelve el problema. Workshops de arquitectura, sprints compartidos y transparencia total.",
            item3Title: "Herramientas de Vanguardia",
            item3Desc: "IA generativa, visión por computador, automatización inteligente, cloud nativo. No seguimos trends: evaluamos, dominamos y aplicamos cada herramienta donde realmente suma valor.",
        },
        finalFeatures: {
            title: "Del prototipo al producto real",
            item1Title: "MVPs en días, no meses",
            item1Desc: "Validamos tu idea con prototipos funcionales reales. No son mockups: es código que corre, que tiene backend, que se puede usar. Y cuando validas, escalamos.",
            item2Title: "IA como herramienta, no como buzzword",
            item2Desc: "Integramos modelos de lenguaje, visión por computador y automatización donde realmente hacen la diferencia. La IA potencia nuestro trabajo profesional, no lo reemplaza.",
            item3Title: "Laboratorio Sambalab",
            item3Desc: "Sambalab nació como un laboratorio de experimentación. Seguimos creando: juegos interactivos, herramientas de lenguaje, experiencias con IA generativa. Lo que aprendemos aquí lo aplicamos en tus proyectos.",
        },
        contact: {
            title: "Conversemos",
            subtitle: "¿Tienes un proyecto en mente? Cuéntanos cómo podemos ayudarte a llevarlo a producción.",
            whyChooseUs: "¿Por qué elegirnos?",
            reason1: "MVPs en producción en días, no meses",
            reason2: "Arquitectura escalable desde el inicio",
            reason3: "Las herramientas más avanzadas del mercado",
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
            description: "Laboratorio de ingeniería digital. Construimos productos de software completos con las herramientas más avanzadas, desde MVPs hasta plataformas complejas.",
            services: "Servicios",
            resources: "Recursos",
            about: "Nosotros",
            team: "Equipo",
            contact: "Contacto",
            newsletter: "Newsletter",
            rights: "Sambalab. Todos los derechos reservados.",
            links: {
                webDev: "Producto End-to-End",
                aiAuto: "IA & Automatización",
                proto: "Co-creación",
                blog: "Lab Notes",
                cases: "Casos de estudio",
                tools: "Herramientas"
            }
        },
        zigzag: {
            title: "Nuestro stack, tu ventaja",
            subtitle: "Cada tecnología que dominamos tiene un propósito concreto en tu proyecto. No usamos herramientas por moda; las elegimos porque resuelven problemas reales.",
            item1Title: "IA y Machine Learning",
            item1Desc: "Integramos sistemas inteligentes donde realmente suman: clasificadores, modelos predictivos, automatización de decisiones. La IA es nuestra herramienta, no nuestro eslogan.",
            item2Title: "Experiencias web frontend",
            item2Desc: "Interfaces ágiles, responsivas e intuitivas. Next.js, React, Astro y Tailwind para crear espacios digitales que se sienten premium y funcionan impecablemente.",
            item3Title: "Visión por Computador",
            item3Desc: "Sistemas de visión artificial que analizan imágenes y video, detectan patrones y generan interacción visual automatizada. Hacemos que las máquinas vean lo que tú necesitas.",
            item4Title: "Backend y Automatización",
            item4Desc: "Arquitecturas robustas con Django, FastAPI y Node.js. APIs, autenticación, bases de datos y flujos automatizados. Infraestructura que escala de forma eficiente y segura.",
            item5Title: "Prototipado y Experimentación",
            item5Desc: "Interfaces, música, arte y texto con IA generativa. Lo que nace en nuestro laboratorio alimenta los productos que construimos para nuestros clientes.",
        },
        blocks: {
            title: "Lo que podemos hacer por ti",
            subtitle: "Desde una landing page hasta una plataforma con IA, pasarela de pagos y miles de usuarios. Todo con ingeniería profesional y las herramientas más potentes del mercado.",
            items: [
                {
                    title: "Producto Web y Móvil",
                    description: "Aplicaciones completas de alto rendimiento: frontend, backend, bases de datos y deploy. Código profesional que escala desde el día uno.",
                },
                {
                    title: "IA & Automatización",
                    description: "Modelos de lenguaje, visión por computador y pipelines de automatización integrados donde realmente hacen la diferencia en tu operación.",
                },
                {
                    title: "Análisis de Datos",
                    description: "Datos convertidos en decisiones: dashboards interactivos, análisis predictivo y reportes automatizados para tu equipo.",
                },
                {
                    title: "Co-creación Estratégica",
                    description: "Tu equipo + nuestra ingeniería. Workshops de arquitectura, sprints compartidos y un producto que lleva tu ADN desde la primera línea.",
                },
                {
                    title: "E-commerce & Pagos",
                    description: "Tiendas online robustas con pasarelas de pago seguras, gestión de inventario y flujos de compra optimizados para conversión.",
                },
                {
                    title: "Diseño UX/UI",
                    description: "Interfaces que se sienten premium: diseño centrado en el usuario, micro-animaciones, y sistemas de diseño escalables.",
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
            title: "Quiénes somos",
            subtitle: "Desarrolladores profesionales con experiencia real en producción. Cuando co-creamos contigo, te acompañamos con la misma seriedad que ponemos en nuestros propios productos. Cuando construimos solos, entregamos con la misma exigencia.",
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
        blog: {
            title: "Lab Notes",
            subtitle: "Sambalab's laboratory notebook. Technical articles, engineering reflections, and behind the scenes of our code.",
            latestNotes: "Latest Notes",
            readMore: "Read Article →",
            radarTitle: "Tech Radar",
            radarSubtitle: "Ecosystem signals",
            source: "Source",
            all: "All",
            footerTitle: "What is Lab Notes?",
            footerDesc: "A space where Sambalab engineers and founders document their process, share architecture decisions, and explore new technologies.",
            social: "Sambalab Ecosystem",
            empty: "We will publish our first lab notes soon."
        },
        hero: {
            title1: "Product engineering,",
            title2: "from concept to production",
            subtitle: "We master every modern tool — including AI — to build complete digital products. We work independently when the project requires it, or in direct co-creation with you when your vision is part of the code.",
            ctaService: "Our Services",
            ctaContact: "Get in touch",
        },
        techMarquee: {
            title: "Tools we master to build your products",
        },
        features: {
            title: "How we build",
            subtitle: "Two ways of working: end-to-end product when you need us to handle everything, or strategic co-creation when your team wants a seat at the architecture table. In both cases, real professional engineering.",
            item1Title: "End-to-End Digital Product",
            item1Desc: "From the first line of code to production deployment. We design, develop, and deploy complete web and mobile platforms using the right technologies for each project.",
            item2Title: "Client Co-creation",
            item2Desc: "We sit at your table. Your business knowledge + our engineering = a product that actually solves the problem. Architecture workshops, shared sprints, and total transparency.",
            item3Title: "Cutting-Edge Tools",
            item3Desc: "Generative AI, computer vision, intelligent automation, cloud native. We don't follow trends: we evaluate, master, and apply each tool where it truly adds value.",
        },
        finalFeatures: {
            title: "From prototype to real product",
            item1Title: "MVPs in days, not months",
            item1Desc: "We validate your idea with real functional prototypes. They aren't mockups: it's running code, with a backend, that users can test. And when you validate, we scale.",
            item2Title: "AI as a tool, not a buzzword",
            item2Desc: "We integrate language models, computer vision, and automation where they make a real difference. AI empowers our professional work, it doesn't replace it.",
            item3Title: "Sambalab Studio",
            item3Desc: "Sambalab was born as an experimental lab. We keep creating: interactive games, language tools, generative AI experiences. What we learn here, we apply to your projects.",
        },
        contact: {
            title: "Let's Talk",
            subtitle: "Have a project in mind? Tell us how we can help you bring it to production.",
            whyChooseUs: "Why choose us?",
            reason1: "MVPs in production in days, not months",
            reason2: "Scalable architecture from the start",
            reason3: "The most advanced tools in the market",
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
            description: "Digital engineering laboratory. We build complete software products with the most advanced tools, from MVPs to complex platforms.",
            services: "Services",
            resources: "Resources",
            about: "About Us",
            team: "Team",
            contact: "Contact",
            newsletter: "Newsletter",
            rights: "Sambalab. All rights reserved.",
            links: {
                webDev: "End-to-End Product",
                aiAuto: "AI & Automation",
                proto: "Co-creation",
                blog: "Lab Notes",
                cases: "Case Studies",
                tools: "Tools"
            }
        },
        zigzag: {
            title: "Our stack, your advantage",
            subtitle: "Every technology we master has a specific purpose in your project. We don't use tools because they're trendy; we choose them because they solve real problems.",
            item1Title: "AI & Machine Learning",
            item1Desc: "We integrate intelligent systems where they truly add value: classifiers, predictive models, decision automation. AI is our tool, not our slogan.",
            item2Title: "Frontend Web Experiences",
            item2Desc: "Agile, responsive, and intuitive interfaces. Next.js, React, Astro, and Tailwind to create digital spaces that feel premium and work flawlessly.",
            item3Title: "Computer Vision",
            item3Desc: "Computer vision systems that analyze images and video, detect patterns, and generate automated visual interaction. We make machines see what you need them to.",
            item4Title: "Backend & Automation",
            item4Desc: "Robust architectures with Django, FastAPI, and Node.js. APIs, authentication, databases, and automated flows. Infrastructure that scales efficiently and securely.",
            item5Title: "Prototyping & Experimentation",
            item5Desc: "Interfaces, music, art, and text using generative AI. What is born in our lab fuels the products we build for our clients.",
        },
        blocks: {
            title: "What we can do for you",
            subtitle: "From a landing page to an AI-powered platform with payment gateways and thousands of users. All with professional engineering and the most powerful tools in the market.",
            items: [
                {
                    title: "Web & Mobile Product",
                    description: "High-performance full-stack applications: frontend, backend, databases, and deployment. Professional code that scales from day one.",
                },
                {
                    title: "AI & Automation",
                    description: "Language models, computer vision, and automation pipelines integrated where they truly make a difference in your operation.",
                },
                {
                    title: "Data Analytics",
                    description: "Data turned into decisions: interactive dashboards, predictive analytics, and automated reporting for your team.",
                },
                {
                    title: "Strategic Co-creation",
                    description: "Your team + our engineering. Architecture workshops, shared sprints, and a product that carries your DNA from the first line.",
                },
                {
                    title: "E-commerce & Payments",
                    description: "Robust online stores with secure payment gateways, inventory management, and purchase flows optimized for conversion.",
                },
                {
                    title: "UX/UI Design",
                    description: "Interfaces that feel premium: user-centered design, micro-animations, and scalable design systems.",
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
            title: "Who we are",
            subtitle: "Professional developers with real production experience. When we co-create with you, we accompany you with the same seriousness we put into our own products. When we build independently, we deliver with the same standards.",
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
