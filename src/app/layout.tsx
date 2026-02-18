import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://floweradev.com"),
  title: "FLOWERADEV - Web Developer & UI Designer em Ariquemes, RO | Portfólio Profissional",
  description: "FLOWERADEV - Web Developer & UI Designer profissional em Ariquemes, RO. Especializado em desenvolvimento web, design de UI/UX, otimização de redes sociais e cardápios digitais. Veja meus cases de sucesso com clientes reais. Contato: floweradevoficial@gmail.com | WhatsApp: 69 99967607",
  keywords: ["web developer", "UI designer", "Ariquemes RO", "desenvolvimento web", "design gráfico", "identidade visual", "cardápio digital", "redes sociais", "portfólio", "web design"],
  authors: [{ name: "FLOWERADEV" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://floweradev.com",
    title: "FLOWERADEV - Web Developer & UI Designer em Ariquemes, RO",
    description: "Desenvolvimento web profissional e design de UI/UX. Portfólio com cases reais de clientes. Especializado em identidade visual e otimização de redes sociais.",
    images: [
      {
        url: "/images/flowera-hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "FLOWERADEV",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLOWERADEV - Web Developer & UI Designer",
    description: "Desenvolvimento web e design profissional em Ariquemes, RO",
    images: ["/images/flowera-hero.jpg"],
  },
  alternates: {
    canonical: "https://floweradev.com",
  },
  other: {
    "theme-color": "#000000",
    "revisit-after": "7 days",
    language: "Portuguese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "FLOWERADEV",
              "description": "Web Developer & UI Designer profissional especializado em desenvolvimento web e design gráfico",
              "url": "https://floweradev.com",
              "telephone": "+55 69 99967607",
              "email": "floweradevoficial@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ariquemes",
                "addressLocality": "Ariquemes",
                "addressRegion": "RO",
                "postalCode": "76976-336",
                "addressCountry": "BR"
              },
              "image": "/images/flowera-hero.jpg",
              "priceRange": "R$ 600 - R$ 1200",
              "areaServed": "BR",
              "sameAs": [
                "https://www.instagram.com/floweradev",
                "https://wa.me/556999967607"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FLOWERADEV",
              "url": "https://floweradev.com",
              "logo": "/vite.svg",
              "description": "Agência de desenvolvimento web e design profissional",
              "sameAs": [
                "https://www.instagram.com/floweradev",
                "https://wa.me/556999967607"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+55 69 99967607",
                "email": "floweradevoficial@gmail.com",
                "areaServed": "BR",
                "availableLanguage": ["pt-BR"]
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://floweradev.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Meus Clientes",
                  "item": "https://floweradev.com/#clientes"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Projetos",
                  "item": "https://floweradev.com/#templates"
                }
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
