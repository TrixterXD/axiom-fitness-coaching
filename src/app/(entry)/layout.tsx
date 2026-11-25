import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await getDictionary(defaultLocale);
  return { ...metadata, robots: { index: false, follow: true } };
}

export default function EntryLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}/`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
