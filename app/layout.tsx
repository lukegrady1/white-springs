import type { Metadata } from "next";
import { Playfair_Display, Lato, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["400", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "White Springs, Florida | Official Town Website",
    template: "%s | White Springs, FL",
  },
  description:
    "Official website of White Springs, Florida. Town announcements, government services, and community information for residents of Hamilton County.",
  keywords: [
    "White Springs",
    "Florida",
    "Hamilton County",
    "Suwannee River",
    "town government",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whitespringsflorida.gov",
    siteName: "White Springs, Florida",
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
      className={`${playfair.variable} ${lato.variable} ${dmMono.variable}`}
    >
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest focus:text-ivory focus:rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        >
          Skip to main content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
