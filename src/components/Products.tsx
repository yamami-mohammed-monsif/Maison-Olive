"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { products, productCategories } from "@/src/lib/constants";
import { Reveal } from "../Reveal";

export const Products = () => {
  const [active, setActive] = useState("Toutes");
  const filtered =
    active === "Toutes"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal stagger staggerDelay={0.16}>
            <span className="eyebrow justify-center inline-flex">
              Nos collections
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05]">
              Des pièces{" "}
              <em className="text-highlight not-italic">entières,</em>
              <br />à adopter telles quelles.
            </h2>
            <p className="mt-6 text-foreground/70">
              Chaque collection regroupe mobilier, textiles, luminaires et
              accessoires — sélectionnés pour fonctionner ensemble.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {productCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border cursor-pointer transition-all ${
                  active === c
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-foreground/70 hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal
          stagger
          staggerDelay={0.16}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((p, i) => (
            <Link
              href={`/collection/${p.slug}`}
              key={p.name}
              className="group bg-card shadow-card hover:shadow-soft transition-all duration-500 block"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-5/6] overflow-hidden">
                <img
                  src={p.img.src}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1228}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">
                    {p.category}
                  </span>
                  <span className="text-xs text-foreground/60">{p.pieces}</span>
                </div>
                <h3 className="font-display text-2xl text-primary mb-2">
                  {p.name}
                </h3>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-sm text-foreground/80">{p.price}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-primary group-hover:text-highlight transition-colors">
                    Découvrir →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </Reveal>

        <div className="mt-14 text-center">
          <Button variant="gold" size="lg" asChild>
            <Link href="/collection">Voir toute la collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
