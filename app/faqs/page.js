import AllFAQsContent from './AllFAQsContent';
const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'All Frequently Asked Questions - Xon App Guide',
  description: 'Explore our comprehensive list of answers regarding the Xon App, installation, features, and compatibility.',
  alternates: {
    canonical: `${SITE_URL}/faqs`,
  },
};



export default function Page() {
  return <AllFAQsContent />;
}