const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'Download Xon App APK (Latest v26) for Android - Free',
  description: 'Watch 10,000+ cartoons and anime on XON App in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto and Chhota Bheem for free on Android & iOS.',
  alternates: {
    canonical: `${SITE_URL}/download`,
  },
};

import DownloadContent from './DownloadContent';

export default function Page() {
  return <DownloadContent />;
}