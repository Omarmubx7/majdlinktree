"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";

interface LinkCardProps {
    title: string;
    description?: string;
    href: string;
    icon?: LucideIcon;
    variant?: "primary" | "secondary" | "outline";
}

export const LinkCard: React.FC<LinkCardProps> = ({
    title,
    description,
    href,
    icon: Icon,
    variant = "secondary",
}) => {
    const isPrimary = variant === "primary";
    const isOutline = variant === "outline";

    return (
        <motion.a
            href={href}
            target={href.startsWith("http") ? "_blank" : "_self"}
            rel={href.startsWith("http") ? "noopener noreferrer" : ""}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`
        w-full p-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 text-center
        ${isPrimary
                    ? "bg-sage text-white font-medium shadow-sm hover:bg-sage-dark"
                    : isOutline
                        ? "bg-transparent border border-espresso/20 text-espresso hover:border-espresso/40"
                        : "bg-white border border-espresso/10 text-espresso shadow-sm hover:border-espresso/20 hover:shadow-md"
                }
      `}
        >
            <div className="flex flex-col items-center">
                <span className="text-[17px] font-medium tracking-tight">
                    {title}
                </span>
                {description && (
                    <span className={`text-[12px] mt-0.5 ${isPrimary ? "text-white/80" : "text-espresso/60"}`}>
                        {description}
                    </span>
                )}
            </div>
        </motion.a>
    );
};
