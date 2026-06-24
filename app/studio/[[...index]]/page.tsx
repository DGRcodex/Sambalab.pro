'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  // Returns the NextStudio component to render the Sanity Studio
  return <NextStudio config={config} />;
}
