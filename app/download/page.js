'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Conclusion from '../components/Conclusion';
import Link from 'next/link';

export default function DownloadPage() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds timer
  const [canDownload, setCanDownload] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Ensure component is mounted on client to prevent SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanDownload(true);
    }
  }, [mounted, timeLeft]);

  const steps = [
    "Download the XON APK file from this page.",
    "Open the downloaded file on your Android phone.",
    "Allow your browser or file manager to install unknown apps if asked.",
    "Tap Install and wait for the process to finish.",
    "Once installed, open XON from your app menu.",
    "Follow the on-screen steps and start using the app."
  ];

  // Calculate progress percentage for timer ring (from 10 down to 0)
  const progressPercent = ((10 - timeLeft) / 10) * 100;

  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', paddingTop: '110px' }}>
      {/* Fixed Navbar Component */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Download Content Section */}
      <section style={{
        padding: '20px 20px 60px 20px',
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {/* Page Header */}
        <div style={{
          paddingLeft: '20px',
          borderLeft: '4px solid var(--orange)',
        }}>
          <h1 style={{ 
            font: '800 2.5rem var(--h)', 
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            Download Xon App
          </h1>
        </div>

        {/* Intro Paragraph */}
        <p style={{ 
          font: '1.05rem var(--b)', 
          color: 'var(--muted)', 
          lineHeight: '1.7', 
          margin: '0 0 5px 0',
          paddingLeft: '4px'
        }}>
          Use this page to download the latest XON APK directly from our website. If you want to know more about the app before installing it, read our <Link href="/" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: '700' }}>XON App</Link> overview for its features, supported devices, and other useful details in one place.
        </p>

        {/* Timer & Download Action Card */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: '24px',
          padding: '36px 32px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '20px'
        }}>
          {/* Requested Paragraph */}
          <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.6', maxWidth: '600px', margin: '0 0 5px 0' }}>
            The timer will finish in a few seconds. Tap the download button below once it ends to start your Xon app download.
          </p>

          <div style={{
            background: 'var(--bg)',
            border: '1px solid var(--line)',
            borderRadius: '20px',
            padding: '24px',
            width: '100%',
            maxWidth: '420px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
            boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.01)'
          }}>
            {!mounted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', minHeight: '120px', justifyContent: 'center', width: '100%' }}>
                <span style={{ font: '700 0.95rem var(--h)', color: 'var(--muted)' }}>Preparing secure connection...</span>
              </div>
            ) : !canDownload ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
                {/* Timer Ring */}
                <div style={{
                  position: 'relative',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: `conic-gradient(var(--orange) ${progressPercent}%, var(--line) ${progressPercent}%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 25px rgba(255, 106, 0, 0.2)',
                  transition: 'background 1s linear'
                }}>
                  <div style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    background: 'var(--surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    font: '800 1.5rem var(--h)',
                    color: 'var(--orange)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                  }}>
                    {timeLeft}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ font: '800 1.05rem var(--h)', color: 'var(--ink)' }}>
                    Generating Download Link
                  </span>
                  <span style={{ font: '600 0.9rem var(--b)', color: 'var(--muted)' }}>
                    Please wait <span style={{ color: 'var(--orange)', fontWeight: '800' }}>{timeLeft} seconds</span>...
                  </span>
                </div>
              </div>
            ) : (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="/apk/xon-app-v12.5.1.apk"
                  download
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    background: 'var(--orange)',
                    color: '#fff',
                    padding: '16px 28px',
                    borderRadius: '14px',
                    font: '800 1.1rem var(--h)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: isHovered ? '0 15px 30px rgba(255, 106, 0, 0.45)' : '0 10px 25px rgba(255, 106, 0, 0.25)',
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                    filter: isHovered ? 'brightness(1.05)' : 'brightness(1)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Xon App APK (v12.5.1)
                </a>
                <span style={{ fontSize: '0.82rem', color: 'var(--muted)', fontFamily: 'var(--b)' }}>
                  File size: ~15 MB &bull; Android 5.0+ &bull; Verified Safe
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Installation Steps Card */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
          marginTop: '10px'
        }}>
          <div style={{
            paddingLeft: '16px',
            borderLeft: '4px solid var(--orange)',
            marginBottom: '24px'
          }}>
            <h2 style={{ 
              font: '800 1.5rem var(--h)', 
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              How to install it?
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {steps.map((step, index) => (
              <div key={index} style={{
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                borderRadius: '14px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.25s ease'
              }}>
                <span style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--orange)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '800 0.85rem var(--h)',
                  flexShrink: 0
                }}>
                  {index + 1}
                </span>
                <span style={{ font: '1rem var(--b)', color: 'var(--ink)', lineHeight: '1.5' }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Conclusion */}
      <Conclusion />
    </main>
  );
}