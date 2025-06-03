import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MP Pharmaceuticals - Get in Touch for Healthcare Solutions",
  description: "Contact MP Pharmaceuticals for inquiries about our pharmaceutical products, healthcare solutions, and business partnerships. Reach out to our expert team today.",
  keywords: [
    "contact MP Pharmaceuticals",
    "pharmaceutical inquiries",
    "healthcare solutions contact",
    "pharmaceutical business partnerships",
    "medicine supplier contact",
    "pharmaceutical manufacturing inquiry",
    "healthcare consultation",
    "pharmaceutical customer service"
  ],
  openGraph: {
    title: "Contact MP Pharmaceuticals - Healthcare Solutions Inquiry",
    description: "Get in touch with MP Pharmaceuticals for pharmaceutical products, healthcare solutions, and business partnership opportunities.",
    url: "https://www.mppharmaceuticals.com/contact",
    siteName: "MP Pharmaceuticals",
    images: [
      {
        url: "https://www.mppharmaceuticals.com/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact MP Pharmaceuticals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MP Pharmaceuticals - Healthcare Solutions Inquiry",
    description: "Get in touch with MP Pharmaceuticals for pharmaceutical products, healthcare solutions, and business partnership opportunities.",
    images: ["https://www.mppharmaceuticals.com/images/contact-twitter.jpg"],
  },
  alternates: {
    canonical: "https://www.mppharmaceuticals.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
