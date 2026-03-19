// ADA: All service links have aria-labels with descriptive text. Focus-visible rings on all links. Semantic section with heading hierarchy (h2). Icons are decorative (aria-hidden).

import {
  Landmark,
  Droplets,
  ClipboardList,
  Trees,
  ShieldCheck,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const services: {
  icon: LucideIcon;
  label: string;
  href: string;
  ariaLabel: string;
}[] = [
  {
    icon: Landmark,
    label: "Town Government",
    href: "/government",
    ariaLabel: "Learn about town government",
  },
  {
    icon: Droplets,
    label: "Water & Utilities",
    href: "/services",
    ariaLabel: "Water and utilities information",
  },
  {
    icon: ClipboardList,
    label: "Permits & Licensing",
    href: "/services",
    ariaLabel: "Permits and licensing information",
  },
  {
    icon: Trees,
    label: "Parks & Recreation",
    href: "/services",
    ariaLabel: "Parks and recreation information",
  },
  {
    icon: ShieldCheck,
    label: "Public Safety",
    href: "/services",
    ariaLabel: "Public safety information",
  },
  {
    icon: Phone,
    label: "Contact Town Hall",
    href: "/contact",
    ariaLabel: "Contact town hall",
  },
];

export function QuickLinksSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-forest font-bold">
          Town Services
        </h2>
        <div className="gold-divider mt-6 mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.label}
                href={service.href}
                aria-label={service.ariaLabel}
                className="group flex flex-col items-center gap-3 p-6 bg-white rounded-lg border border-ivory-dark hover:bg-ivory-dark/50 transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <Icon size={32} className="text-forest" aria-hidden="true" />
                <span className="font-body font-bold text-forest text-center">
                  {service.label}
                </span>
                <span className="block h-0.5 w-0 group-hover:w-8 bg-gold transition-all duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
