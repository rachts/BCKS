import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { isDemo } from "@/content/demo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  robots: isDemo ? { index: false, follow: false } : undefined,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: "BARDHAMAN CHHATRA KALYAN SAMITY (BCKS)", template: "%s | BCKS" },
  description:
    "BARDHAMAN CHHATRA KALYAN SAMITY supports student welfare through scholarships, competitions and health checkups.",
  keywords: [
    "BARDHAMAN CHHATRA KALYAN SAMITY",
    "BCKS Burdwan",
    "Student Welfare Society",
    "School Scholarships West Bengal",
    "Sit and Draw Competition Bardhaman",
    "Student Welfare Bardhaman",
  ],
  authors: [{ name: "BARDHAMAN CHHATRA KALYAN SAMITY" }],
  openGraph: {
    title: "BARDHAMAN CHHATRA KALYAN SAMITY (BCKS)",
    description: "Student welfare through scholarships, competitions and health checkups.",
    type: "website",
    locale: "en_IN",
    images: [{
      url: "/images/brand/bcks-logo.png",
      width: 640,
      height: 640,
      alt: "BARDHAMAN CHHATRA KALYAN SAMITY organisation logo",
    }],
  },
  twitter: {
    card: 'summary',
    title: 'BARDHAMAN CHHATRA KALYAN SAMITY',
    description: 'Student welfare through scholarships, competitions and health checkups.',
    images: [{
      url: "/images/brand/bcks-logo.png",
      width: 640,
      height: 640,
      alt: "BARDHAMAN CHHATRA KALYAN SAMITY organisation logo",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} scroll-smooth antialiased`}
    >
      <body className="bg-paper text-ink min-h-screen flex flex-col selection:bg-maroon selection:text-paper font-sans">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SmoothScroll>
          {isDemo && <div className="hairline-b bg-paper-dark px-4 py-2 text-center text-xs text-ink leading-relaxed">
            <strong className="text-maroon uppercase tracking-wider">Demonstration preview</strong>
            <span> · No payments or applications are sent. Missing NGO details remain marked TODO.</span>
          </div>}
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
