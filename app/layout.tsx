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
  title: content.meta.title,
  description: content.meta.description,
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: "https://cvsapiens.com",
    siteName: "cv sapiens",
    type: "website",
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
