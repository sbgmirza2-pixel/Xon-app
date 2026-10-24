import { Baloo_2, Nunito } from 'next/font/google';
import Script from 'next/script';
import Footer from './components/Footer';
import './globals.css';

const baloo2 = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  weight: ['700', '800'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700'],
});

export const metadata = {
  metadataBase: new URL('https://xonapp.net'),
  
  title: {
    default: 'Xon App APK 12.5.1 Download for Android – Latest Version',
    template: '%s | Xon App',
  },
  description:
    'Download Xon App APK v12.5.1 for Android. Features, install steps, safety tips and fixes for common problems. Updated October 2026.',
  openGraph: {
    siteName: 'Xon App Fan Site',
    images: [
      {
        url: '/xon-app.jpg',
        width: 1200,
        height: 630,
        alt: 'Xon App Download',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/xon-app.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${baloo2.variable} ${nunito.variable}`}>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DEZDNL1KK3"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DEZDNL1KK3');
          `}
        </Script>

        {children}
        <Footer />
      </body>
    </html>
  );
}