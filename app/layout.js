import "./globals.css";

export const metadata = {
  title: "Atwima Rural Bank PLC | A Friend in Need is a Friend Indeed",
  description: "Atwima Rural Bank PLC - Over 30 years of trusted banking services in the Ashanti Region. Personal banking, business loans, investments, and remittance services. Bank of Ghana regulated, GDPC member.",
  keywords: "Atwima Rural Bank, rural bank Ghana, banking Ashanti Region, savings account Ghana, business loans, susu account, fixed deposit, Western Union Ghana",
  openGraph: {
    title: "Atwima Rural Bank PLC | Trusted Community Banking",
    description: "Over 30 years of trusted banking services. Personal & business banking, loans, investments, and remittance.",
    type: "website",
    locale: "en_GH",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BankOrCreditUnion',
  name: 'Atwima Rural Bank PLC',
  alternateName: 'Atwima Rural Bank',
  description: 'Over 30 years of trusted community banking in the Ashanti Region of Ghana.',
  url: 'https://atwimabank.com',
  telephone: '+233501387040',
  logo: 'https://atwimabank.com/logo.png',
  sameAs: [],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Foase',
    addressLocality: 'Kwabre East',
    addressRegion: 'Ashanti Region',
    addressCountry: 'GH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.7333,
    longitude: -1.5833,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
  areaServed: 'Ashanti Region, Ghana',
  foundingDate: '1991',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GH" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2596be" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
