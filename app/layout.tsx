import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const radioGrotesk = localFont({
  src: "../public/pp-radio-grotesk-regular.woff2",
  variable: "--font-radio-grotesk",
});

export const metadata: Metadata = {
  title: "Base Brasil | Sua base imobiliária",
  icons: {
    icon: [
      {
        url: "/icon-light.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${inter.variable} ${radioGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
