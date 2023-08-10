import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { twMerge } from "tailwind-merge";
import { Navbar } from "@/components";

const jakarta = localFont({
  src: [
    {
      path: "../fonts/PlusJakartaSans-VariableFont_wght.ttf",
    },
    {
      path: "../fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theindiehacker.tech"),
  title: {
    default: "theo - the indie hacker",
    template: "%s | theo - the indie hacker",
  },
  description: "a developer indie hacking in emerging tech.",
  keywords: [
    "indie hacker",
    "Nextjs Developer",
    "React Developer",
    "AI Developer",
    "AI Engineer",
    "AI Researcher",
    "React Developer",
    "Nextjs Developer",
    "indie hacker",
    "SaaS",
    "build in public",
    "ChatGPT",
    "OpenAI",
    "Blockchain",
    "NFT",
  ],
  openGraph: {
    title: "theo - the indie hacker",
    description: "a developer indie hacking in emerging tech.",
    url: "https://theindiehacker.tech",
    siteName: "theo - the indie hacker",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://theindiehacker.tech/images/og-image.png",
        width: 2560,
        height: 1440,
      },
    ],
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
  twitter: {
    title: "theo - the indie hacker",
    card: "summary_large_image",
    description: "a developer indie hacking in emerging tech.",
    creator: "@_theindiehacker",
    images: ["https://theindiehacker.tech/images/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={twMerge("text-off-white bg-dark", jakarta.variable)}
    >
      <body className="antialiased ">
        <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-[url('/images/NoiseAndTexture.svg')] bg-cover bg-fixed bg-no-repeat"></div>
        <main className="min-w-0 px-2 max-w-2xl mb-40 flex flex-col mx-4 mt-8 lg:mx-auto">
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
