import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import CustomCursor from "@/components/shared/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: "../public/Fonts/WEB/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: "Lunalead Studio | Digital Direction for Elite Pet Brands",
  description: "Bespoke branding and high-performance engineering for the global pet industry.",
  openGraph: {
    title: "Lunalead Studio",
    description: "Digital Direction for Elite Pet Brands",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col focus-visible:outline-none bg-background text-foreground">
        <Providers>
          <CustomCursor />
          <div className="grain-effect" />
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
