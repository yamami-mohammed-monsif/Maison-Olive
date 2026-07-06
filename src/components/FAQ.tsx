"use client";

import { Reveal } from "../Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

const faqs = [
  {
    q: "Que comprend exactement une pièce livrée par Maison Olive ?",
    a: "Tout, absolument tout : peintures, revêtements, mobilier, textiles (rideaux, tapis, coussins), luminaires, art mural et objets décoratifs. Vous entrez, c'est vivable.",
  },
  {
    q: "Combien de temps faut-il entre la commande et la livraison ?",
    a: "Comptez en moyenne 8 à 12 semaines pour une pièce complète, selon les finitions et délais des artisans. La pose finale s'effectue en une seule journée.",
  },
  {
    q: "Peut-on personnaliser une collection existante ?",
    a: "Oui. Chaque collection est un point de départ. Nos décoratrices adaptent matières, couleurs et dimensions à votre espace et à votre sensibilité.",
  },
  {
    q: "Intervenez-vous partout en France ?",
    a: "Nos studios sont à Paris, Lyon et Bordeaux, mais nous livrons et installons dans toute la France métropolitaine, ainsi qu'en Belgique et en Suisse.",
  },
  {
    q: "Quel est le budget moyen pour une pièce ?",
    a: "À partir de 855 000 DA pour une chambre d'enfant, autour de 2 150 000 DA pour un salon complet, et environ 4 130 000 DA pour une cuisine clé en main. Nous établissons un devis détaillé après visite.",
  },
  {
    q: "Proposez-vous un service après-vente ?",
    a: "Bien sûr. Tout est garanti deux ans, et nous restons votre interlocuteur unique pour toute évolution future de votre intérieur.",
  },
];

export const FAQ = () => (
  <section id="faq" className="py-24 lg:py-32 bg-background">
    <Reveal>
      <div className="container-narrow grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-primary leading-[1.05]">
            Tout ce que vous vouliez{" "}
            <em className="text-highlight not-italic">savoir.</em>
          </h2>
          <p className="mt-6 text-foreground/70 text-sm">
            Une autre question ? Écrivez-nous à{" "}
            <a
              href="mailto:bonjour@maisonolive.fr"
              className="text-accent underline-offset-4 hover:underline"
            >
              bonjour@maisonolive.fr
            </a>
            .
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion
            type="single"
            collapsible
            className="border-t border-border"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left font-display text-xl md:text-2xl text-primary hover:text-highlight hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Reveal>
  </section>
);
