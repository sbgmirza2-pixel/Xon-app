import {
  SITE_URL,
  SITE_NAME,
  APP_VERSION,
  UPDATED_ISO,
  UPDATED_HUMAN,
  DEFAULT_TITLE,
  DEFAULT_DESC,
  DISCLAIMER,
} from './lib/site';

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

export const metadata = {
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESC,
  alternates: { canonical: '/' },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    url: '/',
  },
};

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
        softwareVersion: APP_VERSION,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@id': `${SITE_URL}/#organization` },
        dateModified: UPDATED_ISO,
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
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: '0 0 8px 0', lineHeight: '1.6' }}>
          {DISCLAIMER}
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0 }}>
          Published by {SITE_NAME} • Last updated: {UPDATED_HUMAN}
        </p>
      </section>
    </main>
  );
}