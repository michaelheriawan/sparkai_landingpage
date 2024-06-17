import type { Metadata } from "next";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import { Manrope } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "800"],
  preload: true,
});

export const metadata: Metadata = {
  title: "SparkAI",
  description: "The latest ChatGPT Ai App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
