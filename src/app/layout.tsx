import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nattapong.IT | Portfolio & Resume",
  description: "Digital Portfolio of Nattapong Nakaom - Future IT Student & Web Developer. Showcasing projects in PHP, React, and IoT.",
  keywords: ["Nattapong Nakaom", "Portfolio", "IT Student", "Web Developer", "Thailand", "Computer Engineering"],
  authors: [{ name: "Nattapong Nakaom" }],
  openGraph: {
    title: "Nattapong.IT | Portfolio",
    description: "Digital Portfolio of Nattapong Nakaom",
    url: "https://your-portfolio-domain.com",
    siteName: "Nattapong Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={`${notoSansThai.variable} font-sans antialiased selection:bg-primary selection:text-white bg-grid relative min-h-screen pb-12 overflow-x-hidden`}
      >
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
