import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnapCode Pro — Beautiful Code Screenshots in Seconds",
  description:
    "Transform your code into stunning, shareable images. Perfect for tweets, blog posts, docs, and presentations. 30+ syntax themes, custom gradients, and instant export.",
  keywords: [
    "code screenshot",
    "carbon alternative",
    "code to image",
    "code snippet image",
    "beautiful code",
    "developer tools",
    "syntax highlighting",
  ],
  openGraph: {
    title: "SnapCode Pro — Beautiful Code Screenshots",
    description:
      "Transform your code into stunning, shareable images. 30+ themes, custom gradients, instant PNG/SVG export.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapCode Pro — Beautiful Code Screenshots",
    description:
      "Transform your code into stunning, shareable images. 30+ themes, custom gradients, instant PNG/SVG export.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
