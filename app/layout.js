import { Baloo_2, Nunito } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from './components/Footer';
import './globals.css';
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESC } from './lib/site';

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
  metadataBase: new URL(SITE_URL),

  // Har page ka apna title hai, isliye template nahi lagaya
  title: DEFAULT_TITLE,
  description: DEFAULT_DESC,
  robots: { index: true, follow: true },

  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    url: SITE_URL,
    siteName: 'Xon App',
    images: [
      {
        url: '/xon-app.jpg',
        width: 1200,
        height: 630,
        alt: 'Xon App Download',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ['/xon-app.jpg'],
  },
};

// NOTE: JSON-LD (schema) yahan nahi hai, sirf page.js mein hai,
// taake WebSite/SoftwareApplication do baar na aaye.

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${baloo2.variable} ${nunito.variable}`}>
      <body>
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-DEZDNL1KK3" />
      </body>
    </html>
  );
}