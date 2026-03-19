// ADA: Semantic section with heading hierarchy (h2). Image has descriptive alt text. Pull quote uses blockquote element. Focus-visible rings on any links.

import Image from "next/image";

export function AboutTownSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ivory-dark/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-forest font-bold">
          About White Springs
        </h2>
        <div className="gold-divider mt-6 mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column — text */}
          <div>
            <p className="font-body text-lg leading-relaxed text-slate">
              Nestled on the banks of the Suwannee River, White Springs has been
              a cornerstone of Hamilton County since 1885. Home to the Stephen
              Foster Folk Culture Center State Park and the historic sulfur
              springs that drew visitors from across the country, our town
              carries a rich tradition of community, culture, and Southern
              heritage.
            </p>

            <blockquote className="font-display text-2xl italic text-forest border-l-4 border-gold pl-6 mt-8">
              &ldquo;Where the Suwannee River meets history.&rdquo;
            </blockquote>
          </div>

          {/* Right column — photo */}
          <div className="hidden lg:block">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/white-springs/images/white-springs.PNG"
                alt="Scenic view of White Springs, Florida"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
