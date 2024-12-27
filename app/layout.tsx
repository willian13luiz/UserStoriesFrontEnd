// app/layout.tsx (ou pages/_app.tsx se estiver usando a estrutura antiga)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Importação da fonte Inter
const inter = Inter({
  subsets: ['latin'], // Inclui apenas os caracteres necessários para o idioma
  variable: '--font-inter',
  display: 'swap', // Melhora a experiência do carregamento de fontes
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Enviar Dados',
  description: 'Aplicação Next.js com TypeScript e Flask Backend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 min-h-screen pb-20`}
      >
        <Header />
        <main className='h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
