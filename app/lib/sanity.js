import imageURLBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '490dhifs',
  dataset: 'production',
  apiVersion: '2024-05-24',
  useCdn: true,
});

const builder = imageURLBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
