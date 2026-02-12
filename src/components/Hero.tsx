"use client";

import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center space-y-6 pt-12 pb-8 px-6">
            {/* Profile Photo / Logo Circle */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 rounded-full bg-sand border-2 border-white shadow-sm flex items-center justify-center overflow-hidden"
            >
                {/* 
                  Placeholder for profile photo. 
                  In a real app, this would be an <Image /> component. 
                */}
                <span className="text-espresso/20 font-bold text-xs uppercase tracking-widest">Logo</span>
            </motion.div>

            {/* Hero Text */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="space-y-2"
            >
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-espresso">
                    The Glorious Life & Lens
                </h1>
                <p className="text-[17px] text-espresso/80 leading-snug max-w-[280px] mx-auto">
                    Food stories, cinematic visuals, and cozy spots from Amman.
                </p>
                <p className="text-[12px] uppercase tracking-[0.2em] text-espresso/40 font-medium">
                    By Majd Mubaidin
                </p>
            </motion.div>
        </div>
    );
};
