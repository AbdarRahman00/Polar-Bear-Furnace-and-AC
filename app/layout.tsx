import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import { getLocalBusinessSchema } from "@/lib/seo";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Polar Bear Furnace and AC | Colorado Springs HVAC & Boiler Specialists",
  description: "Specialist furnace, air conditioning, and boiler heating repairs, tune-ups, and energy-efficient installations in Colorado Springs. Call (719) 329-4304.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Inject Google Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-dark-slate font-sans">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
