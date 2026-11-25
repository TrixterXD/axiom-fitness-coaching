import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale, productionUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await getDictionary(defaultLocale);
  const image = "/opengraph-image.jpg";
  return {
    ...metadata,
    metadataBase: new URL(productionUrl),
    robots: { index: false, follow: true },
    openGraph: {
      images: [{ url: image, width: 1200, height: 630, type: "image/jpeg" }],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
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
