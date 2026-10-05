import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularTitles from './components/PopularTitles';
import WhtaIs from './components/WhatIs';
import WhatMakesDifferent from './components/WhatMakesDifferent';
import KeyFeatures from './components/KeyFeatures';
import HowToDownload from './components/HowToDownload';
import HowToInstall from './components/HowToInstall';
import ProsAndCons from './components/ProsAndCons';
import CommonProblems from './components/CommonProblems';
import Conclusion from './components/Conclusion';
import FAQsSection from './components/FAQsSection';
import Screenshots from './components/Screenshots';
import AppInfo from './components/AppInfo';

// ⚠️ DEMO CHECK: Apni original domain yahan update kar lein
const SITE_URL = 'https://xonapp.net/';

export const metadata = {
  title: 'XON App Download – Cartoons & Anime in Hindi, Tamil & Telugu',
  description: 'Watch 10,000+ cartoons and anime on XON App in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto and Chhota Bheem for free on Android & iOS.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'XON App Download – Cartoons & Anime in Hindi, Tamil & Telugu',
    description: 'Watch 10,000+ cartoons and anime on XON App in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto and Chhota Bheem for free on Android & iOS.',
    url: SITE_URL,
    siteName: 'XON App',
    images: [
      {
        url: `${SITE_URL}/xon-app.jpg`, 
        alt: 'XON App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XON App Download – Cartoons & Anime in Hindi, Tamil & Telugu',
    description: ' Watch 10,000+ cartoons and anime on XON App in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto and Chhota Bheem for free on Android & iOS.',
    images: [`${SITE_URL}/xon-app.jpg`],
  },
};

export default function HomePage() {
  // Comprehensive SEO Structured Data (JSON-LD Schema)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Xon App',
        description: 'Watch 10,000+ cartoons and anime on XON App in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto and Chhota Bheem for free on Android & iOS.',
        publisher: {
          '@id': `${SITE_URL}/#organization`
        }
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Xon App Editorial Team',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/xon-app.jpg`
        },
        sameAs: [
          'https://en.wikipedia.org/wiki/Streaming_media' // ⚠️ DEMO CHECK: Change or remove if not needed
        ]
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Xon App',
        operatingSystem: 'ANDROID',
        applicationCategory: 'MultimediaApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        author: {
          '@type': 'Organization',
          name: 'Xon App Editorial Team'
        },
        datePublished: '2026-04-01T08:00:00+00:00',
        dateModified: '2026-10-02T08:00:00+00:00'
      }
    ]
  };

  return (
    <main style={{ position: 'relative' }}>
      {/* Injecting JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <Hero />
      <WhtaIs />
      <AppInfo />
      <WhatMakesDifferent />
      <PopularTitles />
      <KeyFeatures />
      <Screenshots />
      <HowToDownload />
      <HowToInstall />
      <ProsAndCons />
      <CommonProblems />
      <Conclusion />
      <FAQsSection />

    
{/* Simple Community Notice Text */}
      <section className="w" style={{ padding: '20px 20px 40px 20px' }}>
        <p style={{ fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.95rem', margin: '0 0 8px 0', lineHeight: '1.6' }}>
          This website is independently created and maintained by a passionate fan community dedicated to Xon App lovers. It is not officially affiliated with or endorsed by the original app developers.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0 }}>
          Published by Xon App Fan Community • Last Verified: October 2026
        </p>
      </section>
    </main>
  );
}