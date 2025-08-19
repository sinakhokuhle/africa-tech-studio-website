"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    description: 'Perfect for small businesses and startups',
    features: [
      'Custom Website Design',
      'Responsive Mobile Design',
      'Basic SEO Optimization',
      'Contact Form Integration',
      '3 Months Support',
      'Social Media Integration',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: '$5,000',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter',
      'E-commerce Functionality',
      'Advanced SEO & Analytics',
      'Payment Gateway Integration',
      'Content Management System',
      '6 Months Support',
      'Performance Optimization',
      'Security Features',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex needs',
    features: [
      'Everything in Business',
      'AI Automation Integration',
      'Custom API Development',
      'Advanced Security Features',
      'Scalable Architecture',
      '12 Months Support',
      'Priority Support',
      'Custom Integrations',
      'Training & Documentation',
    ],
    popular: false,
  },
];

export default function PricingPlans() {
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
            Pricing Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <Button variant="outline" asChild>
            <Link href="/contact">
              Contact Us for Custom Quote
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}