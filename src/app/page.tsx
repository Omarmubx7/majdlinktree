"use client";

import "./App.css";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Mail,
  ArrowRight,
  Sparkles,
  Play,
  Calendar,
  Phone,
  Layout,
  Youtube,
  Camera,
  MessageCircle,
  ExternalLink,
  Clapperboard,
  Utensils
} from "lucide-react";

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function LuxuryBioPage() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <main className="page" id="main-content">
        {/* Fixed Sidebar - Expanded Socials */}
        <aside className="sidebar" aria-label="Social Sidebar">
          <a href="https://www.instagram.com/thegloriousinc?igsh=MTJ5ZnZ3M2Z5cmNsaA==" className="sidebar-icon" aria-label="Instagram (Videography)"><Instagram size={28} /></a>
          <a href="https://wa.me/962788002813" className="sidebar-icon" aria-label="WhatsApp"><MessageCircle size={28} /></a>
        </aside>

        <div className="shell">

          {/* 1. Hero Section */}
          <header className="hero">
            <motion.div
              className="avatar-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img src="/glorylogo.PNG" alt="Majd Mubaidin Logo" className="avatar" loading="eager" />
              <Sparkles className="avatar-icon" size={28} aria-hidden="true" />
            </motion.div>

            <motion.h1
              className="name"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Majd
            </motion.h1>

            <motion.p
              className="tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Professional filmmaker & food photographer dedicated to the art of cinematic culinary storytelling.
            </motion.p>
          </header>


          {/* 3. Balanced Link Grid */}
          <div className="grid-container">

            {/* Left Column: Work & Contact (4 Cards) */}
            <div className="link-column">
              <div className="section-header">
                <span className="section-label">WORK & CONTACT</span>
                <div className="section-line" />
              </div>

              <motion.div
                className="link-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.a href="https://wa.me/962788002813" className="card card-primary" variants={itemVariants} aria-label="Book A Session">
                  <div className="card-icon-box"><Calendar size={22} /></div>
                  <div className="card-content">
                    <span className="card-title">Book A Session</span>
                    <span className="card-desc">Schedule your custom culinary session</span>
                  </div>
                  <ArrowRight className="card-arrow" size={20} />
                </motion.a>

                <motion.a href="https://www.instagram.com/thegloriousinc?igsh=MTJ5ZnZ3M2Z5cmNsaA==" className="card" variants={itemVariants} aria-label="The Glorious Inc (Videography)">
                  <div className="card-icon-box"><Clapperboard size={20} /></div>
                  <div className="card-content">
                    <span className="card-title">The Glorious Inc</span>
                    <span className="card-desc">Videography & Content Creation</span>
                  </div>
                  <ArrowRight className="card-arrow" size={20} />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column: Social & Explore (Balanced with 3rd Card) */}
            <div className="link-column">
              <div className="section-header">
                <span className="section-label">SOCIAL & EXPLORE</span>
                <div className="section-line" />
              </div>

              <motion.div
                className="link-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.a href="https://www.instagram.com/gloriouslife.jo?igsh=OGdwMTVwOGlhdHQx" className="card" variants={itemVariants} aria-label="Glorious Life (Food Blog)">
                  <div className="card-icon-box"><Utensils size={22} /></div>
                  <div className="card-content">
                    <span className="card-title">Glorious Life</span>
                    <span className="card-desc">Food Blogging & Lifestyle Journey</span>
                  </div>
                  <ArrowRight className="card-arrow" size={20} />
                </motion.a>

                <motion.a href="#" className="card" variants={itemVariants} aria-label="Official Website (Coming Soon)" style={{ cursor: "not-allowed", opacity: 0.7 }}>
                  <div className="card-icon-box"><Layout size={22} /></div>
                  <div className="card-content">
                    <span className="card-title">
                      Official Website <span className="badge-soon">COMING SOON</span>
                    </span>
                    <span className="card-desc">Comprehensive project archives & case studies</span>
                  </div>
                </motion.a>
              </motion.div>
            </div>

          </div>

          {/* 4. Pricing & Services - With Descriptions */}
          <section className="pricing-section" aria-label="Services and Pricing">
            <div className="section-header">
              <span className="section-label">PRICING & SERVICES</span>
              <div className="section-line" />
            </div>

            <motion.div
              className="link-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="price-card" variants={itemVariants}>
                <div className="price-info">
                  <span className="price-name">On-Location Shoot</span>
                  <span className="price-desc">Full 2-hour set up at your restaurant with pro lighting & gear.</span>
                </div>
                <span className="price-amount">150 JOD</span>
              </motion.div>

              <motion.div className="price-card" variants={itemVariants}>
                <div className="price-info">
                  <span className="price-name">Priority Cinematic Edit</span>
                  <span className="price-desc">Premium correction, sound design, and 24h express delivery.</span>
                </div>
                <span className="price-amount">200 JOD</span>
              </motion.div>

              <p className="payment-note">I accept CliQ as payment for all local bookings.</p>
            </motion.div>
          </section>

          <footer className="footer" role="contentinfo">
            <p>THE GLORIOUS LIFE &copy; 2026 &middot; AMMAN, JORDAN &middot; MADE BY MUBX.DEV</p>
          </footer>

        </div>

        {/* Verified Floating Action Button */}
        <AnimatePresence>
          {showSticky && (
            <motion.a
              href="https://wa.me/962788002813"
              className="sticky-cta"
              initial={{ opacity: 0, scale: 0.8, y: 50, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Book Now via WhatsApp"
            >
              <Calendar size={20} /> BOOK NOW
            </motion.a>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
