"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { LinkCard } from "@/components/LinkCard";
import {
  Instagram,
  Video,
  Camera,
  Calendar,
  CreditCard,
  User,
  Youtube,
  Globe,
  DollarSign,
  Clock,
  MapPin,
  MessageCircle,
  Mail
} from "lucide-react";

export default function Home() {
  return (
    <main className="noise-bg min-h-screen pb-24 relative flex flex-col items-center">
      {/* Dynamic Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* Content Wrapper */}
      <div className="w-full max-w-lg z-10 flex flex-col items-center">

        <Hero />

        {/* 2. Food Blog Section */}
        <Section title="Glorious Food Blog">
          <LinkCard
            title="Follow @gloriouslife.jo on Instagram"
            description="Food, coffee, and cozy spots – everything I touch turns to gold."
            href="https://www.instagram.com/gloriouslife.jo"
            icon={Instagram}
          />
          <LinkCard
            title="Food Guides & Favorites"
            description="Coming Soon"
            href="#"
            icon={Globe}
          />
        </Section>

        {/* 3. Videography & Content Section */}
        <Section title="The Glorious INC – Photo & Video">
          <LinkCard
            title="Follow @thegloriousinc on Instagram"
            description="Glorious videography, photography, and short-form content."
            href="https://www.instagram.com/thegloriousinc"
            icon={Instagram}
          />
          <LinkCard
            title="Showreel & Portfolio"
            description="Best of reels, shorts, and brand campaigns."
            href="#"
            icon={Youtube}
          />
          <LinkCard
            title="Services & Packages"
            description="Custom packages for restaurants, cafés, and brands."
            href="#"
            icon={Camera}
          />
        </Section>

        {/* 4. Services & Prices Section */}
        <Section title="Services & Prices">
          <LinkCard
            title="Short Video Creation"
            description="Reels & Shorts. Script, shoot, and edit included."
            href="#"
            icon={Video}
          />
          <LinkCard
            title="Photographers & Videographers"
            description="On-location or in our studio – we adapt to your brand."
            href="#"
            icon={Camera}
          />
          <div className="gold-card p-4 rounded-2xl w-full text-cream space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 border border-gold/20 rounded-xl bg-gold/5 text-gold">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-bold">On-Location Session – 10 JOD</p>
                <p className="text-sm opacity-70">Per booking, inside Amman. Travel outside on request.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 border border-gold/20 rounded-xl bg-gold/5 text-gold">
                <Clock size={20} />
              </div>
              <div>
                <p className="font-bold">Urgent Editing – 20 JOD</p>
                <p className="text-sm opacity-70">24 Hours – Priority for last-minute campaigns.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Booking Section */}
        <Section title="Booking">
          <LinkCard
            variant="primary"
            title="Book A Glorious Session"
            description="We'll confirm via WhatsApp or email within 24 hours."
            href="#"
            icon={Calendar}
          />
        </Section>

        {/* 6. Payments Section */}
        <Section title="Payments">
          <div className="gold-card p-6 rounded-2xl w-full space-y-4 text-center">
            <h3 className="font-bold text-gold flex items-center justify-center gap-2">
              <CreditCard size={20} />
              Pay Safely With CliQ
            </h3>
            <p className="text-sm text-cream/80">
              Payments accepted: Cash, Bank transfer, CliQ instant transfer.
            </p>
            <div className="p-3 bg-charcoal/40 rounded-xl border border-gold/10 text-xs text-gold/80 italic">
              Details provided after booking confirmation.
            </div>
          </div>
        </Section>

        {/* 7. About Section */}
        <Section title="About Majd Mubaidin">
          <div className="gold-card p-6 rounded-2xl w-full space-y-4 font-light text-cream/90 leading-relaxed">
            <p>
              Creative storyteller, food lover, and visual artist behind <span className="text-gold font-medium">Glorious Life</span> & <span className="text-gold font-medium">The Glorious INC</span>.
            </p>
            <p>
              Based in Amman, Jordan – capturing glorious moments in every frame.
            </p>
            <div className="flex gap-4 pt-4">
              <LinkCard
                title="WhatsApp"
                href="https://wa.me/yournumber"
                icon={MessageCircle}
              />
              <LinkCard
                title="Email Me"
                href="mailto:your@email.com"
                icon={Mail}
              />
            </div>
          </div>
        </Section>

        <footer className="mt-16 text-xs text-cream/30 uppercase tracking-[0.2em] font-medium">
          The Glorious Life &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}
