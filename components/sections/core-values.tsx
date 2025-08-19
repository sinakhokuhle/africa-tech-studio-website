"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Shield, Users, Zap, Heart, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of technology trends and continuously innovate to provide cutting-edge solutions that transform how businesses work.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We deliver on our promises with consistent, high-quality work that our clients can depend on, building trust in our community.',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'We work closely with our clients as partners, ensuring their vision becomes reality while contributing to community development.',
  },
  {
    icon: Zap,
    title: 'Productivity',
    description: 'We strive to make businesses work more efficiently, maintaining the highest standards of quality and performance.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do and it shows in the enthusiasm we bring to every project and our commitment to community change.',
  },
  {
    icon: Trophy,
    title: 'Results',
    description: 'We focus on delivering measurable results that drive real business growth and contribute to community prosperity.',
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These values guide everything we do and shape how we work with our clients and partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}