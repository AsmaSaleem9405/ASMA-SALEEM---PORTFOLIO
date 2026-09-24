import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asma Saleem | Graphic Designer",
  description:
    "Asma Saleem is a graphic designer specializing in social media designs, branding, marketing creatives, and visually engaging digital content.",

  keywords: [
    "Asma Saleem",
    "Graphic Designer",
    "Graphic Design Portfolio",
    "Social Media Designer",
    "Branding Designer",
    "Marketing Designer",
    "Pakistan Graphic Designer",
  ],

  authors: [{ name: "Asma Saleem" }],

  creator: "Asma Saleem",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Asma Saleem | Graphic Designer",
    description:
      "Explore the graphic design portfolio of Asma Saleem, featuring social media designs, branding, marketing creatives, and digital visuals.",
    type: "website",
    siteName: "Asma Saleem Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}