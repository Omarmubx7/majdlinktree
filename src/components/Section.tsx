"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
    title: string;
    children: React.ReactNode;
    iconBlob?: boolean;
}

export const Section: React.FC<SectionProps> = ({ title, children, iconBlob = true }) => {
    return (
        <div className="w-full max-w-sm space-y-6 pt-8">
            <div className="relative inline-block ml-2">
                {iconBlob && (
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold/10 rounded-full blur-xl" />
                )}
                <h2 className="text-xl font-bold text-gold tracking-wide uppercase">
                    {title}
                </h2>
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
};
