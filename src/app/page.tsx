"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { LinkCard } from "@/components/LinkCard";

export default function Home() {
  return (
    <main className="noise-bg min-h-screen pb-20 bg-cream selection:bg-sage/10 selection:text-sage flex flex-col items-center">

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Core Priority Buttons */}
      <div className="w-full px-6 space-y-3 pt-4">
        <LinkCard
          title="Follow Glorious Food – @gloriouslife.jo"
          href="https://www.instagram.com/gloriouslife.jo"
        />
        <LinkCard
          title="Follow The Glorious INC – @thegloriousinc"
          href="https://www.instagram.com/thegloriousinc"
        />
        <LinkCard
          variant="primary"
          title="Book A Glorious Shoot"
          href="#"
        />
        <LinkCard
          title="Watch Showreel & Portfolio"
          href="#"
        />
      </div>

      {/* 3. Grouped Sections */}
      <div className="w-full space-y-8 pb-12">

        {/* Glorious Food Section */}
        <Section title="Glorious Food">
          <LinkCard
            variant="outline"
            title="Food Guides & Favorites"
            description="Coming Soon"
            href="#"
          />
        </Section>

        {/* Photo & Video Services Section */}
        <Section title="Photo & Video Services">
          <LinkCard
            variant="outline"
            title="Services & Packages"
            description="For Restaurants & Cafés"
            href="#"
          />
        </Section>

        {/* Pricing Highlights Section */}
        <Section
          title="Pricing Highlights"
          subtitle="Simple, transparent rates for local projects."
        >
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-espresso/5 border border-espresso/10 rounded-full text-[11px] font-medium text-espresso/70">
              On-location session in Amman – 10 JOD
            </span>
            <span className="px-3 py-1.5 bg-espresso/5 border border-espresso/10 rounded-full text-[11px] font-medium text-espresso/70">
              Urgent 24h editing – 20 JOD
            </span>
          </div>
        </Section>

        {/* Booking & Payments Section */}
        <Section title="Booking & Payments">
          <div className="space-y-4">
            <LinkCard
              variant="outline"
              title="Book A Glorious Session"
              href="#"
            />
            <div className="space-y-1 text-center">
              <p className="text-[11px] text-espresso/50 leading-tight italic">
                We confirm via WhatsApp or email within 24 hours.
              </p>
              <p className="text-[10px] text-espresso/40 leading-tight uppercase tracking-wider">
                Pay with Cash, Bank Transfer, or CliQ
              </p>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="Contact">
          <div className="flex gap-3">
            <LinkCard
              variant="outline"
              title="WhatsApp"
              href="https://wa.me/yournumber"
            />
            <LinkCard
              variant="outline"
              title="Email Me"
              href="mailto:your@email.com"
            />
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer className="w-full text-center pb-12 opacity-30">
        <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-espresso">
          THE GLORIOUS LIFE &copy; 2026 &middot; Amman, Jordan
        </p>
      </footer>
    </main>
  );
}
