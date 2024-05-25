import { client, urlFor } from '@/app/lib/sanity';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

async function getData(slug) {
  const query = `
  *[_type == 'blog' && slug.current == '${slug}']{
    title,
    'slug': slug.current,
    date,
    image,
    details
}[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function page({ params }) {
  const data = await getData(params.slug);

  return (
    <div>
      <h1 className='text-2xl font-bold md:text-4xl'>{data.title}</h1>
      <p className='mb-6'>{data.date}</p>
      <div className='relative aspect-video'>
        <Image
          src={urlFor(data.image).url()}
          alt={data.title}
          fill
          className='rounded-lg'
        />
      </div>
      <div className='mt-8 prose max-w-none'>
        <PortableText value={data.details} />
      </div>
    </div>
  );
}
