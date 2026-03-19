// ADA: Semantic section with heading hierarchy (h2). Decorative SVG has aria-hidden="true". Pull quote uses blockquote element. Focus-visible rings on any links.

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
              a cornerstone of Hamilton County since 1901. Home to the Stephen
              Foster Folk Culture Center State Park and the historic sulfur
              springs that drew visitors from across the country, our town
              carries a rich tradition of community, culture, and Southern
              heritage.
            </p>

            <blockquote className="font-display text-2xl italic text-forest border-l-4 border-gold pl-6 mt-8">
              &ldquo;Where the Suwannee River meets history.&rdquo;
            </blockquote>
          </div>

          {/* Right column — decorative river SVG */}
          <div className="hidden lg:block">
            <svg
              viewBox="0 0 400 300"
              aria-hidden="true"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main river curve */}
              <path
                d="M 20 180 C 80 160, 120 220, 180 200 S 280 140, 340 160 S 380 190, 400 180"
                stroke="#C9A84C"
                strokeWidth="3"
                opacity="0.9"
              />
              {/* Secondary river curve */}
              <path
                d="M 0 190 C 60 175, 110 230, 175 210 S 270 155, 335 170 S 375 195, 400 190"
                stroke="#C9A84C"
                strokeWidth="1.5"
                opacity="0.5"
              />
              {/* Tertiary accent curve */}
              <path
                d="M 10 200 C 70 185, 130 240, 185 218 S 290 160, 345 175 S 385 200, 400 195"
                stroke="#1B4332"
                strokeWidth="1"
                opacity="0.35"
              />

              {/* Upper landscape curve */}
              <path
                d="M 0 120 C 50 110, 100 140, 160 125 S 260 95, 320 110 S 370 130, 400 120"
                stroke="#1B4332"
                strokeWidth="1.5"
                opacity="0.25"
              />

              {/* Spring circles — left cluster */}
              <circle cx="175" cy="205" r="8" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
              <circle cx="175" cy="205" r="14" stroke="#C9A84C" strokeWidth="0.7" opacity="0.3" />
              <circle cx="175" cy="205" r="21" stroke="#C9A84C" strokeWidth="0.5" opacity="0.15" />

              {/* Spring circles — right */}
              <circle cx="335" cy="168" r="6" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />
              <circle cx="335" cy="168" r="11" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />

              {/* Tree forms — left bank */}
              <path
                d="M 60 170 L 60 155 M 55 158 Q 60 145, 65 158"
                stroke="#1B4332"
                strokeWidth="1.2"
                opacity="0.45"
                strokeLinecap="round"
              />
              <path
                d="M 75 165 L 75 152 M 70 155 Q 75 143, 80 155"
                stroke="#1B4332"
                strokeWidth="1"
                opacity="0.35"
                strokeLinecap="round"
              />

              {/* Tree forms — mid bank */}
              <path
                d="M 220 148 L 220 133 M 215 137 Q 220 124, 225 137"
                stroke="#1B4332"
                strokeWidth="1.2"
                opacity="0.4"
                strokeLinecap="round"
              />
              <path
                d="M 235 152 L 235 140 M 231 143 Q 235 133, 239 143"
                stroke="#1B4332"
                strokeWidth="1"
                opacity="0.3"
                strokeLinecap="round"
              />
              <path
                d="M 248 156 L 248 145 M 244 148 Q 248 138, 252 148"
                stroke="#1B4332"
                strokeWidth="0.8"
                opacity="0.25"
                strokeLinecap="round"
              />

              {/* Tree forms — right bank */}
              <path
                d="M 360 150 L 360 135 M 355 139 Q 360 126, 365 139"
                stroke="#1B4332"
                strokeWidth="1.2"
                opacity="0.4"
                strokeLinecap="round"
              />
              <path
                d="M 375 155 L 375 143 M 371 146 Q 375 136, 379 146"
                stroke="#1B4332"
                strokeWidth="1"
                opacity="0.3"
                strokeLinecap="round"
              />

              {/* Subtle lower accent curve */}
              <path
                d="M 30 240 C 90 230, 150 260, 200 248 S 300 220, 370 235"
                stroke="#1B4332"
                strokeWidth="0.8"
                opacity="0.15"
              />

              {/* Small spring bubble */}
              <circle cx="90" cy="185" r="4" stroke="#C9A84C" strokeWidth="0.8" opacity="0.35" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
