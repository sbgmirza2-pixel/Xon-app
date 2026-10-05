const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'DMCA Policy - Xon App Copyright & Removal Notice',
  description: 'If you believe your copyrighted work appears here without permission, learn how to send a copyright notice for review.',
  alternates: {
    canonical: `${SITE_URL}/dmca`,
  },
};

import DMCAContent from './DMCAContent';

export default function Page() {
  return <DMCAContent />;
}