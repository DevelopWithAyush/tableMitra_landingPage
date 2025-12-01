import Navbar from "@/components/Common/Navbar";
import "./globals.css";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: "TableMitra – Hotel Management System India | QR Code Ordering & In-Room Dining Software",
  description: "TableMitra is India’s leading hotel management system for in-room dining, housekeeping, and guest services. Enable QR-code ordering, automate service requests, and streamline hotel operations in minutes. Trusted by hotels across India.",
  icons: {
    icon: '/images/favicon.png',
  },
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
    url: 'https://tablemitra.com',
    title: 'TableMitra – Hotel Management System India',
    description: 'QR-based hotel service management, in-room dining, housekeeping automation.',
    images: [
      {
        url: 'https://tablemitra.com/images/og-tablemitra.png',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tablemitra_india',
    creator: '@tablemitra_india',
    title: 'TableMitra – Hotel Management System India',
    description: 'India’s leading QR-based hotel management and in-room dining system.',
    images: ['https://tablemitra.com/images/og-tablemitra.png']
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
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
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
                  "email": "ayush@tablemitra.com",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                  "https://tablemitra.com/privacy-policy",
                  "https://tablemitra.com/terms-of-service"
                ]
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
        <Footer />
      </body>
    </html>
  );
}
