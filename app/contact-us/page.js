const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'Contact Us - Xon App Support & Feedback',
  description: 'Get in touch with the Xon App team for questions, feedback, technical support, or content corrections. We are here to help.',
  alternates: {
    canonical: `${SITE_URL}/contact-us`,
  },
};

import ContactContent from './ContactContent';

export default function Page() {
  return <ContactContent />;
}