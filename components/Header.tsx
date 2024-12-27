'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header: React.FC = () => {
  const router = useRouter();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Funcionalidade', href: '/pages/funcionalidade' },
  ];

  return (
    <header className='bg-[#1059F9] text-white p-4'>
      <nav className='container mx-auto flex content-center justify-center'>
        <div className='flex w-full content-center justify-center'>
          <Image
            src='/img/sparkler.png' // Replace with your logo path
            alt='Logo'
            className='h-32 w-auto' // Adjust height and width as needed
            width={'192'}
            height={'192'}
          />
        </div>

        {/* Placeholder for right-side navigation (optional) */}
        <div className='flex space-x-4'></div>
      </nav>
    </header>
  );
};

export default Header;
