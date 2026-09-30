import { Baloo_2, Nunito } from 'next/font/google';
import './globals.css';

import Footer from './components/Footer';

const baloo2 = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  weight: ['700', '800'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: 'Xon App - Download Xon App 12.5.1 for Android',
  description: 'Download Xon App 12.5.1 for Android to watch cartoons, anime, movies, and series.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${baloo2.variable} ${nunito.variable}`}>
      <body>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}