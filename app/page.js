const SITE_URL = 'https://xonapp.net';
const SITE_NAME = 'Xon App Fan Site';       
const UPDATED = '2026-10-24';                   

export const metadata = {
  title: { absolute: 'Xon App APK 12.5.1 Download for Android – Latest Version' },
  description: 'Download Xon App APK v12.5.1 for Android. Features, install steps, safety tips and fixes for common problems. Updated October 2026.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Xon App APK 12.5.1 Download for Android – Latest Version',
    description: 'Download Xon App APK v12.5.1 for Android. Features, install steps, safety tips and fixes for common problems. Updated October 2026.',
    url: '/',
  },
};

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularTitles from './components/PopularTitles';
import WhatIs from './components/WhatIs';
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

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Xon App',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Xon App',
        url: SITE_URL,
        description:
          'Xon App APK for Android: features, install steps, safety tips and fixes for common problems.',
        operatingSystem: 'Android 5.0+',
        applicationCategory: 'MultimediaApplication',
        softwareVersion: '12.5.1',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@id': `${SITE_URL}/#organization` },
        dateModified: UPDATED,
      },
    ],
  };

  return (
    <main style={{ position: 'relative' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <WhatIs />
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

      <section className="w" style={{ padding: '20px 20px 40px 20px' }}>
        <p style={{ fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.95rem', margin: '0 0 8px 0', lineHeight: '1.6' }}>
          This website is an independent fan site and is not officially affiliated with or endorsed by the app's developers.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0 }}>
          Published by {SITE_NAME} • Last updated: October 24, 2026
        </p>
      </section>
    </main>
  );
}