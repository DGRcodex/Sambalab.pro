import { client } from '../../../sanity/lib/client';
import BlogClient from './blog-client';

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    author->{name, image}
  }`;
  return client.fetch(query);
}

async function getSettings() {
  const query = `*[_type == "labnotesSettings"][0]`;
  return client.fetch(query);
}

export const revalidate = 60;

export default async function BlogPage() {
  const [posts, settings] = await Promise.all([
    getPosts(),
    getSettings()
  ]);

  return <BlogClient posts={posts} settings={settings} />;
}
