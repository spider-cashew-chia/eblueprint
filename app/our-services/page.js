import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { client, urlFor } from '../lib/sanity';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

async function getData() {
  const query = `
    *[_type == 'services']{
      title,
      'slug': slug.current,
      excerpt,
      image,
      details
}
  `;

  const data = await client.fetch(query);
  return data;
}

async function page() {
  const data = await getData();
  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Our services</h1>

      <div className='grid grid-cols-2 gap-4'>
        {data.map((blog, index) => (
          <Card key={index}>
            <div className='relative aspect-video'>
              <Image
                src={urlFor(blog.image).url()}
                className='object-cover rounded-t-lg'
                fill
                alt={blog.title}
              />
            </div>
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription className='prose-p:font-light line-clamp-2 prose-strong:font-light'>
                <PortableText value={blog.excerpt} />
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <Button asChild className='w-full'>
                <Link href={`/our-services/${blog.slug}`}>Read more</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default page;
