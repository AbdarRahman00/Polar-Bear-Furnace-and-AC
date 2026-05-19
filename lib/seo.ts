import type { Metadata } from "next";
import { BUSINESS_INFO } from "./constants";

export function getMetadata(title: string, description: string, path = ""): Metadata {
  const url = `https://www.polarbearmechanicalltd.com${path}`;
  
  return {
    title: `${title} | ${BUSINESS_INFO.name}`,
    description,
    metadataBase: new URL("https://www.polarbearmechanicalltd.com"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${BUSINESS_INFO.name}`,
      description,
      url,
      siteName: BUSINESS_INFO.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/images/polar-bear-og.jpg",
          width: 1200,
          height: 630,
          alt: `${BUSINESS_INFO.name} HVAC & Boiler Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BUSINESS_INFO.name}`,
      description,
      images: ["/images/polar-bear-og.jpg"],
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": BUSINESS_INFO.name,
    "image": "https://www.polarbearmechanicalltd.com/images/polar-bear-logo.jpg",
    "@id": "https://www.polarbearmechanicalltd.com/#business",
    "url": "https://www.polarbearmechanicalltd.com",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3130 Boychuk Ave Ste. 477A",
      "addressLocality": "Colorado Springs",
      "addressRegion": "CO",
      "postalCode": "80910",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8003,
      "longitude": -104.7766
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_INFO.rating,
      "reviewCount": BUSINESS_INFO.reviewsCount
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Colorado Springs"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Monument"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Fountain"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Falcon"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Peyton"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Black Forest"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Woodland Park"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Security-Widefield"
      }
    ]
  };
}

export function getHVACServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3130 Boychuk Ave Ste. 477A",
        "addressLocality": "Colorado Springs",
        "addressRegion": "CO",
        "postalCode": "80910",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Colorado Springs" },
      { "@type": "AdministrativeArea", "name": "Monument" },
      { "@type": "AdministrativeArea", "name": "Fountain" },
      { "@type": "AdministrativeArea", "name": "Falcon" },
      { "@type": "AdministrativeArea", "name": "Peyton" },
      { "@type": "AdministrativeArea", "name": "Black Forest" },
      { "@type": "AdministrativeArea", "name": "Woodland Park" },
      { "@type": "AdministrativeArea", "name": "Security-Widefield" }
    ],
    "description": description
  };
}

export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}
