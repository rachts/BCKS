import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: "Bardhaman Chhatra Kalyan Samiti (BCKS) | বর্ধমান ছাত্র কল্যাণ সমিতি",
  description:
    "Established 2011. Grassroots registered charity in Purba Bardhaman dedicated to student welfare, higher education merit scholarships, academic competitions, and community service. 80G tax exempt.",
  keywords: [
    "Bardhaman Chhatra Kalyan Samiti",
    "BCKS Burdwan",
    "Student Welfare Society",
    "Higher Education Scholarships West Bengal",
    "Sit and Draw Competition Bardhaman",
    "Purba Bardhaman Charity",
    "80G Tax Exemption NGO",
  ],
  authors: [{ name: "Bardhaman Chhatra Kalyan Samiti" }],
  openGraph: {
    title: "Bardhaman Chhatra Kalyan Samiti (BCKS)",
    description: "No deserving student should stop learning because of money. Serving students across Purba Bardhaman since 2011.",
    type: "website",
    locale: "en_IN",
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
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
