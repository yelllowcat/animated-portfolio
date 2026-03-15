import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";

import LanguageProvider from "@/components/LanguageProvider";
import { getMetadata, localeCookieName, resolveLocale } from "@/lib/i18n";

import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
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
    <html lang={locale} className="scroll-smooth dark">
      <body
        className={`${syne.variable} ${plusJakartaSans.variable} font-sans antialiased selection:bg-indigo-500/30 bg-[#030014] text-white min-h-screen`}
      >
        <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
