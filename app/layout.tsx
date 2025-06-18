import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wayandanutirta.dev'),
  title: "Wayan Danu Tirta | Full-stack Web Developer & Software Engineer",
  description:
    "Professional Full-stack Web Developer and Software Engineer from Yogyakarta, Indonesia. Specializing in React.js, Next.js, Node.js, AWS Cloud Services, and modern web technologies. Expert in building scalable web applications with exceptional user experiences.",
  keywords: [
    "Full-stack Developer",
    "Software Engineer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AWS Cloud Engineer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Yogyakarta",
    "Indonesia Developer",
    "Software Developer",
    "Web Application Development",
    "Responsive Web Design",
    "Database Development",
    "API Development",
    "Cloud Solutions",
    "Mobile-First Development",
    "Progressive Web Apps",
    "E-commerce Development",
    "UI/UX Implementation",
    "Performance Optimization",
    "SEO Optimization",
    "Web Development",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Wayan Danu Tirta", url: "https://wayandanutirta.dev" }],
  creator: "Wayan Danu Tirta",
  publisher: "Wayan Danu Tirta",
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
  alternates: {
    canonical: "https://wayandanutirta.dev",
  },
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wayandanutirta.dev",
    title: "Wayan Danu Tirta | Full-stack Web Developer & Software Engineer",
    description:
      "Professional Full-stack Web Developer and Software Engineer from Yogyakarta, Indonesia. Expert in React.js, Next.js, Node.js, AWS Cloud Services, and modern web technologies.",
    siteName: "Wayan Danu Tirta Portfolio",
    images: [
      {
        url: "/images/profile_me.jpg",
        width: 1200,
        height: 630,
        alt: "Wayan Danu Tirta - Full-stack Web Developer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayan Danu Tirta | Full-stack Web Developer & Software Engineer",
    description:
      "Professional Full-stack Web Developer and Software Engineer from Yogyakarta, Indonesia.",
    images: ["/images/profile_me.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#8B5CF6",
    "color-scheme": "dark",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wayan Danu Tirta",
    jobTitle: "Full-stack Web Developer & Software Engineer",
    description:
      "Professional Full-stack Web Developer and Software Engineer from Yogyakarta, Indonesia. Expert in React.js, Next.js, Node.js, AWS Cloud Services, and modern web technologies.",
    url: "https://wayandanutirta.dev",
    image: "https://wayandanutirta.dev/images/profile_me.jpg",
    sameAs: [
      "https://github.com/wayandanu",
      "https://linkedin.com/in/wayandanutirta",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressCountry: "Indonesia",
    },
    email: "thephantomwarrior02@gmail.com",
    telephone: "+62 82278037765",
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "AWS Cloud Services",
      "Full-stack Development",
      "Web Development",
      "Software Engineering",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Pembangunan Nasional Veteran Yogyakarta",
      department: "Informatics Engineering",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
