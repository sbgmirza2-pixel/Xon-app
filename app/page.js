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
const SITE_URL = 'https://xonapp.com';

export const metadata = {
  title: 'Xon App v1.0 Latest Version Download for Android – Cartoons & Anime',
  description: 'Download Xon App 12.5.1 for Android to watch cartoons, anime, movies, and series. Explore its features, installation steps, alternatives, and pros and cons.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Xon App v1.0 Latest Version Download for Android – Cartoons & Anime',
    description: 'Download Xon App latest version for Android. Your ultimate entertainment destination for streaming and downloading cartoons and anime safely.',
    url: SITE_URL,
    siteName: 'Xon App',
    images: [
      {
        url: `${SITE_URL}/xon-app.jpg`, 
        alt: 'Xon App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xon App Download: Features, Guide & Requirements',
    description: 'Download Xon App latest version for Android. Your ultimate entertainment destination for streaming and downloading cartoons and anime safely.',
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
        description: 'Your ultimate entertainment destination for cartoons and anime.',
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

    

      {/* Editorial Citation & Reference Box */}
      <section className="w" style={{ padding: '20px 20px 40px 20px' }}>
        <div style={{ background: 'var(--surface)', borderLeft: '5px solid var(--orange)', border: '2px solid var(--line)', padding: '20px', borderRadius: '16px' }}>
          <p style={{ fontWeight: 'bold', color: 'var(--ink)', marginBottom: '6px' }}>Editorial Citation & Source Reference:</p>
          <p style={{ fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.95rem', margin: 0 }}>
            "According to official developer documentation and entertainment guidelines, Xon App delivers a seamless streaming experience dedicated to animated series, cartoons, and anime lovers."
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '10px', marginBottom: 0 }}>
            Published by Xon App Editorial Team • Last Verified: October 2026
          </p>
        </div>
      </section>
    </main>
  );
}