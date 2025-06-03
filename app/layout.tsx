import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AcchaNavbar from "@/components/shared/navigation/Navbar";
import Footer from "@/components/shared/navigation/Footer";
import { AIBusinessChatbot } from "@/components/shared/chat/ChatIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MP Pharmaceuticals - Quality Healthcare Solutions & Medicines",
    template: "%s | MP Pharmaceuticals"
  },
  description: "Leading pharmaceutical manufacturing company providing high-quality, affordable medicines and healthcare solutions. Discover our comprehensive range of pharmaceutical products and health innovations.",
  keywords: [
    "pharmaceutical manufacturing",
    "quality medicines",
    "healthcare solutions",
    "pharmaceutical products",
    "medical supplies",
    "pharmaceutical company",
    "health innovations",
    "medicine manufacturing",
    "healthcare technology",
    "pharmaceutical industry"
  ],
  authors: [{ name: "MP Pharmaceuticals" }],
  creator: "MP Pharmaceuticals",
  publisher: "MP Pharmaceuticals",
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
    locale: 'en_US',
    url: 'https://www.mppharmaceuticals.com',
    siteName: 'MP Pharmaceuticals',
    title: 'MP Pharmaceuticals - Quality Healthcare Solutions & Medicines',
    description: 'Leading pharmaceutical manufacturing company providing high-quality, affordable medicines and healthcare solutions worldwide.',
    images: [
      {
        url: 'https://www.mppharmaceuticals.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MP Pharmaceuticals - Quality Healthcare Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP Pharmaceuticals - Quality Healthcare Solutions',
    description: 'Leading pharmaceutical manufacturing company providing high-quality, affordable medicines and healthcare solutions.',
    images: ['https://www.mppharmaceuticals.com/images/twitter-image.jpg'],
  },

  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: 'https://www.mppharmaceuticals.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Simulate a loading delay
  // You can replace this with your actual loading logic
  // For example, fetching data or waiting for a condition to be met

  // bg-[url('/bg-2.png')] bg-repeat bg-[length:180px_180px]

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto flex flex-col justify-center items-center  `}
      >
        <div className="w-full relative flex flex-col min-h-screen items-center justify-center mx-auto">
          <AcchaNavbar>{children}</AcchaNavbar>
          <Footer />
          <AIBusinessChatbot position="bottom-left" size="lg"/>
        </div>
      </body>
    </html>
  );
}


// ```
// const gradients = [
//   "from-orange-400 to-yellow-300", // orange-yellow
//   "from-blue-500 to-pink-400", // blue-pink
//   "from-blue-400 to-purple-300", // blue-lavender
//   "from-pink-300 to-red-200", // peach-pink
//   "from-green-400 to-yellow-300", // parrot green-yellow
//   "from-purple-500 to-pink-300", // purple-pink
//   "from-cyan-400 to-blue-300", // cyan-blue
//   "from-rose-400 to-orange-300", // rose-orange
//   "from-emerald-400 to-teal-300", // emerald-teal
//   "from-fuchsia-500 to-purple-400", // fuchsia-purple
// ];

// const randomGradient = useMemo(() => {
//     // Use the product name as a deterministic way to select a gradient
//     // This ensures the same product always gets the same gradient
//     const index = name.length % gradients.length;
//     return gradients[index];
//   }, [name]);

// ```