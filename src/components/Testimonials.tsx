"use client";

import { Reveal } from "../Reveal";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Camille Lefèvre",
    place: "Paris",
    text: "Nous sommes rentrés un vendredi soir dans un appartement totalement transformé. Tout fonctionne, tout est beau, tout nous ressemble. Magique.",
  },
  {
    name: "Antoine & Sarah Mercier",
    place: "Lyon",
    text: "La cuisine livrée par Maison Olive est devenue le cœur de la maison. Le souci du détail est rare aujourd'hui — chez eux, c'est la norme.",
  },
  {
    name: "Hélène Dubois",
    place: "Bordeaux",
    text: "On a confié notre suite parentale les yeux fermés. Le résultat dépasse ce qu'on aurait osé imaginer. Une équipe d'une élégance folle.",
  },
];

export const Testimonials = () => (
  <section
    id="avis"
    className="py-24 lg:py-32 bg-primary text-primary-foreground"
  >
    <div className="container-narrow">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Des clients <em className="text-accent not-italic">devenus</em>
            <br />
            ambassadeurs.
          </h2>
        </div>
      </Reveal>

      <Reveal
        stagger
        staggerDelay={0.16}
        className="grid md:grid-cols-3 gap-px bg-primary-foreground/10"
      >
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="bg-primary p-10 hover:bg-primary-foreground/5 transition-colors duration-500"
          >
            <Quote className="w-8 h-8 text-accent mb-6" strokeWidth={1} />
            <blockquote className="font-display text-xl leading-relaxed text-primary-foreground/95 mb-8">
              « {r.text} »
            </blockquote>
            <figcaption>
              <div className="text-sm font-medium text-accent">{r.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mt-1">
                {r.place}
              </div>
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </div>
  </section>
);
