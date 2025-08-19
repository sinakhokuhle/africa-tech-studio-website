import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import CookieConsent from '@/components/cookie-consent';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Africa Tech Studio - Web Development & AI Solutions',
  description: 'Professional web development, mobile apps, and AI automation solutions for modern businesses in Africa and beyond.',
  keywords: 'web development, AI solutions, mobile apps, automation, Africa, tech studio',
  authors: [{ name: 'Africa Tech Studio' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://africatechstudio.com'),
  openGraph: {
    title: 'Africa Tech Studio - Web Development & AI Solutions',
    description: 'Professional web development, mobile apps, and AI automation solutions for modern businesses.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://africatechstudio.com',
    siteName: 'Africa Tech Studio',
    images: [
      {
        url: '/file_00000000fdf461f8bc4363b4365dcf70.png',
        width: 1200,
        height: 630,
        alt: 'Africa Tech Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Africa Tech Studio - Web Development & AI Solutions',
    description: 'Professional web development, mobile apps, and AI automation solutions for modern businesses.',
    images: ['/file_00000000fdf461f8bc4363b4365dcf70.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africatechstudio.com';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Africa Tech Studio',
    url: 'https://africatechstudio.com',
    logo: '/file_00000000fdf461f8bc4363b4365dcf70.png',
    sameAs: [
      'https://www.linkedin.com/',
      'https://twitter.com/',
      'https://github.com/'
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      email: 'hello@africatechstudio.com',
      telephone: '+2341234567890',
      contactType: 'customer support',
      areaServed: 'Africa',
      availableLanguage: ['English']
    }]
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon/Icons */}
        <link rel="icon" href="/file_00000000fdf461f8bc4363b4365dcf70.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/file_00000000fdf461f8bc4363b4365dcf70.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/file_00000000fdf461f8bc4363b4365dcf70.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/file_00000000fdf461f8bc4363b4365dcf70.png" />
        <meta name="theme-color" content="#0f172a" />
        {/* Canonical base for metadata */}
        <meta property="og:url" content={siteUrl} />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* Analytics (conditionally loaded) */}
        {plausibleDomain ? (
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        ) : null}
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-setup" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        ) : null}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}