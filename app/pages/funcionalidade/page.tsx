'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import UserStoryForm from '@/components/UserStoryForm';

const Funcionalidade: React.FC = () => {
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string>('');

  const fields = [
    {
      name: 'sistema',
      label: 'Sistema*',
      required: true,
      placeholder: 'Qual sistema essa história de usuário se refere?',
    },
    {
      name: 'funcionalidade',
      label: 'Funcionalidade*',
      required: true,
      placeholder: 'Descreva a funcionalidade a ser desenvolvida...',
    },
    {
      name: 'info',
      label: 'Informações adicionais',
      required: false,
      placeholder:
        'Descreva mais informações sobre o contexto do sistema, funcionalidade, usuário, valor de negócio...',
      height: '128px',
    },
  ];

  return (
    <Layout
      response={response}
      error={error}
    >
      <div>
        <h1 className='text-4xl font-bold italic mb-4'>
          User Stories Generator
        </h1>
        <UserStoryForm
          endpoint='/generate/funcionalidade'
          fields={fields}
          setResponse={setResponse}
          setError={setError}
        />
      </div>
    </Layout>
  );
};

export default Funcionalidade;
