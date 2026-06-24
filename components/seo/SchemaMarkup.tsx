export default function SchemaMarkup() {
  const schemaData = {
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
        "jobTitle": "Software Engineer & Founder",
        "url": "https://dgrcodex.me",
        "email": "dgr@sambalab.pro",
        "sameAs": [
          "https://github.com/dgrcodex",
          "https://linkedin.com/in/dgrcodex",
          "https://instagram.com/dgrcodex"
        ]
      },
      {
        "@type": "Person",
        "name": "Pedro Garcia Moretti",
        "jobTitle": "Business & Operations Director",
        "url": "https://www.linkedin.com/in/pedro-garcía-moretti-2aaa6281/",
        "email": "pgarcia@sambalab.pro",
        "sameAs": [
          "https://www.linkedin.com/in/pedro-garcía-moretti-2aaa6281/"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
