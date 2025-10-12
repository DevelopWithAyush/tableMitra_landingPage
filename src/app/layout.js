import Navbar from "@/components/Common/Navbar";
import "./globals.css";

export const metadata = {
  title: "TableMitra India - Hotel Management System | QR Code Ordering for Indian Hotels",
  description: "India's leading hotel management system. Streamline operations for Indian hotels with QR-based service management. Manage in-room dining, housekeeping, laundry, and spa services. Available in Hindi & English.",
  keywords: "hotel management system India, QR code ordering India, Indian hotel technology, hotel operations India, guest services India, restaurant automation India, hotel software India, hospitality management India, hotel POS system India",
  authors: [{ name: "TableMitra India" }],
  creator: "TableMitra India",
  publisher: "TableMitra India",
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tablemitra.com',
    siteName: 'TableMitra India',
    title: 'TableMitra India - Hotel Management System',
    description: 'India\'s leading hotel management system with QR-based service management. Streamline operations for Indian hotels.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TableMitra India Hotel Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TableMitra India - Hotel Management System',
    description: 'India\'s leading hotel management system with QR-based service management.',
    images: ['/images/twitter-image.jpg'],
    creator: '@tablemitra_india',
  },
  alternates: {
    canonical: 'https://tablemitra.com',
  },
  category: 'technology',
  classification: 'Business Software',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'application-name': 'TableMitra India',
    'apple-mobile-web-app-title': 'TableMitra India',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#FE5F1E',
    'theme-color': '#FE5F1E',
    'geo.region': 'IN',
    'geo.country': 'India',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FE5F1E" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "TableMitra India",
              "description": "India's leading hotel operations management system with QR-based service requests for Indian hotels",
              "url": "https://tablemitra.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "inLanguage": ["en-IN", "hi-IN"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "eligibleRegion": {
                  "@type": "Country",
                  "name": "India"
                }
              },
              "provider": {
                "@type": "Organization",
                "name": "TableMitra India",
                "url": "https://tablemitra.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN",
                  "addressLocality": "India"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "ayush@tablemitra.in",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"]
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              },
              "audience": {
                "@type": "Audience",
                "geographicArea": {
                  "@type": "Country",
                  "name": "India"
                }
              }
            })
          }}
        />
      </head>
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
