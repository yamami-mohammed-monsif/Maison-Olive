import living from "@/public/assets/room-living.webp";
import kitchen from "@/public/assets/room-kitchen.webp";
import bedroom from "@/public/assets/room-bedroom.webp";
import dining from "@/public/assets/room-dining.webp";
import office from "@/public/assets/room-office.webp";
import bathroom from "@/public/assets/room-bathroom.webp";
import kids from "@/public/assets/room-kids.webp";

import { StaticImageData } from "next/image";

export type Work = {
  img: StaticImageData;
  title: string;
  category: string;
  place: string;
};

export type Product = {
  slug: string;
  img: StaticImageData;
  name: string;
  category: string;
  price: string;
  pieces: string;
  description: string;
  features: string[];
  gallery: StaticImageData[];
  dimensions?: string;
  delivery?: string;
};

// Homepage works (featured)
export const works: Work[] = [
  {
    img: living,
    title: "Appartement Haussmannien",
    category: "Salon",
    place: "Paris VIIe",
  },
  {
    img: kitchen,
    title: "Cuisine de famille",
    category: "Cuisine",
    place: "Lyon",
  },
  {
    img: bedroom,
    title: "Suite parentale Olive",
    category: "Chambre",
    place: "Bordeaux",
  },
  {
    img: dining,
    title: "Salle à manger Maison de Maître",
    category: "Salle à manger",
    place: "Aix-en-Provence",
  },
  {
    img: office,
    title: "Bureau bibliothèque",
    category: "Bureau",
    place: "Nantes",
  },
  {
    img: bathroom,
    title: "Salle d'eau Terracotta",
    category: "Salle de bain",
    place: "Marseille",
  },
];

// Full list for /realisations page
export const allWorks: Work[] = [
  ...works,
  {
    img: living,
    title: "Loft Industriel Olive",
    category: "Salon",
    place: "Lille",
  },
  {
    img: kitchen,
    title: "Cuisine ouverte Méditerranée",
    category: "Cuisine",
    place: "Nice",
  },
  {
    img: bedroom,
    title: "Chambre cocon Lin",
    category: "Chambre",
    place: "Strasbourg",
  },
];

export const workCategories = [
  "Tout",
  "Salon",
  "Cuisine",
  "Chambre",
  "Salle à manger",
  "Bureau",
  "Salle de bain",
];

const baseProducts: Omit<
  Product,
  "description" | "features" | "gallery" | "dimensions" | "delivery"
>[] = [
  {
    slug: "salon-florentine",
    img: living,
    name: "Salon Florentine",
    category: "Salon",
    price: "à partir de 2 150 000 DA",
    pieces: "12 pièces",
  },
  {
    slug: "cuisine-provence",
    img: kitchen,
    name: "Cuisine Provence",
    category: "Cuisine",
    price: "à partir de 4 130 000 DA",
    pieces: "Aménagement complet",
  },
  {
    slug: "chambre-toscane",
    img: bedroom,
    name: "Chambre Toscane",
    category: "Chambre",
    price: "à partir de 1 330 000 DA",
    pieces: "9 pièces",
  },
  {
    slug: "salle-a-manger-loire",
    img: dining,
    name: "Salle à manger Loire",
    category: "Salle à manger",
    price: "à partir de 1 680 000 DA",
    pieces: "10 pièces",
  },
  {
    slug: "bureau-edition",
    img: office,
    name: "Bureau Édition",
    category: "Bureau",
    price: "à partir de 1 070 000 DA",
    pieces: "8 pièces",
  },
  {
    slug: "chambre-enfant-lin",
    img: kids,
    name: "Chambre d'enfant Lin",
    category: "Enfant",
    price: "à partir de 855 000 DA",
    pieces: "7 pièces",
  },
  {
    slug: "salon-mediterranee",
    img: living,
    name: "Salon Méditerranée",
    category: "Salon",
    price: "à partir de 1 800 000 DA",
    pieces: "10 pièces",
  },
  {
    slug: "cuisine-atelier",
    img: kitchen,
    name: "Cuisine Atelier",
    category: "Cuisine",
    price: "à partir de 4 500 000 DA",
    pieces: "Aménagement complet",
  },
  {
    slug: "chambre-sienne",
    img: bedroom,
    name: "Chambre Sienne",
    category: "Chambre",
    price: "à partir de 1 570 000 DA",
    pieces: "11 pièces",
  },
];

const galleryByCategory: Record<string, StaticImageData[]> = {
  Salon: [living, dining, office],
  Cuisine: [kitchen, dining, living],
  Chambre: [bedroom, living, bathroom],
  "Salle à manger": [dining, kitchen, living],
  Bureau: [office, living, bedroom],
  Enfant: [kids, bedroom, living],
};

const enrich = (p: (typeof baseProducts)[number]): Product => ({
  ...p,
  description: `${p.name} est une collection clé en main pensée pour transformer votre ${p.category.toLowerCase()} en un espace harmonieux. Chaque pièce est sélectionnée pour son confort, sa qualité et sa cohérence esthétique.`,
  features: [
    "Mobilier en bois massif certifié",
    "Textiles naturels (lin, coton, laine)",
    "Luminaires et accessoires coordonnés",
    "Installation professionnelle incluse",
    "Garantie 2 ans pièces et main d'œuvre",
  ],
  gallery: [p.img, ...(galleryByCategory[p.category] || [p.img])],
  dimensions: "Adaptable de 18 à 45 m²",
  delivery: "Livraison sous 4 à 6 semaines",
});

// Homepage products (featured)
export const products: Product[] = baseProducts.slice(0, 6).map(enrich);

// Full list for /collection page
export const allProducts: Product[] = baseProducts.map(enrich);

export const productCategories = [
  "Toutes",
  "Salon",
  "Cuisine",
  "Chambre",
  "Salle à manger",
  "Bureau",
  "Enfant",
];
