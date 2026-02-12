"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";

interface LinkCardProps {
    title: string;
    description?: string;
    href: string;
    icon?: LucideIcon;
    variant?: "primary" | "secondary";
}

export const LinkCard: React.FC<LinkCardProps> = ({
    title,
    description,
    href,
    icon: Icon,
    variant = "secondary",
}) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300
        ${variant === "primary"
                    ? "bg-gold-gradient text-charcoal font-bold shadow-lg shimmer-btn shadow-gold/20"
                    : "gold-card text-cream"
                }
      `}
        >
            {Icon && (
                <div className={`p-2 rounded-xl ${variant === "primary" ? "bg-charcoal/10" : "bg-gold/10 text-gold"}`}>
                    <Icon size={24} />
                </div>
            )}
            <div className="flex flex-col text-left flex-1">
                <span className="text-lg leading-tight">{title}</span>
                {description && (
                    <span className={`text-sm opacity-70 mt-0.5 ${variant === "primary" ? "text-charcoal/80" : "text-cream/70"}`}>
                        {description}
                    </span>
                )}
            </div>
        </motion.a>
    );
};
