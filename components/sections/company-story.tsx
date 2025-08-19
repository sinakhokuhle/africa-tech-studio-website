"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompanyStory() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Africa Tech Studio was born from a simple yet powerful vision: to bridge the digital divide 
                and empower African businesses with world-class technology solutions.
              </p>
              <p>
                Founded in 2024 by <strong className="text-foreground">Sinakokuhle Mncwabe</strong>, we recognized that many businesses across Africa were struggling to 
                establish a strong digital presence and leverage modern technologies to grow their operations. 
                We set out to change that narrative.
              </p>
              <p>
                Today, we're proud to be at the forefront of Africa's digital transformation, helping 
                businesses of all sizes harness the power of web development, AI automation, and 
                cutting-edge technology solutions.
              </p>
            </div>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Meet Our Founder</h3>
                  <p className="text-xl font-semibold text-primary">Sinakokuhle Mncwabe</p>
                  <p className="text-sm text-muted-foreground">Age 18 • Entrepreneur & Tech Innovator</p>
                </div>
                
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Sinakokuhle</strong> was raised in a middle-class family - not rich, not poor, 
                    but with enough to understand the value of hard work and education.
                  </p>
                  <p>
                    At just 18 years old, he recognized the immense potential for technology to transform 
                    how African businesses operate. His vision is clear: introduce meaningful change in the 
                    community by making businesses work in more productive, efficient ways.
                  </p>
                  <p>
                    Through Africa Tech Studio, he's turning this vision into reality, one digital 
                    transformation at a time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower African businesses with innovative technology solutions that drive growth, 
                  efficiency, and digital transformation, making cutting-edge technology accessible to all.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be Africa's leading technology partner, recognized for delivering exceptional 
                  digital solutions that transform businesses and contribute to the continent's 
                  technological advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}