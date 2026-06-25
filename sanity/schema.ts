import { type SchemaTypeDefinition } from 'sanity';
import { author } from './author';
import { labnotesSettings } from './labnotesSettings';

// Esquema para el bloque de Youtube
export const youtube: SchemaTypeDefinition = {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Video',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }
  ]
};

// Esquemas básicos para el blog
export const post: SchemaTypeDefinition = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        { type: 'youtube' } // Añadimos el bloque de youtube
      ],
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, youtube, author, labnotesSettings],
};
