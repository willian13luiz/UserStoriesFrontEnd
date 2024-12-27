'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const Home: React.FC = () => {
  const [response, setResponse] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Funcionalidade', href: '/pages/funcionalidade' },
  ];

  return (
    <Layout
      response={response}
      error={error}
    >
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>
          Bem-vindo ao Gerador de Histórias de Usuário
        </h1>
        <p className='mb-6'>Selecione o tipo de história que deseja gerar:</p>
        <div className='flex flex-col space-y-4 items-center'>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='bg-[#1059F9] text-white px-6 py-3 rounded hover:bg-blue-700 transition'
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
