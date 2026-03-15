import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Playfair_Display, Outfit, Geist_Mono } from "next/font/google";

import LanguageProvider from "@/components/LanguageProvider";
import { getMetadata, localeCookieName, resolveLocale } from "@/lib/i18n";

import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get(localeCookieName)?.value);

  return getMetadata(locale);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get(localeCookieName)?.value);

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${playfair.variable} ${outfit.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
