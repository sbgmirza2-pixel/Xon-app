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
  title: 'XON App 12.5.1 APK – Mod & VIP Unlocked Download for Android',
  description: 'Watch 10,000+ cartoons and anime on XON App in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto and Chhota Bheem for free on Android & iOS.',
 metadataBase: new URL("https://xonapp.net"),
   
  openGraph: {
    title: 'XON App 12.5.1 APK – Mod & VIP Unlocked Download for Android',
    description: 'Watch 10,000+ cartoons and anime on XON App in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto and Chhota Bheem for free on Android & iOS.',
    url: 'https://xonapp.net',
    siteName: 'XON App',
    images: [
      {
        url: 'https://xonapp.net/xon-app.jpg', 
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
    title: 'XON App 12.5.1 APK – Mod & VIP Unlocked Download for Android',
    description: 'Watch 10,000+ cartoons and anime on XON App in Hindi, English, Tamil & Telugu. Stream Doraemon, Naruto and Chhota Bheem for free on Android & iOS.',
    images: ['https://xonapp.net/xon-app.jpg'],
  },
   alternates: {
    canonical: 'https://xonapp.net',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${baloo2.variable} ${nunito.variable}`}>
      <head>
        {/* Optimized Google Analytics Tag */}
        <Script
        strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DEZDNL1KK3"
          
        />
        <Script id="google-analytics" 
        strategy="afterInteractive">
            dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DEZDNL1KK3');
            `,
          }}
        </Script>

      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}