const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'Disclaimer - Xon App Information & Third-Party Policy',
  description: ' Read our Disclaimer for information about app details, third-party content, trademarks, and the information shared on this website.',
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
};

import DisclaimerContent from './DisclaimerContent';

export default function Page() {
  return <DisclaimerContent />;
}