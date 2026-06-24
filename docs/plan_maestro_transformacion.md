# Plan Maestro: Transformación Completa de Sambalab.pro

Este plan cubre **todo**: nuevo mensaje de marca, rediseño visual del blog con texturas y personalidad, autenticación real con GCP, el ecosistema Nexus, y la presentación completa del portafolio real de Sambalab (Mingako-OS, IngenTrust, DGRcodex, Sudalalengua, CautaleTuCasa, Poeta: Artista 1).

---

## User Review Required

> [!IMPORTANT]
> **Este plan es extenso y se ejecutará por fases.** Cada fase es un bloque autónomo que se puede commitear y desplegar de forma independiente. Revisa cada fase y dime si el orden de prioridad te convence o si quieres reorganizar algo.

> [!WARNING]
> **Sobre la autenticación (Fase 4):** Propongo usar **Firebase Auth** (producto de GCP con cuota gratuita generosa: 10K usuarios/mes sin costo). Es la opción más limpia para tu caso porque se integra nativamente con Next.js, soporta Google Sign-In de forma nativa, y no requiere mantener un backend propio. La alternativa sería desplegar un servidor OAuth propio en Cloud Run (GCP), pero es overengineering para el tráfico actual. ¿Estás de acuerdo con Firebase Auth?

## Open Questions

> [!IMPORTANT]
> 1. **Poeta: Artista 1** — ¿Es un juego interactivo con IA generativa? ¿Tiene ya una URL o repo donde esté desplegado, o lo mostramos como "Coming Soon" en Sambalab Studio?
> 2. **IngenTrust** — ¿Tiene una URL pública o lo mostramos como caso de estudio con descripción + screenshots?
> 3. **CautaleTuCasa** — ¿Es la app de NanaiCare que estuvimos trabajando, o es un producto diferente?
> 4. **Cero Carbono (la donación grande)** — ¿Es la fundación para la que se hizo Mingako-OS? ¿Quieres mencionarla explícitamente como cliente/caso de impacto social?
> 5. **¿Qué GCP project usamos?** — ¿Tienes uno existente o creamos uno nuevo tipo `sambalab-prod`?

---

## FASE 1: Rebrand del Copy y Mensaje de Marca
**Prioridad: ALTA | Esfuerzo: Medio | Impacto: Máximo**

El objetivo es que la web comunique quiénes son realmente: **desarrolladores profesionales que dominan todas las herramientas modernas (incluida la IA) y que construyen productos end-to-end**, desde lo más simple hasta arquitecturas complejas. En muchos proyectos, además, aplican un **método de co-creación directa con el cliente**.

---

### 1.1 Metadatos SEO Globales

#### [MODIFY] [layout.tsx](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/app/layout.tsx)

| Campo | Antes | Después |
|-------|-------|---------|
| `title` | "Laboratorio Técnico y Desarrollo de Software con IA" | **"Laboratorio de Ingeniería Digital y Producto"** |
| `description` | "Agencia de desarrollo de software, diseño web corporativo e integración de inteligencia artificial..." | **"Ingeniería de software profesional, producto digital end-to-end y co-creación estratégica. Dominamos las herramientas más avanzadas — incluida la IA — para construir plataformas que escalan desde el día uno."** |
| `keywords` | "Desarrollo de Software, Inteligencia Artificial..." | **"Ingeniería de Software, Producto Digital, Co-creación, Desarrollo End-to-End, MVP Escalable, Arquitectura Cloud, Next.js, IA Aplicada"** |
| OG `title` | (mismo que title) | **"Sambalab — Ingeniería de Producto y Co-creación Digital"** |
| OG `description` | "Creamos plataformas..." | **"Construimos productos digitales completos con las herramientas más avanzadas del mercado. Desde la idea hasta producción, solos o contigo."** |
| Twitter `description` | "Creamos infraestructura digital con propósito..." | **"Ingeniería de producto end-to-end. IA, Cloud, y código profesional que escala."** |

#### [MODIFY] [SchemaMarkup.tsx](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/components/seo/SchemaMarkup.tsx)
- Actualizar `description` del JSON-LD a: "Laboratorio de ingeniería digital. Desarrollamos productos de software completos, desde MVPs hasta plataformas complejas, utilizando las herramientas más avanzadas del mercado."

---

### 1.2 Diccionarios de Contenido (ES + EN)

#### [MODIFY] [dictionaries.ts](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/lib/dictionaries.ts)

**Hero (Primera pantalla):**

| Campo | Antes (ES) | Después (ES) |
|-------|-----------|-------------|
| `title1` | "Diseño, desarrollo e" | **"Ingeniería de producto,"** |
| `title2` | "inteligencia con propósito" | **"del concepto a producción"** |
| `subtitle` | "En Sambalab creamos plataformas, experiencias y herramientas digitales que combinan creatividad, tecnología y visión estratégica." | **"Dominamos cada herramienta moderna — incluida la IA — para construir productos digitales completos. Solos cuando el proyecto lo requiere, o en co-creación directa contigo cuando tu visión es parte del código."** |

**Features (Lo que hacemos):**

| Campo | Antes | Después |
|-------|-------|---------|
| `title` | "Lo que hacemos" | **"Cómo construimos"** |
| `subtitle` | "...diseñamos productos digitales, desarrollamos plataformas a medida e integramos inteligencia artificial..." | **"Dos modos de trabajo: producto end-to-end cuando necesitas que resolvamos todo, o co-creación estratégica cuando tu equipo quiere estar en la mesa de arquitectura. En ambos casos, ingeniería profesional de verdad."** |
| `item1Title` | "Diseño y desarrollo web" | **"Producto Digital End-to-End"** |
| `item1Desc` | "Creamos experiencias digitales modernas..." | **"Desde la primera línea de código hasta el deploy en producción. Diseñamos, desarrollamos y desplegamos plataformas web y móviles completas usando las tecnologías que cada proyecto necesita."** |
| `item2Title` | "Software a medida con IA" | **"Co-creación con el Cliente"** |
| `item2Desc` | "Desarrollamos soluciones completas..." | **"Nos sentamos en tu mesa. Tu conocimiento del negocio + nuestra ingeniería = un producto que realmente resuelve el problema. Workshops de arquitectura, sprints compartidos y transparencia total."** |
| `item3Title` | "Proyectos creativos" | **"Herramientas de Vanguardia"** |
| `item3Desc` | "Exploramos nuevas formas de interacción..." | **"IA generativa, visión por computador, automatización inteligente, cloud nativo. No seguimos trends: evaluamos, dominamos y aplicamos cada herramienta donde realmente suma valor."** |

**FinalFeatures (Imaginamos, prototipamos, creamos):**

| Campo | Antes | Después |
|-------|-------|---------|
| `title` | "Imaginamos, prototipamos, creamos" | **"Del prototipo al producto real"** |
| `item1Title` | "Prototipado rápido" | **"MVPs en días, no meses"** |
| `item1Desc` | "Damos forma a ideas complejas..." | **"Validamos tu idea con prototipos funcionales reales. No son mockups: es código que corre, que tiene backend, que se puede usar. Y cuando validas, escalamos."** |
| `item2Title` | "IA generativa aplicada" | **"IA como herramienta, no como buzzword"** |
| `item2Desc` | "Utilizamos modelos de lenguaje..." | **"Integramos modelos de lenguaje, visión por computador y automatización donde realmente hacen la diferencia. La IA potencia nuestro trabajo profesional, no lo reemplaza."** |
| `item3Title` | "Laboratorio digital" | **"Laboratorio Sambalab"** |
| `item3Desc` | "Experimentamos con interfaces..." | **"Sambalab nació como un laboratorio de experimentación. Seguimos creando: juegos interactivos, herramientas de lenguaje, experiencias con IA generativa. Lo que aprendemos aquí lo aplicamos en tus proyectos."** |

**Zigzag (¿Qué nos impulsa?):**

| Campo | Antes | Después |
|-------|-------|---------|
| `title` | "¿Qué nos impulsa?" | **"Nuestro stack, tu ventaja"** |
| `subtitle` | "...unimos diseño, código e inteligencia artificial..." | **"Cada tecnología que dominamos tiene un propósito concreto en tu proyecto. No usamos herramientas por moda; las elegimos porque resuelven problemas reales."** |

**Blocks (Servicios):**

| Campo | Antes | Después |
|-------|-------|---------|
| `title` | "Nuestros servicios" | **"Lo que podemos hacer por ti"** |
| `subtitle` | "Ofrecemos un abanico completo de soluciones tecnológicas..." | **"Desde una landing page hasta una plataforma con IA, pasarela de pagos y miles de usuarios. Todo con ingeniería profesional y las herramientas más potentes del mercado."** |

**Team (Equipo):**

| Campo | Antes | Después |
|-------|-------|---------|
| `title` | "Nuestro equipo" | **"Quiénes somos"** |
| `subtitle` | "Trabajamos desde la colaboración para crear plataformas útiles y medibles..." | **"Desarrolladores profesionales, no vibe coders. Cada miembro del equipo aporta experiencia real en proyectos de producción. Cuando co-creamos contigo, te acompañamos con la misma seriedad que ponemos en nuestros propios productos."** |

**Contact:**

| Campo | Antes | Después |
|-------|-------|---------|
| `reason3` | "Integración de IA en procesos reales" | **"Las herramientas más avanzadas del mercado"** |

> [!TIP]
> Los cambios en inglés (`en`) serán traducciones fieles de estos nuevos textos, manteniendo el mismo tono profesional pero natural.

---

## FASE 2: Blog Visual Overhaul — Texturas, Personalidad y "Onda"
**Prioridad: ALTA | Esfuerzo: Medio | Impacto: Alto**

El blog `/labnotes` necesita vida. Vamos a agregar capas visuales que lo hagan sentir como un espacio vivo, no una lista de tarjetas sobre fondo plano.

---

### 2.1 Fondo y Texturas

#### [MODIFY] [labnotes/page.tsx](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/app/(default)/labnotes/page.tsx)

- **Fondo con grid sutil:** Un patrón de puntos (dot grid) CSS puro como textura base, estilo "cuaderno de laboratorio". Se crea con `radial-gradient` en CSS puro.
- **Blobs decorativos animados:** Esferas difusas (`blur-3xl`) con colores de la paleta (naranja/púrpura con baja opacidad) flotando en el fondo con animación CSS suave (`@keyframes float`).
- **Gradiente diagonal:** Un `bg-gradient-to-br` sutil que va de blanco a un toque de púrpura muy claro, dando profundidad.
- **Línea de acento lateral:** Una barra vertical naranja decorativa en el borde izquierdo de la sección de artículos, estilo "marca de libro".
- **Separadores con formas SVG:** Waves/curvas SVG entre las secciones principales (Nexus → Artículos → Footer) para romper la monotonía de los bloques rectos.

### 2.2 Elementos Interactivos Nuevos

- **Contador de artículos animado:** Un badge tipo "12 notas publicadas" con un micro-efecto de conteo.
- **Tags/Categorías:** Chips horizontales scrolleables arriba de la grilla de artículos para filtrar por tema (Frontend, Backend, IA, Arquitectura, etc.) — inicialmente estáticos, luego se conectarán a Sanity.
- **"Artículo Destacado" (Featured):** El post más reciente se mostrará en formato hero/banner grande, diferente a las tarjetas regulares, con el texto sobre la imagen y un gradiente oscuro.
- **Animación de entrada:** Cada tarjeta aparecerá con un `fade-up` escalonado cuando entre en viewport (usando Intersection Observer o CSS `animation-delay`).

### 2.3 Footer del Blog

- **Sección "Sobre Lab Notes":** Un bloque con textura oscura (gray-900) al fondo de la página explicando qué es Lab Notes y por qué escriben.
- **Links a redes y GitHub** con iconos interactivos.

---

## FASE 3: Portafolio Real — Proyectos de Sambalab
**Prioridad: ALTA | Esfuerzo: Medio | Impacto: Máximo**

Reemplazar los proyectos genéricos actuales ("Plataforma de Gestión Agrícola", "Marketplace B2B", "Dashboard de Análisis") por **los proyectos reales** de Sambalab.

---

### 3.1 Nuevos Proyectos en Diccionarios

#### [MODIFY] [dictionaries.ts](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/lib/dictionaries.ts)

Se amplía el tipo `projects.items` para soportar más entradas y se reemplazan los datos actuales:

| # | Proyecto | Categoría | Descripción |
|---|----------|-----------|-------------|
| 1 | **Mingako-OS** | Impacto Social & GovTech | Primera plataforma para una fundación de cero carbono. Sistema de gestión de beneficiarios, donaciones y trazabilidad ambiental. Co-creado con la fundación. |
| 2 | **IngenTrust** | Fintech & Confianza Digital | (Necesito tu input: ¿qué es exactamente IngenTrust?) |
| 3 | **Sudalalengua** | EdTech & Cultura | Plataforma de exploración lingüística. Herramientas interactivas para aprender, jugar y experimentar con el lenguaje usando IA generativa. |
| 4 | **CautaleTuCasa** (o NanaiCare) | PropTech / HealthTech | (Necesito tu input: ¿es NanaiCare o un producto diferente?) |
| 5 | **DGRcodex** | Personal Brand & Portfolio | El portafolio y marca personal de Daniel García Rojas. Web de autor que conecta con todo el ecosistema Sambalab. |
| 6 | **Poeta: Artista 1** | Sambalab Studio / Gaming | Experiencia interactiva de Sambalab Studio. (Necesito detalles: ¿juego con IA? ¿ya desplegado?) |

#### [MODIFY] [proyectos.tsx](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/components/proyectos.tsx)

- Ampliar `staticProjectsData` con los nuevos proyectos, sus tecnologías reales y placeholders de imagen (luego reemplazables con screenshots reales).
- Añadir un badge especial "Co-creación" para los proyectos que se hicieron con el método colaborativo (Mingako-OS, etc.).
- Considerar un layout de 2 columnas para los proyectos principales y 3 columnas para los secundarios.

---

## FASE 4: Autenticación con Firebase (GCP Free Tier)
**Prioridad: MEDIA | Esfuerzo: Alto | Impacto: Medio (infraestructura)**

La cuota gratuita de Firebase Auth incluye:
- **10,000 usuarios activos/mes** sin costo
- Google Sign-In, Email/Password, GitHub auth
- SDK de cliente para Next.js con `firebase/auth`
- No requiere backend propio

---

### 4.1 Setup Firebase

#### [NEW] `lib/firebase.ts`
- Inicializar Firebase App con las credenciales del proyecto GCP.
- Exportar `auth` instance.

#### [NEW] `lib/auth-context.tsx`
- Context provider de React que envuelve la app.
- Maneja el estado de sesión (`onAuthStateChanged`).
- Expone `user`, `signIn()`, `signOut()`, `loading`.

### 4.2 Actualizar Rutas de Auth

#### [MODIFY] [signin/page.tsx](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/app/(auth)/signin/page.tsx)
- Reemplazar el formulario estático actual (que dice "Open PRO") por un formulario real conectado a Firebase.
- Mantener Google Sign-In como método principal.
- Estilizar con la paleta de Sambalab (naranja/púrpura/gris oscuro).

#### [MODIFY] [signup/page.tsx](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/app/(auth)/signup/page.tsx)
- Mismo tratamiento que signin.

### 4.3 Middleware de Protección

#### [NEW] `middleware.ts` (raíz)
- Verificar token de sesión en rutas protegidas (`/nexus/*`, `/studio/*`).
- Redirigir a `/signin` si no hay sesión activa.

### 4.4 Header — Botón de Login

#### [MODIFY] [header.tsx](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/components/ui/header.tsx)
- Añadir botón "Entrar" / avatar del usuario logueado en la esquina superior derecha.
- Dropdown con "Mi Cuenta", "Nexus", "Cerrar sesión".

---

## FASE 5: Sambalab Nexus — El Portal Privado
**Prioridad: MEDIA | Esfuerzo: Alto | Impacto: Estratégico**

Nexus es la pieza central de la estrategia de Product-Led Growth descrita en el [roadmap](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/docs/roadmap_nexus_seo.md).

---

### 5.1 Estructura de Rutas

```
app/(default)/nexus/
├── page.tsx              ← Dashboard principal (requiere auth)
├── layout.tsx            ← Layout con sidebar de Nexus
├── plugins/
│   └── page.tsx          ← Catálogo de micro-soluciones
├── templates/
│   └── page.tsx          ← Sandboxes prototipables
└── tracking/
    └── page.tsx          ← Project tracking (futuro)
```

### 5.2 Contenido Inicial

#### [NEW] `app/(default)/nexus/page.tsx`
- Dashboard con bienvenida personalizada al usuario.
- Cards de acceso rápido a: Plugins, Templates, Tracking.
- Estadísticas del ecosistema (# de plugins, # de templates, proyectos activos).

#### [NEW] `app/(default)/nexus/plugins/page.tsx`
- Grid de "micro-soluciones" con tags de tecnología.
- Cada plugin: nombre, descripción, stack, link a GitHub/código.
- Inicialmente con 3-5 plugins hardcodeados (ej: "Stripe Integration Hook", "Auth Middleware Template", "AI Prompt Pipeline").

#### [NEW] `app/(default)/nexus/templates/page.tsx`
- Galería de plantillas prototipables.
- Preview visual + botón "Usar esta plantilla".
- Inicialmente con 2-3 templates (ej: "Landing SaaS", "Dashboard Admin", "Blog con Sanity").

---

## FASE 6: Sambalab Studio — Showcase Creativo
**Prioridad: BAJA | Esfuerzo: Medio | Impacto: Diferenciador**

Una sección dedicada a los proyectos experimentales y creativos de Sambalab (Poeta, juegos, herramientas de lenguaje).

---

### 6.1 Ruta y Estructura

#### [NEW] `app/(default)/studio/page.tsx`
> ⚠️ NOTA: La ruta `/studio` ya está ocupada por Sanity Studio (`app/studio/[[...index]]`). Usaremos `/lab` o `/experiments` como alternativa.

#### [NEW] `app/(default)/lab/page.tsx`
- Página tipo galería/showcase con los proyectos experimentales.
- Diseño oscuro (dark theme) para diferenciar del resto de la web y dar "onda".
- Cards grandes con animación de hover tipo "reveal".

### 6.2 Contenido

| Proyecto | Tipo | Estado |
|----------|------|--------|
| Poeta: Artista 1 | Juego Interactivo | (¿Ya desplegado?) |
| Sudalalengua | Herramienta de Lenguaje | (¿Tiene URL?) |
| Experimentos con IA | Demos | Coming Soon |

---

## FASE 7: Navegación Actualizada
**Prioridad: ALTA | Esfuerzo: Bajo | Impacto: Alto**

---

#### [MODIFY] [header.tsx](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/components/ui/header.tsx)

Nuevo menú de navegación:

| Antes | Después |
|-------|---------|
| Servicios / Proyectos / Lab Notes / Contacto | **Servicios / Proyectos / Lab Notes / Lab / Nexus / Contacto** |

- **Lab:** Link a `/lab` (Sambalab Studio/experimentos).
- **Nexus:** Link a `/nexus` (requiere login, muestra tooltip "Acceso con cuenta").

#### [MODIFY] [dictionaries.ts](file:///Users/dgrcodex/Documents/DGR_dev/2_Sambalab/Sambalabweb/lib/dictionaries.ts)
- Añadir nuevas keys al tipo `navbar`: `lab`, `nexus`.

---

## Orden de Ejecución Recomendado

| Fase | Descripción | Dependencias | Estimación |
|------|-------------|-------------|------------|
| **1** | Rebrand copy + messaging | Ninguna | ~1 sesión |
| **2** | Blog visual overhaul (texturas, animaciones) | Ninguna | ~1 sesión |
| **3** | Portafolio real (proyectos de verdad) | Input tuyo sobre cada proyecto | ~1 sesión |
| **7** | Navegación actualizada | Fases 5+6 (puede ir en paralelo con placeholders) | ~30 min |
| **4** | Auth con Firebase/GCP | Proyecto GCP configurado | ~1-2 sesiones |
| **5** | Nexus portal | Fase 4 (auth) | ~2-3 sesiones |
| **6** | Sambalab Studio/Lab | Ninguna | ~1 sesión |

---

## Ideas Adicionales que Podríamos Agregar

> [!TIP]
> Estas son ideas extra que puedes aprobar o descartar:

1. **Página de "Manifiesto"** (`/manifiesto`) — Un texto tipo ensayo corto sobre la filosofía de Sambalab. Por qué son diferentes, qué les importa. Muy potente para SEO y branding.
2. **Testimonios de Clientes** — Una sección con quotes reales de clientes satisfechos (especialmente de la fundación de Mingako-OS).
3. **Métricas en Vivo** — Un counter animado en la home: "X proyectos entregados", "Y líneas de código", "Z clientes activos". Da sensación de tracción.
4. **Modo Oscuro Toggle** — El header ya tiene un language switcher. Podríamos añadir un toggle de dark mode que cambie todo el site.
5. **RSS Feed** para Lab Notes — Para que la gente pueda suscribirse desde lectores RSS. Muy técnico, muy "dev culture".
6. **GitHub Activity Widget** — Un componente que muestre la actividad reciente de los repos públicos de Sambalab/DGRcodex. Demuestra que son desarrolladores activos.
7. **Case Studies completos** — Páginas individuales para cada proyecto con screenshots, arquitectura, stack, resultados. Esto es oro para SEO.

---

## Verification Plan

### Automated Tests
- `npm run lint` y `npm run build` después de cada fase.
- Verificar que los tipos de TypeScript en `dictionaries.ts` no se rompan al ampliar las interfaces.

### Manual Verification
- Navegar todas las rutas nuevas en dev local.
- Verificar los meta tags con "View Page Source" en el browser.
- Probar el flujo de login completo en Firebase (Fase 4).
- Validar responsividad en móvil de todas las secciones nuevas.
