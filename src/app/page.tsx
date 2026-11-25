import About from "@/components/sections/About/About";
import Benefits from "@/components/sections/Benefits/Benefits";
import ClientStories from "@/components/sections/ClientStories/ClientStories";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Testimonials from "@/components/sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <Services />
      <ClientStories />
      <Benefits />
      <About />
    </main>
  );
}
