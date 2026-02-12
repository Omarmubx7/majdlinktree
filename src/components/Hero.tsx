"use client";

import { motion } from "framer-motion";
import { LinkCard } from "./LinkCard";
import { Instagram } from "lucide-react";

export const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center space-y-8 py-12 px-6">
            {/* Hero Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-cream">
                    The Glorious Life & Lens
                </h1>
                <p className="text-xl md:text-2xl text-gold-light italic">
                    Food. Stories. Cinematic moments.
                </p>
                <p className="text-sm md:text-base opacity-70">
                    Created by Majd Mubaidin & The Glorious Team.
                </p>
                <p className="max-w-md mx-auto text-cream/80 pt-2">
                    Glorious food experiences and creative visuals from Amman, Jordan.
                </p>
            </motion.div>

            {/* Social Badges */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-3"
            >
                <div className="bg-charcoal-light/80 backdrop-blur px-4 py-1.5 rounded-full border border-gold/20 text-xs md:text-sm text-gold-light flex items-center gap-2">
                    <Instagram size={14} />
                    Food Blogger – @gloriouslife.jo
                </div>
                <div className="bg-charcoal-light/80 backdrop-blur px-4 py-1.5 rounded-full border border-gold/20 text-xs md:text-sm text-gold-light flex items-center gap-2">
                    <Instagram size={14} />
                    Videography & Content – @thegloriousinc
                </div>
            </motion.div>

            {/* Hero Buttons */}
            <div className="w-full max-w-sm space-y-4">
                <LinkCard
                    variant="primary"
                    title="Book A Glorious Shoot"
                    href="#" // Placeholder for now
                    description="Click to see my booking form"
                />
                <LinkCard
                    title="Glorious Food Instagram"
                    href="https://www.instagram.com/gloriouslife.jo"
                    icon={Instagram}
                />
            </div>
        </div>
    );
};
