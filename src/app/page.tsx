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
  ExternalLink
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
    <main className="page">
      {/* Fixed Sidebar - Expanded Socials */}
      <aside className="sidebar" aria-label="Social Sidebar">
        <a href="https://instagram.com/gloriouslife.jo" className="sidebar-icon" aria-label="Instagram"><Instagram size={28} /></a>
        <a href="https://youtube.com" className="sidebar-icon" aria-label="YouTube"><Youtube size={28} /></a>
        <a href="https://wa.me/962770000000" className="sidebar-icon" aria-label="WhatsApp"><MessageCircle size={28} /></a>
        <a href="mailto:majd@example.com" className="sidebar-icon" aria-label="Email"><Mail size={28} /></a>
      </aside>

      <div className="shell">

        {/* 1. Hero Section */}
        <header className="hero">
          <motion.div
            className="avatar-container"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <img src="/glorylogo.PNG" alt="Majd Mubaidin - Logo" className="avatar" />
            <Sparkles className="avatar-icon" size={28} />
          </motion.div>

          <motion.h1
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            MAJD <span>/</span> MUBAIDIN
          </motion.h1>

          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Professional filmmaker & food photographer dedicated to the art of cinematic culinary storytelling. Based in Amman.
          </motion.p>

          <motion.div
            className="badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="badge" aria-label="Skill: Filmmaker">🎬 FILMMAKER</span>
            <span className="badge" aria-label="Skill: Photographer">📷 PHOTOGRAPHER</span>
            <span className="badge" aria-label="Focus: Food">🍽️ FOOD</span>
            <span className="badge" aria-label="Location: Amman">📍 AMMAN</span>
          </motion.div>
        </header>

        {/* 2. Stats Section */}
        <motion.div
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="stat-card" variants={itemVariants}>
            <span className="stat-number">50+</span>
            <span className="stat-label">Clients Served</span>
          </motion.div>
          <motion.div className="stat-card" variants={itemVariants}>
            <span className="stat-number">1k+</span>
            <span className="stat-label">Deliveries</span>
          </motion.div>
          <motion.div className="stat-card" variants={itemVariants}>
            <span className="stat-number">5.0</span>
            <span className="stat-label">Client Rating</span>
          </motion.div>
        </motion.div>

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
              <motion.a href="https://wa.me/962770000000" className="card card-primary" variants={itemVariants} aria-label="Book A Session">
                <div className="card-icon-box"><Calendar size={22} /></div>
                <div className="card-content">
                  <span className="card-title">Book A Session</span>
                  <span className="card-desc">Schedule your custom culinary session</span>
                </div>
                <ArrowRight className="card-arrow" size={20} />
              </motion.a>

              <motion.a href="https://vimeo.com" className="card" variants={itemVariants} aria-label="View Showreel">
                <div className="card-icon-box"><Play size={20} fill="currentColor" /></div>
                <div className="card-content">
                  <span className="card-title">Showreel 2024</span>
                  <span className="card-desc">A compilation of my latest cinematic work</span>
                </div>
                <ArrowRight className="card-arrow" size={20} />
              </motion.a>

              <motion.a href="mailto:majd@example.com" className="card" variants={itemVariants} aria-label="Email Me">
                <div className="card-icon-box"><Mail size={22} /></div>
                <div className="card-content">
                  <span className="card-title">Email Me</span>
                  <span className="card-desc">Contact for professional project inquiries</span>
                </div>
                <ArrowRight className="card-arrow" size={20} />
              </motion.a>

              <motion.a href="https://wa.me/962770000000" className="card" variants={itemVariants} aria-label="WhatsApp Contact">
                <div className="card-icon-box"><Phone size={22} /></div>
                <div className="card-content">
                  <span className="card-title">WhatsApp</span>
                  <span className="card-desc">Quick chat and real-time bookings</span>
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
              <motion.a href="https://instagram.com/gloriouslife.jo" className="card" variants={itemVariants} aria-label="View Portfolio">
                <div className="card-icon-box"><Camera size={22} /></div>
                <div className="card-content">
                  <span className="card-title">Portfolio</span>
                  <span className="card-desc">Dive into my daily food & lifestyle visuals</span>
                </div>
                <ArrowRight className="card-arrow" size={20} />
              </motion.a>

              <motion.a href="https://instagram.com/gloriouslife.jo" className="card" variants={itemVariants} aria-label="Follow on Instagram">
                <div className="card-icon-box"><Instagram size={22} /></div>
                <div className="card-content">
                  <span className="card-title">Instagram</span>
                  <span className="card-desc">Behind the scenes and latest captures</span>
                </div>
                <ArrowRight className="card-arrow" size={20} />
              </motion.a>

              <motion.a href="https://youtube.com" className="card" variants={itemVariants} aria-label="Visit YouTube Channel">
                <div className="card-icon-box"><Youtube size={22} /></div>
                <div className="card-content">
                  <span className="card-title">Cinema Channel</span>
                  <span className="card-desc">Long-form food documentaries & travels</span>
                </div>
                <ArrowRight className="card-arrow" size={20} />
              </motion.a>

              <motion.a href="/portfolio-web" className="card" variants={itemVariants} aria-label="Official Website">
                <div className="card-icon-box"><Layout size={22} /></div>
                <div className="card-content">
                  <span className="card-title">Official Website</span>
                  <span className="card-desc">Comprehensive project archives & case studies</span>
                </div>
                <ArrowRight className="card-arrow" size={20} />
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
              <span className="price-amount">10 JOD</span>
            </motion.div>

            <motion.div className="price-card" variants={itemVariants}>
              <div className="price-info">
                <span className="price-name">Priority Cinematic Edit</span>
                <span className="price-desc">Premium correction, sound design, and 24h express delivery.</span>
              </div>
              <span className="price-amount">20 JOD</span>
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
            href="https://wa.me/962770000000"
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
  );
}
