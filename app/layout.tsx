/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cv sapiens | Resume Builder",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Build a resume that passes ATS and gets interviews with CV Sapiens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
