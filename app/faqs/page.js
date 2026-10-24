import AllFAQsContent from './AllFAQsContent';
const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'All Frequently Asked Questions - Xon App Guide',
  description: 'Explore our comprehensive list of answers regarding the Xon App, installation, features, and compatibility.',
  alternates: {
    canonical: `${SITE_URL}/faqs`,
  },
  openGraph: {
  title: 'All Frequently Asked Questions - Xon App Guide',
  description: 'Explore our comprehensive list of answers regarding the Xon App, installation, features, and compatibility.',
  url: '/faqs',
  siteName: 'Xon App Fan Site',
  type: 'website',
  locale: 'en_US',
  images: [{ url: '/xon-app.jpg', width: 1200, height: 630, alt: 'Xon App icon' }],
},
};



export default function Page() {
  return <AllFAQsContent />;
}