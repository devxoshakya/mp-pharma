import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Reach - MP Pharmaceuticals Worldwide Distribution Network",
  description: "Explore MP Pharmaceuticals' global distribution network and worldwide reach. Discover how we deliver quality healthcare solutions across international markets.",
  keywords: [
    "MP Pharmaceuticals global reach",
    "worldwide distribution",
    "international pharmaceutical network",
    "global healthcare solutions",
    "pharmaceutical export",
    "international medicine supply",
    "global pharmaceutical presence",
    "worldwide healthcare distribution"
  ],
  openGraph: {
    title: "Global Reach - MP Pharmaceuticals Worldwide Distribution",
    description: "Discover MP Pharmaceuticals' global distribution network and our commitment to delivering quality healthcare solutions worldwide.",
    url: "https://www.mppharmaceuticals.com/map",
    siteName: "MP Pharmaceuticals",
    images: [
      {
        url: "https://www.mppharmaceuticals.com/images/global-reach-og.jpg",
        width: 1200,
        height: 630,
        alt: "MP Pharmaceuticals Global Reach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Reach - MP Pharmaceuticals Worldwide Distribution",
    description: "Discover MP Pharmaceuticals' global distribution network and our commitment to delivering quality healthcare solutions worldwide.",
    images: ["https://www.mppharmaceuticals.com/images/global-reach-twitter.jpg"],
  },
  alternates: {
    canonical: "https://www.mppharmaceuticals.com/map",
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
