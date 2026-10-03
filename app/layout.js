import { Baloo_2, Nunito } from 'next/font/google';
import Script from 'next/script';
import Footer from './components/Footer';
import './globals.css';

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

// ⚠️ DEMO CHECK: Apni original domain yahan update kar lein
const SITE_URL = 'https://xonapp.net/';

export const metadata = {
  title: 'XON App Download – Cartoons & Anime in Hindi, Tamil & Telugu',
  description: 'Download XON App 12.5.1 for Android to watch cartoons, anime, movies, and series.',
  authors: [{ name: 'XON App Team', url: `${SITE_URL}/about-us` }],
  creator: 'XON App',
  publisher: 'XON App',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'XON App Download – Cartoons & Anime in Hindi, Tamil & Telugu',
    description: 'Watch 10,000+ cartoons and anime with XON App, available in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto, Chhota Bheem, and more for free on Android & iOS.',
    url: SITE_URL,
    siteName: 'XON App',
    images: [
      {
        url: `${SITE_URL}/xon-app.jpg`, 
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
    title: 'XON App Download – Cartoons & Anime in Hindi, Tamil & Telugu',
    description: 'Watch 10,000+ cartoons and anime with XON App, available in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto, Chhota Bheem, and more for free on Android & iOS.',
    images: [`${SITE_URL}/xon-app.jpg`],
  },
};

export default function RootLayout({ children }) {
  // Current date for machine-readable freshness signals
  const currentDate = new Date().toISOString();

  // Global SEO Schema Markup with Person Author, Dates, and Entity Links
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Xon App',
        description: 'Download Xon App 12.5.1 for Android to watch cartoons, anime, movies, and series.',
        publisher: {
          '@id': `${SITE_URL}/#organization`
        }
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Xon App',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.webp`
        },
        sameAs: [
          'https://en.wikipedia.org/wiki/Streaming_media', // ⚠️ DEMO CHECK: Change or remove if needed
          'https://en.wikipedia.org/wiki/Mobile_app'
        ]
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#author`,
        name: 'Xon App Team',
        url: `${SITE_URL}/about`
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#software`,
        name: 'Xon App',
        operatingSystem: 'ANDROID',
        applicationCategory: 'MultimediaApplication',
        softwareVersion: '12.5.1',
        datePublished: '2026-04-01T00:00:00Z',
        dateModified: currentDate,
        author: {
          '@id': `${SITE_URL}/#author`
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${baloo2.variable} ${nunito.variable}`}>
      <head>
        {/* Google Analytics Tag - ⚠️ DEMO CHECK: Replace ID if needed */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XN8J8Q9TLP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XN8J8Q9TLP');
          `}
        </Script>

        {/* Global Schema Script injected here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}