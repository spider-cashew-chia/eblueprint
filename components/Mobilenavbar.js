import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import { navLinks } from './Navbar';
import { usePathname } from 'next/navigation';

function Mobilenavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div>
      <Sheet open={open} onOpenChange={(sam) => setOpen(sam)}>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon'>
            <Menu className='w-4 h-4' />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <div className='flex flex-col'>
            {navLinks.map((navItem, index) => (
              <Link
                href={navItem.link}
                key={index}
                active={pathname === navItem.link}
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Mobilenavbar;
