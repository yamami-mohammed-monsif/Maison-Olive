"use client";

import { Button } from "@/src/components/ui/button";
import { Phone } from "lucide-react";
import { Reveal } from "../Reveal";

export const CTA = () => (
  <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
    <div className="container-narrow">
      <div className="relative bg-secondary border border-border p-12 lg:p-20 text-center">
        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-accent" />
        <Reveal stagger staggerDelay={0.16}>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05] max-w-3xl mx-auto">
            Et si votre prochaine pièce
            <br />
            <em className="text-highlight not-italic">
              était signée Maison Olive ?
            </em>
          </h2>
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
            Une visite, une conversation, un devis transparent. Aucun
            engagement, simplement le début d'un beau projet.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <a href="tel:+213000000000">
                <Phone className="mr-2 h-4 w-4" />
                Appelez-nous
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
