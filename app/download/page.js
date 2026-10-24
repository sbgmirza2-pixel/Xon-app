import DownloadContent from './DownloadContent';
const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'Download Xon App APK 12.5.1 for Android',
  description: 'Download Xon App APK v12.5.1 for Android. File details, requirements, install steps and safety tips before you install.',
  alternates: { canonical: '/download' },
  openGraph: {
    title: 'Download Xon App APK 12.5.1 for Android',
    description: 'Download Xon App APK v12.5.1 for Android. File details, requirements, install steps and safety tips.',
    url: '/download',
    images: [{ url: '/xon-app.jpg', width: 1200, height: 630 }],
  },
};



export default function Page() {
  return <DownloadContent />;
}