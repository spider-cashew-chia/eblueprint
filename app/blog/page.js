import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { client, urlFor } from '../lib/sanity';
import { PortableText } from 'next-sanity';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const query = `
    *[_type == 'blog'] | order(date desc){
        title,
        'slug': slug.current,
        date,
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
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
      {data.map((blog, index) => (
        <Card key={index}>
          <div className='relative aspect-video'>
            <Image src={urlFor(blog.image).url()} fill />
          </div>
          <CardHeader>
            <CardTitle>{blog.title}</CardTitle>
            <CardDescription>{blog.date}</CardDescription>
          </CardHeader>
          <CardContent className='pb-0 mb-6 line-clamp-4 prose-strong:font-normal'>
            <PortableText value={blog.details} />
          </CardContent>
          <CardFooter>
            <Button asChild className='w-full'>
              <Link href={`/blog/${blog.slug}`}>Read more</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default page;
