import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gotham } from "@/lib/fonts";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Operon Middle East | Facilities Management Company in Dubai, UAE",
    template: "%s | Operon Middle East",
  },
  description:
    "Integrated facilities management across Dubai and the UAE — hard FM, soft FM, energy management and smart building technology for 300+ buildings since 2008. Part of the UEM Edgenta Group.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_AE",
    url: SITE_URL,
    title: "Operon Middle East | Facilities Management Company in Dubai, UAE",
    description:
      "Integrated facilities management for 300+ buildings across the UAE — delivered to one standard since 2008.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Operon Middle East" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Operon Middle East | Facilities Management in Dubai, UAE",
    description:
      "Integrated facilities management for 300+ buildings across the UAE — delivered to one standard since 2008.",
    images: ["/images/og.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-full.png`,
  description:
    "Integrated facilities management company based in the UAE, managing the built environment for clients across residential, commercial and government assets.",
  foundingDate: "2008",
  areaServed: "AE",
  telephone: "+971-800-4145",
  email: "info@operon.co",
  parentOrganization: {
    "@type": "Organization",
    name: "UEM Edgenta Berhad",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-800-4145",
    contactType: "customer service",
    areaServed: "AE",
    availableLanguage: ["en"],
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gotham.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
