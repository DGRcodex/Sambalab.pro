import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schema';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-23';

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ID_DEL_PROYECTO',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Sambalab Blog Studio',

  plugins: [
    deskTool(),
    // visionTool({ defaultApiVersion: apiVersion }), // Optional, for GROQ queries
  ],

  schema: {
    types: schema.types,
  },
});
