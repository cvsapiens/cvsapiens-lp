import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { content } from "./content/en";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "./fonts/google-sans-flex-400.ttf", weight: "400" },
    { path: "./fonts/google-sans-flex-500.ttf", weight: "500" },
    { path: "./fonts/google-sans-flex-600.ttf", weight: "600" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const slab = localFont({
  src: [
    { path: "./fonts/zilla-slab-500.ttf", weight: "500" },
    { path: "./fonts/zilla-slab-600.ttf", weight: "600" },
  ],
  variable: "--font-slab",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cvsapiens.com"),
  applicationName: "CV Sapiens",
  title: content.meta.title,
  description: content.meta.description,
  icons: {
    icon: [
      { url: "/brand/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: "https://cvsapiens.com",
    siteName: "CV Sapiens",
    type: "website",
    images: [
      {
        url: "/illustrations/empty-states/account-welcome.png",
        width: 1200,
        height: 630,
        alt: "A CV Sapiens character waving hello",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
    images: ["/illustrations/empty-states/account-welcome.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${slab.variable}`}>
      <body>{children}</body>
    </html>
  );
}
