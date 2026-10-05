const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'Download Xon App APK (Latest v26) for Android - Free',
  description: 'Download the latest version of Xon App APK safely for Android. Follow simple installation steps and enjoy unlimited streaming.',
  alternates: {
    canonical: `${SITE_URL}/download`,
  },
};

import DownloadContent from './DownloadContent';

export default function Page() {
  return <DownloadContent />;
}