import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Baskervville } from "next/font/google";
import { Header, Footer } from "@/components/index";
import "../styles/index.css";
import Provider from "../context";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular & Bold
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "We Find Jobs For Trade Pros",
  description:
    "True Trade Pros connects home owners with verified, detail-oriented professionals who bring craftsmanship back to home renovation and remodel projects. ",
  // authors: [{ name: "Karen A.", url: "https://www.linkedin.com/in/karen86/" }],
  icons: {
    icon: [{ rel: "icon", url: "/assets/images/favicon/favicon.webp" }],
    apple: "/assets/images/favicon/favicon.webp", // 180x180 recommended
  },
  openGraph: {
    title: "We Find Jobs For Trade Pros",
    description:
      "True Trade Pros connects home owners with verified, detail-oriented professionals who bring craftsmanship back to home renovation and remodel projects. ",
    url: `${siteUrl}`,
    siteName: "Trade Pros",
    images: [`${siteUrl}/assets/images/rest/craftman.png`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Find Jobs For Trade Pros",
    description:
      "True Trade Pros connects home owners with verified, detail-oriented professionals who bring craftsmanship back to home renovation and remodel projects. ",
    images: [`${siteUrl}/assets/images/rest/craftman.png`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}  ${baskervville.variable} antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PKCV5QJ3YE" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PKCV5QJ3YE');
        `}
        </Script>
        <Header />
        <Provider>
          {children}
          <Toaster />
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
