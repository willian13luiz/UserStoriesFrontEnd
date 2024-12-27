import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Remark } from 'react-remark';

interface LayoutProps {
  children: React.ReactNode;
  response: string;
  error: string;
}

const Layout: React.FC<LayoutProps> = ({ children, response, error }) => {
  console.log(response);
  return (
    <div className='flex flex-col lg:flex-row w-full h-full'>
      {/* Lado Esquerdo: Campos de Entrada e Botões */}
      <div className='lg:w-1/2 bg-gray-100 p-6 rounded shadow h-full'>
        {children}
      </div>
      {/* Lado Direito: Resposta */}
      <div className='lg:w-1/2 bg-white p-6 rounded shadow h-full overflow-auto'>
        {!error && !response && (
          <div className='flex justify-center items-center h-screen flex-col space-y-2 -mt-32'>
            <div className='w-24 h-24 border-8 border-[#1059F9] rounded-full'></div>
            <h1 className='text-4xl font-bold text-center'>
              Oi, vamos escrever <br /> histórias juntos?!
            </h1>
            <h4 className='font-semibold text-[#9E9E9E] text-center'>
              Preencha os campos do prompt <br /> ao lado esquerdo e clique em{' '}
              <br />
              "Gerar História de Usuário"
            </h4>
          </div>
        )}
        {error && (
          <div className='text-red-500 mb-4'>
            <p>{error}</p>
          </div>
        )}
        {response && (
          <div className='prose'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {response}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
