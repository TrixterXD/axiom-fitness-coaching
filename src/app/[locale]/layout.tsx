import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

type LocaleParams = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const {
    metadata: { title, description },
  } = await getDictionary(locale);

  return {
    title,
    description,
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, type: "image/jpeg" }],
    },
    twitter: { title, description, card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleParams & { children: ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { brand, navigation, footer } = await getDictionary(locale);
  const links = [
    { href: "#about", label: navigation.about },
    { href: "#services", label: navigation.services },
    { href: "#client-stories", label: navigation.clientStories },
    { href: "#contact", label: navigation.contact },
  ];

  return (
    <html lang={locale} className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Header locale={locale} brand={brand} links={links} navigation={navigation} />
        {children}
        <Footer locale={locale} brand={brand} links={links} text={footer} />
      </body>
    </html>
  );
}
