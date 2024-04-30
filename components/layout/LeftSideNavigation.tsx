'use client';

import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/lib/constants';

const LeftSideNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-12 bg-blue-2 shadow-xl max-lg:hidden">
      <Image src="/logo.png" alt="Esencia name logo" width={150} height={50} />

      <div className="flex gap-4 text-body-medium items-center">
        <UserButton />
        <p>Edit Profile</p>
      </div>

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${
              pathname === link.url ? 'text-blue-1' : ''
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNavigation;
