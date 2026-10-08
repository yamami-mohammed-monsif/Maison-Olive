"use client";

import heroImg from "@/public/assets/hero-living.webp";
import { Button } from "@/src/components/ui/button";
import { Phone } from "lucide-react";
import { Reveal } from "../Reveal";
import Image from "next/image";

export const Hero = () => (
  <section
    id="accueil"
    className="hero relative min-h-screen flex items-end overflow-hidden"
  >
    <Image
      src={heroImg}
      alt="Salon entièrement décoré aux teintes olive et terracotta"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-primary/20" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_80%)]" />

    <div className="relative container-narrow py-24 lg:py-32">
      <Reveal stagger staggerDelay={0.16}>
        <div className="max-w-3xl">
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95]">
            L'art de vivre,
            <br />
            <em className="text-accent not-italic font-light">
              pièce par pièce.
            </em>
          </h1>
        </div>
        <p className="mt-8 text-base md:text-lg text-primary-foreground max-w-xl leading-relaxed">
          Nous ne vendons pas du mobilier. Nous composons des pièces entièrement
          décorées — salons, cuisines, chambres — livrées clé en main, prêtes à
          être habitées.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="tel:+213000000000">
              <Phone /> Appelez-nous
            </a>
          </Button>
          <Button variant="ghostLight" size="lg" asChild>
            <a href="#realisations">Voir les réalisations</a>
          </Button>
        </div>
      </Reveal>
    </div>

    <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-end gap-2 text-primary-foreground/70 text-xs tracking-[0.3em] uppercase">
      <span>Depuis 2014</span>
      <div className="w-px h-12 bg-accent" />
    </div>
  </section>
);
