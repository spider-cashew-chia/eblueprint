'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/e-blueprint-logo.svg';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { usePathname } from 'next/navigation';
import Mobilenavbar from './Mobilenavbar';

export const navLinks = [
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
  const pathname = usePathname();

  return (
    <header className='flex justify-between py-6'>
      {/* DESKTOP */}
      <NavigationMenu className='hidden lg:flex'>
        <NavigationMenuList>
          {navLinks.map((navItem, index) => (
            <NavigationMenuItem key={index}>
              <Link href={navItem.link} legacyBehavior passHref>
                <NavigationMenuLink
                  active={pathname === navItem.link}
                  className={navigationMenuTriggerStyle()}
                >
                  {navItem.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* MOBILE */}
      <div className='lg:hidden'>
        <Mobilenavbar />
      </div>

      <Image src={Logo} height={60} priority alt='logo' width={171} />
    </header>
  );
}

export default Navbar;
