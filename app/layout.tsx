import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Korde — IT Student & Developer",
  description:
    "Portfolio of Ayush Korde — Information Technology student at PVG College of Engineering. Building web experiences, participating in hackathons, and exploring full-stack development.",
  keywords: [
    "Ayush Korde",
    "developer portfolio",
    "IT student",
    "PVG College",
    "hackathon",
    "web developer",
    "frontend",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Ayush Korde" }],
  creator: "Ayush Korde",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ayushkorde.vercel.app",
    title: "Ayush Korde — IT Student & Developer",
    description:
      "Portfolio of Ayush Korde — Information Technology student at PVG College of Engineering.",
    siteName: "Ayush Korde Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Korde — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Korde — IT Student & Developer",
    description:
      "Portfolio of Ayush Korde — Information Technology student at PVG College of Engineering.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#080d1a" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
