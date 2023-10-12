import Nav from '@/components/Nav';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'johnfry.me',
  description: 'Online portfolio of John Fry',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
