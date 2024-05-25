import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/e-blueprint-logo.svg';

const navLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Our services',
    link: '/our-services',
  },
  {
    title: 'Case studies',
    link: '/case-studies',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

function Navbar() {
  return (
    <header className='flex justify-between py-6'>
      <ul className='flex gap-6 '>
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className='text-xl'>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <Image src={Logo} height={60} priority alt='logo' width={171} />
    </header>
  );
}

export default Navbar;
