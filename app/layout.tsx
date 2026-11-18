import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Korde — Software Engineer · Full-Stack & AI",
  description:
    "Enter Ayush Korde’s digital portfolio to explore software engineering, full-stack product work, AI experiments and community leadership.",
  keywords: [
    "Ayush Korde",
    "developer portfolio",
    "IT student",
    "PVG College",
    "full-stack developer",
    "AI engineer",
    "software engineer",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Ayush Korde" }],
  creator: "Ayush Korde",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://portfolio-eight-nu-k6z9i11jaj.vercel.app/",
    title: "Ayush Korde — Software Engineer · Full-Stack & AI",
    description:
      "Full-stack software and applied AI work by Ayush Korde.",
    siteName: "Ayush Korde Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Korde — Software Engineer · Full-Stack & AI",
    description:
      "Enter Ayush Korde’s digital portfolio to explore software engineering, full-stack product work and AI experiments.",
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
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('ayush-portfolio-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}})()` }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0a0b0d" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
