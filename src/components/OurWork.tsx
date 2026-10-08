"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { works, workCategories } from "@/src/lib/constants";
import { Reveal } from "../Reveal";

export const OurWork = () => {
  const [active, setActive] = useState("Tout");
  const filtered =
    active === "Tout" ? works : works.filter((w) => w.category === active);

  return (
    <section id="realisations" className="py-24 lg:py-32 bg-secondary">
      <div className="container-narrow">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <span className="eyebrow">Nos réalisations</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05]">
                Des projets{" "}
                <em className="text-highlight not-italic">livrés, vécus,</em>
                <br />
                aimés.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {workCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border cursor-pointer transition-all ${
                    active === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-foreground/70 hover:border-primary hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger
          staggerDelay={0.16}
        >
          {filtered.map((w) => (
            <article key={w.title} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-4/5 bg-muted">
                <Image
                  src={w.img.src}
                  alt={w.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className=" object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>
              <div className="pt-5 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-primary group-hover:text-highlight transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1">
                    {w.place}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  {w.category}
                </span>
              </div>
            </article>
          ))}
        </Reveal>

        <div className="mt-14 text-center">
          <Button variant="outlineDark" size="lg" asChild>
            <Link href="/realisations">Voir toutes les réalisations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
