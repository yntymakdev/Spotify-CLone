import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import LayoutRootClient from "./layout.client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spotify Project",
  description: "Hi ,I create Spotify website! Just use my app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LayoutRootClient>{children}</LayoutRootClient>
      </body>
    </html>
  );
}
