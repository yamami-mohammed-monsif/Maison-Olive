import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import { WhatWeDo } from "@/src/components/WhatWeDo";
import { OurWork } from "@/src/components/OurWork";
import { Products } from "@/src/components/Products";
import { Testimonials } from "@/src/components/Testimonials";
import { CTA } from "@/src/components/CTA";
import { FAQ } from "@/src/components/FAQ";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <OurWork />
      <Products />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
