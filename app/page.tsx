import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";

import ClientSections from "./ClientSections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientSections />
    </main>
  );
}
