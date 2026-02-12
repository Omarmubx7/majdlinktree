"use client";

import React from "react";

interface SectionProps {
    title: string;
    children: React.ReactNode;
    subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, subtitle }) => {
    return (
        <div className="w-full px-6 space-y-4 pt-4">
            <div className="space-y-1">
                <h2 className="text-[12px] uppercase tracking-[0.15em] font-semibold text-espresso/40">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-[11px] text-espresso/50 leading-tight">
                        {subtitle}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-3">
                {children}
            </div>
        </div>
    );
};
