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
  title: "Abdul Manan | Full Stack Developer",
  description:
    "Portfolio of Abdul Manan, Full Stack Developer & Creative Problem Solver. Crafting modern digital experiences using clean code and innovative solutions.",
  keywords: [
    "Abdul Manan",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Abdul Manan", url: "https://yourdomain.com" }],
  creator: "Abdul Manan",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Abdul Manan | Full Stack Developer",
    description:
      "Clean code, innovative solutions, and modern web experiences. See my work and tech stack.",
    url: "https://yourdomain.com",
    siteName: "Abdul Manan Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Abdul Manan Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Manan | Full Stack Developer",
    description:
      "Modern full stack web developer creating clean and innovative solutions.",
    images: [""],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
