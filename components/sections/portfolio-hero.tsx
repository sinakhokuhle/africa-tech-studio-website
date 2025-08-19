"use client";

import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our latest projects and see how we've helped businesses 
            transform their digital presence with innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}