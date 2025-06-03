import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmaceutical Products - MP Pharmaceuticals Quality Medicine Range",
  description: "Explore MP Pharmaceuticals' comprehensive range of high-quality pharmaceutical products, medicines, healthcare solutions, and medical supplies for various therapeutic categories.",
  keywords: [
    "pharmaceutical products",
    "quality medicines",
    "healthcare products",
    "medical supplies",
    "pharmaceutical range",
    "medicine categories",
    "therapeutic products",
    "prescription medicines",
    "over-the-counter drugs",
    "pharmaceutical manufacturing",
    "healthcare solutions",
    "medical products"
  ],
  openGraph: {
    title: "Pharmaceutical Products - MP Pharmaceuticals Quality Medicine Range",
    description: "Discover our comprehensive range of high-quality pharmaceutical products and medicines designed to meet diverse healthcare needs.",
    url: "https://www.mppharmaceuticals.com/products",
    siteName: "MP Pharmaceuticals",
    images: [
      {
        url: "https://www.mppharmaceuticals.com/images/products-og.jpg",
        width: 1200,
        height: 630,
        alt: "MP Pharmaceuticals Products Range",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmaceutical Products - MP Pharmaceuticals Quality Medicine Range",
    description: "Discover our comprehensive range of high-quality pharmaceutical products and medicines designed to meet diverse healthcare needs.",
    images: ["https://www.mppharmaceuticals.com/images/products-twitter.jpg"],
  },
  alternates: {
    canonical: "https://www.mppharmaceuticals.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
