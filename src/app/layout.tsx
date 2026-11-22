import { ThemeProvider } from "@/components/theme-provider";
import LightRaysWrapper from "@/components/ui/light-rays-wrapper";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./exposure-fonts.css";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const exposure = localFont({
  src: [
    {
      path: "../../public/fonts/exposure/ExposureTrial[0].otf",
      style: "normal",
    },
    {
      path: "../../public/fonts/exposure/ExposureItalicTrial[0].otf",
      style: "italic",
    },
  ],
  variable: "--font-exposure",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soufianehamdach.me"),
  title: {
    default: "Soufiane Hamdach — Full Stack Developer & Mobile Engineer",
    template: "%s — Soufiane Hamdach",
  },
  description:
    "Portfolio of Soufiane Hamdach, Full Stack Developer and Mobile Engineer specializing in Next.js, React Native, NestJS, Laravel, and PostgreSQL.",
  keywords: [
    "Soufiane Hamdach",
    "Hamdach Soufiane",
    "Full Stack Developer",
    "Mobile Developer",
    "React Native",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Morocco Software Engineer",
  ],
  authors: [{ name: "Soufiane Hamdach", url: "https://soufianehamdach.me" }],
  creator: "Soufiane Hamdach",
  openGraph: {
    title: "Soufiane Hamdach — Full Stack Developer & Mobile Engineer",
    description:
      "Full Stack Developer and Mobile Engineer specializing in Next.js, React Native, NestJS, and PostgreSQL.",
    url: "https://soufianehamdach.me",
    siteName: "Soufiane Hamdach",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Soufiane Hamdach — Full Stack Developer & Mobile Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soufiane Hamdach — Full Stack Developer & Mobile Engineer",
    description:
      "Full Stack Developer and Mobile Engineer specializing in Next.js, React Native, NestJS, and PostgreSQL.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Apple CDN used for music card album artwork */}
        <link rel="preconnect" href="https://is1-ssl.mzstatic.com" />
        <link rel="dns-prefetch" href="https://is1-ssl.mzstatic.com" />
        <link
          rel="preload"
          href="/fonts/exposure/ExposureTrial[-50].otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${satoshi.variable} ${exposure.variable}`}>
        {/* Comprehensive Schema.org JSON-LD for SEO & AEO (Answer Engine Optimization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://soufianehamdach.me/#person",
                name: "Soufiane Hamdach",
                alternateName: ["Hamdach Soufiane", "Soufiane"],
                url: "https://soufianehamdach.me",
                jobTitle: "Full Stack Developer & Mobile Engineer",
                email: "mailto:soufiane.hamdach28@gmail.com",
                telephone: "+212633900518",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Taza",
                  addressCountry: "Morocco",
                },
                description:
                  "Full Stack Developer and Mobile Engineer passionate about building scalable, high-performance web and mobile applications using Next.js, React Native, NestJS, and PostgreSQL.",
                knowsAbout: [
                  "Full Stack Web Development",
                  "Mobile Application Development",
                  "React Native",
                  "Next.js",
                  "NestJS",
                  "TypeScript",
                  "JavaScript",
                  "Laravel",
                  "PostgreSQL",
                  "MySQL",
                  "Docker",
                  "WebSockets",
                  "REST APIs",
                  "Tailwind CSS",
                  "Prisma ORM",
                ],
                alumniOf: {
                  "@type": "EducationalOrganization",
                  name: "Institut Spécialisé de Technologie Appliquée (ISTA) Taza",
                  url: "https://soufianehamdach.me",
                },
                sameAs: [
                  "https://github.com/soufianehamdach28",
                  "https://www.linkedin.com/in/soufianehamdach/",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://soufianehamdach.me/#website",
                name: "Soufiane Hamdach",
                url: "https://soufianehamdach.me",
                description:
                  "Personal portfolio of Soufiane Hamdach — Full Stack Developer & Mobile Engineer.",
                publisher: {
                  "@id": "https://soufianehamdach.me/#person",
                },
                inLanguage: "en",
              },
            ]),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="fixed inset-0 pointer-events-none z-0">
            <LightRaysWrapper />
          </div>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
