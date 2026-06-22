import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Gopal Chavan Guniting Works | Guniting Construction & Infrastructure",
  description:
    "Gopal Chavan Guniting Works Pvt Ltd is a platform connecting contractors, guniting machine owners, and construction workers. Instantly find available machines and skilled workers for construction projects.",
  keywords:
    "Gopal Chavan Guniting Works, guniting machines, construction machines India, shotcrete services, construction workers platform, Gopal Chavan Guniting Works Pvt Ltd, guniting services India",
  verification: {
    google: "VnvsyzRggNzdIs7hoApjFLwqkc02JLC8gzdZ84FvHCw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <ScrollObserver />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
