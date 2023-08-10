// components/RootLayout.js

import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';




const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '',
  description: '',
};

export default function layout({  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
   
        <Header />
        <Footer />
      
      </body>
    </html>
  );
}
