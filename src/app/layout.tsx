import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aayu-port.vercel.app"),
  title: "Aayush Mathur | Full Stack Developer & QA Engineer",
  description: "Portfolio of Aayush Mathur, showcasing high-performance Laravel & React.js web development, dynamic AI agent workflows, and meticulous manual/automated testing.",
  keywords: [
    "Aayush Mathur",
    "Full Stack Developer",
    "Laravel Developer",
    "React Developer",
    "QA Engineer",
    "Software Quality Assurance",
    "AI Automation Engineer",
    "n8n workflows",
    "Supabase",
    "Teerthanker Mahaveer University",
    "Ghaziabad Developer",
    "Uttar Pradesh",
    "Portfolio Webapp"
  ],
  authors: [{ name: "Aayush Mathur", url: "https://aayu-port.vercel.app" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Aayush Mathur | Full Stack Developer & QA Engineer",
    description: "Portfolio of Aayush Mathur, showcasing high-performance Laravel & React.js web development, dynamic AI agent workflows, and meticulous QA testing.",
    url: "https://aayu-port.vercel.app",
    siteName: "Aayush Mathur Portfolio",
    images: [
      {
        url: "/profile-real.jpg",
        width: 1200,
        height: 630,
        alt: "Aayush Mathur Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Mathur | Full Stack Developer & QA Engineer",
    description: "Portfolio of Aayush Mathur, showcasing high-performance Laravel & React.js web development, dynamic AI agent workflows, and QA testing.",
    creator: "@MathuR_A01",
    images: ["/profile-real.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://aayu-port.vercel.app/#person",
              "name": "Aayush Mathur",
              "url": "https://aayu-port.vercel.app/",
              "image": "https://aayu-port.vercel.app/profile-real.jpg",
              "jobTitle": "Full Stack Web Developer & QA Engineer",
              "description": "Professional portfolio of Aayush Mathur, specializing in Laravel, React.js, automated QA testing, and AI integrations (N8N, Supabase).",
              "knowsAbout": [
                "Web Development",
                "Full-Stack Development",
                "Software Testing",
                "Laravel",
                "React.js",
                "TypeScript",
                "AI Automation",
                "Quality Assurance",
                "Manual Testing",
                "API Development"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Teerthanker Mahaveer University",
                "alternateName": "TMU"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ghaziabad",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://github.com/MathuR-A01",
                "https://linkedin.com/in/aayush-mathur-fs"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased text-white bg-[#050816]">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
