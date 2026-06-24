# Sambalab Master SEO Data & Schemas

Este documento contiene los perfiles oficiales y los bloques de código JSON-LD listos para ser copiados y pegados en el `layout.tsx` de cualquier nuevo proyecto web de Sambalab o de sus clientes.

## 1. Datos Base Oficiales

### Daniel García Rojas (DGR)
- **Rol:** Fundador / Arquitectura Técnica
- **Alias:** DGRcodex
- **Web Personal / Portafolio:** [https://dgrcodex.me](https://dgrcodex.me)
- **GitHub:** [https://github.com/dgrcodex](https://github.com/dgrcodex)
- **LinkedIn:** [https://linkedin.com/in/dgrcodex](https://linkedin.com/in/dgrcodex)
- **Instagram:** [https://instagram.com/dgrcodex](https://instagram.com/dgrcodex)
- **Correos Electrónicos:** 
  - `dgr@sambalab.pro` (Principal/Corporativo)
  - `dgrcodex@gmail.com`
  - `d.g.r.developer@gmail.com`

### Pedro García Moretti
- **Rol:** Fundador / Director de Negocios y Operaciones
- **LinkedIn:** [https://www.linkedin.com/in/pedro-garc%C3%ADa-moretti-2aaa6281/](https://www.linkedin.com/in/pedro-garc%C3%ADa-moretti-2aaa6281/)
- **Correo Electrónico:** `pgarcia@sambalab.pro`

### Sambalab (La Agencia)
- **Sitio Web Oficial:** [https://sambalab.pro](https://sambalab.pro)
- **LinkedIn:** [https://www.linkedin.com/company/101243899](https://www.linkedin.com/company/101243899)
- **Instagram:** [https://instagram.com/sambalabnexus](https://instagram.com/sambalabnexus)
- **Correos Electrónicos:**
  - `contacto@sambalab.pro`
  - `contact@sambalab.pro`

---

## 2. Snippets de Código (Copiar y Pegar)

Estos scripts deben inyectarse en el `<body>` o el `<head>` (dependiendo del framework) para validar la autoridad de la empresa y de ustedes ante Google. En Next.js 14+, se recomienda insertarlos dentro de un tag `<script type="application/ld+json">` en el archivo `layout.tsx`.

### A. Esquema de Organización (Sambalab)
Este esquema define a la empresa, sus redes oficiales y quiénes son sus fundadores.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sambalab",
  "url": "https://sambalab.pro",
  "logo": "https://sambalab.pro/sambalablogo.png",
  "description": "Agencia de desarrollo de software, diseño web e inteligencia artificial.",
  "email": "contacto@sambalab.pro",
  "sameAs": [
    "https://www.linkedin.com/company/101243899",
    "https://instagram.com/sambalabnexus"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Daniel García Rojas",
      "alternateName": "DGRcodex",
      "url": "https://dgrcodex.me"
    },
    {
      "@type": "Person",
      "name": "Pedro Garcia Moretti",
      "url": "https://www.linkedin.com/in/pedro-garcía-moretti-2aaa6281/"
    }
  ]
}
```

### B. Esquema de Persona (Daniel García Rojas - DGRcodex)
Ideal para usar en blogs personales o en el perfil de autor dentro del blog de Sambalab.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Daniel García Rojas",
  "alternateName": "DGRcodex",
  "jobTitle": "Software Engineer & Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Sambalab"
  },
  "url": "https://dgrcodex.me",
  "email": "dgr@sambalab.pro",
  "sameAs": [
    "https://github.com/dgrcodex",
    "https://linkedin.com/in/dgrcodex",
    "https://instagram.com/dgrcodex"
  ]
}
```

### C. Esquema de Persona (Pedro Garcia Moretti)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pedro Garcia Moretti",
  "jobTitle": "Business & Operations Director",
  "worksFor": {
    "@type": "Organization",
    "name": "Sambalab"
  },
  "url": "https://www.linkedin.com/in/pedro-garcía-moretti-2aaa6281/",
  "email": "pgarcia@sambalab.pro",
  "sameAs": [
    "https://www.linkedin.com/in/pedro-garcía-moretti-2aaa6281/"
  ]
}
```

## 3. Implementación Rápida en Next.js (App Router)

Puedes crear un componente en tu proyecto (ej. `components/seo/SchemaMarkup.tsx`) y usarlo en tu `layout.tsx`:

```tsx
export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sambalab",
          // ... resto del JSON de Sambalab
        })
      }}
    />
  )
}
```
