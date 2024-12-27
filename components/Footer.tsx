import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#1059F9] text-white p-4 fixed bottom-0 w-full'>
      <div className='container mx-auto text-center'>
        &copy; {new Date().getFullYear()} Gerador de Histórias de Usuário. Todos
        os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
