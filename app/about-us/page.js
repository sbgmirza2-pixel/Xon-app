const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'About Us - Xon App Information & Android Guides',
  description: 'Learn more about Xon App, our mission, Android guides, feature updates, and reliable information resources provided for users.',
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
};

import AboutContent from './AboutContent';

export default function Page() {
  return <AboutContent />;
}