import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { constructionContent } from "@/lib/construction-content";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${constructionContent.global.companyName} - ${constructionContent.global.tagline}`,
  description: constructionContent.about.overview,
  keywords: 'construction, building, electrical works, CCTV installation, gate automation, Ghana construction company',
  authors: [{ name: constructionContent.global.companyName }],
  openGraph: {
    title: `${constructionContent.global.companyName} - ${constructionContent.global.tagline}`,
    description: constructionContent.about.overview,
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
