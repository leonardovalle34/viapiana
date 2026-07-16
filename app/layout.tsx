import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.churrascariavipiana.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Churrascaria Viapiana — Espeto Corrido em Araquari, SC",
    template: "%s | Churrascaria Viapiana",
  },
  description:
    "A melhor churrascaria de Araquari e região. Espeto corrido, buffet completo e sobremesas. Localizada na BR-280, Km 29 — Porto Grande, Araquari, SC.",
  keywords: [
    "churrascaria araquari",
    "churrascaria viapiana",
    "espeto corrido araquari",
    "rodízio joinville",
    "churrasco br-280",
    "buffet araquari",
    "restaurante araquari sc",
    "churrascaria sc",
  ],
  authors: [{ name: "Churrascaria Viapiana" }],
  creator: "Churrascaria Viapiana",
  publisher: "Churrascaria Viapiana",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Churrascaria Viapiana",
    title: "Churrascaria Viapiana — Espeto Corrido em Araquari, SC",
    description:
      "A melhor churrascaria de Araquari e região. Espeto corrido, buffet completo, sushi e sobremesas.",
    images: [
      {
        url: "/images/og-viapiana.jpg",
        width: 1200,
        height: 630,
        alt: "Churrascaria Viapiana — Espeto Corrido em Araquari SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Churrascaria Viapiana — Espeto Corrido em Araquari, SC",
    description:
      "A melhor churrascaria de Araquari e região. Espeto corrido, buffet completo, sushi e sobremesas.",
    images: ["/images/og-viapiana.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Churrascaria Viapiana",
  image: `${BASE_URL}/images/og-viapiana.jpg`,
  url: BASE_URL,
  telephone: "+554734522100",
  priceRange: "$$",
  servesCuisine: ["Brazilian", "Churrasco", "Sushi", "Buffet"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rodovia BR-280, nº 3177, Km 29",
    addressLocality: "Araquari",
    addressRegion: "SC",
    postalCode: "89245-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.3784,
    longitude: -48.7217,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "11:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "200",
  },
  sameAs: ["https://www.instagram.com/churrascariaviapiana"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#1a0a00] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
