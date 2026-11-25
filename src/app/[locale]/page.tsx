import { notFound } from "next/navigation";
import About from "@/components/sections/About/About";
import Benefits from "@/components/sections/Benefits/Benefits";
import ClientStories from "@/components/sections/ClientStories/ClientStories";
import Contact from "@/components/sections/Contact/Contact";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Testimonials from "@/components/sections/Testimonials/Testimonials";

import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const text = await getDictionary(locale);

  return (
    <main>
      <Hero text={text.hero} brand={text.brand} />
      <Testimonials text={text.testimonials} />
      <Services text={text.services} />
      <ClientStories text={text.clientStories} />
      <Benefits text={text.benefits} />
      <About text={text.about} />
      <Contact
        text={text.contact}
        online={text.services.online.title}
        personal={text.services.personal.title}
      />
    </main>
  );
}
