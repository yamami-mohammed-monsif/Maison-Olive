import { Sofa, CreditCard, Truck, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Sofa,
    title: "Chambres & Salons Complets",
    text: "Des ensembles coordonnés, prêts à installer — gain de temps et d'argent.",
  },
  {
    icon: CreditCard,
    title: "Paiement en Plusieurs Fois",
    text: "Achetez aujourd'hui, payez en 3, 6 ou 12 mois — sans frais cachés.",
  },
  {
    icon: Truck,
    title: "Livraison & Installation",
    text: "Livraison gratuite dans la wilaya + installation professionnelle incluse.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie 2 ans",
    text: "Support téléphone et WhatsApp pour toute question après-vente.",
  },
];

export const WhatWeDo = () => (
  <section id="savoir-faire" className="py-24 lg:py-32 bg-background">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16">
        <div className="lg:col-span-5">
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05]">
            Des intérieurs
            <br />
            pensés <em className="text-highlight not-italic">comme un tout.</em>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Plutôt qu'un canapé ici, une lampe là — nous concevons des pièces
            entières, cohérentes et habitées. Une approche d'architecte
            d'intérieur, livrée comme un produit fini.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="bg-background p-8 lg:p-10 group hover:bg-secondary transition-all duration-500"
          >
            <Icon
              className="w-8 h-8 text-accent mb-6 group-hover:text-highlight transition-colors"
              strokeWidth={1.25}
            />
            <h3 className="font-display text-2xl text-primary mb-3">{title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
