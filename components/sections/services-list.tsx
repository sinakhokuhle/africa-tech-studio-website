"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Brain, Smartphone, Globe, Zap, Shield, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Optimization',
      'Modern Frameworks (React, Next.js)',
      'Content Management Systems',
      'E-commerce Integration'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Brain,
    title: 'AI Automation & Agents',
    description: 'Intelligent automation solutions to streamline your business processes.',
    features: [
      'Process Automation',
      'AI Chatbots & Virtual Assistants',
      'Data Analysis & Insights',
      'Workflow Optimization',
      'Machine Learning Integration',
      'Natural Language Processing'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'User Experience Design',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    icon: Globe,
    title: 'E-Commerce Solutions',
    description: 'Complete online store solutions with payment integration and management.',
    features: [
      'Custom E-commerce Platforms',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing',
      'Analytics & Reporting',
      'Multi-vendor Support'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Auto-scaling Solutions',
      'Backup & Recovery',
      'Monitoring & Logging',
      'Cost Optimization'
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker'],
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture and optimization services.',
    features: [
      'Database Design & Modeling',
      'Performance Optimization',
      'Data Migration',
      'Backup Strategies',
      'Security Implementation',
      'Scalability Planning'
    ],
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
  },
];

export default function ServicesList() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href="/contact">
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}