import { type SchemaTypeDefinition } from 'sanity';

export const labnotesSettings: SchemaTypeDefinition = {
  name: 'labnotesSettings',
  title: 'Lab Notes Settings',
  type: 'document',
  fields: [
    // ══════════ HERO SECTION ══════════
    {
      name: 'heroLabel',
      title: 'Hero Top Label',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' }
      ]
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' }
      ]
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' }
      ]
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' }
      ]
    },

    // ══════════ TECH RADAR ══════════
    {
      name: 'radarTitle',
      title: 'Tech Radar Title',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' }
      ]
    },
    {
      name: 'techRadar',
      title: 'Tech Radar News',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'source', title: 'Source', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'date', title: 'Date (e.g. 24 Jun, 2026)', type: 'string' },
            { name: 'tag', title: 'Tag (e.g. Open Source)', type: 'string' }
          ]
        }
      ]
    },

    // ══════════ NEWSLETTER ══════════
    {
      name: 'newsletterTitle',
      title: 'Newsletter Title',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' }
      ]
    },
    {
      name: 'newsletterDescription',
      title: 'Newsletter Description',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' }
      ]
    },
    {
      name: 'newsletterButton',
      title: 'Newsletter Button Text',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' }
      ]
    },

    // ══════════ FOOTER (ABOUT) ══════════
    {
      name: 'footerTitle',
      title: 'Footer Title',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' }
      ]
    },
    {
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Lab Notes Global Settings'
      };
    }
  }
};
