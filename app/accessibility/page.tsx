import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
};

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-forest mb-4">Accessibility Statement</h1>
        <div className="gold-divider mb-8" />

        <div className="font-body text-slate space-y-6 text-lg leading-relaxed">
          <p>
            The Town of White Springs is committed to ensuring digital accessibility
            for all visitors, including people with disabilities. We strive to meet
            or exceed the requirements of the Web Content Accessibility Guidelines
            (WCAG) 2.1 Level AA.
          </p>

          <h2 className="font-display text-2xl text-forest mt-8">Our Accessibility Features</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Skip navigation link for keyboard users</li>
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>ARIA landmarks and labels throughout</li>
            <li>Keyboard-navigable menus and interactive elements</li>
            <li>Sufficient color contrast ratios (minimum 4.5:1)</li>
            <li>Focus-visible indicators on all interactive elements</li>
            <li>Motion-safe animations that respect system preferences</li>
            <li>Descriptive alt text for all images</li>
            <li>Descriptive link text (no "click here" links)</li>
          </ul>

          <h2 className="font-display text-2xl text-forest mt-8">Contact Us</h2>
          <p>
            If you encounter any accessibility barriers on our website, please
            contact us so we can assist you:
          </p>
          <ul className="list-none space-y-2 ml-4">
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+13863972000" className="text-sky hover:text-forest transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded">
                (386) 397-2000
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@whitespringsflorida.gov" className="text-sky hover:text-forest transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded">
                info@whitespringsflorida.gov
              </a>
            </li>
          </ul>

          <h2 className="font-display text-2xl text-forest mt-8">Compliance Status</h2>
          <p>
            This website was last reviewed for accessibility compliance in July 2025.
            We continuously work to improve the accessibility of our site and welcome
            your feedback.
          </p>
        </div>
      </div>
    </main>
  );
}
