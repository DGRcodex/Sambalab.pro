# Sambalab Roadmap & SEO Strategy

## 1. Análisis y Estrategia SEO (Sambalab, DGR y Pedro)

### 1.1 Estado Actual del SEO en Sambalab
Actualmente, el SEO de `Sambalabweb` se encuentra en una etapa **muy básica**. El archivo `app/layout.tsx` contiene metadatos estáticos mínimos:
```typescript
export const metadata = {
  title: 'Sambalab - Diseño, Desarrollo e Inteligencia',
  description: 'Agencia de desarrollo de software, diseño web e inteligencia artificial.',
}
```
**Deficiencias actuales:**
- Ausencia de OpenGraph (OG) y Twitter Cards, lo que impide que los enlaces se previsualicen correctamente en redes sociales o WhatsApp.
- Falta de metadatos dinámicos por página (Next.js `generateMetadata`).
- No hay esquema de datos estructurados (JSON-LD) para que Google entienda que somos una agencia de software.
- Carencia de sitemap automático (`sitemap.xml`) y configuración de `robots.txt`.

### 1.2 Estrategia SEO Corporativa (Sambalab)
Para posicionar a Sambalab como un laboratorio técnico de élite, implementaremos:
1. **Dynamic SEO Routing:** Uso de la API Metadata de Next.js 15 para generar títulos y descripciones ricas según la ruta.
2. **Technical Keyword Targeting:** Apuntar a nichos específicos de alto valor y baja competencia: "Desarrollo MVPs escalables", "Arquitectura Cloud Next.js", "Integración IA Generativa corporativa".
3. **Core Web Vitals:** Mantener tiempos de carga por debajo de 1.5s. Actualmente tenemos Vercel Analytics y SpeedInsights instalados, lo cual es un gran primer paso.
4. **Content-Led SEO (Lab Notes):** El blog no será genérico. Escribiremos artículos densos y técnicos sobre problemas arquitectónicos reales.

### 1.3 Estrategia de Autoridad Personal (Daniel García Rojas "DGR" y Pedro Garcia Moretti)
El SEO corporativo hoy en día depende de la "Autoridad de Entidad" (E-E-A-T de Google). Google confía más en empresas que tienen expertos reales detrás.
- **Perfiles de Autor Integrados:** En Sanity, tanto **DGR** como **Pedro Garcia Moretti** tendrán esquemas de Autor (`author`). 
- **Firma DGR:** Cada post técnico firmado como **DGR** construirá una huella digital que asocia el alias con "Ingeniería de Software e IA".
- **JSON-LD Schema de Persona:** Inyectaremos metadatos estructurados en la web indicando que Daniel y Pedro son los fundadores de Sambalab, conectando sus perfiles de GitHub/LinkedIn con el dominio `sambalab.pro`.

---

## 2. Sambalab Nexus: La Plataforma de Crecimiento

### 2.1 Visión General
**Sambalab Nexus** será un portal privado/semi-público (`/nexus`) destinado a fidelizar clientes, generar leads técnicos de alta calidad y transparentar el proceso de desarrollo.

### 2.2 Funcionalidades Clave
1. **Project Tracking (Transparencia Total):**
   - Un tablero donde los clientes activos puedan ver el avance de sus proyectos en tiempo real (Roadmap, Sprints, blockers).
   - Genera confianza absoluta. El cliente no tiene que "preguntar cómo va", simplemente entra a Nexus.

2. **Micro-Soluciones y Plugins (El Gancho):**
   - Un repositorio de fragmentos de código, integraciones (ej. scripts para Stripe, hooks de React, prompts de IA optimizados) que resuelven problemas pequeños.
   - Posiciona a Sambalab como solucionadores ágiles.

3. **Plantillas Prototipables Gratuitas (Product-Led Growth):**
   - Ofrecer repositorios o sandboxes (plantillas Next.js/Tailwind modificables) para que startups o clientes puedan armar visualmente su propio prototipo inicial.
   - **Mecánica de Lead Generation:** El cliente usa la plantilla gratis para armar su idea visual. Cuando choca con la pared técnica (necesita backend, base de datos, lógica pesada o IA), **ya está dentro del ecosistema de Sambalab**. Nos contactan para llevar ese prototipo a un entorno de producción real.

### 2.3 Evaluación del Plan (Opinión Técnica)
> **Evaluación: Sobresaliente y Estratégico.**

Este plan es un movimiento maestro en términos de **Arquitectura de Negocios de Software**. Estás pasando de ser una "agencia que vende horas" a construir un "Producto que genera servicios" (Product-Led Services). 

Al ofrecer plantillas gratuitas, reduces la fricción de entrada a cero. Educas a tu cliente en tu propio ecosistema tecnológico. Cuando ellos validan su idea con tus plantillas, el paso natural e inevitable es contratar a los creadores de la plantilla (Sambalab) para escalar el sistema. Esto, combinado con el SEO técnico enfocado en DGR y Pedro como figuras de autoridad, creará un embudo de conversión altamente calificado y automatizado.
