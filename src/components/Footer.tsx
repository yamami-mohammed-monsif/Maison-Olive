import { Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-20 pb-10">
    <div className="container-narrow">
      <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-primary-foreground/15">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-wider">
            Maison <span className="text-accent">Olive</span>
          </div>
          <p className="mt-5 text-primary-foreground/70 max-w-sm leading-relaxed">
            Décoration intérieure clé en main. Pièces et cuisines entièrement
            composées, livrées et installées par nos artisans.
          </p>
          <div className="flex gap-3 mt-6">
            {[FaInstagram, FaFacebook, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">
            Studios
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>Paris — 14 rue de Sévigné</li>
            <li>Lyon — 8 quai Saint-Antoine</li>
            <li>Bordeaux — 22 cours de l'Intendance</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>bonjour@maisonolive.fr</li>
            <li>+33 1 84 80 12 34</li>
            <li>Lun – Sam, 10h – 19h</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
        <span>
          © {new Date().getFullYear()} Maison Olive — Tous droits réservés.
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent">
            Mentions légales
          </a>
          <a href="#" className="hover:text-accent">
            CGV
          </a>
          <a href="#" className="hover:text-accent">
            Confidentialité
          </a>
        </div>
      </div>
    </div>
  </footer>
);
